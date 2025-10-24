import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { HandHeart, Droplet, DollarSign, Share2, Facebook, Twitter, Instagram, Mail, Calendar, MapPin, Users, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function HelpSection() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const ways = [
    {
      icon: HandHeart,
      title: "Volunteer with YODDHA",
      description: "Join our team of warriors fighting against drug abuse and child marriage",
      backContent: {
        type: "info",
        title: "Join the Movement",
        items: [
          "Help organize awareness campaigns",
          "Support rehabilitation programs",
          "Mentor youth in your community",
          "Participate in ground activities"
        ],
        note: "We believe in collective action, not formal registration. Every helping hand counts!"
      }
    },
    {
      icon: Droplet,
      title: "Donate Blood",
      description: "Support life-saving causes and emergency responses",
      backContent: {
        type: "event",
        title: "Upcoming Blood Donation",
        date: "25th January 2026",
        time: "10:00 AM - 4:00 PM",
        venue: "District Hospital, Dharmanagar",
        contact: "+91-98765-43210"
      }
    },
    {
      icon: DollarSign,
      title: "Sponsor Education",
      description: "Change a child's life through education sponsorship",
      backContent: {
        type: "info",
        title: "Education Support",
        items: [
          "Provide school supplies to children",
          "Support free coaching programs",
          "Sponsor skill development workshops",
          "Fund awareness material creation"
        ],
        note: "Contact District Administration for sponsorship opportunities"
      }
    },
    {
      icon: Share2,
      title: "Spread Awareness",
      description: "Share our message in your neighborhood and community",
      backContent: {
        type: "share",
        title: "Share on Social Media",
        message: "Join YODDHA - The Warrior Within! Together we fight drug abuse and child marriage. Be a guardian of your community. #YODDHA #DrugFree #SaveChildren"
      }
    }
  ];

  const handleShare = (platform: string) => {
    const message = encodeURIComponent("Join YODDHA - The Warrior Within! Together we fight drug abuse and child marriage. #YODDHA #DrugFree");
    const url = encodeURIComponent(window.location.href);
    
    let shareUrl = '';
    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${message}&url=${url}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${message}%20${url}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=Join YODDHA Movement&body=${message}%20${url}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const renderBackContent = (way: typeof ways[0]) => {
    const { backContent } = way;

    if (backContent.type === 'share') {
      return (
        <div className="p-6 h-full flex flex-col justify-center">
          <h4 className="font-bold mb-4 text-center">{backContent.title}</h4>
          <p className="text-sm text-muted-foreground mb-6 text-center">{backContent.message}</p>
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={() => handleShare('facebook')}
              className="bg-blue-600 hover:bg-blue-700"
              size="sm"
            >
              <Facebook className="w-4 h-4 mr-2" />
              Facebook
            </Button>
            <Button
              onClick={() => handleShare('twitter')}
              className="bg-sky-500 hover:bg-sky-600"
              size="sm"
            >
              <Twitter className="w-4 h-4 mr-2" />
              Twitter
            </Button>
            <Button
              onClick={() => handleShare('whatsapp')}
              className="bg-green-600 hover:bg-green-700"
              size="sm"
            >
              <Share2 className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Button
              onClick={() => handleShare('email')}
              className="bg-gray-600 hover:bg-gray-700"
              size="sm"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
          </div>
        </div>
      );
    }

    if (backContent.type === 'event') {
      return (
        <div className="p-6 h-full flex flex-col justify-center">
          <div className="text-center mb-4">
            <Droplet className="w-10 h-10 text-red-600 mx-auto mb-2" />
            <h4 className="font-bold">{backContent.title}</h4>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-orange-600" />
              <span>{backContent.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-orange-600" />
              <span className="text-sm">{backContent.venue}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-orange-600" />
              <span>{backContent.time}</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            📞 Contact: {backContent.contact}
          </p>
        </div>
      );
    }

    // info type
    return (
      <div className="p-6 h-full flex flex-col justify-center">
        <h4 className="font-bold mb-4 text-center">{backContent.title}</h4>
        <ul className="space-y-2 mb-4">
          {backContent.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-1.5 flex-shrink-0"></div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {backContent.note && (
          <p className="text-xs text-muted-foreground text-center border-t pt-3">
            {backContent.note}
          </p>
        )}
      </div>
    );
  };

  return (
    <section id="help" className="py-8 md:py-12 bg-gradient-to-b from-orange-50 to-white">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ways.map((way, index) => {
            const Icon = way.icon;
            const isFlipped = flippedCard === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="perspective-1000"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  className="relative h-80 cursor-pointer"
                  onClick={() => setFlippedCard(isFlipped ? null : index)}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, type: 'spring' }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front Side */}
                  <Card 
                    className="absolute inset-0 p-6 flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-orange-400"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden'
                    }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{way.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{way.description}</p>
                    <div className="mt-auto">
                      <p className="text-sm text-orange-600 font-medium flex items-center gap-2">
                        Click to see details
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </p>
                    </div>
                  </Card>

                  {/* Back Side */}
                  <Card 
                    className="absolute inset-0 border-2 border-orange-400 bg-gradient-to-br from-orange-50 to-red-50"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    {renderBackContent(way)}
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                      <p className="text-xs text-muted-foreground">Click to flip back</p>
                    </div>
                  </Card>
                </motion.div>
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