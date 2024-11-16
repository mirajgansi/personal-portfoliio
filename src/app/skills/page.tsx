'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Lightbulb, Rocket } from 'lucide-react'

export default function SkillsPage() {
  const skills = [
    {
      category: "Frontend Development",
      icon: Code,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      category: "UI/UX Design",
      icon: Palette,
      skills: ["Figma", "Adobe XD", "Responsive Design", "User-Centered Design"],
    },
    {
      category: "Tools & Technologies",
      icon: Lightbulb,
      skills: ["Git", "GitHub", "VS Code", "Webpack", "Jest", "Cypress"],
    },
    {
      category: "Soft Skills",
      icon: Rocket,
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Time Management"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <category.icon className="h-6 w-6" />
                <span>{category.category}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}