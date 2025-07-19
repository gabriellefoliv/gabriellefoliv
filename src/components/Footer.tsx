import { InstagramIcon, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-white text-black py-10 px-6 w-full border-t border-gray-300 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-[1200px] mx-auto gap-10">
        
        {/* Seção de links */}
        <div className="w-full md:w-auto text-center md:text-left space-y-2">
          <h4 className="text-gray-500 font-semibold text-lg tracking-wide">
            Todos os direitos reservados <br/>Ⓒ Desenvolvido por Gabrielle Oliveira
          </h4>
          
        </div>

        {/* Seção de contato */}
        <div className="w-full md:w-auto text-center md:text-right space-y-4">
          <h4 className="text-[#081534] font-bold text-lg uppercase tracking-wide">
            Entre em Contato
          </h4>

          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://wa.me/5521981449194"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#081534]/25 hover:bg-sky-200 transition duration-200"
              aria-label="Email"
            >
              <FaWhatsapp className="w-6 h-6 text-[#081534]" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=oliveiragabrielle662@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#081534]/25 hover:bg-sky-200 transition duration-200"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-[#081534]" />
            </a>
            <a
              href="https://www.instagram.com/gabriellefoliv/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#081534]/25 hover:bg-sky-200 transition duration-200"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-6 h-6 text-[#081534]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}