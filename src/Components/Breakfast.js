import React, { Component } from 'react'
import { Badge } from 'reactstrap'
import images from '../images'
let {breakfast} = images

class Breakfast extends Component {
  render() {
    return (
      <div className='content'>
        <h2 className='text-center mt-2 p-2'>Frukost</h2>
        <div className='d-flex justify-content-center'>
          <h6 className='font-weight-light'><b>Mån-Fre</b> 8:30-12 / <b>Lör-Sön</b> 9:30-14</h6>
        </div>
        <div className='mt-4 mb-4 px-5 d-flex flex-wrap text-center justify-content-between'>
          <div className='breakfast rounded'>
            <h4 className='text-center mb-2'>Paket 1</h4>
            <h6 className='font-weight-light'>Ostmacka <br/> Kaffe/te</h6>
            <hr />
            <Badge color="success" pill>Vegan</Badge>
            <h6 className='font-weight-light'>Hummusmacka <br/> Kaffe/te</h6>
          </div>
          <div className='breakfast rounded'>
            <h4 className='text-center'>Paket 2</h4>
            <h6 className='font-weight-light'>Yogurt med nötkross, <br/> honung & blåbär <br/> Kaffe/te</h6>
            <hr/>
            <Badge color="success" pill>Vegan</Badge>
            <h6 className='font-weight-light'>Havregurt med nötkross, <br/> honung & blåbär <br/> Kaffe/te</h6>
          </div>
          <div className='breakfast rounded'>
            <h4 className='text-center'>Paket 3</h4>
            <h6 className='font-weight-light'>Ostmacka <br/> Yogurt med nötkross, <br/>honung & blåbär <br/> Juice <br/> Kaffe/te</h6>
            <hr/>
            <Badge color="success" pill>Vegan</Badge>
            <h6 className='font-weight-light'>Hummusmacka <br/> Havregurt med nötkross, <br/>honung & blåbär <br/> Juice <br/> Kaffe/te</h6>
          </div>
          <div className='breakfast rounded'>
            <h4 className='text-center'>Paket 4</h4>
            <h6 className='font-weight-light'>Ägg och kaviarmacka <br/> Yogurt med nötkross, <br/>honung & blåbär <br/> Juice <br/> Kaffe/te</h6>
              <hr/>
              <Badge color="success" pill>Vegan</Badge>
              <h6 className='font-weight-light'>Hummusmacka <br/> Havregurt med nötkross, <br/>honung & blåbär <br/> Juice <br/> Kaffe/te</h6>
          </div>
        </div>
      <p className='extras text-center font-weight-light mb-4'><b>Extras:</b> <br /> Cappucino, Chai or Caffe latte <br /> Kokt ägg  <br /> Kokt ägg med kaviar</p>
        <div className='d-flex'>
        <img className='rounded img-fluid mb-4 align-self-center' width='100%' height='auto' alt='Café Blå Lotus' src={breakfast} />
        </div>
    </div>
   )
  }
}

export default Breakfast
