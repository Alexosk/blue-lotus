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
      <h2 className='text-center mt-2 p-2 font-weight-bold'>Kalla Mackor</h2>
      <div className="d-flex flex-wrap flex-column align-items-center mt-2">
        <div className='p-4 mx-2'>
          <h4 className='pb-2 font-weight-bold'>Surdegs Mackor</h4>
          <hr className='mt-0' />
          <ul className='mt-4 mb-4 menu-list'>
            <li className='mb-3'>
              <h5 className='font-weight-light menu-item'>
                <span className='font-weight-bold'>Allahs gåva:
                </span> Ost</h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light menu-item'>
                <span className='font-weight-bold'>Kali:
                </span> Persiljeröra, soltorkade tomater <div><Badge className='pill' pill={true}>Vegan</Badge></div>
              </h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light menu-item'>
                <span className='font-weight-bold'>Hades hämnd:
                </span> Skinka, ost, dijon
              </h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light menu-item'>
                <span className='font-weight-bold'>Nirvana:
                </span> Hummus <div><Badge className='pill' pill={true}>Vegan</Badge></div>
              </h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light menu-item'>
                <span className='font-weight-bold'>Magre Memeth:
                </span> Feta, pesto, soltorkade tomater
              </h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light menu-item'>
                <span className='font-weight-bold'>Maya:
                </span> Tonfiskröra
              </h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light menu-item'>
                <span className='font-weight-bold'>Fatimas drömmar:
                </span> Persiljeröra, feta, tomat, rödlök</h5>
            </li>
          </ul>
          <div className='mt-4'>
          <h4 className='pb-2 font-weight-bold'>Knäcke Mackor</h4>
          <hr className='mt-0' />
          </div>
          <ul className='mt-4 menu-list'>
            <li className='mb-3'>
              <h5 className='font-weight-light menu-item'>
                <span className='font-weight-bold'>Ra’s skörd:
                </span> Ägg, purjo, kaviar</h5>
            </li>
            <li className='mb-3'>
              <h5 className='font-weight-light menu-item'>
                <span className='font-weight-bold'>Isis synd:
                </span> Persiljeröra, feta, tomat, rödlök</h5>
            </li>
            <li className=''>
              <h5 className='font-weight-light menu-item'>
                <span className='font-weight-bold'>Artemis:
                </span> Hummus <div><Badge className='pill' pill={true}>Vegan</Badge></div>
              </h5>
            </li>
          </ul>
        </div>
      </div>
      <img className='rounded mb-4' width='100%' src={coldsandwich} alt='Cold Sandwich'/>
    </div>
  }
}

export default ColdSandwich
