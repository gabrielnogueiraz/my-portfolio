import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button"
import { useTranslation } from "react-i18next"

export function HeroSection() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const goToProjects = () => {
    navigate("/projects")
  }

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden hero-pattern pt-20 md:pt-24"
    >
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[0.5px]" />
      
      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-tight font-mono"
            >
              {t('hero.greeting')}
              <br />
              {t('hero.name')}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-mono px-4"
            >
              {t('hero.description')}
            </motion.p>

            {/* CTA Button and Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg transition-all duration-200 ease-in-out hover:scale-102 font-mono w-full sm:w-auto"
                onClick={goToProjects}
              >
                {t('hero.cta')}
              </Button>
              
              {/* Social Icons */}
              <div className="flex gap-3 sm:gap-4">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 sm:p-3 rounded-lg bg-card border border-border hover:bg-accent/10 hover:border-accent transition-all duration-200 group"
                >
                  <Github className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground group-hover:text-accent transition-colors duration-200" />
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 sm:p-3 rounded-lg bg-card border border-border hover:bg-accent/10 hover:border-accent transition-all duration-200 group"
                >
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground group-hover:text-accent transition-colors duration-200" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
