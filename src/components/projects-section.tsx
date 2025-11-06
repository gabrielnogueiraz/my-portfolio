import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import {
  ExternalLink,
  Github,
  Calendar,
  X,
  FileText,
  Zap,
  DollarSign,
  Server,
  QrCode,
  Film,
  Wallet,
  RotateCw,
  Mic,
  Utensils,
  Folder,
  Newspaper,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const getProjects = (t: any) => [
  {
    id: 1,
    title: t('projects.page.projects.toivo.title'),
    description: t('projects.page.projects.toivo.description'),
    image: "/assets/toivo.png",
    technologies: [
      "Vite",
      "TypeScript",
      "Node.js",
      "AI/ML",
      "PostgreSQL",
      "TailwindCSS",
    ],
    category: t('projects.page.categories.productivity'),
    year: "2025",
    liveUrl: "https://usetoivo.vercel.app",
    githubUrl: null,
    featured: true,
    icon: Zap,
    type: "product",
  },
  {
    id: 2,
    title: t('projects.page.projects.saldomais.title'),
    description: t('projects.page.projects.saldomais.description'),
    image: "/assets/saldomais.png",
    technologies: [
      "Vite",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "AI/ML",
      "TailwindCSS",
    ],
    category: t('projects.page.categories.financial'),
    year: "2025",
    liveUrl: "https://saldomais.vercel.app",
    githubUrl: null,
    featured: true,
    icon: DollarSign,
    type: "product",
  },
  {
    id: 3,
    title: t('projects.page.projects.freelCRM.title'),
    description: t('projects.page.projects.freelCRM.description'),
    image: "/assets/freelCRM.png",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Supabase",
      "TailwindCSS",
      "shadcn/ui",
      "Radix UI",
      "Zod",
      "Realtime",
    ],
    category: t('projects.page.categories.productivity'),
    year: "2025",
    liveUrl: "https://freelcrm.vercel.app/dashboard",
    githubUrl: "https://github.com/gabrielnogueiraz/FreelCRM",
    featured: true,
    icon: Server,
    type: "product",
  },
  {
    id: 4,
    title: t('projects.page.projects.afilia.title'),
    description: t('projects.page.projects.afilia.description'),
    image: "/assets/afilia.png",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "TailwindCSS",
      "Mercado Pago",
      "File Processing",
      "Data Analytics",
    ],
    category: t('projects.page.categories.financial'),
    year: "2025",
    liveUrl: "https://useafilia.vercel.app/",
    githubUrl: null,
    featured: true,
    icon: DollarSign,
    type: "product",
  },
  {
    id: 5,
    title: t('projects.page.projects.domsapon.title'),
    description: t('projects.page.projects.domsapon.description'),
    image: "/assets/domsapon.png",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Supabase",
      "Supabase Realtime",
      "TailwindCSS",
      "shadcn/ui",
      "Radix UI",
      "Lucide React",
      "Responsive Design",
    ],
    category: t('projects.page.categories.web'),
    year: "2025",
    liveUrl: "https://domsapon.vercel.app/",
    githubUrl: null,
    featured: true,
    icon: Calendar,
    type: "product",
  },
  {
    id: 6,
    title: t('projects.page.projects.smartDocumentAnalyzer.title'),
    description: t('projects.page.projects.smartDocumentAnalyzer.description'),
    image: "/assets/smartdocumentanalyzer.png",
    technologies: [
      "Angular 18",
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Groq Cloud API",
      "Llama 3",
      "TailwindCSS",
      "NgRx",
      "Angular Material",
    ],
    category: t('projects.page.categories.productivity'),
    year: "2025",
    liveUrl: "https://smartanalyzer.vercel.app/",
    githubUrl: "https://github.com/gabrielnogueiraz/smart-document-analyzer-frontend",
    featured: true,
    icon: FileText,
    type: "product",
  },
  {
    id: 7,
    title: t('projects.page.projects.echoNotes.title'),
    description: t('projects.page.projects.echoNotes.description'),
    image: "/assets/echonotess.png",
    technologies: [
      "Vite",
      "TypeScript",
      "OpenAI API",
      "Radix UI",
      "Lucide React",
      "Sonner",
      "TailwindCSS",
    ],
    category: t('projects.page.categories.productivity'),
    year: "2024",
    liveUrl: "https://echonotes-tau.vercel.app/",
    githubUrl: "https://github.com/gabrielnogueiraz/echo-notes/",
    featured: false,
    icon: Mic,
    type: "web",
  },
  {
    id: 8,
    title: t('projects.page.projects.taskMore.title'),
    description: t('projects.page.projects.taskMore.description'),
    image: "/assets/taskmore.png",
    technologies: [
      "Next.js 13",
      "TypeScript",
      "Firebase Firestore",
      "NextAuth.js",
      "Google OAuth",
      "CSS Modules",
    ],
    category: t('projects.page.categories.productivity'),
    year: "2024",
    liveUrl: "https://tasksmore.vercel.app/",
    githubUrl: "https://github.com/gabrielnogueiraz/tasks-more",
    featured: true,
    icon: Zap,
    type: "web",
  },
  {
    id: 9,
    title: t('projects.page.projects.menuOnline.title'),
    description: t('projects.page.projects.menuOnline.description'),
    image: "/assets/menuonline.png",
    technologies: ["React", "TypeScript", "TailwindCSS", "WhatsApp API"],
    category: t('projects.page.categories.ecommerce'),
    year: "2024",
    liveUrl: "https://onlinemenu-mauve.vercel.app/",
    githubUrl: "https://github.com/gabrielnogueiraz/online-menu",
    featured: false,
    icon: Utensils,
    type: "web",
  },
  {
    id: 10,
    title: t('projects.page.projects.qrCodeGenerator.title'),
    description: t('projects.page.projects.qrCodeGenerator.description'),
    image: "/assets/qrcode.png",
    technologies: ["HTML", "CSS", "JavaScript", "QR Code API"],
    category: t('projects.page.categories.web'),
    year: "2023",
    liveUrl: "https://qr-code-generator-rosy-alpha.vercel.app/",
    githubUrl: "https://github.com/gabrielnogueiraz/qr-code-generator",
    featured: false,
    icon: QrCode,
    type: "web",
  },
  {
    id: 11,
    title: t('projects.page.projects.primeFlix.title'),
    description: t('projects.page.projects.primeFlix.description'),
    image: "/assets/primeflix.png",
    technologies: [
      "React",
      "TypeScript",
      "Styled Components",
      "The Movie DB API",
    ],
    category: t('projects.page.categories.web'),
    year: "2023",
    liveUrl: "https://primeflixjs.vercel.app/",
    githubUrl:
      "https://github.com/gabrielnogueiraz/consuming-themoviedb-api-react.js",
    featured: false,
    icon: Film,
    type: "web",
  },
  {
    id: 12,
    title: t('projects.page.projects.easyFinance.title'),
    description: t('projects.page.projects.easyFinance.description'),
    image: "/assets/easyfinance.png",
    technologies: ["HTML", "CSS", "JavaScript", "Mobile First"],
    category: t('projects.page.categories.financial'),
    year: "2023",
    liveUrl: "https://easyfinance-pi.vercel.app/",
    githubUrl: "https://github.com/gabrielnogueiraz/app-finance-javascript",
    featured: false,
    icon: Wallet,
    type: "web",
  },
  {
    id: 13,
    title: t('projects.page.projects.donutAnimation.title'),
    description: t('projects.page.projects.donutAnimation.description'),
    image: "/assets/donutanimation.png",
    technologies: ["HTML", "CSS", "JavaScript", "CSS Animations"],
    category: t('projects.page.categories.web'),
    year: "2023",
    liveUrl: "https://donut-animation.vercel.app/",
    githubUrl: "https://github.com/gabrielnogueiraz/donut-animation",
    featured: false,
    icon: RotateCw,
    type: "web",
  },
  {
    id: 14,
    title: t('projects.page.projects.folderOrganizer.title'),
    description: t('projects.page.projects.folderOrganizer.description'),
    image: null,
    technologies: ["Python", "File Management", "Automation", "OS Module"],
    category: t('projects.page.categories.tools'),
    year: "2024",
    liveUrl: null,
    githubUrl: "https://github.com/gabrielnogueiraz/folder-organizer",
    featured: false,
    icon: Folder,
    type: "tool",
    hasDocumentation: true,
  },
  {
    id: 15,
    title: t('projects.page.projects.crudJs.title'),
    description: t('projects.page.projects.crudJs.description'),
    image: "/assets/crudJs.png",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    category: t('projects.page.categories.web'),
    year: "2022",
    liveUrl: "https://crudjavascript.vercel.app/",
    githubUrl: "https://github.com/gabrielnogueiraz/responsive-crud-javascript",
    featured: false,
    icon: Server,
    type: "web",
  },
  {
    id: 16,
    title: t('projects.page.projects.financeControl.title'),
    description: t('projects.page.projects.financeControl.description'),
    image: "/assets/financeControl.png",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    category: t('projects.page.categories.financial'),
    year: "2022",
    liveUrl: "https://finance-control-ruddy.vercel.app/",
    githubUrl: "https://github.com/gabrielnogueiraz/finance-control-system",
    featured: false,
    icon: DollarSign,
    type: "web",
  },
  {
    id: 17,
    title: t('projects.page.projects.calcJs.title'),
    description: t('projects.page.projects.calcJs.description'),
    image: "/assets/calcJs.png",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    category: t('projects.page.categories.web'),
    year: "2022",
    liveUrl: "https://calculator-zeta-gilt-55.vercel.app/",
    githubUrl: "https://github.com/gabrielnogueiraz/Calculator-Js",
    featured: false,
    icon: Server,
    type: "web",
  },
  {
    id: 18,
    title: t('projects.page.projects.brasilIoApi.title'),
    description: t('projects.page.projects.brasilIoApi.description'),
    image: "/src/assets/golang-restAPI.md",
    technologies: [
      "Golang",
      "REST API",
      "High Performance",
      "Docker",
      "Cache",
      "Concurrency",
    ],
    category: t('projects.page.categories.api'),
    year: "2025",
    liveUrl: null,
    githubUrl: "https://github.com/gabrielnogueiraz/Golang-RestAPI",
    featured: false,
    icon: Server,
    type: "api",
    hasDocumentation: true,
  },
  {
    id: 19,
    title: t('projects.page.projects.asyncNewsScraper.title'),
    description: t('projects.page.projects.asyncNewsScraper.description'),
    image: null,
    technologies: [
      "Python 3.11+",
      "FastAPI",
      "SQLAlchemy",
      "aiosqlite",
      "aiohttp",
      "BeautifulSoup4",
      "Pydantic",
      "Uvicorn",
    ],
    category: t('projects.page.categories.api'),
    year: "2025",
    liveUrl: null,
    githubUrl: "https://github.com/gabrielnogueiraz/async-news-scrapper",
    featured: false,
    icon: Newspaper,
    type: "api",
    hasDocumentation: true,
  },
  {
    id: 20,
    title: t('projects.page.projects.academiaBox.title'),
    description: t('projects.page.projects.academiaBox.description'),
    image: "/assets/academiabox.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "TailwindCSS",
      "shadcn/ui",
      "React Query",
      "Zod",
      "WhatsApp API"
    ],
    category: t('projects.page.categories.web'),
    year: "2025",
    liveUrl: "https://academiabox440.vercel.app/",
    githubUrl: null,
    featured: true,
    icon: Calendar,
    type: "saas",
    hasDocumentation: false
  },
];

