import { Portada, Title } from "./components/Header"
import { Form } from "./components/Form"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="container mx-auto px-4">
      <Portada/>
      <Title />
      <Form />
      <Footer />
    </div>
  )
}