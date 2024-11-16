import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Palette, TrendingUp, Github, Twitter, Linkedin, Mail } from 'lucide-react'
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="font-bold">Portfolio.</Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#home" className="text-sm font-medium hover:text-primary">
                Home
              </Link>
              <Link href="#about" className="text-sm font-medium hover:text-primary">
                About
              </Link>
              <Link href="#skills" className="text-sm font-medium hover:text-primary">
                Skills
              </Link>
            </nav>
          </div>
          <Button asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="container py-24 space-y-8 md:space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Hello, I&apos;m Miraj Gansi
              <span className="block text-primary">Frontend Developer</span>
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Passionate about creating beautiful and functional web experiences. Specialized in modern web technologies
              and user interface design.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <Button key={i} variant="ghost" size="icon">
                  <Icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
            <Button className="w-fit">Download CV</Button>
          </div>
          <div className="relative aspect-square rounded-full bg-gradient-to-b from-primary/20 to-transparent">
            <div className="absolute inset-4 rounded-full bg-muted"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-24 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-muted to-background p-8">
            <div className="absolute inset-4 rounded-2xl bg-muted"></div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">
              About Me
              <span className="block text-primary">Frontend Developer</span>
            </h2>
            <p className="text-muted-foreground">
              With over 5 years of experience in web development, I specialize in creating responsive and performant web
              applications. I&apos;m passionate about clean code, modern design patterns, and delivering exceptional user
              experiences.
            </p>
            <Button variant="secondary">Read More</Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-24 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">My Services</h2>
          <p className="text-muted-foreground md:text-lg">Expertise I bring to your projects</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Code2,
              title: "Web Development",
              description: "Building responsive and performant web applications using modern frameworks and technologies."
            },
            {
              icon: Palette,
              title: "UI/UX Design",
              description: "Creating intuitive and beautiful user interfaces with attention to detail and user experience."
            },
            {
              icon: TrendingUp,
              title: "Digital Marketing",
              description: "Implementing SEO best practices and digital marketing strategies for better visibility."
            }
          ].map(({ icon: Icon, title, description }, i) => (
            <Card key={i} className="relative overflow-hidden">
              <CardContent className="space-y-4 p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container py-8 space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2024 Miraj Gansi. All rights reserved.</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}