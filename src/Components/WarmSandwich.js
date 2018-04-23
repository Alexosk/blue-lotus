import React, { Component } from 'react'
import {Badge} from 'reactstrap'

class WarmSandwich extends Component {
  render() {
    return (
      <div>
        <h6 className='font-weight-light text-center px-2'><em>Alla mackor är Serverade på surdegsbröd och går att få på glutenfritt bröd</em></h6>
      <div className='p-4 d-flex justify-content-centerv text-center'>
        <ul>
          <li><b>Atena</b> <br/>skinka, dijon, dragon, purjo, tomat, ost</li>
          <li><b>Freja</b> <br/>persiljeröra, chèvre, tomat, ost</li>
          <li><b>Hermes</b> <br/>skinka, feta, purjo, tomat, ost</li>
          <li><b>Hugin</b> <br/>salami, chèvre, rödlök, tomat, ost</li>
          <li><b>Shiva</b> <br/>vitlökssmör, feta, champinjon, rödlök, tomat, ost</li>
          <li><b>Pan</b> <br/>kalkon, soltorkade tomater, rödlök, tomat, ost</li>
          <li><b>Abdalla</b> <br/>tonfiskröra, rödlök, tomat, ost</li>
          <li><b>Lilith </b> <br/>persiljeröra, soltorkade tomater, champinjon, rödlök, tomat, rostade frön <Badge color="success" pill>Vegan</Badge></li>
          <li><b>Lotus special</b> <br/>pesto, feta, tomat, ost</li>
        </ul>
      </div>
    </div>)
  }
}

export default WarmSandwich
