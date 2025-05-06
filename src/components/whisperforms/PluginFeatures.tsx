
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Layers, Mail, FileText, Shield, Database, Calculator, Cog, ExternalLink } from 'lucide-react';

const FeatureCategory = ({ title, description, icon, features }: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  features: string[];
}) => (
  <Card className="h-full">
    <CardHeader>
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <CardTitle>{title}</CardTitle>
      </div>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-1" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const PluginFeatures = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="text-3xl font-bold mb-3">All Features Included. No Premium Version.</h2>
        <p className="text-muted-foreground max-w-2xl">
          Other form plugins make you pay for the good stuff. WhisperForms gives you everything for free.
        </p>
      </div>
      
      <Tabs defaultValue="core">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="core">Core Features</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="developer">For Developers</TabsTrigger>
        </TabsList>
        
        <TabsContent value="core" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCategory 
              title="Form Building"
              description="Create beautiful forms without code"
              icon={<Layers className="h-5 w-5 text-purple-500" />}
              features={[
                "Unlimited forms",
                "Drag-and-drop builder",
                "Multi-step forms",
                "Form templates",
                "Form duplication",
                "Mobile responsive",
                "Multi-column layouts"
              ]}
            />
            
            <FeatureCategory 
              title="Form Fields"
              description="All field types you could need"
              icon={<FileText className="h-5 w-5 text-blue-500" />}
              features={[
                "Basic fields (text, email, etc.)",
                "Advanced fields (file upload, date)",
                "Layout fields (sections, columns)",
                "Specialized fields (rating, signature)",
                "Hidden fields",
                "Dynamic fields",
                "Input masking"
              ]}
            />
            
            <FeatureCategory 
              title="Submissions"
              description="Manage form entries effectively"
              icon={<Database className="h-5 w-5 text-green-500" />}
              features={[
                "Unlimited submissions",
                "Submission dashboard",
                "CSV export",
                "Entry management",
                "Search and filter",
                "Bulk actions",
                "Entry revisions"
              ]}
            />
            
            <FeatureCategory 
              title="Email Features"
              description="Reliable email notifications"
              icon={<Mail className="h-5 w-5 text-red-500" />}
              features={[
                "Multiple notifications",
                "Email templates",
                "WhisperMail integration",
                "Conditional email logic",
                "File attachments",
                "Email tracking",
                "HTML emails"
              ]}
            />
            
            <FeatureCategory 
              title="Security"
              description="Keep your forms protected"
              icon={<Shield className="h-5 w-5 text-amber-500" />}
              features={[
                "Field validation",
                "Anti-spam measures",
                "Google reCAPTCHA v2/v3",
                "Form limits",
                "Data encryption",
                "GDPR compliance tools",
                "Access controls"
              ]}
            />
            
            <FeatureCategory 
              title="Post-Submission"
              description="What happens after users submit"
              icon={<Cog className="h-5 w-5 text-indigo-500" />}
              features={[
                "Success messages",
                "Page redirects",
                "JavaScript hooks",
                "Conditional redirects",
                "Thank you pages",
                "Confirmation notifications",
                "Custom workflows"
              ]}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="advanced" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCategory 
              title="Calculations & Logic"
              description="Advanced form functionality"
              icon={<Calculator className="h-5 w-5 text-purple-500" />}
              features={[
                "Form calculations",
                "Mathematical functions",
                "Conditional logic",
                "Validation rules",
                "Dynamic content",
                "Payment calculators",
                "Computed values"
              ]}
            />
            
            <FeatureCategory 
              title="Custom Post Types"
              description="Deep WordPress integration"
              icon={<Database className="h-5 w-5 text-blue-500" />}
              features={[
                "CPT selection in forms",
                "CPT data display",
                "Create posts from submissions",
                "Update existing posts",
                "Taxonomy integration",
                "Custom fields integration",
                "Post relationships"
              ]}
            />
            
            <FeatureCategory 
              title="User Experience"
              description="Create better form experiences"
              icon={<Layers className="h-5 w-5 text-green-500" />}
              features={[
                "Save & resume later",
                "Offline submissions",
                "Form scheduling",
                "Multi-language support",
                "RTL support",
                "Form analytics",
                "A/B testing"
              ]}
            />
            
            <FeatureCategory 
              title="File Handling"
              description="Work with uploaded files"
              icon={<FileText className="h-5 w-5 text-amber-500" />}
              features={[
                "Multiple file uploads",
                "File type restrictions",
                "PDF generation",
                "File conversions",
                "Image resizing",
                "Media library integration",
                "File security"
              ]}
            />
            
            <FeatureCategory 
              title="User Management"
              description="Connect forms to users"
              icon={<Cog className="h-5 w-5 text-red-500" />}
              features={[
                "User account integration",
                "Pre-fill for logged-in users",
                "User profile updates",
                "User registration forms",
                "Progressive profiling",
                "Login forms",
                "Social login"
              ]}
            />
            
            <FeatureCategory 
              title="Form Optimization"
              description="Get more submissions"
              icon={<ExternalLink className="h-5 w-5 text-indigo-500" />}
              features={[
                "Conversational forms",
                "Form abandonment recovery",
                "Mobile optimization",
                "Loading performance",
                "Accessibility compliance",
                "SEO optimization",
                "Conversion tracking"
              ]}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="integrations" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCategory 
              title="WhisperMail Integration"
              description="Reliable email delivery"
              icon={<Mail className="h-5 w-5 text-purple-500" />}
              features={[
                "Guaranteed email delivery",
                "Email templates",
                "Open & click tracking",
                "Bounce handling",
                "Email analytics",
                "Custom headers",
                "Attachment handling"
              ]}
            />
            
            <FeatureCategory 
              title="MaintainHQ Integration"
              description="Connect to maintenance services"
              icon={<Cog className="h-5 w-5 text-blue-500" />}
              features={[
                "Service request creation",
                "Client data synchronization",
                "Work order forms",
                "Status updates",
                "Maintenance scheduling",
                "Client portals",
                "Service tracking"
              ]}
            />
            
            <FeatureCategory 
              title="Email Marketing"
              description="Grow your mailing lists"
              icon={<Mail className="h-5 w-5 text-green-500" />}
              features={[
                "Mailchimp integration",
                "Constant Contact integration",
                "ConvertKit integration",
                "AWeber integration",
                "ActiveCampaign integration",
                "Custom field mapping",
                "Multiple list subscriptions"
              ]}
            />
            
            <FeatureCategory 
              title="CRM Integrations"
              description="Connect to customer databases"
              icon={<Database className="h-5 w-5 text-amber-500" />}
              features={[
                "HubSpot integration",
                "Salesforce integration",
                "Zoho CRM integration",
                "Pipedrive integration",
                "Contact creation",
                "Deal creation",
                "Activity logging"
              ]}
            />
            
            <FeatureCategory 
              title="Third-Party Connections"
              description="Connect to any service"
              icon={<ExternalLink className="h-5 w-5 text-red-500" />}
              features={[
                "Zapier integration",
                "Webhook builder",
                "API connections",
                "Google Sheets integration",
                "Airtable integration",
                "Slack notifications",
                "Custom integrations"
              ]}
            />
            
            <FeatureCategory 
              title="Payment Integrations"
              description="Accept payments in forms"
              icon={<Calculator className="h-5 w-5 text-indigo-500" />}
              features={[
                "PayPal integration",
                "Stripe integration",
                "WooCommerce integration",
                "Subscription payments",
                "One-time payments",
                "Payment plans",
                "Invoice generation"
              ]}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="developer" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCategory 
              title="Code Customization"
              description="For developers who code"
              icon={<Cog className="h-5 w-5 text-purple-500" />}
              features={[
                "Custom CSS classes",
                "JavaScript hooks",
                "PHP filters & actions",
                "Template overrides",
                "Custom field types",
                "Custom validation rules",
                "Event system"
              ]}
            />
            
            <FeatureCategory 
              title="API Access"
              description="Programmatic control"
              icon={<ExternalLink className="h-5 w-5 text-blue-500" />}
              features={[
                "REST API",
                "Form CRUD operations",
                "Submission access",
                "Webhook management",
                "Authentication",
                "Rate limiting",
                "Batch operations"
              ]}
            />
            
            <FeatureCategory 
              title="Extensibility"
              description="Build your own add-ons"
              icon={<Layers className="h-5 w-5 text-green-500" />}
              features={[
                "Add-on system",
                "Extension framework",
                "Custom endpoints",
                "Field type API",
                "Integration API",
                "Action API",
                "Settings API"
              ]}
            />
            
            <FeatureCategory 
              title="Deployment"
              description="For teams & agencies"
              icon={<Database className="h-5 w-5 text-amber-500" />}
              features={[
                "Import/export system",
                "Form templates",
                "Multisite support",
                "White-labeling",
                "User permissions",
                "Form version control",
                "Environment configuration"
              ]}
            />
            
            <FeatureCategory 
              title="Performance"
              description="Speed & optimization"
              icon={<Calculator className="h-5 w-5 text-red-500" />}
              features={[
                "Asset optimization",
                "Caching support",
                "Database optimization",
                "AJAX submissions",
                "Lazy loading",
                "Query optimization",
                "Server load management"
              ]}
            />
            
            <FeatureCategory 
              title="Developer Tools"
              description="Debug & troubleshoot"
              icon={<Shield className="h-5 w-5 text-indigo-500" />}
              features={[
                "Debug mode",
                "Logging system",
                "Performance metrics",
                "Form inspector",
                "Testing tools",
                "Documentation",
                "Developer community"
              ]}
            />
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-16 text-center">
        <Badge className="mb-4">No Premium Version Needed</Badge>
        <h3 className="text-2xl font-bold mb-3">Everything Above Is Free. Forever.</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We've made a commitment to keep WhisperForms 100% free, with no feature limitations or artificial restrictions.
        </p>
      </div>
    </div>
  );
};

export default PluginFeatures;
