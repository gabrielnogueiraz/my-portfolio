import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react"
import { Button } from "./ui/button"
import { useTranslation } from "react-i18next"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:contato@exemplo.com", label: "Email" },
]

export function Footer() {
  const { t } = useTranslation()
  
  const quickLinks = [
    { name: t('navigation.home'), href: "#hero" },
    { name: t('navigation.about'), href: "#about" },
    { name: t('navigation.projects'), href: "#projects" },
    { name: t('navigation.contact'), href: "#contact" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-muted/30 border-t border-divider">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Portfólio
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Desenvolvedor apaixonado por criar experiências digitais excepcionais 
                através de código limpo e design elegante.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-card border border-divider hover:border-accent/50 hover:bg-accent/10 transition-all duration-200 group"
                  >
                    <link.icon className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors duration-200" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-4">
                {t('navigation.title')}
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-accent transition-colors duration-200 hover:translate-x-1 transform"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-4">
                {t('contact.info.title')}
              </h4>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  contato@exemplo.com
                </p>
                <p className="text-muted-foreground">
                  +55 (11) 99999-9999
                </p>
                <p className="text-muted-foreground">
                  São Paulo, SP - Brasil
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-divider pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <span>© 2024 Portfólio. {t('footer.built')}</span>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <span>{t('footer.by')}</span>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="group hover:bg-accent/10 transition-all duration-200"
              >
                <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform duration-200" />
                {t('common.backToTop')}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
