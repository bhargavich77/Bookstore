import React, { useState } from 'react'
import './addressdetails.css'
import {takeAddress} from '../../services/dataservice'

function Addressdetails(props) {

    const [switchOrderSummary,setSwitchOrderSummary] = useState(false);
    const [addrtype,setAddrtype] = useState('')
    const fulladdress = React.useRef(null);
    const city = React.useRef(null);
    const state = React.useRef(null);

    const listenToContinue = () => {
        let addrObj = {
            addressType: addrtype,
            fullAddress: fulladdress.current.value,
            city: city.current.value,
            state: state.current.value
        }
        takeAddress(addrObj).then((response) => {
            console.log(response)
            setSwitchOrderSummary(true)
            props.listenToOrderSummary()
        }).catch((error) => {
            console.log(error)
        })
        
    }
    const listenToRadio = (e) => {
        setAddrtype(e.target.value)
    }

  return (
    <div className='maindiv-address'>
        <div className='subdiv1-addr'>
            <h3 className='head-customer'>Customer Details</h3>
            <div className='div-addnew'>
                <div className='text-addnew'>Add New Address</div>
            </div>
        </div>
        <div className='adr-fields'>
            <div className='subdiv1-adr'>
                <div className='name-field'>
                    <p className='name-text'>Full Name</p>
                    <div className='fullname-text'>
                        <input className='inputfield' type='text' />
                    </div>
                </div>
                <div className='name-field'>
                    <p className='name-text'>Mobile Number</p>
                    <div className='fullname-text'>
                        <input className='inputfield' type='text' />
                    </div>
                </div>
            </div>
            <div className='subdiv2-adr'>
                <p className='name-text'>Address</p>
                <div className='address-field'>
                    <input className='inputfield' type='text' ref={fulladdress}/>
                </div>
            </div>
            <div className='subdiv1-adr'>
                <div className='name-field'>
                    <p className='name-text' >City/town</p>
                    <div className='fullname-text'>
                        <input className='inputfield' type='text' ref={city} />
                    </div>
                </div>
                <div className='name-field'>
                    <p className='name-text' >State</p>
                    <div className='fullname-text'>
                        <input className='inputfield' type='text' ref={state} />
                    </div>
                </div>
            </div>
            <div className='radio-div'>
                <p className='name-text'>Type</p>
                <div className='btn-radio' onClick={listenToRadio}>
                    <input type="radio"  value="Home"  name="type" /><p className='name-text'>Home</p>
                    <input type="radio"  value="Work" name="type"/> <p className='name-text'>Work</p>
                    <input type="radio"  value="Other"  name="type"/> <p className='name-text'>Other</p>

                </div>  
            </div>
        </div>
        {
            !switchOrderSummary && <button className='btn-continue' onClick={listenToContinue}>CONTINUE</button>
        }
        
    </div>
  )
}

export default Addressdetails