
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PluginFeatures from '@/components/whisperforms/PluginFeatures';
import PluginOverview from '@/components/whisperforms/PluginOverview';
import PluginIntegrations from '@/components/whisperforms/PluginIntegrations';
import { Separator } from '@/components/ui/separator';
import PluginDownload from '@/components/whisperforms/PluginDownload';
import { cn } from '@/lib/utils';

const WhisperFormsPlugin = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4">Free WordPress Forms Plugin</Badge>
        <h1 className="text-5xl font-bold tracking-tight mb-4 bg-gradient-to-br from-purple-600 to-indigo-700 text-transparent bg-clip-text">
          WhisperForms
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The most powerful free WordPress form builder - no paywalls, no upsells, just powerful forms with WhisperMail delivery.
        </p>
      </div>
      
      {/* Main Content */}
      <Tabs defaultValue="overview" className="max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="download">Download</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-6">
          <PluginOverview />
        </TabsContent>
        
        <TabsContent value="features" className="mt-6">
          <PluginFeatures />
        </TabsContent>
        
        <TabsContent value="integrations" className="mt-6">
          <PluginIntegrations />
        </TabsContent>
        
        <TabsContent value="download" className="mt-6">
          <PluginDownload />
        </TabsContent>
      </Tabs>
      
      {/* Preview Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">See WhisperForms in Action</h2>
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
          <div className="relative aspect-video overflow-hidden rounded-lg border border-gray-200 shadow-md">
            <img 
              src="/placeholder.svg" 
              alt="WhisperForms Interface Preview" 
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-2xl font-medium mb-2">Modern Form Builder</h3>
                <p className="text-white/80">Drag-and-drop interface for creating powerful forms.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Final CTA */}
      <div className="my-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Revolutionize Your WordPress Forms?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of websites using WhisperForms for their form needs - 100% free, no strings attached.
        </p>
        <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800">
          Download WhisperForms
        </Button>
      </div>
    </div>
  );
};

export default WhisperFormsPlugin;
