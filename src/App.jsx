import { Portada, Title } from "./components/Header"
import { Form } from "./components/Form"
import Footer from "./components/Footer"
import { Succes } from "./components/success"
import { useState, useEffect } from 'react'

export default function App() {

  const [tratamiento, setTratamiento] = useState(false);
  const handleTratamiento = () => {
    setTratamiento(!tratamiento);
  };

  const [maquillaje, setMaquillaje] = useState(false);
  const handleMaquillaje = () => {
    setMaquillaje(!maquillaje);
  };

  const [interests, setInterests] = useState(0);
  const handleInterests = (e) => {
    if (e.target.checked) {
      setInterests(interests + 1);
    } else {
      setInterests(interests - 1);
    }
  };

  const [checks, setChecks] = useState(0);
  const handleChecks = (e) => {
    if (e.target.checked) {
      setChecks(checks + 1);
    } else {
      setChecks(checks - 1);
    }
  };

  const [disableButton, setDisableButton] = useState(true);
  useEffect(() => {
    console.log(checks);
    console.log(interests);
    if (checks > 2 && interests > 0) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [checks, interests])

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
          <Form handleChecks={handleChecks} handleInterests={handleInterests} handleTratamiento={handleTratamiento} handleMaquillaje={handleMaquillaje} tratamiento={tratamiento} maquillaje={maquillaje}/>
          <Footer disableButton={disableButton} />
        </form>
        <hr className="border-4 block border-black w-full my-8" />
      </>}
      {false && <Succes></Succes>}
    </div>
  )
}