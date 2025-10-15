import { Heart, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">Y</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">YODDHA</h3>
                <p className="text-sm text-gray-400">The Warrior Within</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Fighting against drug abuse. Building a stronger, safer community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-orange-500 transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-orange-500 transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('awareness')} className="hover:text-orange-500 transition-colors">Drug Awareness</button></li>
              <li><button onClick={() => scrollToSection('initiatives')} className="hover:text-orange-500 transition-colors">Our Initiatives</button></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-bold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => scrollToSection('help')} className="hover:text-orange-500 transition-colors">Volunteer</button></li>
              <li><button onClick={() => scrollToSection('help')} className="hover:text-orange-500 transition-colors">Donate Blood</button></li>
              <li><button onClick={() => scrollToSection('help')} className="hover:text-orange-500 transition-colors">Sponsor Education</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-orange-500 transition-colors">Contact Us</button></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Stay connected for updates and events
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent text-center">
            <p className="text-xl md:text-2xl font-bold mb-2">
              "We are YODDHA – warriors of change, guardians of hope, and protectors of society."
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p className="mb-2">
            © 2025 YODDHA - District Administration of North Tripura Initiative
          </p>
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for a drug-free future
          </p>
        </div>
      </div>
    </footer>
  );
}
