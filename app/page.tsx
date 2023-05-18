import CreateTask from "@/components/CreateTask"
import Providers from "@/components/Providers"
import SingleTask from "@/components/SingleTask"
import Tasks from "@/components/Tasks"
import ThemeToggle from "@/components/ThemeToggle"
import Modals from "@/components/Modals"
import { useAppSelector } from "@/store/hooks"
import Header from "@/components/Header"
import Link from "next/link"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center lg:p-24 md:p-16">
      <Providers>
        {/* <ThemeToggle /> */}
        <Link href='https://forms.gle/s6JoeMtToqwuCjMT8' target="_blank" className="text-gray-500 underline text-sm absolute top-2 right-2 hover:text-gray-700 transition-colors">Feedback</Link>
        <Header />
        <div className="flex flex-row justify-between gap-5 items-start mt-10 w-full">
        <CreateTask />
        <Tasks />
        </div>
      </Providers>
    </main>
  )
}
