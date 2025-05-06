
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
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';
import { Download, Sparkles } from 'lucide-react';

const WhisperFormsPlugin = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-10">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 bg-purple-50 text-purple-700 border-purple-200 px-3 py-1">Free WordPress Forms Plugin</Badge>
            <h1 className="text-5xl font-bold tracking-tight mb-4 bg-gradient-to-br from-purple-600 to-indigo-700 text-transparent bg-clip-text">
              WhisperForms
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The most powerful free WordPress form builder - no paywalls, no upsells, just powerful forms with WhisperMail delivery.
            </p>
          </div>
          
          {/* Main Content */}
          <Tabs defaultValue="overview" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 bg-indigo-50">
              <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-indigo-700">Overview</TabsTrigger>
              <TabsTrigger value="features" className="data-[state=active]:bg-white data-[state=active]:text-indigo-700">Features</TabsTrigger>
              <TabsTrigger value="integrations" className="data-[state=active]:bg-white data-[state=active]:text-indigo-700">Integrations</TabsTrigger>
              <TabsTrigger value="download" className="data-[state=active]:bg-white data-[state=active]:text-indigo-700">Download</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6 bg-white p-6 rounded-lg shadow-sm border border-indigo-100">
              <PluginOverview />
            </TabsContent>
            
            <TabsContent value="features" className="mt-6 bg-white p-6 rounded-lg shadow-sm border border-indigo-100">
              <PluginFeatures />
            </TabsContent>
            
            <TabsContent value="integrations" className="mt-6 bg-white p-6 rounded-lg shadow-sm border border-indigo-100">
              <PluginIntegrations />
            </TabsContent>
            
            <TabsContent value="download" className="mt-6 bg-white p-6 rounded-lg shadow-sm border border-indigo-100">
              <PluginDownload />
            </TabsContent>
          </Tabs>
          
          {/* Preview Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">See WhisperForms in Action</h2>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl shadow-xl max-w-5xl mx-auto">
              <div className="relative aspect-video overflow-hidden rounded-lg border border-gray-200 shadow-md">
                <img 
                  src="/placeholder.svg" 
                  alt="WhisperForms Interface Preview" 
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-medium mb-2">Modern Form Builder</h3>
                    <p className="text-white/90">Drag-and-drop interface for creating powerful forms.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="my-24 text-center bg-gradient-to-br from-indigo-600 to-purple-700 p-12 rounded-2xl shadow-xl max-w-5xl mx-auto text-white">
            <Sparkles className="mx-auto mb-4 text-yellow-300 w-10 h-10" />
            <h2 className="text-3xl font-bold mb-4">Ready to Revolutionize Your WordPress Forms?</h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of websites using WhisperForms for their form needs - 100% free, no strings attached.
            </p>
            <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-100 shadow-lg">
              <Download className="mr-2" /> Download WhisperForms
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default WhisperFormsPlugin;
