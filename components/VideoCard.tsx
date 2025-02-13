import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function VideoCard({ video }) {
  const handleDownload = () => {
    window.open(video.url, "_blank")
  }

  return (
    <Card className="overflow-hidden bg-slate-800 border-slate-700">
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-2 line-clamp-2 text-blue-300">{video.title}</h2>
        <Button onClick={handleDownload} className="w-full bg-green-600 hover:bg-green-700">
          <Download className="mr-2 h-4 w-4" /> Yuklab olish
        </Button>
      </CardContent>
    </Card>
  )
}

