import CreateTask from "@/components/CreateTask"
import Providers from "@/components/Providers"
import SingleTask from "@/components/SingleTask"
import Tasks from "@/components/Tasks"
import ThemeToggle from "@/components/ThemeToggle"
import Modals from "@/components/Modals"
import { useAppSelector } from "@/store/hooks"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Providers>
        {/* <ThemeToggle /> */}
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold md:text-5xl lg:text-6xl"><span className="uppercase text-transparent bg-clip-text bg-gradient-to-r to-fuchsia-600 from-emerald-600">task</span>r. Less Planning. More Doing.</h1>
        </div>
        <div className="flex flex-row justify-between gap-5 items-start mt-10 w-full">
        <CreateTask />
        <Tasks />
        </div>
      </Providers>
    </main>
  )
}
