import Hero from '../Components/Hero';
import Form from '../Components/Form';
import Popdown from '../Components/Popdown';
import { useEffect, useState } from 'react';

const Registration = (props) => {
const [isDisplayed, setIsDisplayed] = useState(false)

const toggleDisplay = () => {
setIsDisplayed(prevIsDisplay => !prevIsDisplay);
}

useEffect(() => {
    const handleMouseMove = (event) => {
    setTimeout(() => {
        toggleDisplay()
        /* console.log('Mouse clicked:', event.clientX, event.clientY);  */
    }, 2500);
    };

    window.addEventListener('click', handleMouseMove, {once: true});

    // Cleanup function to remove the event listener
    return () => {
    window.removeEventListener('click', handleMouseMove);
    console.log('bye')
    };
}, [])

return (
    <div>
        <main>
            <div className="registration-content">
                <Hero />
                <Form 
                    showSuccessMessage={props.showSuccessMessage}
                />
            </div>
        </main>

        {isDisplayed && <Popdown turnOffPopup={toggleDisplay}/>}
    </div>
)
}

export default Registration