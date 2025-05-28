import Link from "next/link"
import { Coffee, Mail, Phone, MapPin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-med text-off-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Coffee className="h-6 w-6 text-gold" />
              <span className="font-serif text-xl font-bold">Kairós Studio</span>
            </div>
            <p className="text-off-white/80 mb-6">
              Un espacio donde el arte, el café y la creatividad convergen para crear experiencias únicas.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-off-white/80 hover:text-gold transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-off-white/80 hover:text-gold transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                  <path d="M15 8h.01" />
                  <path d="M11 16H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-3.5" />
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Enlaces</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-off-white/80 hover:text-gold transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-off-white/80 hover:text-gold transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="text-off-white/80 hover:text-gold transition-colors">
                  Experiencias
                </Link>
              </li>
              <li>
                <Link href="/coffee-box" className="text-off-white/80 hover:text-gold transition-colors">
                  Kairós Coffee Box
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-off-white/80 hover:text-gold transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Experiencias</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/experiences#cafeteria" className="text-off-white/80 hover:text-gold transition-colors">
                  Cafetería & Manualidades
                </Link>
              </li>
              <li>
                <Link href="/experiences#fotografia" className="text-off-white/80 hover:text-gold transition-colors">
                  Escenarios Fotográficos
                </Link>
              </li>
              <li>
                <Link href="/experiences#eventos" className="text-off-white/80 hover:text-gold transition-colors">
                  Salón de Eventos
                </Link>
              </li>
              <li>
                <Link href="/coffee-box" className="text-off-white/80 hover:text-gold transition-colors">
                  Kairós Coffee Box
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gold mr-3 mt-0.5" />
                <span className="text-off-white/80">info@kairosstudio.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gold mr-3 mt-0.5" />
                <span className="text-off-white/80">+34 912 345 678</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-3 mt-0.5" />
                <span className="text-off-white/80">
                  Calle Creatividad, 123
                  <br />
                  28001 Madrid, España
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-off-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-off-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Kairós Studio. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-off-white/60 text-sm hover:text-gold transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terms" className="text-off-white/60 text-sm hover:text-gold transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="/cookies" className="text-off-white/60 text-sm hover:text-gold transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
