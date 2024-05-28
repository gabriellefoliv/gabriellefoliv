import { ReactNode } from "react"

type ProjectButtonProps = {
    children: ReactNode
}

type ProjectButtonTextProps = {
    children: ReactNode
}

type ProjectButtonIconProps = {
    children: ReactNode
}


function ProjectButton({ children, ...rest }:ProjectButtonProps) {
    return (
        <div className="h-8 w-28 bg-sky-950 rounded-md items-center justify-center flex flex-row hover:opacity-75 hover:duration-500 transition" {...rest}>
            {children}
        </div>
    )
}

function ProjectButtonText({children}: ProjectButtonTextProps) {
    return (
        <h1 className="text-white font-bold text-sm mx-2">
            {children}
        </h1>
    )
}

function ProjectButtonIcon({ children }:ProjectButtonIconProps) {
    return children
}

ProjectButton.Text = ProjectButtonText
ProjectButton.Icon = ProjectButtonIcon

export { ProjectButton }