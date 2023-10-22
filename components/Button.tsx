import { cva } from "class-variance-authority"

const buttonStyle =cva(["hover:bg-secondary-hover","transition-colors"],
  {
    variants:{
      size:{
        default:["rounded","p-2"],
        icon:[
          "rounded-full",
          "h-10",
          "w-10",
          "flex",
          "justify-center",
          "items-center",
          "p-2.5"
        ]
      }
    }
  })

const classes=buttonStyle({size:"icon"})

export const Button = ()=>{
  return <button/>
}
