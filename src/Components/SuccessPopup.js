import verificationIcon from '../Assets/check.png'
import closeBtn from '../Assets/close.png'

const SuccessPopup = (props) => {
    return (
        <div className="success-popup-container">
            <div className="success-popup-content">
                <figure 
                    className="close-btn" 
                    onClick={props.closeSuccessMessage}
                >
                    <img src={closeBtn} alt='close btn'/>
                </figure>

                <figure className='verification-icon'>
                    <img src={verificationIcon} alt='verification icon'/>
                </figure>

                <h2>
                    Form Submitted!
                </h2>
            </div>
        </div>
    )
}

export default SuccessPopup