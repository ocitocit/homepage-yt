'use client'

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
        <button></button>
        <div className="h-6">
          <Logo/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
