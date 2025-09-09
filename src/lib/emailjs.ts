import emailjs from '@emailjs/browser'

// Configurações do EmailJS
export const EMAILJS_CONFIG = {
  serviceId: "service_b3n27bj",
  templateId: "template_czy8aia", 
  publicKey: "0LEecnHjaEbktfjes"
} as const

// Inicializa o EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.publicKey)
}

// Interface para os dados do formulário
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

// Função para enviar email
export const sendEmail = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Validação básica dos dados
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      throw new Error('Todos os campos são obrigatórios')
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      throw new Error('Email inválido')
    }

    // Prepara os parâmetros para o template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Gabriel Nogueira'
    }

    // Envia o email
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    )

    if (response.status === 200) {
      return {
        success: true,
        message: 'Email enviado com sucesso!'
      }
    } else {
      throw new Error('Falha ao enviar email')
    }
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    
    // Retorna mensagens de erro mais amigáveis
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message
      }
    }
    
    return {
      success: false,
      message: 'Erro inesperado ao enviar email. Tente novamente.'
    }
  }
}
