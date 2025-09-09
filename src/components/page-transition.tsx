import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation()

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.15, 
        ease: "easeOut",
        type: "tween"
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}
