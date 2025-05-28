import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Coffee, Camera, CalendarDays, Clock, Users, MapPin } from "lucide-react"

export default function ExperiencesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Experiencias en Kairós Studio"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 md:px-6">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-off-white tracking-tight">
              Nuestras Experiencias
            </h1>
            <p className="text-xl md:text-2xl text-off-white/90 font-light">
              Descubre los espacios y actividades que hacen único a Kairós Studio.
            </p>
          </div>
        </div>
      </section>

      {/* First Floor - Cafetería & Manualidades */}
      <section id="cafeteria" className="py-20 bg-off-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 mb-4">
                <Coffee className="h-6 w-6 text-gold" />
                <span className="text-sm font-serif italic text-slate-500">Primera Planta</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-blue-med">Cafetería & Manualidades</h2>
              <p className="text-lg text-slate-700">
                Nuestra cafetería es el corazón de Kairós Studio. Un espacio acogedor donde disfrutar de café de
                especialidad mientras participas en talleres de manualidades o simplemente te relajas con un buen libro.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="flex flex-col items-center p-4 bg-terracotta/10 rounded-sm">
                  <Clock className="h-6 w-6 text-gold mb-2" />
                  <span className="text-blue-med font-medium">Horario</span>
                  <span className="text-sm text-slate-600 text-center">Lun-Dom: 8:00 - 20:00</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-terracotta/10 rounded-sm">
                  <Users className="h-6 w-6 text-gold mb-2" />
                  <span className="text-blue-med font-medium">Capacidad</span>
                  <span className="text-sm text-slate-600 text-center">40 personas</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-terracotta/10 rounded-sm">
                  <MapPin className="h-6 w-6 text-gold mb-2" />
                  <span className="text-blue-med font-medium">Ubicación</span>
                  <span className="text-sm text-slate-600 text-center">Primera planta</span>
                </div>
              </div>
              <Button asChild className="mt-6 bg-gold hover:bg-gold/90 text-off-white rounded-none">
                <Link href="/contact?subject=Reserva%20Cafetería">
                  Reservar espacio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[500px] w-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Cafetería Kairós Studio"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="font-serif text-2xl font-bold text-blue-med mb-6">Talleres y Actividades</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-off-white border border-terracotta/20 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="font-serif text-xl font-bold text-blue-med mb-3">Taller de Acuarela</h4>
                <p className="text-slate-700 mb-4">
                  Aprende técnicas básicas y avanzadas de pintura con acuarela en un ambiente relajado y creativo.
                </p>
                <div className="flex justify-between text-sm text-slate-500 italic mb-4">
                  <span>Sábados 11:00</span>
                  <span>90 minutos</span>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-blue-med text-blue-med hover:bg-blue-med/10 rounded-none"
                >
                  <Link href="/contact?subject=Taller%20Acuarela">Más información</Link>
                </Button>
              </div>

              <div className="bg-off-white border border-terracotta/20 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="font-serif text-xl font-bold text-blue-med mb-3">Cata de Café</h4>
                <p className="text-slate-700 mb-4">
                  Descubre los secretos del café de especialidad y aprende a distinguir sus notas y características.
                </p>
                <div className="flex justify-between text-sm text-slate-500 italic mb-4">
                  <span>Viernes 18:00</span>
                  <span>60 minutos</span>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-blue-med text-blue-med hover:bg-blue-med/10 rounded-none"
                >
                  <Link href="/contact?subject=Cata%20Café">Más información</Link>
                </Button>
              </div>

              <div className="bg-off-white border border-terracotta/20 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="font-serif text-xl font-bold text-blue-med mb-3">Caligrafía Moderna</h4>
                <p className="text-slate-700 mb-4">
                  Aprende el arte de la caligrafía moderna y crea tus propias piezas decorativas y tarjetas.
                </p>
                <div className="flex justify-between text-sm text-slate-500 italic mb-4">
                  <span>Domingos 12:00</span>
                  <span>120 minutos</span>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-blue-med text-blue-med hover:bg-blue-med/10 rounded-none"
                >
                  <Link href="/contact?subject=Taller%20Caligrafía">Más información</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Floor - Escenarios Fotográficos */}
      <section id="fotografia" className="py-20 bg-terracotta/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] w-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Escenarios Fotográficos Kairós Studio"
                fill
                className="object-cover rounded-sm"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center space-x-3 mb-4">
                <Camera className="h-6 w-6 text-gold" />
                <span className="text-sm font-serif italic text-slate-500">Segunda Planta</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-blue-med">Escenarios Fotográficos</h2>
              <p className="text-lg text-slate-700">
                Espacios diseñados para sesiones fotográficas profesionales con iluminación natural y decoración
                cuidadosamente seleccionada. Perfectos para fotógrafos, creadores de contenido y marcas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="flex flex-col items-center p-4 bg-off-white rounded-sm">
                  <Clock className="h-6 w-6 text-gold mb-2" />
                  <span className="text-blue-med font-medium">Horario</span>
                  <span className="text-sm text-slate-600 text-center">Lun-Dom: 9:00 - 19:00</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-off-white rounded-sm">
                  <Users className="h-6 w-6 text-gold mb-2" />
                  <span className="text-blue-med font-medium">Capacidad</span>
                  <span className="text-sm text-slate-600 text-center">10 personas por set</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-off-white rounded-sm">
                  <MapPin className="h-6 w-6 text-gold mb-2" />
                  <span className="text-blue-med font-medium">Ubicación</span>
                  <span className="text-sm text-slate-600 text-center">Segunda planta</span>
                </div>
              </div>
              <Button asChild className="mt-6 bg-gold hover:bg-gold/90 text-off-white rounded-none">
                <Link href="/contact?subject=Reserva%20Escenario%20Fotográfico">
                  Reservar espacio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="font-serif text-2xl font-bold text-blue-med mb-6">Nuestros Sets</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-off-white overflow-hidden shadow-sm group">
                <div className="relative h-64 w-full">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Set Mediterráneo"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-serif text-xl font-bold text-blue-med mb-3">Set Mediterráneo</h4>
                  <p className="text-slate-700 mb-4">
                    Inspirado en la costa mediterránea con tonos azules, blancos y texturas naturales.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-blue-med text-blue-med hover:bg-blue-med/10 rounded-none"
                  >
                    <Link href="/contact?subject=Set%20Mediterráneo">Reservar</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-off-white overflow-hidden shadow-sm group">
                <div className="relative h-64 w-full">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Set Clásico"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-serif text-xl font-bold text-blue-med mb-3">Set Clásico</h4>
                  <p className="text-slate-700 mb-4">
                    Elegancia atemporal con elementos arquitectónicos griegos y romanos.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-blue-med text-blue-med hover:bg-blue-med/10 rounded-none"
                  >
                    <Link href="/contact?subject=Set%20Clásico">Reservar</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-off-white overflow-hidden shadow-sm group">
                <div className="relative h-64 w-full">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Set Minimalista"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-serif text-xl font-bold text-blue-med mb-3">Set Minimalista</h4>
                  <p className="text-slate-700 mb-4">
                    Líneas limpias, espacios abiertos y luz natural para resaltar el sujeto principal.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-blue-med text-blue-med hover:bg-blue-med/10 rounded-none"
                  >
                    <Link href="/contact?subject=Set%20Minimalista">Reservar</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Floor - Salón de Eventos */}
      <section id="eventos" className="py-20 bg-off-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 mb-4">
                <CalendarDays className="h-6 w-6 text-gold" />
                <span className="text-sm font-serif italic text-slate-500">Tercera Planta</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-blue-med">Salón de Eventos</h2>
              <p className="text-lg text-slate-700">
                Un espacio versátil y elegante para celebraciones, exposiciones, talleres y eventos corporativos. Con
                vistas panorámicas y equipamiento audiovisual de última generación.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="flex flex-col items-center p-4 bg-terracotta/10 rounded-sm">
                  <Clock className="h-6 w-6 text-gold mb-2" />
                  <span className="text-blue-med font-medium">Horario</span>
                  <span className="text-sm text-slate-600 text-center">Según reserva</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-terracotta/10 rounded-sm">
                  <Users className="h-6 w-6 text-gold mb-2" />
                  <span className="text-blue-med font-medium">Capacidad</span>
                  <span className="text-sm text-slate-600 text-center">100 personas</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-terracotta/10 rounded-sm">
                  <MapPin className="h-6 w-6 text-gold mb-2" />
                  <span className="text-blue-med font-medium">Ubicación</span>
                  <span className="text-sm text-slate-600 text-center">Tercera planta</span>
                </div>
              </div>
              <Button asChild className="mt-6 bg-gold hover:bg-gold/90 text-off-white rounded-none">
                <Link href="/contact?subject=Reserva%20Salón%20Eventos">
                  Solicitar información
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[500px] w-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Salón de Eventos Kairós Studio"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="font-serif text-2xl font-bold text-blue-med mb-6">Tipos de Eventos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-off-white border-t-4 border-gold p-6 shadow-sm">
                <h4 className="font-serif text-xl font-bold text-blue-med mb-3">Exposiciones</h4>
                <p className="text-slate-700">
                  Espacio ideal para artistas que deseen exponer su obra en un ambiente elegante y acogedor.
                </p>
              </div>

              <div className="bg-off-white border-t-4 border-gold p-6 shadow-sm">
                <h4 className="font-serif text-xl font-bold text-blue-med mb-3">Talleres</h4>
                <p className="text-slate-700">
                  Perfecto para impartir talleres creativos, conferencias o presentaciones con todas las comodidades.
                </p>
              </div>

              <div className="bg-off-white border-t-4 border-gold p-6 shadow-sm">
                <h4 className="font-serif text-xl font-bold text-blue-med mb-3">Celebraciones</h4>
                <p className="text-slate-700">
                  Celebra momentos especiales en un entorno único con servicio de catering personalizado.
                </p>
              </div>

              <div className="bg-off-white border-t-4 border-gold p-6 shadow-sm">
                <h4 className="font-serif text-xl font-bold text-blue-med mb-3">Corporativos</h4>
                <p className="text-slate-700">
                  Reuniones, presentaciones y eventos de empresa en un ambiente inspirador y diferente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-med text-off-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">¿Listo para vivir la experiencia Kairós?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Contáctanos para reservar tu espacio, organizar un evento o solicitar más información sobre nuestras
            experiencias.
          </p>
          <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-off-white rounded-none">
            <Link href="/contact">
              Contáctanos ahora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
