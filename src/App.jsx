import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Formats from './components/Formats.jsx'
import Repertoire from './components/Repertoire.jsx'
import Gallery from './components/Gallery.jsx'
import Booking from './components/Booking.jsx'
import Footer from './components/Footer.jsx'
import TelegramFloat from './components/TelegramFloat.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Formats />
        <Repertoire />
        <Gallery />
        <Booking />
      </main>
      <Footer />
      <TelegramFloat />
    </>
  )
}
