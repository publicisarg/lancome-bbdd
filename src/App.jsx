import { Portada, Title } from "./components/Header"
import { Form } from "./components/Form"
import Footer from "./components/Footer"
import { Succes } from "./components/success"

export default function App() {
  return (
    <div className="container mx-auto px-4 font-montserat">
      {true && <>
        <Portada />
        <Title />
        <form action='https://cl.s7.exct.net/DEManager.aspx' method='post'>
          <input type='hidden' name='_clientID' value='[HELPDESK]' />
          <input type='hidden' name='_deExternalKey' value='[HELPDESK]' />
          <input type='hidden' name='_action' value='Add' />
          <input type='hidden' name='_returnXML' value='0' />
          <input type='hidden' name='_successURL' value='[SUCCESS]' />
          <input type='hidden' name='_errorURL' value='[ERROR]' />
          <input type='hidden' name='Brand' value='[HELPDESK]' />
          <input type='hidden' name='Channel' value='Landing Page' />
          <input type='hidden' name='subjectArea' value='Loreal' />
          <input type='hidden' name='Campaign_name' value="[HELPDESK]" />
          <input type='hidden' name='Source' value='Automatic' />
          <input type='hidden' name='country-code' value='[HELPDESK]' />
          <input type='hidden' name='preferred-locale' value='[HELPDESK]' />
          <Form />
          <Footer />
        </form>
        <hr className="border-4 block border-black w-full my-8" />
      </>}
      {false && <Succes></Succes>}
    </div>
  )
}