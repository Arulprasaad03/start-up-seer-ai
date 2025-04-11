
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight, BarChart2, TrendingUp, Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Rocket className="h-6 w-6 text-brand-500" />
          <span className="text-xl font-bold">StartupSeerAI</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className="font-medium transition-colors hover:text-brand-500">
            Home
          </Link>
          <Link to="/predict" className="font-medium transition-colors hover:text-brand-500">
            Predict
          </Link>
          <Link to="/about" className="font-medium transition-colors hover:text-brand-500">
            How It Works
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">
            Sign In
          </Button>
          <Button className="hidden md:flex gap-1">
            Get Started <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <BarChart2 className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
