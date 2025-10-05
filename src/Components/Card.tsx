import { Heart, FolderPlus } from "lucide-react"

interface CardProps {
  img: string
  alt: string
  title: string
  subtitle: string
  description: string
  link: string
}

const Card: React.FC<CardProps> = ({ img, alt, title, subtitle, description, link }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden 
        bg-white/5 backdrop-blur-md border border-white/10 
        transition-all duration-500 ease-in-out 
        hover:bg-gradient-to-tr from-orange-500/20 to-transparent hover:scale-[1.02] p-6 shadow-lg">
      
      <div className="flex items-center mb-4">
        <img className="w-14 h-14 object-contain mr-3" src={img} alt={alt} />
        <div>
          <h2 className="font-semibold text-lg text-white">{title}</h2>
          <p className="text-sm text-yellow-400">{subtitle}</p>
        </div>
      </div>

      <p className="text-gray-400 text-sm mb-6">{description}</p>

      <div className="flex items-center justify-between">
        <div className="flex space-x-3">
          <button className="text-gray-400 hover:text-red-500 transition-colors">
            <Heart size={18} />
          </button>
          <button className="text-gray-400 hover:text-orange-400 transition-colors">
            <FolderPlus size={18} />
          </button>
        </div>

        <a
          href={link}
          className="px-4 py-1.5 rounded-lg text-sm font-medium 
                     text-white transition-colors"
        >
          Visit
        </a>
      </div>
    </div>
  )
}

export default Card
