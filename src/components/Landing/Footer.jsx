import { Heart, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-primary/5 to-background py-16 px-4 border-t">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">U</span>
              </div>
              <span className="text-2xl font-heading font-bold gradient-text">UstaadX</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              India's fastest growing peer-to-peer skill exchange platform.
              Learn what you love, teach what you know — for free.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-muted/50 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted/50 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted/50 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted/50 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-all">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Browse Skills</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 UstaadX. All rights reserved.
          </p>
          <div className="flex items-center text-muted-foreground text-sm">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> in India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
