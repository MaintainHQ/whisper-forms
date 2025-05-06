
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Separator } from '@/components/ui/separator';
import { FileText, Download, Check, Star } from 'lucide-react';

const PluginDownload = () => {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [usage, setUsage] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate download process
    setTimeout(() => {
      toast({
        title: "Download Started",
        description: "Thank you for downloading WhisperForms!",
      });
      setLoading(false);
      
      // Create download link for demo purposes
      const link = document.createElement('a');
      link.href = '#'; // In a real implementation, this would be the actual download URL
      link.setAttribute('download', 'whisperforms.zip');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      <div className="lg:col-span-3">
        <h2 className="text-3xl font-bold mb-6">Download WhisperForms</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Installation Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              <li className="flex">
                <span className="bg-purple-100 text-purple-800 font-medium h-6 w-6 rounded-full flex items-center justify-center mr-3 shrink-0">1</span>
                <div>
                  <p className="font-medium">Download the WhisperForms plugin</p>
                  <p className="text-sm text-muted-foreground">Fill out the form to download the latest version.</p>
                </div>
              </li>
              
              <li className="flex">
                <span className="bg-purple-100 text-purple-800 font-medium h-6 w-6 rounded-full flex items-center justify-center mr-3 shrink-0">2</span>
                <div>
                  <p className="font-medium">Upload to your WordPress site</p>
                  <p className="text-sm text-muted-foreground">Go to Plugins → Add New → Upload Plugin, and select the zip file.</p>
                </div>
              </li>
              
              <li className="flex">
                <span className="bg-purple-100 text-purple-800 font-medium h-6 w-6 rounded-full flex items-center justify-center mr-3 shrink-0">3</span>
                <div>
                  <p className="font-medium">Activate the plugin</p>
                  <p className="text-sm text-muted-foreground">Click the "Activate" button after installation completes.</p>
                </div>
              </li>
              
              <li className="flex">
                <span className="bg-purple-100 text-purple-800 font-medium h-6 w-6 rounded-full flex items-center justify-center mr-3 shrink-0">4</span>
                <div>
                  <p className="font-medium">Configure settings</p>
                  <p className="text-sm text-muted-foreground">Go to WhisperForms → Settings to configure your preferences.</p>
                </div>
              </li>
              
              <li className="flex">
                <span className="bg-purple-100 text-purple-800 font-medium h-6 w-6 rounded-full flex items-center justify-center mr-3 shrink-0">5</span>
                <div>
                  <p className="font-medium">Create your first form</p>
                  <p className="text-sm text-muted-foreground">Go to WhisperForms → Add New to start building.</p>
                </div>
              </li>
            </ol>
            
            <Separator className="my-6" />
            
            <div>
              <h3 className="font-medium mb-2">System Requirements</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>WordPress 5.0 or higher</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>PHP 7.2 or higher</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>MySQL 5.6 or higher</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-md">
              <div className="flex gap-3">
                <FileText className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Documentation</h4>
                  <p className="text-sm">
                    Check out our comprehensive <a href="#" className="text-blue-600 hover:underline">documentation</a> to learn how to make the most of WhisperForms.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="lg:col-span-2">
        <form onSubmit={handleDownload} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Download Form</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="Your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <p className="text-xs text-muted-foreground mt-1">
                  We'll send plugin updates to this email.
                </p>
              </div>
              
              <div>
                <Label htmlFor="website">Website URL</Label>
                <Input 
                  id="website"
                  type="url" 
                  placeholder="https://your-website.com" 
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Optional - helps us understand our users better.
                </p>
              </div>
              
              <div>
                <Label>How will you use WhisperForms?</Label>
                <RadioGroup value={usage} onValueChange={setUsage} className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="contact" id="usage-contact" />
                    <Label htmlFor="usage-contact">Contact forms</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="service" id="usage-service" />
                    <Label htmlFor="usage-service">Service requests</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="payments" id="usage-payments" />
                    <Label htmlFor="usage-payments">Payment forms</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="usage-other" />
                    <Label htmlFor="usage-other">Other</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Download className="h-5 w-5 mr-2" />
                    Download WhisperForms
                  </span>
                )}
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                By downloading, you agree to our <a href="#" className="underline">terms of service</a>.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-50 border border-purple-100">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-2">
                <Star className="h-5 w-5 text-amber-400" fill="currentColor" />
                <Star className="h-5 w-5 text-amber-400" fill="currentColor" />
                <Star className="h-5 w-5 text-amber-400" fill="currentColor" />
                <Star className="h-5 w-5 text-amber-400" fill="currentColor" />
                <Star className="h-5 w-5 text-amber-400" fill="currentColor" />
              </div>
              <p className="text-sm italic text-gray-700">
                "WhisperForms has completely changed how we handle forms on our client websites. No more upsells or feature limitations. It just works!"
              </p>
              <p className="text-sm font-medium mt-2">
                — Sarah Johnson, Web Developer
              </p>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default PluginDownload;
