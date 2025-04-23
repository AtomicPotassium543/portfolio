import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from "./landing_page/nav_bar.jsx"
import Intro from "./landing_page/intro.jsx"
import About from "./landing_page/pastwork.jsx"
import Skill from "./landing_page/skill.jsx"
import TOS from "./landing_page/tos.jsx"
import Conclusion from "./landing_page/conclusion.jsx"
import Footer from "./landing_page/footer.jsx"

document.title = "Atomic's Portfolio"

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    
      <div className="flex flex-col items-center justify-center">
        <Navbar />
        <Intro />
        <About />
        <Skill />
        <TOS />
        <Conclusion />
        <Footer />
      </div>
  </StrictMode>,
)