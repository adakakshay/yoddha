import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Share2, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function SocialShareSection() {
  const handleShare = (platform: string) => {
    toast.success(`Opening ${platform}...`, {
      description: 'Share YODDHA to spread awareness!',
    });
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'from-sky-500 to-sky-600',
      hoverColor: 'hover:from-sky-600 hover:to-sky-700',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      color: 'from-pink-600 to-purple-600',
      hoverColor: 'hover:from-pink-700 hover:to-purple-700',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'from-green-600 to-green-700',
      hoverColor: 'hover:from-green-700 hover:to-green-800',
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-orange-600 to-red-600 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, white 0px, white 2px, transparent 2px, transparent 20px)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="inline-block text-5xl mb-4"
            >
              📢
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Spread the Word. Save Lives.
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Every share helps reach someone who needs help. Be a warrior. Share YODDHA.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => handleShare(social.name)}
                      size="lg"
                      className={`bg-gradient-to-r ${social.color} ${social.hoverColor} text-white shadow-xl`}
                    >
                      <Icon className="w-5 h-5 mr-2" />
                      {social.name}
                    </Button>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 flex justify-center gap-2"
            >
              <Card className="px-6 py-3 bg-white/10 backdrop-blur border-white/20">
                <p className="text-white font-semibold">
                  <motion.span
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="inline-block"
                  >
                    🔥
                  </motion.span>
                  {' '}2,453 people shared today
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
