import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { 
  Mail, 
  Github, 
  Linkedin, 
  Send,
  CheckCircle,
  AlertCircle,
  Instagram
} from "lucide-react"
import { initEmailJS, sendEmail, type ContactFormData } from "@/lib/emailjs"
import { useTranslation } from "react-i18next"

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/gabrielnogueiraz",
    color: "hover:text-gray-900 dark:hover:text-white"
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://linkedin.com/in/gabrielnogueiraz",
    color: "hover:text-blue-600"
  },
  {
    icon: Instagram,
    name: "Instagram",
    href: "https://instagram.com/_gabrielnogueiraz",
    color: "hover:text-blue-400"
  }
]

export function ContactSection() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Inicializa o EmailJS quando o componente monta
  useEffect(() => {
    initEmailJS()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Limpa erros quando o usuário começa a digitar
    if (error) {
      setError(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    try {
      const result = await sendEmail(formData)
      
      if (result.success) {
        setIsSubmitted(true)
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({ name: "", email: "", subject: "", message: "" })
          setIsSubmitted(false)
        }, 3000)
      } else {
        setError(result.message)
      }
    } catch (err) {
      setError(t('contact.page.form.error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="pt-20 md:pt-24 pb-16 md:pb-20 bg-background">
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
            {t('contact.page.title')}
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-border hover:border-accent/50 transition-colors duration-200">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">
                    {t('contact.page.form.title')}
                  </h2>
                  
                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg"
                    >
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="h-5 w-5 text-red-500" />
                        <p className="text-red-700 dark:text-red-300 text-sm">
                          {error}
                        </p>
                      </div>
                    </motion.div>
                  )}
                  
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {t('contact.page.form.success.title')}
                      </h3>
                      <p className="text-muted-foreground">
                        {t('contact.page.form.success.message')}
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            {t('contact.page.form.name')}
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-colors duration-200"
                            placeholder={t('contact.page.form.namePlaceholder')}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            {t('contact.page.form.email')}
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-colors duration-200"
                            placeholder={t('contact.page.form.emailPlaceholder')}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          {t('contact.page.form.subject')}
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-colors duration-200"
                          placeholder={t('contact.page.form.subjectPlaceholder')}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          {t('contact.page.form.message')}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-colors duration-200 resize-none"
                          placeholder={t('contact.page.form.messagePlaceholder')}
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-foreground hover:bg-foreground/90 text-background px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 ease-in-out hover:scale-102"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                            <span>{t('contact.page.form.sending')}</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <Send className="h-5 w-5" />
                            <span>{t('contact.page.form.send')}</span>
                          </div>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  {t('contact.page.social.title')}
                </h2>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center space-x-4 p-4 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/5 transition-all duration-200 group"
                    >
                      <div className="p-2 bg-foreground/10 rounded-lg group-hover:bg-accent/10 transition-colors duration-200">
                        <link.icon className="h-6 w-6 text-foreground group-hover:text-accent transition-colors duration-200" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                          {link.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {t('contact.page.social.follow')} {link.name}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-muted/30 rounded-lg border border-border">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-foreground/10 rounded-lg">
                    <Mail className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {t('contact.page.email.title')}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  {t('contact.page.email.description')}
                </p>
                <a
                  href="mailto:gabriel.nogueira00810@gmail.com"
                  className="text-accent hover:text-accent/80 font-medium transition-colors duration-200"
                >
                  {t('contact.page.email.address')}
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}