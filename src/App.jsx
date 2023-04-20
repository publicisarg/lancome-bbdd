import { Portada, Title } from "./components/Header"
import { Form } from "./components/Form"
import Footer from "./components/Footer"
import { Succes } from "./components/success"

export default function App() {
  return (
    <div className="container mx-auto px-4 font-montserat">
      <Portada/>
      <Title />
      <Form />
      <Footer />
      <hr className="border-4 block border-black w-full my-8" />
          <Succes></Succes>
    </div>
  )
}