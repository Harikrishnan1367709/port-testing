// server.js
import express from "express";
import path from "node:path";
import fs from "node:fs";

const app = express();
const port = process.env.PORT || 3000;

// Resolve current directory for ES modules
const __dirname = path.resolve();

// ✅ Load environment variables from .env file at runtime
function loadEnvFile() {
  const envPath = path.join(__dirname, ".env");
  if (fs.existsSync(envPath)) {
    console.log("✅ .env file found at runtime, loading variables...");
    const envContent = fs.readFileSync(envPath, "utf-8");
    const envLines = envContent.split("\n");

    envLines.forEach((line) => {
      const trimmedLine = line.trim();
      if (trimmedLine && !trimmedLine.startsWith("#")) {
        const [key, ...valueParts] = trimmedLine.split("=");
        if (key && valueParts.length > 0) {
          const value = valueParts.join("=").trim();
          if (!process.env[key]) {
            process.env[key] = value;
          }
        }
      }
    });
  } else {
    console.warn(
      "⚠️ No .env file found. Make sure env vars are passed at runtime."
    );
  }
}

// Load environment variables
loadEnvFile();

// ✅ Debug: Print runtime env vars
console.log("🔧 Checking runtime environment variables...");
console.log(
  "VITE_SUPABASE_URL =",
  process.env.VITE_SUPABASE_URL || "(not set)"
);
console.log(
  "VITE_ALLOWED_HOSTS =",
  process.env.VITE_ALLOWED_HOSTS || "(not set)"
);

// Parse JSON bodies
app.use(express.json());

// API Proxy endpoint for production
app.post("/api/project.create", async (req, res) => {
  try {
    console.log("=== PRODUCTION API PROXY ===");
    console.log("Request body:", req.body);
    console.log("API Key present:", !!process.env.VITE_PROJECT_API_KEY);

    const apiUrl = `${process.env.VITE_PROJECT_API_BASE_URL}${process.env.VITE_PROJECT_CREATE_PATH}`;
    console.log("Target URL:", apiUrl);

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "x-api-key": process.env.VITE_PROJECT_API_KEY,
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    console.log("API Response Status:", response.status);
    console.log(
      "API Response Headers:",
      Object.fromEntries(response.headers.entries())
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error Response:", errorText);
      return res.status(response.status).json({ error: errorText });
    }

    const data = await response.json();
    console.log("API Success Response:", data);
    console.log("=== END PRODUCTION API PROXY ===");

    res.json(data);
  } catch (error) {
    console.error("Proxy Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Serve static files from dist
app.use(express.static(path.join(__dirname, "dist")));

// ✅ SPA Fallback (for React Router / client-side routes)
// Only catch routes that don't start with /assets/ to avoid interfering with static files
app.use((req, res, next) => {
  if (req.path.startsWith("/assets/")) {
    return next();
  }

  const indexFile = path.join(__dirname, "dist", "index.html");
  if (fs.existsSync(indexFile)) {
    res.send(fs.readFileSync(indexFile, "utf-8"));
  } else {
    res.status(404).send("Build not found. Did you run 'bun run build'?");
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://0.0.0.0:${port}/`);
});
