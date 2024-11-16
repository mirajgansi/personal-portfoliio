'use client'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from 'lucide-react'
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Miraj Gansi</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Miraj Gansi"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">
            Hello! I'm Miraj Gansi, a passionate frontend developer with over 5 years of experience in creating
            beautiful and functional web experiences. I specialize in modern web technologies and user interface design,
            always striving to deliver exceptional results for my clients.
          </p>
          <p className="text-lg text-muted-foreground">
            My journey in web development started with a fascination for how things work on the internet. Since then,
            I've honed my skills in HTML, CSS, JavaScript, and various frontend frameworks. I'm particularly adept at
            React and Next.js, and I love exploring new technologies to stay at the cutting edge of web development.
          </p>
          <p className="text-lg text-muted-foreground">
            When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or
            sharing my knowledge through blog posts and community events.
          </p>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}