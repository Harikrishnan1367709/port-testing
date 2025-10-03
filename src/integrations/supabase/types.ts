export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_delete_business_group: {
        Args: { p_organization_id: string; p_user_id: string }
        Returns: boolean
      }
      can_delete_environment: {
        Args: { p_environment_id: string; p_user_id: string }
        Returns: boolean
      }
      cleanup_admin_roles: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      cleanup_all_organization_audit_logs: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      cleanup_duplicate_user_removal_logs: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      cleanup_organization_audit_logs: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      cleanup_orphaned_metadata: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      cleanup_orphaned_metadata_enhanced: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      delete_business_group: {
        Args: { p_organization_id: string; p_requesting_user_id: string }
        Returns: Json
      }
      delete_environment: {
        Args: { p_environment_id: string; p_requesting_user_id: string }
        Returns: Json
      }
      ensure_root_organization_exists: {
        Args: { p_company_name: string; p_user_id: string }
        Returns: string
      }
      fix_incorrect_user_removal_logs: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      log_audit_event: {
        Args: {
          p_action: string
          p_details: Json
          p_ip_address: unknown
          p_new_values: Json
          p_old_values: Json
          p_organization_id: string
          p_resource_id: string
          p_resource_name: string
          p_resource_type: string
          p_severity: string
          p_success: boolean
          p_user_agent: string
          p_user_id: string
        }
        Returns: undefined
      }
      remove_all_organization_audit_logs: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      remove_audit_logs_for_organization: {
        Args: { p_organization_id: string }
        Returns: number
      }
      should_log_audit_event: {
        Args: {
          p_action: string
          p_resource_name: string
          p_resource_type: string
        }
        Returns: boolean
      }
      update_business_group_name: {
        Args: {
          new_name: string
          organization_id_param: string
          requesting_user_id: string
        }
        Returns: Json
      }
      update_business_group_name_simple: {
        Args: {
          new_name: string
          organization_id_param: string
          requesting_user_id: string
        }
        Returns: Json
      }
      update_organization_owner_proper: {
        Args: {
          p_new_owner_user_id: string
          p_organization_id: string
          p_requesting_user_id: string
        }
        Returns: Json
      }
      update_user_metadata_for_org_name: {
        Args: { new_name: string; organization_id_param: string }
        Returns: Json
      }
      update_user_metadata_roles: {
        Args: {
          p_new_role: string
          p_organization_id: string
          p_user_id: string
        }
        Returns: undefined
      }
      update_user_roles_safely: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      validate_user_removal_audit_logs: {
        Args: Record<PropertyKey, never>
        Returns: {
          description: string
          issue_type: string
          log_id: string
          suggested_fix: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
