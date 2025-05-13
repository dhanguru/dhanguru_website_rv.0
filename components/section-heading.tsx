interface SectionHeadingProps {
  title: string
  subtitle?: string
  alignment?: "left" | "center" | "right"
}

export function SectionHeading({ title, subtitle, alignment = "center" }: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  return (
    <div className={`mb-12 ${alignmentClasses[alignment]}`} data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
      <div
        className={`h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent mt-4 rounded-full ${
          alignment === "center" ? "mx-auto" : alignment === "right" ? "ml-auto" : ""
        }`}
      ></div>
    </div>
  )
}
