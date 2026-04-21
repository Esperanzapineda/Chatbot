import Hero from "@/shared/Hero";
import Stack from "./views/Stack";

export default function Home() {
  return (
    <div>
      <div className="h-100">
        <Hero/>
      </div>
      <div>
        <Stack/>
      </div>
    </div>
  )
}