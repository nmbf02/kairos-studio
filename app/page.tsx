import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Coffee, Camera, CalendarDays } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"
import BlogCard from "@/components/blog-card"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Kairós Studio"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 md:px-6">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-off-white tracking-tight">
              Kairós Studio
            </h1>
            <p className="text-xl md:text-2xl text-off-white/90 font-light italic">
              Donde el arte, el café y la creatividad convergen.
            </p>
            <Button asChild size="lg" className="mt-8 bg-gold hover:bg-gold/90 text-off-white rounded-none">
              <Link href="/coffee-box">
                Descubre Kairós Coffee Box
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block border-b-2 border-gold pb-2 mb-4">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-blue-med">Sobre Nosotros</h2>
              </div>
              <p className="text-lg text-slate-700">
                Kairós Studio nace como un espacio donde el tiempo se detiene para dar paso a la creatividad y el
                bienestar. Inspirados en la belleza atemporal de la arquitectura griega e italiana, hemos creado un
                santuario para artistas, soñadores y amantes del café.
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-4 border-blue-med text-blue-med hover:bg-blue-med/10 rounded-none"
              >
                <Link href="/about">
                  Conoce nuestra historia
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Kairós Studio Interior"
                fill
                className="object-cover rounded-sm"
              />
              <div className="absolute bottom-0 right-0 bg-gold p-4 text-off-white font-serif italic">
                Un espacio para inspirar
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Preview */}
      <section className="py-20 bg-terracotta/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-blue-med mb-4">Nuestras Experiencias</h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Cada planta de Kairós Studio ofrece una experiencia única diseñada para estimular tus sentidos y despertar
              tu creatividad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-off-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <Coffee className="h-10 w-10 text-gold" />
                <span className="text-sm font-serif italic text-slate-500">Primera Planta</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-blue-med mb-4 group-hover:text-gold transition-colors duration-300">
                Cafetería & Manualidades
              </h3>
              <p className="text-slate-700 mb-6">
                Disfruta de nuestro café de especialidad mientras participas en talleres de manualidades y arte.
              </p>
              <Link
                href="/experiences#cafeteria"
                className="text-blue-med hover:text-gold flex items-center font-medium"
              >
                Explorar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-off-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <Camera className="h-10 w-10 text-gold" />
                <span className="text-sm font-serif italic text-slate-500">Segunda Planta</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-blue-med mb-4 group-hover:text-gold transition-colors duration-300">
                Escenarios Fotográficos
              </h3>
              <p className="text-slate-700 mb-6">
                Espacios diseñados para sesiones fotográficas profesionales con iluminación y decoración perfectas.
              </p>
              <Link
                href="/experiences#fotografia"
                className="text-blue-med hover:text-gold flex items-center font-medium"
              >
                Explorar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-off-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <CalendarDays className="h-10 w-10 text-gold" />
                <span className="text-sm font-serif italic text-slate-500">Tercera Planta</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-blue-med mb-4 group-hover:text-gold transition-colors duration-300">
                Salón de Eventos
              </h3>
              <p className="text-slate-700 mb-6">
                Un espacio versátil para celebraciones, exposiciones, talleres y eventos corporativos.
              </p>
              <Link href="/experiences#eventos" className="text-blue-med hover:text-gold flex items-center font-medium">
                Explorar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Box Preview */}
      <section className="py-20 bg-blue-med text-off-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative h-[500px] w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Kairós Coffee Box"
                  fill
                  className="object-cover rounded-sm"
                />
                <div className="absolute top-0 left-0 bg-gold p-4 text-off-white font-serif italic">
                  Edición Limitada
                </div>
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="inline-block border-b-2 border-gold pb-2 mb-4">
                <h2 className="font-serif text-3xl md:text-4xl font-bold">Kairós Coffee Box</h2>
              </div>
              <p className="text-lg">
                Una experiencia sensorial en una caja. Nuestro café de especialidad acompañado de productos artesanales
                cuidadosamente seleccionados para despertar tu creatividad en casa.
              </p>
              <ul className="space-y-2 mt-6">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-gold rounded-full mr-3"></div>
                  <span>Café de especialidad tostado artesanalmente</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-gold rounded-full mr-3"></div>
                  <span>Taza de cerámica hecha a mano</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-gold rounded-full mr-3"></div>
                  <span>Cuaderno de notas para inspirarte</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-gold rounded-full mr-3"></div>
                  <span>Productos sorpresa que cambian cada mes</span>
                </li>
              </ul>
              <Button asChild size="lg" className="mt-8 bg-gold hover:bg-gold/90 text-off-white rounded-none">
                <Link href="/coffee-box">
                  Comprar ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-blue-med mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Experiencias compartidas por quienes han visitado Kairós Studio y han disfrutado de nuestros espacios y
              productos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Kairós Studio se ha convertido en mi lugar favorito para trabajar. El ambiente, el café y la energía creativa son incomparables."
              author="María García"
              role="Diseñadora Gráfica"
              image="/placeholder.svg?height=200&width=200"
            />

            <TestimonialCard
              quote="Las sesiones fotográficas en sus escenarios son increíbles. La luz natural y la decoración hacen que cada foto sea especial."
              author="Carlos Rodríguez"
              role="Fotógrafo"
              image="/placeholder.svg?height=200&width=200"
            />

            <TestimonialCard
              quote="La Kairós Coffee Box es mi regalo mensual para mí misma. Cada mes me sorprenden con productos que inspiran mi creatividad."
              author="Laura Martínez"
              role="Escritora"
              image="/placeholder.svg?height=200&width=200"
            />
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-terracotta/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-blue-med mb-4">Nuestro Blog</h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Inspiración, consejos creativos y novedades sobre nuestros talleres y eventos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlogCard
              title="El arte de preparar el café perfecto"
              excerpt="Descubre los secretos para preparar una taza de café que despierte todos tus sentidos."
              date="12 Abril, 2025"
              image="/placeholder.svg?height=400&width=600"
              category="Café"
              slug="/blog/cafe-perfecto"
            />

            <BlogCard
              title="5 técnicas de acuarela para principiantes"
              excerpt="Aprende estas sencillas técnicas y comienza tu viaje en el mundo de la acuarela."
              date="5 Abril, 2025"
              image="/placeholder.svg?height=400&width=600"
              category="Arte"
              slug="/blog/tecnicas-acuarela"
            />

            <BlogCard
              title="Próximos talleres de primavera"
              excerpt="Conoce todos los talleres que tenemos preparados para esta temporada de renovación y creatividad."
              date="28 Marzo, 2025"
              image="/placeholder.svg?height=400&width=600"
              category="Eventos"
              slug="/blog/talleres-primavera"
            />
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-blue-med text-blue-med hover:bg-blue-med/10 rounded-none"
            >
              <Link href="/blog">
                Ver todos los artículos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-med text-off-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">¿Listo para vivir la experiencia Kairós?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Visítanos o contáctanos para reservar tu espacio, organizar un evento o solicitar información sobre nuestros
            productos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-off-white rounded-none">
              <Link href="/contact">Contáctanos</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-off-white text-off-white hover:bg-off-white/10 rounded-none"
            >
              <Link href="/experiences">Explorar Experiencias</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
