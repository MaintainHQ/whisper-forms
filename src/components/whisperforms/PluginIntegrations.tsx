
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Mail, FileText, ArrowRight, Database } from 'lucide-react';

const PluginIntegrations = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="text-3xl font-bold mb-3">Powerful Integrations</h2>
        <p className="text-muted-foreground max-w-2xl">
          WhisperForms connects seamlessly with WhisperMail, MaintainHQ, and many other popular services.
        </p>
      </div>
      
      {/* Featured Integrations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card className="overflow-hidden border-purple-200">
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6">
            <Badge variant="outline" className="mb-2 border-purple-200 text-purple-700">Featured Integration</Badge>
            <CardTitle className="text-2xl mb-2">WhisperMail Integration</CardTitle>
            <CardDescription className="text-purple-700">
              Ensure reliable email delivery for all your form notifications.
            </CardDescription>
          </div>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Guaranteed Delivery</h4>
                  <p className="text-sm text-muted-foreground">Form notifications that never go to spam.</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <FileText className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Email Templates</h4>
                  <p className="text-sm text-muted-foreground">Beautiful notification templates that match your brand.</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Database className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Email Analytics</h4>
                  <p className="text-sm text-muted-foreground">Track opens, clicks, and engagement with your form emails.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-blue-200">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6">
            <Badge variant="outline" className="mb-2 border-blue-200 text-blue-700">Featured Integration</Badge>
            <CardTitle className="text-2xl mb-2">MaintainHQ Integration</CardTitle>
            <CardDescription className="text-blue-700">
              Create service requests and work orders directly from form submissions.
            </CardDescription>
          </div>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex gap-3">
                <FileText className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Service Requests</h4>
                  <p className="text-sm text-muted-foreground">Turn form submissions into service tickets automatically.</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Database className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Client Synchronization</h4>
                  <p className="text-sm text-muted-foreground">Keep client data in sync between forms and MaintainHQ.</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Status Updates</h4>
                  <p className="text-sm text-muted-foreground">Keep clients informed about service status automatically.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Additional Integrations */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-6">Email Marketing Integrations</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {['Mailchimp', 'Constant Contact', 'ConvertKit', 'AWeber', 'ActiveCampaign', 'GetResponse'].map((provider) => (
            <Card key={provider} className="text-center p-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 mx-auto mb-3 flex items-center justify-center">
                <Mail className="h-6 w-6 text-gray-500" />
              </div>
              <h4 className="font-medium text-sm">{provider}</h4>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-6">CRM Integrations</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {['HubSpot', 'Salesforce', 'Zoho CRM', 'Pipedrive', 'Freshsales', 'Insightly'].map((provider) => (
            <Card key={provider} className="text-center p-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 mx-auto mb-3 flex items-center justify-center">
                <Database className="h-6 w-6 text-gray-500" />
              </div>
              <h4 className="font-medium text-sm">{provider}</h4>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-6">Payment Integrations</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {['PayPal', 'Stripe', 'WooCommerce', 'Square', 'Authorize.net', '2Checkout'].map((provider) => (
            <Card key={provider} className="text-center p-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 mx-auto mb-3 flex items-center justify-center">
                <Database className="h-6 w-6 text-gray-500" />
              </div>
              <h4 className="font-medium text-sm">{provider}</h4>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Zapier Integration */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <Badge variant="outline" className="mb-2">Connect to 3000+ Apps</Badge>
            <h3 className="text-2xl font-bold mb-2">Zapier Integration</h3>
            <p className="text-muted-foreground">
              Connect WhisperForms to thousands of apps without writing code using our Zapier integration.
            </p>
          </div>
          <Card className="md:w-64 p-4">
            <div className="w-12 h-12 rounded-full bg-gray-100 mb-3 flex items-center justify-center">
              <ExternalLink className="h-6 w-6 text-gray-500" />
            </div>
            <h4 className="font-medium">Connect with Zapier</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Automate workflows with your favorite apps.
            </p>
            <div className="flex items-center text-sm text-blue-600 mt-2">
              <span>Learn more</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </Card>
        </div>
      </div>
      
      {/* Custom Webhooks */}
      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold mb-3">Custom Webhooks</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Connect WhisperForms to any service that supports webhooks, with our visual webhook builder.
          No coding required.
        </p>
      </div>
    </div>
  );
};

export default PluginIntegrations;
