import React, { Component } from 'react'
import images from '../images'
let {drinks} = images

class Drinks extends Component {
  render() {
    return (
      <div>
        <h6 className='font-weight-light text-center'><em>Vi har också glutenfria och vegan alternativ</em></h6>
        <h2 className='text-center mt-2 p-0'>Dryck</h2>
      <div className='d-flex flex-wrap justify-content-around mt-5 mb-5'>
        <div className='drinks rounded'>
          <h5>Kaffe</h5>
          <p>Te/kaffe</p>
          <p>Espresso</p>
          <p>Americano</p>
          <p>Caffe latte</p>
          <p>Cappuccino</p>
          <p>Cortado</p>
          <p>Macchiato</p>
          <p>Mocca</p>
          <p>Varmt choklad</p>
          <p>Chai</p>
        </div>
        <div className='drinks rounded'>
          <h5>Telista</h5>
          <p>Rooibos</p>
          <p>Grönt jasmin</p>
          <p>Grönt lime</p>
          <p>Pepparmynta</p>
          <p>Flamenco</p>
          <p>Earl Grey</p>
          <p>Kanel</p>
          <p>Lapsang</p>
          <p>Söder</p>
          <p>Assam</p>
        </div>
        <div className='drinks rounded'>
          <h5>Annat</h5>
          <p>Läsk</p>
          <p>Apelsinjuice</p>
          <p>San Pellegrino</p>
          <p>Äppeljuice</p>
          <p>Päron & ingefära <br/> lemonade</p>
          <p>Lättöl</p>
          <p>Lassi</p>
        </div>
        <div className='drinks rounded'>
          <h5>Öl</h5>
          <p>Starobrno</p>
          <p>Bistro lager</p>
          <p>Brooklyn lager</p>
          <p>Brooklyn ipa</p>
          <p>Nils Oscar god lager</p>
          <p>Celia</p>
          <p>ESB</p>
          <p>London pride</p>
          <p>(alkoholfritt alternativ finns)</p>
        </div>
        <div className='drinks rounded'>
          <h5>Vin</h5>
          <h6>Rött</h6>
          <p>Vinistella</p>
          <h6>Vitt</h6>
          <p>Kleine zalze</p>
          <h6>Rosé</h6>
          <p>Moncaro</p>
          <h6>Bubbel</h6>
          <p>Charles de Fère</p>
        </div>
      </div>
        <img className='rounded mb-4' width='100%' src={drinks}/>
    </div>)
  }
}

export default Drinks
