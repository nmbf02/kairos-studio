import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  image: string
}

export default function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
  return (
    <div className="bg-off-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-center mb-6">
        <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-gold">
          <Image src={image || "/placeholder.svg"} alt={author} fill className="object-cover" />
        </div>
      </div>
      <p className="text-slate-700 text-center italic mb-6">"{quote}"</p>
      <div className="text-center">
        <h4 className="font-serif font-bold text-blue-med">{author}</h4>
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </div>
  )
}
