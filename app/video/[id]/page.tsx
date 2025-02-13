import ReactPlayer from "react-player"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

// Bu funksiya JSON fayldan ma'lumotlarni o'qiydi
// Haqiqiy loyihada bu server-side kod bo'lishi kerak
async function getVideoById(id) {
  // Bu yerda JSON fayldan ma'lumotlarni o'qish mantiqini yozasiz
  return {
    id,
    title: `Video ${id}`,
    url: `https://example.com/video${id}.mp4`,
  }
}

export default async function VideoPage({ params }) {
  const video = await getVideoById(params.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="outline" className="mb-4">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Orqaga
        </Button>
      </Link>
      <h1 className="text-2xl font-bold mb-4">{video.title}</h1>
      <div className="aspect-w-16 aspect-h-9">
        <ReactPlayer url={video.url} width="100%" height="100%" controls />
      </div>
    </div>
  )
}

