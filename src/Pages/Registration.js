import Hero from '../Components/Hero';
import Form from '../Components/Form';

const Registration = (props) => {
    return (
        <div className="registration-content">
            <Hero />
            <Form 
                showSuccessMessage={props.showSuccessMessage}
            />
        </div>
    )
}

export default Registration