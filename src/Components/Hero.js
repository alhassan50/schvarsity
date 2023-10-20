import sharkboy from '../Assets/SHARK B-73510b8f 38.png'

const Hero = (props) => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <div className='mobile-hero-text'>
                    <h1>
                        Apply to your favorite Universities. 
                        US, Canada and UK Admissions with <br/>
                        <span id="schvarsity"> SchVarsity</span>
                    </h1>
                </div>

                <figure className='hero-figure'>
                    <img src={sharkboy} alt='sharkboy' />

                    <div className='desktop-hero-text'>
                        <h1>
                            Apply to your favorite Universities. US, Canada and UK Admissions With Schvarsity
                        </h1>
                    </div>
                </figure>
            </div>
        </div>
    )
}

export default Hero