
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const PluginOverview = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-3xl font-bold mb-4">The Free Form Solution You've Been Waiting For</h2>
          <p className="text-muted-foreground mb-6">
            WhisperForms is our answer to the endless paywalls and limitations that plague WordPress form plugins. We believe great form functionality should be available to everyone.
          </p>
          
          <div className="space-y-3">
            {[
              "Unlimited forms and submissions",
              "Complete form builder with drag-and-drop interface",
              "Custom Post Type integration",
              "WhisperMail delivery integration",
              "100% free - no premium upgrades needed"
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5 mr-2" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          
          <Button className="mt-6">Download Now</Button>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">How It Works</h3>
          
          <ol className="space-y-4">
            <li className="flex">
              <span className="bg-purple-100 text-purple-800 font-medium h-6 w-6 rounded-full flex items-center justify-center mr-3 shrink-0">1</span>
              <div>
                <p className="font-medium">Install the WhisperForms plugin</p>
                <p className="text-sm text-muted-foreground">Download, install and activate like any WordPress plugin.</p>
              </div>
            </li>
            
            <li className="flex">
              <span className="bg-purple-100 text-purple-800 font-medium h-6 w-6 rounded-full flex items-center justify-center mr-3 shrink-0">2</span>
              <div>
                <p className="font-medium">Create your form</p>
                <p className="text-sm text-muted-foreground">Use the drag-and-drop builder to design your perfect form.</p>
              </div>
            </li>
            
            <li className="flex">
              <span className="bg-purple-100 text-purple-800 font-medium h-6 w-6 rounded-full flex items-center justify-center mr-3 shrink-0">3</span>
              <div>
                <p className="font-medium">Add it to your site</p>
                <p className="text-sm text-muted-foreground">Use our shortcode to display your form anywhere.</p>
              </div>
            </li>
            
            <li className="flex">
              <span className="bg-purple-100 text-purple-800 font-medium h-6 w-6 rounded-full flex items-center justify-center mr-3 shrink-0">4</span>
              <div>
                <p className="font-medium">Collect submissions</p>
                <p className="text-sm text-muted-foreground">Manage entries in WordPress and receive email notifications.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6 text-center">Why We Made WhisperForms Free</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>No More Paywalls</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We believe quality tools shouldn't be locked behind expensive paywalls. WhisperForms gives you everything you need at zero cost.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Integration Ecosystem</CardTitle>
            </CardHeader>
            <CardContent>
              <p>WhisperForms integrates with our WhisperMail and MaintainHQ products, creating a powerful ecosystem for your business.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Community First</CardTitle>
            </CardHeader>
            <CardContent>
              <p>By offering premium features for free, we're building a community of loyal users who appreciate our honest approach.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PluginOverview;
