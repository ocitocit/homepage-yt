'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

const Logo = () => {
  const router = useRouter()
  return (
  <Image
      onClick={()=>router.push('/')}
      alt="logo"
      src="/ytlogo.png"
      width="100"
      height="100"
      className="cursor-pointer h-6"
      />
  )
}

export default Logo
