import React, { Component } from 'react'
import { Badge } from 'reactstrap'
import images from '../images'
let {warmsandwich} = images

class WarmSandwich extends Component {
  render() {
    return (
      <div>
        <h6 className='font-weight-light px-2 text-center'><em>Alla mackor är Serverade på surdegsbröd och går att få på glutenfritt bröd</em></h6>
        <div className='p-4 d-flex justify-content-center'>
          <ul>
            <li className='mb-3'>
              <h5 className='font-weight-light'><b>Atena: </b> Skinka, dijon, dragon, purjo, tomat, ost</h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'><b>Freja: </b> Persiljeröra, chèvre, tomat, ost</h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'><b>Hermes: </b> Skinka, feta, purjo, tomat, ost</h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'><b>Hugin: </b> Salami, chèvre, rödlök, tomat, ost</h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'><b>Shiva: </b> Vitlökssmör, feta, champinjon, rödlök, tomat, ost</h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'><b>Pan: </b> Kalkon, soltorkade tomater, rödlök, tomat, ost</h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'><b>Abdalla: </b> Tonfiskröra, rödlök, tomat, ost</h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'><b>Lotus special: </b> Pesto, feta, tomat, ost</h5>
            </li>
            <li className='mb-3'>
              <h5 className='adress font-weight-light'><b>Lilith: </b> Persiljeröra, soltorkade tomater, champinjon,<br /> rödlök, tomat, rostade frön <Badge color="success" pill>Vegan</Badge></h5>
            </li>
          </ul>
        </div>
        <img className='rounded mb-4' width='100%' src={warmsandwich}/>
      </div>)
  }
}

export default WarmSandwich
