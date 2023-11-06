import { useState } from "react";

const registrants = [
    {
        fullname: "Achilles Enam",
        email: "achilles.enam@example.com",
        id: "ae123",
        phoneNumber: "123-456-7890",
        graduationYear: 2022,
    },
    {
        fullname: "Alhassan Baaba",
        email: "alhassan.baaba@example.com",
        id: "ab456",
        phoneNumber: "987-654-3210",
        graduationYear: 2023,
    },
    {
        fullname: "Gideon Sosi",
        email: "gideon.sosi@example.com",
        id: "gs789",
        phoneNumber: "555-123-4567",
        graduationYear: 2022,
    },
    {
        fullname: "Jeroldine Oakley",
        email: "jeroak@example.com",
        id: "ep10s1",
        phoneNumber: "411-292-2858",
        graduationYear: 2024,
    },
    {
        fullname: "Emmanualla Prempeh",
        email: "emmanualla.prempeh@example.com",
        id: "ep101",
        phoneNumber: "111-222-3333",
        graduationYear: 2024,
    },
    {
        fullname: "Rhoda",
        email: "rhoda@example.com",
        id: "r123",
        phoneNumber: "123-123-1234",
        graduationYear: 2021,
    },
    {
        fullname: "Emmanualla Christian",
        email: "emmanualla.christian@example.com",
        id: "ec007",
        phoneNumber: "007-007-0070",
        graduationYear: 2025,
    },
    {
        fullname: "Albert Addo",
        email: "albert.addo@example.com",
        id: "aa456",
        phoneNumber: "456-456-4567",
        graduationYear: 2023,
    },
    {
        fullname: "Augustine Sanakey",
        email: "augustine.sanakey@example.com",
        id: "as999",
        phoneNumber: "999-999-9999",
        graduationYear: 2022,
    },
    // Add more registrants as needed
];
  


const Verification = (props) => {
    const [formData, setFormData] = useState({
        "fullname": '',
        "code": ''
    })

    const [displayErrMsg, setDisplayErrMsg] = useState({
        "fullname": false,
        "code": false
    })

    const updateForm = (event) => {
        const {name, value} = event.target
        /* console.log(`${name}: ${value}`); */
        setFormData(oldFormData => ({
            ...oldFormData,
            [name]: value
        }))
    }

    const toggleErrorMsg = (inputField, validity) => {
        setDisplayErrMsg(oldDisplayState => ({
            ...oldDisplayState,
            [inputField]: validity
        }))
    }

    const validateForm = () => {
        let isFormValid = true

        let isInputValid = formData.fullname !== ''
        isFormValid = isFormValid && isInputValid
        toggleErrorMsg('fullname', !isInputValid)

        isInputValid = formData.code !== ''
        isFormValid = isFormValid && isInputValid
        toggleErrorMsg('code', !isInputValid)

        return isFormValid
    }

    const handleVerify = (event) => {
        event.preventDefault()
        const isFormValid = validateForm()
        if (isFormValid) {
            console.log('Valid: ', isFormValid)
            console.log(formData);
        }
        
    }

    return (
        <div className="verification-page mt-10">
            <div className='verification-content flex justify-center items-center px-5'>
                <div className='verification-box bg-[#FEF4EA] py-10 px-5 rounded-lg w-full max-w-lg md:p-10'>
                    <h1 className='text-center'>
                        <span className="text-sm text-[#232A49] md:text-lg">
                            Schvarsity Event
                        </span>
                        <span className="font-bold text-[#232A49] text-lg block mt-1 md:text-xl">
                            Verification Form
                        </span>
                    </h1>


                    <form className="mt-10">
                        <div>
                            <label htmlFor="fullname" className="text-[#232A49] text-sm font-normal md:text-lg">
                                Name
                            </label>

                            <select 
                                name="fullname"
                                id="fullname"
                                className="block w-full p-2 mt-1 bg-[#efefef] text-sm border-[1.5px] border-[#232A49] rounded-md"
                                onChange={updateForm}
                                value={formData.fullname}
                            >
                                <option value=''></option>

                                {registrants.map(registrant => (
                                    <option key={registrant.id} className="border-[#232A49]" value={registrant.fullname}>
                                        {registrant.fullname}
                                    </option>
                                ))}
                            </select>

                            {
                                displayErrMsg.fullname &&
                                <small className="text-[#E4572E]">
                                    Select your name
                                </small>
                            }
                        </div>

                        <div className="mt-5">
                            <label htmlFor="code" className="text-[#232A49] font-normal md:text-lg">
                                Code
                            </label>

                            <input
                                type="text"
                                name="code"
                                id="code"
                                className="block p-2 mt-1 w-full bg-[#efefef] border-[1.5px] border-[#232A49] rounded-md"
                                onChange={updateForm}
                                value={formData.code}
                            />

                            {
                                displayErrMsg.code &&
                                <small className="text-[#E4572E]">
                                    Enter a code
                                </small>
                            }
                        </div>
                        
                        <div className="input-field mt-10">
                            <button type="submit" className="submit-btn" onClick={handleVerify}>
                                Verify
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Verification