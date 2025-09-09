import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "./ui/card";
import {
  Briefcase,
  Calendar,
  MapPin,
  Monitor,
  Server,
  Cloud,
  Wrench,
  Hand,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const getCareerData = (t: any) => [
  {
    company: "Indica Assessoria Empresarial",
    position: t('about.page.career.positions.junior'),
    period: "mai/2025 - Present",
    location: "Hibrido, Juiz De Fora, MG",
    description: t('about.page.career.descriptions.junior'),
  },
  {
    company: "Indica Assessoria Empresarial",
    position: t('about.page.career.positions.trainee'),
    period: "jan/2025 - mai/2025",
    location: "Hibrido, Juiz De Fora, MG",
    description: t('about.page.career.descriptions.trainee'),
  },
  {
    company: "Grupo Cercred",
    position: t('about.page.career.positions.support'),
    period: "2024 - 2024",
    location: "Juiz De Fora, MG",
    description: t('about.page.career.descriptions.support'),
  },
];

const getStackData = (t: any) => [
  {
    category: t('about.page.stack.categories.frontend'),
    icon: Monitor,
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "Shadcn UI",
      "Radix UI",
      "Lucide React",
    ],
  },
  {
    category: t('about.page.stack.categories.backend'),
    icon: Server,
    technologies: [
      "Node.js",
      "Python",
      "Golang",
      "TypeScript",
      "REST APIs",
      "MySQL",
      "PostgreSQL",
      "Fastify",
      "Prisma",
      "Axios",
      "JWT",
      "Bcrypt",
    ],
  },
  {
    category: t('about.page.stack.categories.cloud'),
    icon: Cloud,
    technologies: [
      "Cloudflare",
      "Vercel",
      "Railway",
      "Docker",
      "CI/CD",
      "Microservices",
      "Supabase",
      "Firebase",
    ],
  },
  {
    category: t('about.page.stack.categories.tools'),
    icon: Wrench,
    technologies: ["Git", "VS Code", "Cursor", "Jest", "IA", "Notion", "Figma"],
  },
];

export function AboutSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const careerData = getCareerData(t);
  const stackData = getStackData(t);

  return (
    <section id="about" className="pt-20 md:pt-24 pb-16 md:pb-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Page Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-12 md:mb-16"
          >
            {t('about.page.title')}
          </motion.h1>

          {/* Bloco 1: Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              {t('about.page.introduction.title')}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div className="flex items-center space-x-2">
                <Hand className="h-5 w-5 text-foreground" />
                <p>{t('about.page.introduction.greeting')}</p>
              </div>
              <p>
                {t('about.page.introduction.paragraph1')}
              </p>
              <p>
                {t('about.page.introduction.paragraph2')}
              </p>
              <p>
                {t('about.page.introduction.paragraph3')}
              </p>
              <p>
                {t('about.page.introduction.paragraph4')}
              </p>
            </div>
          </motion.div>

          {/* Bloco 2: Career */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              {t('about.page.career.title')}
            </h2>
            <div className="space-y-6">
              {careerData.map((job, index) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                >
                  <Card className="border-border hover:border-accent/50 transition-colors duration-200">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex items-start space-x-3">
                          <div className="p-2 bg-foreground/10 rounded-lg">
                            <Briefcase className="h-5 w-5 text-foreground" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">
                              {job.position}
                            </h3>
                            <p className="text-foreground/70 font-medium">
                              {job.company}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col md:items-end mt-2 md:mt-0 space-y-1">
                          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{job.period}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {job.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bloco 3: Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              {t('about.page.stack.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {stackData.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                >
                  <Card className="h-full border-border hover:border-accent/50 transition-colors duration-200">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-foreground/10 rounded-lg">
                          <category.icon className="h-5 w-5 text-foreground" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {category.category}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={
                              isInView
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0.8 }
                            }
                            transition={{
                              duration: 0.3,
                              delay: 1.4 + index * 0.1 + techIndex * 0.05,
                            }}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-foreground/5 text-foreground/80 hover:bg-foreground/10 hover:text-foreground transition-colors duration-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
