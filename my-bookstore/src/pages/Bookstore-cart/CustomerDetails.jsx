import { Radio } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { updateCustomerApi } from '../../services/Dataservices'
import OrderSummary from './OrderSummary'
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

function CustomerDetails() {
    const [continueBtn, setContinueBtn] = useState(false)
    const [radioValue, setRadioValue] = useState()
    const [fullNameD, setFullNameD] = useState()
    
    const [customerUpdate, setCustomerUpdate] = useState({
        fullName:"",
        phone:"",
        fullAddress:"",
        city:"",
        state:""
    })

    const handleType=(e)=>{
        setRadioValue(e.target.value)
     }

    const handleFullName = (event) => {
        setCustomerUpdate((prevState) => ({
            ...prevState,
            fullName: event.target.value,
        }))
    }

    const handleNo = (event) => {
        setCustomerUpdate((prevState) => ({
            ...prevState,
            phone: event.target.value,
        }))
    }

    const handleAddress = (event) => {
        setCustomerUpdate((prevState) => ({
            ...prevState,
            fullAddress: event.target.value,
        }))
    }
    
    const handleCity = (event) => {
        setCustomerUpdate((prevState) => ({
            ...prevState,
            city: event.target.value,
        }))
    }

    const handleState = (event) => {
        setCustomerUpdate((prevState) => ({
            ...prevState,
            state: event.target.value,
        }))
    }
    const showContinue = () => {
        
        let updateCustomer = {
            addressType: radioValue,
            fullAddress: customerUpdate.fullAddress,
            city: customerUpdate.city,
            state: customerUpdate.state
        }
        
        updateCustomerApi(updateCustomer).then((response) => {
            console.log(response);
            setContinueBtn(true)
            setFullNameD(response.data.result)
        }).catch((error) => console.log(error))

        console.log(fullNameD)
    }
    
    return (
        <div>
            
                <div className='customerDetails'>
                    <div className='customerDiv'>
                        <div className='customerText'>
                            <h4>Customer Details</h4>
                            <button className='btnAdd'>Add New Address</button>
                        </div>
                        <div className='inputBoxNM'>
                            <div className='inputName'>
                                {/* <label>Full Name</label>
                                <input type='text' id='inputBoxName' onChange={handleFullName} /> */}
                                <TextField id="standard-basic" label="Full Name" variant="standard" onChange={handleFullName}/>

                            </div>
                            <div className='inputMNumber'>
                                {/* <label>Mobile Number</label>
                                <input type='text' id='inputBoxMNo'  onChange={handleNo}/> */}
                                <TextField id="standard-basic" label="Mobile Number" variant="standard" onChange={handleNo}/>
                            </div>
                        </div>
                        <div className='textAreaDiv'>
                            {/* <label>Address</label>
                            <textarea id='textArea' onChange={handleAddress}></textarea> */}
                            <TextareaAutosize
  aria-label="minimum height"
  minRows={3}
  placeholder="Minimum 3 rows"
  style={{ width: 200 }}
/>
                        </div>
                        <div className='inputBoxCityS'>
                            <div className='inputCity'>
                                {/* <label>City/town</label>
                                <input type='text' id='inputBoxCity' onChange={handleCity}/> */}
                                <TextField id="standard-basic" label="City/Town" variant="standard" onChange={handleCity}/>

                            </div>
                            <div className='inputState'>
                                {/* <label>State</label>
                                <input type='text' id='inputBoxState' onChange={handleState} /> */}
                                <TextField id="standard-basic" label="State" variant="standard" onChange={handleState}/>
                            </div>
                        </div>
                        <div className='typeRadio'>
                            <label>Type</label>
                            <div className='selectRadio'>
                                <input type="radio" name="gender" value="Home" onChange={handleType} /> Home
                                <input type="radio" name="gender" value="Work" onChange={handleType} /> Office
                                <input type="radio" name="gender" value="other" onChange={handleType} /> Other
                                
                            </div>
                        </div>
                        <div>
                            {
                                continueBtn ? null :
                                    <button className='btnContinue' onClick={showContinue}>Continue</button>
                            }
                        </div>
                    </div>
                </div> 
                {
                    continueBtn ? <OrderSummary /> : 
                    <div className='boxExternal'>
                        <p id='textP'>Order Summary</p>
                    </div>
                }
                
            
        </div>
    )
}

export default CustomerDetails