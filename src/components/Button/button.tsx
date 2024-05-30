import { ReactNode } from "react"

type ButtonProps = {
    children: ReactNode
}

type ButtonTextProps = {
    children: ReactNode
}

type ButtonIconProps = {
    children: ReactNode
}


function Button({ children, ...rest }:ButtonProps) {
    return (
        <button className="h-9 w-28 md:h-10 md:w-36 bg-sky-700 rounded-md items-center justify-center flex flex-row hover:opacity-85 hover:duration-500 transition-opacity mr-2" {...rest}>
            {children}
        </button>
    )
}

function ButtonText({children}: ButtonTextProps) {
    return (
        <h1 className="text-white font-bold text-base mx-2">
            {children}
        </h1>
    )
}

function ButtonIcon({ children }:ButtonIconProps) {
    return children
}

Button.Text = ButtonText
Button.Icon = ButtonIcon

export { Button }