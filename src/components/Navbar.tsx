"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // ícones do lucide

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          {/* <Image
            src="/thamiris-adv-logo.png"
            alt="Logo Thamiris F. de Oliveira"
            width={50}
            height={50}
            className="cursor-pointer"
          /> */}
          {/* <h1 className="text-sky-900 font-bold">Gabrielle Oliveira</h1> */}
        </Link>

        {/* Links desktop */}
        <nav className="hidden md:flex gap-6 items-center">
          {/* <Link href="/" className="text-gray-700 hover:text-black transition">Início</Link> */}
          <a href="#sobre" className="text-gray-700 hover:text-black transition">Sobre</a>
          <a href="#stack" className="text-gray-700 hover:text-black transition">Stack</a>
          <a href="#projetos" className="text-gray-700 hover:text-black transition">Projetos</a>
          <a href="#experiencia" className="text-gray-700 hover:text-black transition">Experiência</a>
        </nav>

        {/* Botão hamburguer mobile */}
        <button
          className="md:hidden text-black"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu lateral mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)} aria-label="Fechar menu">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col gap-4 px-6 py-4">
          <a href="#sobre" className="text-gray-700 hover:text-black transition">Sobre</a>
          <a href="#stack" className="text-gray-700 hover:text-black transition">Stack</a>
          <a href="#projetos" className="text-gray-700 hover:text-black transition">Projetos</a>
          <a href="#experiencia" className="text-gray-700 hover:text-black transition">Experiência</a>
        </nav>
      </div>
    </header>
  );
}