'use client'

import { Menu } from "lucide-react"
import Logo from "./Logo"

const Navbar = () => {
  return (
    <div
      className="
      flex
      gap-10
      lg:gap-20
      justify-between
      "
    >
      <div
      className="
        flex
        gap-4
        items-center
        flex-shrink-0
        "
      >
        <button>
          <Menu/>
        </button>
          <Logo/>
      </div>
    </div>
  )
}

export default Navbar
