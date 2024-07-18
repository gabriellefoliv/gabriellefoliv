import { useState } from "react"
import Education from "./components/Education/Education"
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { Stack } from "./components/Marquee/Stack"
import Projects from "./components/Projects/Projects"
import { LanguageState } from "./components/LanguageSwitch/language"
import LanguageButton from "./components/LanguageSwitch/LanguageSwitch"

function App() {
  const [languageState, setLanguageState] = useState<LanguageState>({
    isEnglish: false,
  })

  return (
    <div className="bg-zinc-900">

      <div className="max-w-2xl mx-auto px-0 md:px-0 antialiased bg-zinc-900 overflow-hidden">
          <LanguageButton isEnglish={languageState.isEnglish} setIsEnglish={setLanguageState}/>
          <Header isEnglish={languageState.isEnglish} />
          <Stack />
          <Projects isEnglish={languageState.isEnglish} />
          <Experience  isEnglish={languageState.isEnglish}/>
          <Education isEnglish={languageState.isEnglish}/>
          <Footer isEnglish={languageState.isEnglish}/>
      </div>

    </div>
  )
}

export default App
