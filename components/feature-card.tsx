import type React from "react"
import { Card, CardContent } from "components/ui/card"

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  delay?: number
}

export function FeatureCard({ title, description, icon, delay = 0 }: FeatureCardProps) {
  return (
    <Card
      className="overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-primary/20 hover:scale-[1.03] border border-primary/10 dark:border-primary/20 bg-background/80 backdrop-blur-sm group"
      data-aos="fade-up"
      data-aos-delay={delay * 100}
    >
      <CardContent className="p-6 flex flex-col items-center text-center sm:items-start sm:text-left">
        <div className="mb-4 p-3 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 text-primary dark:text-primary-foreground group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2 text-primary dark:text-primary-foreground group-hover:text-accent dark:group-hover:text-accent-foreground transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}
