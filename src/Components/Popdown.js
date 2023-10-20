import { useEffect, useState } from "react"

const Popdown = (props) => {

    const [animationClassName, setAnimationClassName] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setAnimationClassName('move-up')
        }, 2500);
    }, []);


    return (
        <div className={`popup-container ${animationClassName}`}>
            <div className="popup-content">
                <p>
                    <b>Only 70 Seats Available!</b> <br/> Join Us on October 13, 2023
                </p>
                <div 
                    className="close-btn" 
                    onClick={props.turnOffPopup}
                >
                    <i className="fas fa-times"></i>
                </div>
            </div>
        </div>
    )
}

export default Popdown