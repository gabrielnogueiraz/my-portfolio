import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/hooks/use-theme"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"
import { HomePage } from "@/pages/HomePage"
import { AboutPage } from "@/pages/AboutPage"
import { ProjectsPage } from "@/pages/ProjectsPage"
import { ContactPage } from "@/pages/ContactPage"
import "@/i18n"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <Router>
        <div className="min-h-screen bg-background text-foreground font-mono">
          <Navigation />
          <main className="relative overflow-hidden">
            <PageTransition>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </PageTransition>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
