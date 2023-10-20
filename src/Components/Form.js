import { useState } from "react"
import SuccessPopup from './SuccessPopup';

const Form = () => {
    const [formData, setFormData] = useState({
        'fullname': '',
        'email': '',
        'phoneNumber': '',
        'graduationYears': ''
    })

    const [displayErrorMsg, setDisplayErrorMsg] = useState({
        'fullname': false,
        'email': false,
        'phoneNumber': false,
        'graduationYears': false
    })

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const populateGradYears = () => {
        let tempGradYears = [{
            year: '',
            id: 'none'
        }]
        for (let year = 2010; year <= 2024; year++) {
            tempGradYears.push({
                year: year,
                id: year
            })
        }
        return tempGradYears
    }

    let gradYears = populateGradYears()

    const toggleShowSuccessMessage = () => {
        /* if (!showSuccessMessage) {
            document.body.style.overflow = 'hidden';
            console.log(showSuccessMessage);
        } else {
            document.body.style.overflow = 'auto';
            console.log(showSuccessMessage);
        } */
        setShowSuccessMessage(prevShowSuccessMessage => !prevShowSuccessMessage);
    }

    const updateForm = (event) => {
        const {name, value} = event.target
        //console.log(`${name}: ${value}`);
        setFormData(oldFormData => ({
            ...oldFormData,
            [name]: value
        }))
    }

    const toggleErrorMsg = (inputField, validity) => {
        setDisplayErrorMsg(oldFormData => ({
            ...oldFormData,
            [inputField]: validity
        }))
    }

    const resetForm = () => {
        setFormData({
            'fullname': '',
            'email': '',
            'phoneNumber': '',
            'graduationYears': ''
        })
    }

    const formValidation = () => {
        let isFormValid = true

        //validate name
        let isInputValid = !(formData.fullname.length === 0)
        isFormValid = isFormValid && isInputValid
        toggleErrorMsg('fullname', !isInputValid)
        //console.log('name: ', isInputValid);

        //validate email
        isInputValid = formData.email.includes('@') && formData.email.endsWith('.com') 
        isFormValid = isFormValid && isInputValid
        toggleErrorMsg('email', !isInputValid)
        //console.log('email: ', isInputValid);

        //validate phone number
        isInputValid = [...formData.phoneNumber].every((number) => {
            return typeof number === 'number'
        })
        isInputValid = formData.phoneNumber.length === 10
        isFormValid = isFormValid && isInputValid
        toggleErrorMsg('phoneNumber', !isInputValid)
        //console.log('phone: ', isInputValid);

        //validate graduation year
        isInputValid = !(formData.graduationYears === '')
        isFormValid = isFormValid && isInputValid
        toggleErrorMsg('graduationYears', !isInputValid)
        //console.log('graduationYears: ', isInputValid);

        return isFormValid
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(formData);

        const isFormValid = formValidation()

        if (isFormValid) {
            toggleShowSuccessMessage()
            resetForm()
        }

        /*
        console.log('Submitted');

        const isFormInputValid = Object.values(displayErrorMsg).every((input) => {
            return input === false
        }) 
        console.log('form is valid: ', isFormValid)

        console.log(formData);

        console.log(displayErrorMsg);
        */
    }


    return (
        <form>
            <h2 className="form-header">
                Registrater Now!
            </h2>

            <div className='input-field'>
                <label htmlFor="fullname">
                    Full Name    
                </label>

                <input 
                    type="text" 
                    name="fullname" 
                    id='fullname' 
                    placeholder='John Doe'
                    onChange={updateForm}
                    value={formData.fullname}
                />
                
                {
                    displayErrorMsg['fullname'] && 
                    <small className="error-message">Invalid Name</small>
                }
            </div>

            <div className='input-field'>
                <label htmlFor="email">
                    Email Address 
                </label>

                <input 
                    type="email" 
                    name="email" 
                    id='email' 
                    placeholder='xyz@gmail.com'
                    onChange={updateForm}
                    value={formData.email}
                />

                {
                    displayErrorMsg['email'] && 
                    <small className="error-message">Invalid Email Address</small>
                }
            </div>

            <div className='input-field'>
                <label htmlFor="phonenumber">
                    Phone Number
                </label>

                <input 
                    type="tel" 
                    name="phoneNumber" 
                    id='phoneNumber' 
                    placeholder='0123456789'
                    onChange={updateForm}
                    value={formData.phoneNumber}
                />

                {
                    displayErrorMsg['phoneNumber'] && 
                    <small className="error-message">Invalid Phone Number</small>
                }
            </div>
            
            <div className='input-field'>
                <label htmlFor="graduationYears">
                    High School/University Graduation Year
                </label>

                <select 
                    name="graduationYears" 
                    id="graduationYears"
                    onChange={updateForm}
                    value={formData.graduationYears}
                >
                    {
                        gradYears.map(grad_year => {
                            return (
                                <option value={grad_year.year} key={grad_year.id}>
                                    {grad_year.year}
                                </option>
                            )
                        })
                    }
                </select>

                {
                    displayErrorMsg['graduationYears'] && 
                    <small className="error-message">Select Your Graduation Year</small>
                }
            </div>

            <div className='input-field'>
                <button 
                    className="submit-btn"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>

            {
                showSuccessMessage &&
                <SuccessPopup 
                    closeSuccessMessage={toggleShowSuccessMessage} 
                />
            }
        </form>
    )
}

export default Form