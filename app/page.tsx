import CreateTask from "@/components/CreateTask"
import Providers from "@/components/Providers"
import SingleTask from "@/components/SingleTask"
import Tasks from "@/components/Tasks"
import ThemeToggle from "@/components/ThemeToggle"
import Modals from "@/components/Modals"
import { useAppSelector } from "@/store/hooks"
import Header from "@/components/Header"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center lg:p-24 md:p-16">
      <Providers>
        {/* <ThemeToggle /> */}
        <Header />
        <div className="flex flex-row justify-between gap-5 items-start mt-10 w-full">
        <CreateTask />
        <Tasks />
        </div>
      </Providers>
    </main>
  )
}
