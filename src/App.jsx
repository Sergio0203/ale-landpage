import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Atuacao from './components/Atuacao'
import Sobre from './components/Sobre'
import Processo from './components/Processo'
import Contato from './components/Contato'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Atuacao />
        <Sobre />
        <Processo />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
