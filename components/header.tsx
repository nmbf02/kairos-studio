"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Instagram, Coffee } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Sobre Nosotros", href: "/about" },
    { name: "Experiencias", href: "/experiences" },
    { name: "Kairós Coffee Box", href: "/coffee-box" },
    { name: "Contacto", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-off-white/95 backdrop-blur-sm shadow-sm py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Coffee
              className={cn("h-8 w-8 transition-colors duration-300", isScrolled ? "text-blue-med" : "text-off-white")}
            />
            <span
              className={cn(
                "font-serif text-xl font-bold transition-colors duration-300",
                isScrolled ? "text-blue-med" : "text-off-white",
              )}
            >
              Kairós Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "font-medium transition-colors duration-300 hover:text-gold",
                  isScrolled ? "text-slate-700" : "text-off-white",
                  pathname === item.href && "text-gold",
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link href="https://www.instagram.com/kairosstudio.rd/" target="_blank" rel="noopener noreferrer">
              <Instagram
                className={cn(
                  "h-5 w-5 transition-colors duration-300 hover:text-gold",
                  isScrolled ? "text-slate-700" : "text-off-white",
                )}
              />
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu
                  className={cn(
                    "h-6 w-6 transition-colors duration-300",
                    isScrolled ? "text-blue-med" : "text-off-white",
                  )}
                />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-off-white">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4 border-b">
                  <Link href="/" className="flex items-center space-x-2">
                    <Coffee className="h-6 w-6 text-blue-med" />
                    <span className="font-serif text-lg font-bold text-blue-med">Kairós Studio</span>
                  </Link>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5 text-slate-700" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="flex flex-col space-y-6 py-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "text-lg font-medium transition-colors duration-300 hover:text-gold",
                        pathname === item.href ? "text-gold" : "text-slate-700",
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto py-6 border-t">
                  <div className="flex items-center justify-center space-x-6">
                    <Link
                      href="https://www.instagram.com/kairosstudio.rd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 hover:text-gold transition-colors"
                    >
                      <Instagram className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                      href="https://tiktok.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 hover:text-gold transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                        <path d="M15 8h.01" />
                        <path d="M11 16H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-3.5" />
                      </svg>
                      <span className="sr-only">TikTok</span>
                    </Link>
                  </div>
                  <div className="text-center mt-6">
                    <p className="text-sm text-slate-500">© {new Date().getFullYear()} Kairós Studio</p>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
