import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Palette, Coffee, Heart, Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Sobre Kairós Studio"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 md:px-6">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-off-white tracking-tight">Sobre Nosotros</h1>
            <p className="text-xl md:text-2xl text-off-white/90 font-light">Nuestra historia, misión y valores.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block border-b-2 border-gold pb-2 mb-4">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-blue-med">Nuestra Historia</h2>
              </div>
              <p className="text-lg text-slate-700">
                Kairós Studio nació de un sueño compartido: crear un espacio donde el tiempo se detiene para dar paso a
                la creatividad, la conexión y el bienestar. Fundado en 2023 por un grupo de artistas, baristas y
                emprendedores apasionados, nuestro estudio se inspira en el concepto griego de "kairós" – el momento
                oportuno, el instante perfecto.
              </p>
              <p className="text-lg text-slate-700">
                Inspirados por la belleza atemporal de la arquitectura griega e italiana, diseñamos cada rincón de
                nuestro espacio para estimular los sentidos y fomentar la expresión creativa. Desde nuestra cafetería
                artesanal hasta nuestros escenarios fotográficos y salón de eventos, cada planta de Kairós Studio está
                pensada para ofrecer una experiencia única.
              </p>
            </div>
            <div className="relative h-[500px] w-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Fundadores de Kairós Studio"
                fill
                className="object-cover rounded-sm"
              />
              <div className="absolute bottom-0 right-0 bg-gold p-4 text-off-white font-serif italic">
                Nuestros fundadores
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-terracotta/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-blue-med mb-4">Misión y Visión</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-off-white p-10 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-blue-med mb-6 text-center">Nuestra Misión</h3>
              <p className="text-lg text-slate-700">
                Crear un santuario urbano donde artistas, soñadores y amantes del café puedan encontrar inspiración,
                conexión y bienestar. Ofrecemos espacios y experiencias que estimulan la creatividad, fomentan la
                colaboración y celebran la belleza en todas sus formas.
              </p>
            </div>

            <div className="bg-off-white p-10 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-blue-med mb-6 text-center">Nuestra Visión</h3>
              <p className="text-lg text-slate-700">
                Aspiramos a convertirnos en un referente cultural que trascienda el concepto tradicional de estudio
                creativo, llevando nuestra filosofía y productos a hogares de todo el mundo a través de Kairós Coffee
                Box, mientras mantenemos nuestro espacio físico como un punto de encuentro para la comunidad creativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-blue-med mb-4">Nuestros Valores</h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Los principios que guían todo lo que hacemos en Kairós Studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-off-white border-t-4 border-gold p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <Palette className="h-12 w-12 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-blue-med mb-4 text-center">Creatividad</h3>
              <p className="text-slate-700 text-center">
                Fomentamos la expresión creativa en todas sus formas y creemos en el poder transformador del arte.
              </p>
            </div>

            <div className="bg-off-white border-t-4 border-gold p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <Heart className="h-12 w-12 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-blue-med mb-4 text-center">Bienestar</h3>
              <p className="text-slate-700 text-center">
                Creamos espacios y experiencias que nutren el cuerpo, la mente y el espíritu.
              </p>
            </div>

            <div className="bg-off-white border-t-4 border-gold p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <Sparkles className="h-12 w-12 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-blue-med mb-4 text-center">Inspiración</h3>
              <p className="text-slate-700 text-center">
                Buscamos inspirar y ser inspirados, creando momentos y espacios que despiertan la imaginación.
              </p>
            </div>

            <div className="bg-off-white border-t-4 border-gold p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <Coffee className="h-12 w-12 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-blue-med mb-4 text-center">Autenticidad</h3>
              <p className="text-slate-700 text-center">
                Valoramos lo genuino y lo artesanal, desde nuestro café hasta nuestras colaboraciones artísticas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-blue-med text-off-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Las personas apasionadas que hacen posible la magia de Kairós Studio cada día.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-80 w-full mb-6 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Miembro del equipo"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Elena Martínez</h3>
              <p className="text-gold italic mb-4">Fundadora & Directora Creativa</p>
              <p className="text-off-white/80">
                Artista visual con pasión por crear espacios que inspiran y conectan a las personas.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-80 w-full mb-6 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Miembro del equipo"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Javier López</h3>
              <p className="text-gold italic mb-4">Co-fundador & Maestro Barista</p>
              <p className="text-off-white/80">
                Experto en café con una misión: despertar los sentidos a través de la perfecta taza.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-80 w-full mb-6 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Miembro del equipo"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Sofía Ruiz</h3>
              <p className="text-gold italic mb-4">Directora de Eventos</p>
              <p className="text-off-white/80">
                Organizadora nata con un ojo para los detalles que hacen que cada evento sea inolvidable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-terracotta/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-blue-med mb-4">
            ¿Quieres formar parte de nuestra historia?
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto mb-10">
            Visítanos y descubre por qué Kairós Studio es más que un espacio: es una experiencia que transforma.
          </p>
          <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-off-white rounded-none">
            <Link href="/contact">
              Contáctanos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
