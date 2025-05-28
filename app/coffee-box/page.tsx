import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check, Package, Coffee, Gift } from "lucide-react"

export default function CoffeeBoxPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Kairós Coffee Box"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 md:px-6">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-off-white tracking-tight">
              Kairós Coffee Box
            </h1>
            <p className="text-xl md:text-2xl text-off-white/90 font-light">
              Una experiencia sensorial en una caja. Lleva la esencia de Kairós Studio a tu hogar.
            </p>
            <Button asChild size="lg" className="mt-4 bg-gold hover:bg-gold/90 text-off-white rounded-none">
              <Link href="#comprar">
                Comprar ahora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block border-b-2 border-gold pb-2 mb-4">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-blue-med">¿Qué es Kairós Coffee Box?</h2>
              </div>
              <p className="text-lg text-slate-700">
                Kairós Coffee Box es nuestra propuesta para llevar la experiencia Kairós Studio a tu hogar. Una caja
                cuidadosamente diseñada que contiene nuestro café de especialidad junto con productos artesanales
                seleccionados para despertar tu creatividad y tus sentidos.
              </p>
              <p className="text-lg text-slate-700">
                Cada mes, creamos una nueva edición con productos diferentes, siempre manteniendo la esencia de Kairós:
                calidad, belleza y creatividad. Es el regalo perfecto para ti o para alguien especial.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-blue-med">Edición Limitada</h3>
                    <p className="text-sm text-slate-600">Cada mes creamos una edición única y limitada</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-blue-med">Productos Artesanales</h3>
                    <p className="text-sm text-slate-600">Colaboramos con artesanos y pequeños productores</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-blue-med">Envío a Domicilio</h3>
                    <p className="text-sm text-slate-600">Recibe tu caja directamente en tu puerta</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-blue-med">Suscripción Flexible</h3>
                    <p className="text-sm text-slate-600">Elige entre compra única o suscripción mensual</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] w-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Kairós Coffee Box"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Box Contents */}
      <section className="py-20 bg-terracotta/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-blue-med mb-4">¿Qué incluye la caja?</h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Cada Kairós Coffee Box contiene una selección de productos premium que varían cada mes, pero siempre
              incluyen estos elementos esenciales:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-off-white p-8 shadow-sm text-center">
              <div className="flex justify-center mb-6">
                <Coffee className="h-12 w-12 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-blue-med mb-4">Café de Especialidad</h3>
              <p className="text-slate-700">
                250g de nuestro café de especialidad, tostado artesanalmente la semana de envío para garantizar
                frescura.
              </p>
            </div>

            <div className="bg-off-white p-8 shadow-sm text-center">
              <div className="flex justify-center mb-6">
                <div className="h-12 w-12 rounded-full bg-gold flex items-center justify-center text-off-white font-serif text-xl">
                  C
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-blue-med mb-4">Cerámica Artesanal</h3>
              <p className="text-slate-700">
                Una pieza de cerámica hecha a mano por artesanos locales: taza, plato o accesorio para tu café.
              </p>
            </div>

            <div className="bg-off-white p-8 shadow-sm text-center">
              <div className="flex justify-center mb-6">
                <div className="h-12 w-12 rounded-full bg-gold flex items-center justify-center text-off-white font-serif text-xl">
                  A
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-blue-med mb-4">Arte & Papelería</h3>
              <p className="text-slate-700">
                Un cuaderno, print artístico o material creativo para inspirar tus momentos de café.
              </p>
            </div>

            <div className="bg-off-white p-8 shadow-sm text-center">
              <div className="flex justify-center mb-6">
                <Gift className="h-12 w-12 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-blue-med mb-4">Sorpresa del Mes</h3>
              <p className="text-slate-700">
                Un producto especial que cambia cada mes: dulces artesanales, velas aromáticas, accesorios...
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-slate-700 max-w-2xl mx-auto mb-8 italic">
              "Cada Kairós Coffee Box está diseñada para crear un momento de pausa, un kairós en tu día a día, donde
              puedas conectar contigo mismo y con tu creatividad a través de una experiencia sensorial completa."
            </p>
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-off-white rounded-none">
              <Link href="#edicion-actual">
                Ver la edición de este mes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Current Edition */}
      <section id="edicion-actual" className="py-20 bg-off-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block border-b-2 border-gold pb-2 mb-4">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-blue-med">Edición Actual: Primavera</h2>
            </div>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Nuestra edición de primavera celebra el renacer de la naturaleza con productos que evocan frescura y
              creatividad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Café de Especialidad"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Taza de Cerámica"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Cuaderno Artesanal"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Vela Aromática"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-blue-med">Contenido de la Edición Primavera</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-gold flex items-center justify-center text-off-white font-medium text-sm flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-med">Café Flor de Primavera</h4>
                    <p className="text-slate-700">
                      Blend especial con notas florales y cítricas, tostado medio. 250g de granos enteros.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-gold flex items-center justify-center text-off-white font-medium text-sm flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-med">Taza de Cerámica "Amanecer"</h4>
                    <p className="text-slate-700">
                      Taza artesanal en tonos terracota con detalles en azul, hecha a mano por ceramistas locales.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-gold flex items-center justify-center text-off-white font-medium text-sm flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-med">Cuaderno de Acuarela</h4>
                    <p className="text-slate-700">
                      Pequeño cuaderno con papel de acuarela y una guía de técnicas básicas para principiantes.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-gold flex items-center justify-center text-off-white font-medium text-sm flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-med">Vela Aromática "Jardín Mediterráneo"</h4>
                    <p className="text-slate-700">
                      Vela artesanal con aromas de jazmín y cítricos, perfecta para acompañar tus momentos creativos.
                    </p>
                  </div>
                </li>
              </ul>
              <p className="text-sm text-slate-500 italic">
                * La edición Primavera está disponible hasta agotar existencias o hasta el cambio de temporada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Purchase */}
      <section id="comprar" className="py-20 bg-blue-med text-off-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Adquiere tu Kairós Coffee Box</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Elige entre compra única o suscripción mensual y disfruta de la experiencia Kairós en tu hogar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-off-white text-slate-900 p-8 rounded-sm shadow-sm">
              <div className="text-center mb-6">
                <h3 className="font-serif text-2xl font-bold text-blue-med">Compra Única</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold">39,90€</span>
                </div>
                <p className="text-slate-600 mb-6">Prueba la experiencia Kairós Coffee Box sin compromiso.</p>
                <Button className="w-full bg-gold hover:bg-gold/90 text-off-white rounded-none">Comprar ahora</Button>
              </div>
              <div className="border-t border-slate-200 pt-6 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-gold mr-2" />
                    <span>Edición actual: Primavera</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-gold mr-2" />
                    <span>Envío gratuito</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-gold mr-2" />
                    <span>Sin compromiso de permanencia</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-gold mr-2" />
                    <span>Ideal como regalo</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-off-white text-slate-900 p-8 rounded-sm shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gold text-off-white py-1 px-4 text-sm font-medium">
                Recomendado
              </div>
              <div className="text-center mb-6">
                <h3 className="font-serif text-2xl font-bold text-blue-med">Suscripción Mensual</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold">34,90€</span>
                  <span className="text-slate-500">/mes</span>
                </div>
                <p className="text-slate-600 mb-6">Recibe una nueva edición cada mes y ahorra en cada envío.</p>
                <Button className="w-full bg-blue-med hover:bg-blue-med/90 text-off-white rounded-none">
                  Suscribirme
                </Button>
              </div>
              <div className="border-t border-slate-200 pt-6 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-gold mr-2" />
                    <span>Una nueva edición cada mes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-gold mr-2" />
                    <span>Envío gratuito</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-gold mr-2" />
                    <span>Cancela cuando quieras</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-gold mr-2" />
                    <span>Acceso prioritario a ediciones limitadas</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-gold mr-2" />
                    <span>15% de descuento en productos adicionales</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-off-white/80 max-w-2xl mx-auto mb-6">
              ¿Tienes alguna pregunta sobre Kairós Coffee Box? Contáctanos y estaremos encantados de ayudarte.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-off-white text-off-white hover:bg-off-white/10 rounded-none"
            >
              <Link href="/contact?subject=Consulta%20Coffee%20Box">
                Contactar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
              Experiencias compartidas por quienes disfrutan de Kairós Coffee Box cada mes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-terracotta/10 p-8 rounded-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-slate-700 mb-6 italic">
                "Recibir mi Kairós Coffee Box cada mes es como un regalo para mí misma. La calidad del café es
                excepcional y los productos que lo acompañan siempre son una sorpresa encantadora."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="h-10 w-10 rounded-full bg-blue-med/20 flex items-center justify-center text-blue-med font-serif">
                    L
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-blue-med">Laura Martínez</h4>
                  <p className="text-sm text-slate-500">Suscriptora desde hace 6 meses</p>
                </div>
              </div>
            </div>

            <div className="bg-terracotta/10 p-8 rounded-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-slate-700 mb-6 italic">
                "Regalé una suscripción a mi pareja y ha sido el mejor regalo que le he hecho. Cada mes esperamos con
                ilusión la nueva caja y disfrutamos juntos de todo su contenido."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="h-10 w-10 rounded-full bg-blue-med/20 flex items-center justify-center text-blue-med font-serif">
                    C
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-blue-med">Carlos Rodríguez</h4>
                  <p className="text-sm text-slate-500">Compró como regalo</p>
                </div>
              </div>
            </div>

            <div className="bg-terracotta/10 p-8 rounded-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-slate-700 mb-6 italic">
                "Como amante del café y del diseño, Kairós Coffee Box es perfecta para mí. La curaduría de productos es
                exquisita y el café siempre es de primera calidad. ¡No puedo esperar a ver qué incluirá la próxima
                edición!"
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="h-10 w-10 rounded-full bg-blue-med/20 flex items-center justify-center text-blue-med font-serif">
                    M
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-blue-med">Miguel Sánchez</h4>
                  <p className="text-sm text-slate-500">Suscriptor desde el inicio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-terracotta/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-blue-med mb-4">Preguntas Frecuentes</h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">Resolvemos tus dudas sobre Kairós Coffee Box.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-off-white p-6 rounded-sm">
              <h3 className="font-serif text-xl font-bold text-blue-med mb-3">¿Cuándo se envían las cajas?</h3>
              <p className="text-slate-700">
                Las cajas se envían entre el 1 y el 5 de cada mes. Si realizas una compra única, se enviará en un plazo
                de 1-3 días laborables.
              </p>
            </div>

            <div className="bg-off-white p-6 rounded-sm">
              <h3 className="font-serif text-xl font-bold text-blue-med mb-3">¿Puedo cancelar mi suscripción?</h3>
              <p className="text-slate-700">
                Sí, puedes cancelar tu suscripción en cualquier momento desde tu cuenta o contactándonos directamente.
                No hay permanencia mínima.
              </p>
            </div>

            <div className="bg-off-white p-6 rounded-sm">
              <h3 className="font-serif text-xl font-bold text-blue-med mb-3">
                ¿Qué opciones de café hay disponibles?
              </h3>
              <p className="text-slate-700">
                Actualmente ofrecemos el café en grano entero. Si prefieres café molido, indícalo en las notas de tu
                pedido y especifica el tipo de molienda.
              </p>
            </div>

            <div className="bg-off-white p-6 rounded-sm">
              <h3 className="font-serif text-xl font-bold text-blue-med mb-3">¿Hacéis envíos internacionales?</h3>
              <p className="text-slate-700">
                Actualmente enviamos a toda España peninsular e Islas Baleares. Estamos trabajando para ampliar nuestros
                envíos a nivel internacional.
              </p>
            </div>

            <div className="bg-off-white p-6 rounded-sm">
              <h3 className="font-serif text-xl font-bold text-blue-med mb-3">¿Puedo regalar una suscripción?</h3>
              <p className="text-slate-700">
                ¡Por supuesto! Tenemos la opción de regalo tanto para compras únicas como para suscripciones de 3, 6 o
                12 meses. Incluimos una tarjeta personalizada.
              </p>
            </div>

            <div className="bg-off-white p-6 rounded-sm">
              <h3 className="font-serif text-xl font-bold text-blue-med mb-3">¿Qué pasa si no estoy en casa?</h3>
              <p className="text-slate-700">
                Nuestro servicio de mensajería intentará la entrega hasta en tres ocasiones. También puedes indicar un
                punto de recogida alternativo.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-700 max-w-2xl mx-auto mb-6">
              ¿No encuentras respuesta a tu pregunta? Contáctanos y te responderemos lo antes posible.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-blue-med text-blue-med hover:bg-blue-med/10 rounded-none"
            >
              <Link href="/contact?subject=Pregunta%20Coffee%20Box">
                Contactar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-med text-off-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="flex items-center justify-center mb-8">
            <Package className="h-12 w-12 text-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para vivir la experiencia Kairós en casa?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Cada caja es una invitación a tomarte un momento para ti, para conectar con tu creatividad y disfrutar de
            productos de calidad.
          </p>
          <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-off-white rounded-none">
            <Link href="#comprar">
              Comprar ahora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
