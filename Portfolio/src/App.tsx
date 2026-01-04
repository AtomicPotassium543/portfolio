import Navbar from "./navbar.jsx"
import First from "./First.tsx"
import Second from "./Second.tsx"
import Works from "./Works.tsx"
import Footer from "./Footer.tsx"

import { useEffect } from "react"

function App() {

    useEffect(() => {
        document.title = "AtomicPotassium Portfolio"
    }, [])

    return (
        <>
            <Navbar />
            <First />
            <Second />
            <Works />
            <Footer />
        </>
    )

}

export default App
