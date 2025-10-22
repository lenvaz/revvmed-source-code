import {
  FileText,
  Code2,
  FileSearch,
  BarChart4,
  Plus,
  GraduationCap,
  Users,
  Database,
  PhoneCall,
  Building2,
  LineChart,
  Award,
  Settings,
  MapPin,
  MessageCircle,
  Users2,
  FilePlus2Icon,
  FilePlus,
  FileCode,
  UserPlus2,
  ChartColumnBig,
  ShoppingCart,
  FileEdit,
  ShieldUser,
  MessagesSquareIcon
} from "lucide-react";

export const APP_NAME = "Revvmed";
export const COMPANY_EMAIL = "info@revvmed.com";
export const iconMap = {
  // Main Services
  "Medical Record Retrieval": FileText,
  "Medical Record Coding": Code2,
  "Medical Record Abstraction": FileSearch,
  "Reporting and Analytics": BarChart4,
  "Supplemental Services": Plus,

  // Supplemental Services
  "Provider Education": GraduationCap,
  "Member Education": Users,
  "Prospective Data Mining": Database,
  "Contact Center": PhoneCall,
  "Back office Services": Building2,
  "Data Analysis and Reporting": LineChart,
  "Stars/Quality Measures Education": Award,
  "Made to Order/Bespoke Services": Settings,

  // Record Retrieval
  "Provider Focused Approach": Users,
  "Nation Wide Staffing": Building2,
  "Quality Control": Settings,
  "Wide Ranging Retrieval Methods": MapPin,

  // Medical Record Coding
  "People at Core": Users,
  "Client specific and Custom Coding Guidelines": Settings,
  "Robust Quality Assurance": Settings,
  "Flexible to match scale": Users,

  // Medical Record Abstraction
  "Client specific and Custom Abstraction Guidelines": Settings,

  // Reporting and Analytics
  "Client specific and Custom Analytics Guidelines": Settings,

  // Authorization Management
  "Effective Eligibility Verification": FilePlus,
  "Documentation": FileCode,
  "Expertise Staff for authorization": UserPlus2,
  "Impactful training & tools": ChartColumnBig,

  // Customer Service
  "Developing loyalty & reputation": FilePlus2Icon,
  "Communication Efficiency": MessageCircle,
  "Prompt Assistance": PhoneCall,
  "Retention of customers": Users2,

  // Medical Billing
  "Clean Claims": FilePlus,
  "Claim Content & Coding": FileCode,
  "Patient Information is a crucial component of a claim submission": UserPlus2,
  "Supporting Documentation": ChartColumnBig,

  // Order Management
  "Determining covered services by the patient's insurance": FilePlus,
  "Ascertaining whether pre-authorization is required": FileCode,
  "Understanding the copay, deductibles & plan exclusions": UserPlus2,
  "STAT/Urgent Fax processing, 24x7": ChartColumnBig,

  // DME
  "Order Management": ShoppingCart,
  "Authorization Management": FileEdit,
  "Medical Billing Solutions": ShieldUser,
  "Customer Support": MessagesSquareIcon,

  // Revenue Cycle Management
  "Patient Pre-authorization": FilePlus,
  "Insurance Eligibility & Verification": FileCode,
  "Medical Billing": ShieldUser,
  "ERA/EOR Payment Posting": ChartColumnBig,
  "Denial management": MessagesSquareIcon,
  "Reporting": BarChart4,

  // For Provider MSO
  "Revenue Cycle Management": ShieldUser,
  "Risk Adjustment": FileCode,
  "Claims, Analytics and Reporting": BarChart4,
  "HEDIS Quality Measures": GraduationCap,

  // Claims Management
  "Claims Adjudication": FilePlus,
  "Encounter Submissions": ChartColumnBig,
  "Credentialing": UserPlus2,

  // Default icon for any unmatched service
  "default": FileText,
};
