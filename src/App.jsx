import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <div className="p-6">
      <Button>Click Me</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button size="sm">Small</Button>
    </div>
  )
}