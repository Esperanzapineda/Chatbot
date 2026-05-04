import Hero from "@/shared/Hero";
import Stack from "./views/Stack";
import Chat from "./views/Chat";

export default function Home() {
  return (
    <div >
      <div className="flex container mx-auto">
        <div className="w-1/2 p-8">
          <Hero/>
        </div>

        <div className="w-px bg-white/20 hidden md:block"></div>

        <div className="w-1/2 flex items-center justify-center p-8">
          <Chat /> 
        </div>
      </div>
      <div>
        <Stack/>
      </div>
    </div>
  )
}