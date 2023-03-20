import { previewData } from "next/headers"
export default function HomePage() {
  if (previewData()) {
    return <div>previewData</div>
  }
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Not in preview
      </h1>
    </div>
  )
}
