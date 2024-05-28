import Education from "./components/Education/Education"
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { Stack } from "./components/Marquee/Stack"
import Projects from "./components/Projects/Projects"


function App() {

  return (
    <div className="bg-zinc-900">

      <div className="max-w-2xl mx-auto px-2 md:px-0 antialiased bg-zinc-900">
          <Header/>
          <Stack />
          <Projects/>
          <Experience/>
          <Education/>
          <Footer/>
      </div>

    </div>
  )
}

export default App
