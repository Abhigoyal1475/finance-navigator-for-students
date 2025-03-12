
import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Finance Guide</h3>
            <p className="text-slate-600 text-sm">
              Helping international students navigate their financial journey in the United States.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Helpful Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.ssa.gov/ssnumber/" className="text-blue-600 hover:text-blue-800 text-sm link-underline">
                  Social Security Administration
                </a>
              </li>
              <li>
                <a href="https://www.consumerfinance.gov/" className="text-blue-600 hover:text-blue-800 text-sm link-underline">
                  Consumer Financial Protection Bureau
                </a>
              </li>
              <li>
                <a href="https://www.annualcreditreport.com/" className="text-blue-600 hover:text-blue-800 text-sm link-underline">
                  Free Credit Reports
                </a>
              </li>
              <li>
                <a href="https://www.ice.gov/sevis" className="text-blue-600 hover:text-blue-800 text-sm link-underline">
                  SEVIS for International Students
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Connect with Us</h3>
            <p className="text-slate-600 text-sm">
              Join our WhatsApp group for student finance discussions and advice.
            </p>
            <Button variant="outline" className="w-full sm:w-auto group">
              <MessageSquare className="mr-2 h-4 w-4" />
              Join WhatsApp Group
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-slate-200 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Student Finance Guide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
