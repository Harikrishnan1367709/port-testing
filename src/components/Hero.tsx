import { ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button.tsx";
import { Link } from "./shared/Link.tsx";
import { Logo } from "./shared/Logo.tsx";

export function Hero() {
  const [isCopied, setIsCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#demo", label: "Demo" },
    { href: "https://docs.dokploy.com", label: "Docs", external: true },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [isCopied]);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Fixed Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Logo />
            </Link>

            {/* Desktop Navigation - All items on the right */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() =>
                    item.external
                      ? window.open(item.href, "_blank")
                      : scrollToSection(item.href)
                  }
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <Link href="#login">
                  Login
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="relative z-10 md:hidden py-4 border-t border-border/50">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => {
                      item.external
                        ? window.open(item.href, "_blank")
                        : scrollToSection(item.href);
                      setIsMenuOpen(false);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium py-2 text-left"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <Link href="#login">
                      Login
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center pt-16 pb-2">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">
              🚀 GooseD v1.0 - Now Live
            </span>
            <ChevronRight className="w-4 h-4 text-primary" />
          </div>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
          <span className="text-foreground">Build, Deploy & Scale</span>
          <br />
          <span className="bg-gradient-to-r from-primary via-yellow-600 to-primary bg-clip-text text-transparent">
            Without Limits
          </span>
        </h1>

        <div className="mb-12 max-w-4xl">
          <p className="text-lg tracking-tight text-muted-foreground leading-relaxed mb-8">
            Transform your development workflow with powerful deployment tools
            that adapt to your needs. From simple apps to complex microservices,
            we've got you covered.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-lg text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Deploy in seconds</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Lightning fast</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Enterprise secure</span>
            </div>
          </div>
        </div>

        {/* <div className="mb-12 w-full max-w-2xl">
          <div className="relative group">
            <div className="relative flex items-center gap-3 px-6 py-4 bg-card/80 backdrop-blur-sm rounded-xl border border-border">
              <span className="text-sm text-muted-foreground">$</span>
              <code className="flex-1 text-left font-mono text-sm md:text-base text-foreground">
                curl -sSL https://dokploy.com/install.sh | sh
              </code>
              <button
                type="button"
                onClick={() =>
                  navigator.clipboard
                    .writeText("curl -sSL https://dokploy.com/install.sh | sh")
                    .then(() => setIsCopied(true))
                    .catch(() => setIsCopied(false))
                }
                className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
              >
                {isCopied ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div> */}

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button
            size="lg"
            className="px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="#pricing">
              Get Started
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg font-semibold border-2 border-primary/20 hover:border-primary/40 rounded-xl backdrop-blur-sm transition-all duration-300 bg-transparent"
            asChild
          >
            <Link href="https://github.com/dokploy/dokploy" target="_blank">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </Link>
          </Button>
        </div>

        {/* Additional Content Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Active Deployments</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Expert Support</div>
          </div>
        </div> */}

        {/* Trust Indicators */}
        {/* <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6">Trusted by developers worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-muted-foreground">Docker</div>
            <div className="text-2xl font-bold text-muted-foreground">Kubernetes</div>
            <div className="text-2xl font-bold text-muted-foreground">AWS</div>
            <div className="text-2xl font-bold text-muted-foreground">DigitalOcean</div>
            <div className="text-2xl font-bold text-muted-foreground">Hetzner</div>
          </div>
        </div> */}

        {/* Mouse Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{
            animation: "fadeInUp 0.8s ease-out 1s forwards",
            opacity: 1,
          }}
        >
          <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex justify-center hover:border-primary transition-colors duration-300">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}
