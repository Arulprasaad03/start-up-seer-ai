
import React from 'react';
import { Rocket, Mail, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-secondary/50">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-brand-500" />
              <span className="text-lg font-bold">StartupSeerAI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered startup success prediction platform to help founders make data-driven decisions.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-medium">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-brand-500">Prediction Tool</a></li>
              <li><a href="#" className="hover:text-brand-500">Success Factors</a></li>
              <li><a href="#" className="hover:text-brand-500">Case Studies</a></li>
              <li><a href="#" className="hover:text-brand-500">API</a></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-medium">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-brand-500">Documentation</a></li>
              <li><a href="#" className="hover:text-brand-500">Blog</a></li>
              <li><a href="#" className="hover:text-brand-500">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-500">Support</a></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-medium">Connect</h3>
            <div className="flex space-x-3">
              <a href="#" className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-brand-500">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-brand-500">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-brand-500">
                <Github className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-brand-500">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} StartupSeerAI. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-brand-500">Terms</a>
            <a href="#" className="hover:text-brand-500">Privacy</a>
            <a href="#" className="hover:text-brand-500">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
