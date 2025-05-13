import Image from "next/image"

export default function Header() {
  return (
    <header className="w-full py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="mb-3 relative group">
          <div className="absolute -inset-1 opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative">
            <Image
              src="/images/logo.png"
              alt="DhanGuru Logo"
              width={250}
              height={70}
              priority
              className="h-auto w-auto max-w-full"
            />
          </div>
        </div>
        <h2 className="text-xl font-medium animate-text-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Your Personal Finance Assistant
        </h2>
      </div>
    </header>
  )
}