export function ProjectsSection() {
  const { t, i18n } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedYear, setSelectedYear] = useState(t('projects.page.all'));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const projects = getProjects(t);
  
  // Gerar anos automaticamente baseado nos projetos
  const getAvailableYears = () => {
    const years = [...new Set(projects.map((project) => project.year))].sort(
      (a, b) => b.localeCompare(a)
    );
    return [t('projects.page.all'), ...years];
  };

  const years = getAvailableYears();

  // Atualizar selectedYear quando o idioma mudar
  useEffect(() => {
    setSelectedYear(t('projects.page.all'));
  }, [i18n.language, t]);

  const filteredProjects =
    selectedYear === t('projects.page.all')
      ? projects
      : projects.filter((project) => project.year === selectedYear);

  return (
    <section id="projects" className="pt-20 md:pt-24 pb-16 md:pb-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="mb-12 md:mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              {t('projects.page.title')}
            </motion.h1>
          </div>

          {/* Year Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-12 px-4"
          >
            {years.map((year) => (
              <Button
                key={year}
                variant={selectedYear === year ? "default" : "outline"}
                onClick={() => setSelectedYear(year)}
                className={`transition-all duration-200 text-sm px-3 py-2 ${
                  selectedYear === year
                    ? "bg-accent text-white hover:bg-accent/90"
                    : "hover:bg-accent/10 hover:border-accent"
                }`}
              >
                {year}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      {project.image && project.image.includes(".png") ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-4xl text-foreground">
                          <project.icon className="h-16 w-16" />
                        </div>
                      )}
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                          {t('projects.page.featured')}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex space-x-3">
                        {project.liveUrl && (
                          <Button
                            size="sm"
                            className="bg-white/90 text-black hover:bg-white"
                            onClick={() =>
                              window.open(project.liveUrl, "_blank")
                            }
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {t('projects.page.viewSite')}
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white/90 text-black hover:bg-white border-white"
                            onClick={() =>
                              window.open(project.githubUrl, "_blank")
                            }
                          >
                            <Github className="h-4 w-4 mr-2" />
                            {t('projects.page.viewCode')}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.year}
                      </span>
                      <span className="text-sm text-accent font-medium">
                        {project.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-foreground/5 text-foreground/80 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      {project.hasDocumentation ? (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-200"
                          onClick={() => {
                            setSelectedProject(project);
                            setIsModalOpen(true);
                          }}
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          {t('projects.page.viewDocumentation')}
                        </Button>
                      ) : project.liveUrl ? (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-200"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {t('projects.page.viewProject')}
                        </Button>
                      ) : null}

                      {project.githubUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="px-3 group-hover:bg-accent/10 transition-all duration-200"
                          onClick={() =>
                            window.open(project.githubUrl, "_blank")
                          }
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Documentation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-background border border-border rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      {selectedProject?.icon === Server ? (
                        <Server className="h-6 w-6 text-accent" />
                      ) : selectedProject?.icon === Newspaper ? (
                        <Newspaper className="h-6 w-6 text-accent" />
                      ) : (
                        <Folder className="h-6 w-6 text-accent" />
                      )}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {selectedProject?.title}
                      </h2>
                    <p className="text-muted-foreground">
                      {t('projects.page.viewDocumentation')}
                    </p>
                    </div>
                  </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsModalOpen(false)}
                  className="hover:bg-muted"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  {selectedProject?.title === "Brasil.io Golang REST API" ? (
                    <div>
                      <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-4">
                          🇧🇷 Brasil.IO API - High Performance Go Client
                        </h1>
                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            Go 1.21+
                          </span>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            Production Ready
                          </span>
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                            117.38 MB/s
                          </span>
                          <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                            8.74ms Response
                          </span>
                        </div>
                        <p className="text-lg text-muted-foreground">
                          🚀 Uma API REST ultra-performática em Go para consumir
                          dados públicos de gastos governamentais
                        </p>
                      </div>

                      <div className="space-y-8">
                        <section>
                          <h2 className="text-2xl font-bold mb-4">
                            🏆 Performance Excepcional
                          </h2>
                          <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-border rounded-lg">
                              <thead>
                                <tr className="bg-muted">
                                  <th className="border border-border p-3 text-left">
                                    Métrica
                                  </th>
                                  <th className="border border-border p-3 text-left">
                                    Resultado
                                  </th>
                                  <th className="border border-border p-3 text-left">
                                    Benchmark
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border border-border p-3">
                                    🚀 Throughput JSON
                                  </td>
                                  <td className="border border-border p-3 font-bold text-green-600">
                                    117.38 MB/s
                                  </td>
                                  <td className="border border-border p-3 text-green-600">
                                    &gt;100 MB/s ✅
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-border p-3">
                                    ⚡ Tempo de Resposta
                                  </td>
                                  <td className="border border-border p-3 font-bold text-green-600">
                                    8.74ms
                                  </td>
                                  <td className="border border-border p-3 text-green-600">
                                    &lt;50ms ✅
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-border p-3">
                                    💾 Gestão de Memória
                                  </td>
                                  <td className="border border-border p-3 font-bold text-green-600">
                                    8.82 MB pico
                                  </td>
                                  <td className="border border-border p-3 text-green-600">
                                    &lt;50 MB ✅
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-border p-3">
                                    🔄 Requisições/Segundo
                                  </td>
                                  <td className="border border-border p-3 font-bold text-green-600">
                                    194 RPS
                                  </td>
                                  <td className="border border-border p-3 text-green-600">
                                    &gt;50 RPS ✅
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-border p-3">
                                    ✅ Taxa de Sucesso
                                  </td>
                                  <td className="border border-border p-3 font-bold text-green-600">
                                    100%
                                  </td>
                                  <td className="border border-border p-3 text-green-600">
                                    &gt;95% ✅
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="mt-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                            <p className="font-bold text-green-800 dark:text-green-200">
                              🎯 VEREDICTO: API EXCELENTE - PRONTA PARA
                              PRODUÇÃO! (4/4)
                            </p>
                          </div>
                        </section>

                        <section>
                          <h2 className="text-2xl font-bold mb-4">
                            ✨ Características Principais
                          </h2>
                          <ul className="space-y-2">
                            <li className="flex items-start space-x-2">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>
                                <strong>Performance Extrema:</strong> 117.38
                                MB/s de throughput em parsing JSON
                              </span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>
                                <strong>Ultra Responsiva:</strong> Tempo de
                                resposta de 8.74ms
                              </span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>
                                <strong>100% Confiável:</strong> Taxa de sucesso
                                perfeita sob carga
                              </span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>
                                <strong>Eficiência de Memória:</strong> Gestão
                                otimizada com pico de apenas 8.82 MB
                              </span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>
                                <strong>Highly Concurrent:</strong> Suporta 194+
                                requisições simultâneas por segundo
                              </span>
                            </li>
                          </ul>
                        </section>

                        <section>
                          <h2 className="text-2xl font-bold mb-4">
                            🚀 Quick Start
                          </h2>
                          <div className="bg-muted p-4 rounded-lg">
                            <pre className="text-sm overflow-x-auto">
                              {`# 1. Clone o repositório
git clone https://github.com/gabrielnogueiraz/Golang-RestAPI.git
cd Golang-RestAPI

# 2. Instale dependências (Go 1.21+)
go mod download

# 3. Execute com performance otimizada
make run`}
                            </pre>
                          </div>
                        </section>

                        <section>
                          <h2 className="text-2xl font-bold mb-4">
                            📖 Endpoints da API
                          </h2>
                          <div className="space-y-4">
                            <div className="border border-border rounded-lg p-4">
                              <h3 className="font-bold mb-2">
                                🏥 Health Check Ultra-Rápido
                              </h3>
                              <code className="bg-muted px-2 py-1 rounded text-sm">
                                GET /api/v1/health
                              </code>
                              <p className="text-sm text-muted-foreground mt-1">
                                ⚡ Tempo de resposta: ~8.74ms
                              </p>
                            </div>
                            <div className="border border-border rounded-lg p-4">
                              <h3 className="font-bold mb-2">
                                💰 Consultar Gastos Governamentais
                              </h3>
                              <code className="bg-muted px-2 py-1 rounded text-sm">
                                GET
                                /api/v1/gastos?ano=2023&mes=01&orgao=presidencia-da-republica
                              </code>
                            </div>
                            <div className="border border-border rounded-lg p-4">
                              <h3 className="font-bold mb-2">
                                🏛️ Gastos por Órgão
                              </h3>
                              <code className="bg-muted px-2 py-1 rounded text-sm">
                                GET /api/v1/gastos/orgao/:orgao?ano=2023&mes=01
                              </code>
                            </div>
                          </div>
                        </section>

                        <section>
                          <h2 className="text-2xl font-bold mb-4">🔧 Deploy</h2>
                          <div className="bg-muted p-4 rounded-lg">
                            <pre className="text-sm overflow-x-auto">
                              {`# Build otimizada para produção
docker build -t brasil-io-api .

# Deploy com performance máxima
docker run -p 8080:8080 -e GO_ENV=production brasil-io-api`}
                            </pre>
                          </div>
                        </section>
                      </div>
                    </div>
                  ) : selectedProject?.title === "Async News Scraper" ? (
                    <div>
                      <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-4">
                          🚀 Async News Scraper
                        </h1>
                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            Python 3.11+
                          </span>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            FastAPI
                          </span>
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                            Async/Await
                          </span>
                          <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                            Production Ready
                          </span>
                        </div>
                        <p className="text-lg text-muted-foreground">
                          Sistema assíncrono de alto desempenho para coleta e exposição de notícias do portal G1
                        </p>
                      </div>

                      <div className="space-y-8">
                        <section>
                          <h2 className="text-2xl font-bold mb-4">
                            📋 Descrição
                          </h2>
                          <p className="text-muted-foreground">
                            O <strong>Async News Scraper</strong> é uma aplicação completa que realiza scraping de manchetes do G1 de forma assíncrona, armazena os dados em banco SQLite e expõe endpoints REST para consulta e execução de novas coletas. O projeto foi desenvolvido seguindo as melhores práticas de engenharia de software, com código limpo, tipagem estática completa e performance otimizada.
                          </p>
                        </section>

                        <section>
                          <h2 className="text-2xl font-bold mb-4">
                            🛠️ Stack Tecnológica
                          </h2>
                          <ul className="space-y-2">
                            <li className="flex items-start space-x-2">
                              <span className="text-blue-500 mt-1">•</span>
                              <span><strong>Python 3.11+</strong> - Linguagem base com recursos modernos</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-blue-500 mt-1">•</span>
                              <span><strong>FastAPI</strong> - Framework web assíncrono de alta performance</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-blue-500 mt-1">•</span>
                              <span><strong>SQLAlchemy 2.0</strong> - ORM com suporte async/await</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-blue-500 mt-1">•</span>
                              <span><strong>aiosqlite</strong> - Driver SQLite assíncrono</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-blue-500 mt-1">•</span>
                              <span><strong>aiohttp</strong> - Cliente HTTP assíncrono para scraping</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-blue-500 mt-1">•</span>
                              <span><strong>BeautifulSoup4</strong> - Parser HTML para extração de dados</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-blue-500 mt-1">•</span>
                              <span><strong>Pydantic</strong> - Validação de dados e serialização</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-blue-500 mt-1">•</span>
                              <span><strong>Uvicorn</strong> - Servidor ASGI de produção</span>
                            </li>
                          </ul>
                        </section>

                        <section>
                          <h2 className="text-2xl font-bold mb-4">
                            🏗️ Arquitetura
                          </h2>
                          <div className="bg-muted p-4 rounded-lg">
                            <pre className="text-sm overflow-x-auto">
                              {`┌─────────────┐
│   FastAPI   │  ← Camada de API (endpoints REST)
└──────┬──────┘
       │
┌──────▼──────┐
│  Scraper    │  ← Camada de serviço (lógica de negócio)
└──────┬──────┘
       │
┌──────▼──────┐
│ SQLAlchemy  │  ← Camada de persistência (ORM async)
└──────┬──────┘
       │
┌──────▼──────┐
│   SQLite    │  ← Banco de dados
└─────────────┘`}
                            </pre>
                          </div>
                        </section>

                        <section>
                          <h2 className="text-2xl font-bold mb-4">
                            ✨ Características Principais
                          </h2>
                          <ul className="space-y-2">
                            <li className="flex items-start space-x-2">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>
                                <strong>100% Assíncrono:</strong> Toda a stack utiliza async/await
                              </span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>
                                <strong>Scraping Concorrente:</strong> Múltiplas requisições paralelas
                              </span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>
                                <strong>Type Hints:</strong> Tipagem estática completa
                              </span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>
                                <strong>Clean Code:</strong> Código autoexplicativo sem comentários desnecessários
                              </span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>
                                <strong>Test Coverage:</strong> Suite completa de testes unitários e de integração
                              </span>
                            </li>
                          </ul>
                        </section>

                        <section>
                          <h2 className="text-2xl font-bold mb-4">
                            📡 Endpoints da API
                          </h2>
                          <div className="space-y-4">
                            <div className="border border-border rounded-lg p-4">
                              <h3 className="font-bold mb-2">
                                GET /
                              </h3>
                              <code className="bg-muted px-2 py-1 rounded text-sm">
                                Informações básicas do serviço
                              </code>
                              <div className="mt-2 bg-muted p-3 rounded text-sm">
                                <pre>{`{
  "service": "Async News Scraper",
  "status": "running",
  "endpoints": ["/news", "/scrape"]
}`}</pre>
                              </div>
                            </div>
                            <div className="border border-border rounded-lg p-4">
                              <h3 className="font-bold mb-2">
                                GET /news
                              </h3>
                              <code className="bg-muted px-2 py-1 rounded text-sm">
                                Retorna todas as notícias armazenadas
                              </code>
                              <p className="text-sm text-muted-foreground mt-2">
                                Query Parameters: limit (default: 100), offset (default: 0)
                              </p>
                            </div>
                            <div className="border border-border rounded-lg p-4">
                              <h3 className="font-bold mb-2">
                                POST /scrape
                              </h3>
                              <code className="bg-muted px-2 py-1 rounded text-sm">
                                Executa uma nova coleta de notícias do G1
                              </code>
                              <div className="mt-2 bg-muted p-3 rounded text-sm">
                                <pre>{`{
  "success": true,
  "news_added": 15,
  "message": "Successfully scraped..."
}`}</pre>
                              </div>
                            </div>
                            <div className="border border-border rounded-lg p-4">
                              <h3 className="font-bold mb-2">
                                GET /health
                              </h3>
                              <code className="bg-muted px-2 py-1 rounded text-sm">
                                Health check do serviço
                              </code>
                            </div>
                          </div>
                        </section>

                        <section>
                          <h2 className="text-2xl font-bold mb-4">
                            🚀 Como Executar
                          </h2>
                          <div className="bg-muted p-4 rounded-lg">
                            <pre className="text-sm overflow-x-auto">
                              {`# 1. Clone o repositório
git clone <repository-url>
cd async-news-scrapper

# 2. Crie um ambiente virtual
python -m venv venv
source venv/bin/activate  # Linux/Mac
# ou
venv\\Scripts\\activate     # Windows

# 3. Instale as dependências
pip install -r requirements.txt

# 4. Execute a aplicação
python -m src.main

# Ou diretamente com uvicorn:
uvicorn src.api:app --reload --host 0.0.0.0 --port 8000`}
                            </pre>
                          </div>
                        </section>

                        <section>
                          <h2 className="text-2xl font-bold mb-4">
                            🧪 Executar Testes
                          </h2>
                          <div className="bg-muted p-4 rounded-lg">
                            <pre className="text-sm overflow-x-auto">
                              {`# Execute a suite completa de testes
pytest

# Com cobertura de código
pytest --cov=src --cov-report=html

# Testar apenas a API
pytest tests/test_api.py

# Testar apenas o scraper
pytest tests/test_scraper.py`}
                            </pre>
                          </div>
                        </section>

                        <section>
                          <h2 className="text-2xl font-bold mb-4">
                            🐳 Execução com Docker
                          </h2>
                          <div className="bg-muted p-4 rounded-lg">
                            <pre className="text-sm overflow-x-auto">
                              {`# Build da imagem
docker build -t async-news-scraper .

# Execute o container
docker run -d -p 8000:8000 --name news-scraper async-news-scraper

# Acesse a aplicação
http://localhost:8000`}
                            </pre>
                          </div>
                        </section>

                        <section>
                          <h2 className="text-2xl font-bold mb-4">
                            📁 Estrutura do Projeto
                          </h2>
                          <div className="bg-muted p-4 rounded-lg">
                            <pre className="text-sm">
                              {`async-news-scrapper/
├── src/
│   ├── api.py              # Endpoints FastAPI
│   ├── db.py               # Configuração do banco async
│   ├── main.py             # Entry point da aplicação
│   ├── models.py           # Modelos SQLAlchemy
│   ├── schemas.py          # Schemas Pydantic
│   └── scrapper/
│       ├── __init__.py
│       └── news_scrapper.py # Lógica de scraping
├── tests/
│   ├── __init__.py
│   ├── conftest.py         # Configuração de fixtures
│   ├── test_api.py         # Testes dos endpoints
│   ├── test_scraper.py     # Testes do scraper
│   └── test_models.py      # Testes dos models
├── requirements.txt        # Dependências Python
├── pytest.ini             # Configuração do pytest
├── Dockerfile             # Container Docker
├── .env.example           # Variáveis de ambiente
├── .gitignore
└── README.md`}
                            </pre>
                          </div>
                        </section>

                        <section>
                          <h2 className="text-2xl font-bold mb-4">
                            🔍 Documentação Interativa
                          </h2>
                          <p className="text-muted-foreground mb-2">
                            Acesse a documentação automática da API:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start space-x-2">
                              <span className="text-blue-500 mt-1">•</span>
                              <span><strong>Swagger UI:</strong> http://localhost:8000/docs</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-blue-500 mt-1">•</span>
                              <span><strong>ReDoc:</strong> http://localhost:8000/redoc</span>
                            </li>
                          </ul>
                        </section>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-4">
                          📂 Folder Organizer - Python Script
                        </h1>
                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            Python 3.x
                          </span>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                            File Management
                          </span>
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                            Automation
                          </span>
                          <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                            Cross Platform
                          </span>
                        </div>
                        <p className="text-lg text-muted-foreground">
                          🚀 Script Python para organizar arquivos
                          automaticamente por extensão
                        </p>
                      </div>

                      <div className="space-y-8">
                        <section>
                          <h2 className="text-2xl font-bold mb-4">
                            🎯 Funcionalidades
                          </h2>
                          <ul className="space-y-2">
                            <li className="flex items-start space-x-2">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>
                                <strong>Identificação Automática:</strong>{" "}
                                Detecta a extensão de cada arquivo na pasta
                              </span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>
                                <strong>Organização Inteligente:</strong> Move
                                arquivos para subpastas baseadas na extensão
                              </span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>
                                <strong>Tratamento de Exceções:</strong>{" "}
                                Arquivos sem extensão vão para pasta especial
                              </span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>
                                <strong>Prevenção de Duplicatas:</strong> Evita
                                conflitos e duplicação de arquivos
                              </span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>
                                <strong>Eficiência:</strong> Organiza diretórios
                                de forma rápida e automática
                              </span>
                            </li>
                          </ul>
                        </section>

                        <section>
                          <h2 className="text-2xl font-bold mb-4">
                            🚀 Como Usar
                          </h2>
                          <div className="bg-muted p-4 rounded-lg">
                            <pre className="text-sm overflow-x-auto">
                              {`# 1. Clone o repositório
git clone https://github.com/gabrielnogueiraz/folder-organizer.git
cd folder-organizer

# 2. Edite o caminho da pasta
# Abra organizador.py e altere:
pasta_origem = "/caminho/para/sua/pasta"

# 3. Execute o script
python organizador.py`}
                            </pre>
                          </div>
                        </section>

                        <section>
                          <h2 className="text-2xl font-bold mb-4">
                            💻 Exemplo de Funcionamento
                          </h2>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h3 className="font-bold mb-2">Antes:</h3>
                              <div className="bg-muted p-4 rounded-lg">
                                <pre className="text-sm">
                                  {`/arquivos
  documento1.txt
  foto1.jpg
  foto2.png
  script.py
  relatorio`}
                                </pre>
                              </div>
                            </div>
                            <div>
                              <h3 className="font-bold mb-2">Depois:</h3>
                              <div className="bg-muted p-4 rounded-lg">
                                <pre className="text-sm">
                                  {`/arquivos
  /txt
    documento1.txt
  /jpg
    foto1.jpg
  /png
    foto2.png
  /py
    script.py
  /sem_extensao
    relatorio`}
                                </pre>
                              </div>
                            </div>
                          </div>
                        </section>

                        <section>
                          <h2 className="text-2xl font-bold mb-4">
                            🛠️ Requisitos
                          </h2>
                          <ul className="space-y-2">
                            <li className="flex items-start space-x-2">
                              <span className="text-blue-500 mt-1">•</span>
                              <span>Python 3.x instalado no sistema</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-blue-500 mt-1">•</span>
                              <span>
                                Permissões de leitura, escrita e movimentação na
                                pasta alvo
                              </span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <span className="text-blue-500 mt-1">•</span>
                              <span>
                                Bibliotecas padrão do Python (os, shutil)
                              </span>
                            </li>
                          </ul>
                        </section>

                        <section>
                          <h2 className="text-2xl font-bold mb-4">
                            📂 Estrutura do Projeto
                          </h2>
                          <div className="bg-muted p-4 rounded-lg">
                            <pre className="text-sm">
                              {`folder-organizer/
├── README.md       # Documentação do projeto
├── organizador.py  # Código principal do script
└── .gitignore     # Arquivos ignorados pelo Git`}
                            </pre>
                          </div>
                        </section>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
