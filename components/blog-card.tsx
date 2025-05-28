import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  image: string
  category: string
  slug: string
}

export default function BlogCard({ title, excerpt, date, image, category, slug }: BlogCardProps) {
  return (
    <div className="bg-off-white overflow-hidden shadow-sm group">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-0 left-0 bg-gold px-3 py-1 text-off-white text-xs font-medium">{category}</div>
      </div>
      <div className="p-6">
        <p className="text-sm text-slate-500 mb-2">{date}</p>
        <h3 className="font-serif text-xl font-bold text-blue-med mb-3 group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-700 mb-4">{excerpt}</p>
        <Link href={slug} className="text-blue-med hover:text-gold flex items-center font-medium text-sm">
          Leer más
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
