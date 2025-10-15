import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "I was once trapped in drugs. YODDHA volunteers helped me recover and find a new life. I am now working and supporting my family. Thank you YODDHA!",
      author: "A Recovered Addict",
      role: "Recovered Individual",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      text: "The awareness program opened our eyes to how children fall prey to addiction. Now we know the warning signs and how to protect our kids.",
      author: "Parent",
      role: "Community Member",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      text: "As a teacher, I've seen how YODDHA's education programs are transforming young lives. The free coaching is giving hope to underprivileged students.",
      author: "School Teacher",
      role: "Educator",
      gradient: "from-purple-500 to-pink-600"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
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
              <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${testimonial.gradient} opacity-10 rounded-full -mr-16 -mt-16`}></div>
                <Quote className="w-12 h-12 text-orange-600 mb-4 opacity-30" />
                <p className="text-lg mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "500+", label: "Lives Impacted" },
            { number: "50+", label: "Awareness Events" },
            { number: "100+", label: "Students Educated" },
            { number: "200+", label: "Blood Donations" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
