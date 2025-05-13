import { Mail } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 dark:from-primary/10 dark:via-secondary/10 dark:to-accent/10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex flex-col items-center space-y-3">
            <h3 className="text-xl font-semibold text-primary dark:text-primary-foreground">Connect With Us</h3>
            <p className="text-secondary dark:text-secondary-foreground flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>support@dhanguru.co</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <SocialButton
              logoSrc="/images/linkedin-logo.svg"
              href="https://www.linkedin.com/in/dhanguru/"
              label="LinkedIn"
            />
            <SocialButton
              logoSrc="/images/youtube-logo.svg"
              href="https://www.youtube.com/@DhanGuru07"
              label="YouTube"
            />
            <SocialButton
              logoSrc="/images/instagram-logo.svg"
              href="https://www.instagram.com/_dhanguru_/"
              label="Instagram"
            />
            <SocialButton logoSrc="/images/discord-logo.svg" href="https://discord.gg/vtQ6Tvuv" label="Discord" />
          </div>

          <div className="text-center mt-6">
            <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} DhanGuru. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

interface SocialButtonProps {
  logoSrc: string
  href: string
  label: string
}

function SocialButton({ logoSrc, href, label }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group transition-all duration-300 hover:scale-110"
      aria-label={label}
    >
      <div className="w-10 h-10 relative overflow-hidden rounded-full bg-background shadow-md hover:shadow-xl transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        <div className="flex items-center justify-center w-full h-full">
          <Image src={logoSrc || "/placeholder.svg"} alt={label} width={24} height={24} className="w-5 h-5" />
        </div>
      </div>
    </a>
  )
}
