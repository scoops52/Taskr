'use client'

import { useAppDispatch } from "@/store/hooks"
import { openModal } from "@/store/modal";

const Header = () => {
    const dispatch = useAppDispatch();

    const handleAbout = () => {
        dispatch(openModal('About'))
    }
  return (
    <div className="mb-10 text-center mt-6 lg:mt-0">
        <h1 className="text-3xl text-black font-extrabold md:text-5xl lg:text-6xl"><span className="uppercase text-transparent bg-clip-text bg-gradient-to-r to-fuchsia-600 from-emerald-600">task</span>r. Less Planning. More Doing.</h1>
        <button onClick={handleAbout} className="button button-primary mt-3">About</button>
    </div>
  )
}

export default Header