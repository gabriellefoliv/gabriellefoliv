interface FooterProps {
    isEnglish: boolean
}

function Footer({ isEnglish }: FooterProps) {
    return (
        <div className="w-full h-18 bg-slate-900">
            {isEnglish ? (
                <p className="text-white text-center py-3 text-xs md:text-base">
                    Copyright © 2023 Gabrielle. All Rights Reserved.
                </p>
            ) : (
                <p className="text-white text-center py-3 text-xs md:text-base">
                    Copyright © 2023 Gabrielle. Todos os direitos reservados.
                </p>

            )}
        </div>
    )
}

export default Footer