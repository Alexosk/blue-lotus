import React, {Component} from 'react'
import images from '../images'
let {fridaOchCecilia} = images

class Story extends Component {
  render() {
    return (
      <div className='mt-5 mb-5'>
      <div className='content mt-5 container'>
        <div className='d-flex justify-content-center mt-5'>
          <img className='mt-5' width='750px' height='500px' src={fridaOchCecilia}/>
          </div>
        <div className='p-5'>
        <p className='px-5'>Det började på dansgolvet i början av 90-talet. Vi, Frida och Cecilia, träffades där i myllret och bestämde oss snart för att öppna ett mysigt café inspirerat av våra egna upplevelser av mat, möten och musik från när och fjärran. Den 7 augusti XXXX (vilket år är det nu?) öppnade vi för första gången dörrarna till Café Blå Lotus och under de två decennier som har gått sedan dess har vi haft glädjen att arbeta med fantastiska människor och servera otaliga gäster. I vårt lilla, lilla kök bakar och lagar vi allt från grunden av bra råvaror. Vår ambition är att alla ska hitta något som passar deras tycke och smak. I vårat färgglada och brokiga café bland gudinnor och gudar från världens alla hörn har många möten och relationer skapats under åren som gått. Vi vill att Katarina bangata 21 ska få vara ett eget litet universum där vi kan förmedla medmänsklighet och värme.</p>
        <p className='px-5'>Välkomna till oss! Cecilia & Frida</p>
        </div>

      </div>

    </div>)
  }
}

export default Story
