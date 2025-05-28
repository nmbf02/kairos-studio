import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Instagram, Send, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-blue-med text-off-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Contacto</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Estamos aquí para responder tus preguntas, recibir tus comentarios o ayudarte a reservar nuestros espacios.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="inline-block border-b-2 border-gold pb-2 mb-4">
                <h2 className="font-serif text-3xl font-bold text-blue-med">Información de Contacto</h2>
              </div>

              <p className="text-lg text-slate-700">
                Puedes contactarnos a través del formulario o utilizando cualquiera de los siguientes medios. Estaremos
                encantados de atenderte y responder a tus consultas lo antes posible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-blue-med">Email</h3>
                    <p className="text-slate-700">info@kairosstudio.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-blue-med">Teléfono</h3>
                    <p className="text-slate-700">+34 912 345 678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-blue-med">Dirección</h3>
                    <p className="text-slate-700">
                      Calle Creatividad, 123
                      <br />
                      28001 Madrid, España
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-blue-med">Horario</h3>
                    <p className="text-slate-700">
                      Lunes a Domingo: 8:00 - 20:00
                      <br />
                      Cafetería y Tienda
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Instagram className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-blue-med">Redes Sociales</h3>
                    <div className="flex space-x-4 mt-2">
                      <Link href="https://instagram.com" className="text-slate-700 hover:text-gold transition-colors">
                        @kairosstudio
                      </Link>
                      <Link href="https://tiktok.com" className="text-slate-700 hover:text-gold transition-colors">
                        @kairosstudio
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="bg-terracotta/10 p-6 rounded-sm">
                  <h3 className="font-serif text-xl font-bold text-blue-med mb-4">¿Quieres visitar nuestro espacio?</h3>
                  <p className="text-slate-700 mb-4">
                    Te invitamos a conocer Kairós Studio en persona. Nuestra cafetería está abierta todos los días y
                    estaremos encantados de mostrarte nuestras instalaciones.
                  </p>
                  <Button asChild className="bg-gold hover:bg-gold/90 text-off-white rounded-none">
                    <Link href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                      Ver en el mapa
                      <MapPin className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-block border-b-2 border-gold pb-2 mb-8">
                <h2 className="font-serif text-3xl font-bold text-blue-med">Envíanos un Mensaje</h2>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">
                      Nombre
                    </label>
                    <Input id="name" placeholder="Tu nombre" className="rounded-none" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="tu@email.com" className="rounded-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-700">
                    Asunto
                  </label>
                  <Select>
                    <SelectTrigger className="rounded-none">
                      <SelectValue placeholder="Selecciona un asunto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">Consulta general</SelectItem>
                      <SelectItem value="reserva">Reserva de espacio</SelectItem>
                      <SelectItem value="evento">Organización de evento</SelectItem>
                      <SelectItem value="coffee-box">Kairós Coffee Box</SelectItem>
                      <SelectItem value="colaboracion">Propuesta de colaboración</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">
                    Mensaje
                  </label>
                  <Textarea id="message" placeholder="Tu mensaje" className="min-h-[150px] rounded-none" />
                </div>

                <Button type="submit" className="w-full bg-blue-med hover:bg-blue-med/90 text-off-white rounded-none">
                  Enviar mensaje
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-terracotta/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-blue-med mb-4">Preguntas Frecuentes</h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Respuestas a las preguntas más comunes sobre nuestros espacios y servicios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-off-white p-6 rounded-sm">
              <h3 className="font-serif text-xl font-bold text-blue-med mb-3">
                ¿Es necesario reservar para visitar la cafetería?
              </h3>
              <p className="text-slate-700">
                No es necesario reservar para visitar nuestra cafetería. Sin embargo, para grupos grandes o para
                asegurar mesa en horas punta, recomendamos hacer una reserva.
              </p>
            </div>

            <div className="bg-off-white p-6 rounded-sm">
              <h3 className="font-serif text-xl font-bold text-blue-med mb-3">
                ¿Cómo puedo reservar un escenario fotográfico?
              </h3>
              <p className="text-slate-700">
                Puedes reservar nuestros escenarios fotográficos a través del formulario de contacto, por teléfono o
                email. Recomendamos hacerlo con al menos 48 horas de antelación.
              </p>
            </div>

            <div className="bg-off-white p-6 rounded-sm">
              <h3 className="font-serif text-xl font-bold text-blue-med mb-3">
                ¿Ofrecéis opciones para eventos privados?
              </h3>
              <p className="text-slate-700">
                Sí, nuestro salón de eventos en la tercera planta está disponible para eventos privados como
                celebraciones, talleres o reuniones corporativas. Contáctanos para más información.
              </p>
            </div>

            <div className="bg-off-white p-6 rounded-sm">
              <h3 className="font-serif text-xl font-bold text-blue-med mb-3">
                ¿Cuál es el plazo de entrega de Kairós Coffee Box?
              </h3>
              <p className="text-slate-700">
                Para compras únicas, el plazo de entrega es de 1-3 días laborables. Las suscripciones mensuales se
                envían entre el 1 y el 5 de cada mes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-med text-off-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">¿Listo para vivir la experiencia Kairós?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Visítanos, contáctanos o sigue nuestras redes sociales para estar al día de todas nuestras novedades y
            eventos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-off-white rounded-none">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Síguenos en Instagram
                <Instagram className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-off-white text-off-white hover:bg-off-white/10 rounded-none"
            >
              <Link href="/coffee-box">Descubre Kairós Coffee Box</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
