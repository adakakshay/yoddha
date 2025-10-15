import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Quote, Star, CheckCircle } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "I was once trapped in drugs. YODDHA volunteers helped me recover and find a new life. I am now working and supporting my family. Thank you YODDHA!",
      author: "A Recovered Warrior",
      role: "Recovered Individual",
      location: "Dharmanagar",
      gradient: "from-green-500 to-emerald-600",
      badge: "Verified",
      rating: 5
    },
    {
      text: "The awareness program opened our eyes to how children fall prey to addiction. Now we know the warning signs and how to protect our kids.",
      author: "Community Parent",
      role: "Parent & Volunteer",
      location: "Kanchanpur",
      gradient: "from-blue-500 to-cyan-600",
      badge: "Verified",
      rating: 5
    },
    {
      text: "As a teacher, I've seen how YODDHA's education programs are transforming young lives. The free coaching is giving hope to underprivileged students.",
      author: "School Teacher",
      role: "Educator",
      location: "North Tripura",
      gradient: "from-purple-500 to-pink-600",
      badge: "Official",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="inline-block text-5xl mb-4"
          >
            💬
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Stories of Change
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground">Real voices, real transformations</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${testimonial.gradient} transition-opacity duration-300`}
                />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      animate={{
                        rotate: [0, -10, 10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                    >
                      <Quote className="w-10 h-10 text-orange-600 opacity-30" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={`px-3 py-1 rounded-full bg-gradient-to-r ${testimonial.gradient} text-white text-xs font-semibold flex items-center gap-1`}
                    >
                      <CheckCircle className="w-3 h-3" />
                      {testimonial.badge}
                    </motion.div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: index * 0.1 + i * 0.05, type: 'spring' }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                    >
                      {testimonial.author.charAt(0)}
                    </motion.div>
                    <div>
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">📍 {testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="inline-block px-8 py-4 bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
            <p className="text-sm">
              <strong className="text-orange-600">💯 100% Verified</strong> testimonials from real people in our community
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
