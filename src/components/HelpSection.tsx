import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { HandHeart, AlertCircle, Droplet, DollarSign, Share2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HelpSection() {
  const ways = [
    {
      icon: HandHeart,
      title: "Volunteer with YODDHA",
      description: "Join our team of warriors fighting against drug abuse",
      action: "Become a Volunteer"
    },
    {
      icon: AlertCircle,
      title: "Report Drug Abuse",
      description: "Help us identify and respond to cases anonymously",
      action: "Report Anonymously"
    },
    {
      icon: Droplet,
      title: "Donate Blood",
      description: "Support life-saving causes and emergency responses",
      action: "Register as Donor"
    },
    {
      icon: DollarSign,
      title: "Sponsor Education",
      description: "Change a child's life through education sponsorship",
      action: "Sponsor a Child"
    },
    {
      icon: Share2,
      title: "Spread Awareness",
      description: "Share our message in your neighborhood and community",
      action: "Share Campaign"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="help" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            How You Can Help
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            "A true YODDHA is not one who fights with weapons, but one who protects lives."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {ways.map((way, index) => {
            const Icon = way.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-orange-400">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{way.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{way.description}</p>
                  <Button 
                    onClick={scrollToContact}
                    variant="outline" 
                    className="w-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                  >
                    {way.action}
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="overflow-hidden shadow-2xl">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758599668125-e154250f24bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWxwaW5nJTIwaGFuZHMlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzYwNDkyNDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Community Support"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">Together We Can Make a Difference</h3>
                  <p className="text-xl">Every contribution counts in our fight against drugs</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
