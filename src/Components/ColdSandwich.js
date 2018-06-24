import React, {Component} from 'react'
import {Badge} from 'reactstrap'
import images from '../images'
let {coldsandwich} = images

class ColdSandwich extends Component {
  render() {
    return <div className='content'>
      <h6 className='font-weight-light text-center'>
        <em>Alla mackor går att få på glutenfritt knäcke bröd</em>
      </h6>
      <h2 className='text-center mt-2 p-2'>Kalla Mackor</h2>
      <div className="d-flex flex-wrap flex-column align-items-center mt-2">
        <div className='p-4 mx-2'>
          <h4 className='pb-2 font-weight-light'>Surdegs Mackor</h4>
          <hr className='mt-0' />
          <ul className='mt-4 mb-4'>
            <li className='mb-3'>
              <h5 className='font-weight-light'>
                <b>Allahs gåva:
                </b> Ost</h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'>
                <b>Kali:
                </b> Persiljeröra, soltorkade tomater <Badge color="success" pill="pill">Vegan</Badge>
              </h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'>
                <b>Hades hämnd:
                </b> Skinka, ost, dijon
              </h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'>
                <b>Nirvana:
                </b> Hummus <Badge color="success" pill="pill">Vegan</Badge>
              </h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'>
                <b>Magre Memeth:
                </b> Feta, pesto, soltorkade tomater
              </h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'>
                <b>Maya:
                </b> Tonfiskröra
              </h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'>
                <b>Fatimas drömmar:
                </b> Persiljeröra, feta, tomat, rödlök</h5>
            </li>
          </ul>
          <div className='mt-4'>
          <h4 className='pb-2 font-weight-light'>Knäcke Mackor</h4>
          <hr className='mt-0' />
          </div>
          <ul className='mt-4'>
            <li className='mb-3'>
              <h5 className='font-weight-light'>
                <b>Ra’s skörd:
                </b> Ägg, purjo, kaviar</h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light'>
                <b>Isis synd:
                </b> Persiljeröra, feta, tomat, rödlök</h5>
            </li>
            <li className=''>
              <h5 className='font-weight-light'>
                <b>Artemis:
                </b> Hummus <Badge color="success" pill="pill">Vegan</Badge>
              </h5>
            </li>
          </ul>
        </div>
      </div>
      <img className='rounded mb-4' width='100%' src={coldsandwich}/>
    </div>
  }
}

export default ColdSandwich
