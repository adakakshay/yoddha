import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Megaphone, HeartHandshake, Phone, GraduationCap, Droplet } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function InitiativesSection() {
  const initiatives = [
    {
      icon: Megaphone,
      title: "Awareness Campaigns",
      description: "Public rallies, seminars, and street plays. Awareness drives in schools, colleges, and community centers.",
      color: "orange"
    },
    {
      icon: HeartHandshake,
      title: "Rehabilitation & Counseling Support",
      description: "Linking addicts to government-approved de-addiction centers. Counseling sessions for youth and their families.",
      color: "red"
    },
    {
      icon: Phone,
      title: "Helpline & Rapid Response",
      description: "24/7 Anti-Drug Helpline managed jointly. Immediate response to overdose or emergency cases.",
      color: "blue"
    },
    {
      icon: GraduationCap,
      title: "Education & Youth Empowerment",
      description: "Free coaching for underprivileged students. Skill development workshops and sports events to keep youth engaged positively.",
      color: "green"
    },
    {
      icon: Droplet,
      title: "Blood Donation Camps",
      description: "Monthly camps across North Tripura. Emergency donor network maintained by NGO & district officials.",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; border: string; text: string; icon: string }> = {
      orange: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-700", icon: "text-orange-600" },
      red: { bg: "bg-red-50", border: "border-red-200", text: "text-red-700", icon: "text-red-600" },
      blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", icon: "text-blue-600" },
      green: { bg: "bg-green-50", border: "border-green-200", text: "text-green-700", icon: "text-green-600" },
      purple: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700", icon: "text-purple-600" }
    };
    return colorMap[color];
  };

  return (
    <section id="initiatives" className="py-8 md:py-12 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Our Joint Initiatives
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            District Administration of North Tripura
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {initiatives.map((initiative, index) => {
            const colors = getColorClasses(initiative.color);
            const Icon = initiative.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${colors.border}`}>
                  <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 ${colors.icon}`} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${colors.text}`}>{initiative.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{initiative.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Images Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all">
              <div className="relative overflow-hidden">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1667655861998-46fe4c29a4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzdHVkZW50cyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjA1NTE0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Indian Students Education"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              </div>
              <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50">
                <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-green-600" />
                  Free Education Programs
                </h4>
                <p className="text-muted-foreground">Empowering youth through knowledge and skills development</p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all">
              <div className="relative overflow-hidden">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1683791895200-201c0c40310f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9vZCUyMGRvbmF0aW9uJTIwSW5kaWF8ZW58MXx8fHwxNzYwNTUxNDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Blood Donation India"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              </div>
              <div className="p-6 bg-gradient-to-br from-red-50 to-pink-50">
                <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Droplet className="w-5 h-5 text-red-600" />
                  Blood Donation Drives
                </h4>
                <p className="text-muted-foreground">One drop of blood can save a life. Be a hero!</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}