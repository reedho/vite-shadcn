import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useId } from "react"
import { XDateRangePicker } from "./uix/date-range-picker"

export default function App() {
  const id = useId()
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello</h1>
      <p>Lets make!</p>

      <br />

      <div className="max-w-sm">
        <div className="space-y-2">
          <Label htmlFor={id}>Email</Label>
          <Input id={id} placeholder="Email" type="email" />
        </div>

        <br />

        <XDateRangePicker />
      </div>
    </div>
  )
}
