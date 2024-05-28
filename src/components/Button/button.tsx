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
        <div className="h-9 w-28 md:h-11 md:w-40 bg-sky-950 rounded-md items-center justify-center flex flex-row hover:opacity-85 hover:duration-500 transition-opacity" {...rest}>
            {children}
        </div>
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