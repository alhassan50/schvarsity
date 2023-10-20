import './App.css';
import logo from './Assets/logo.png'
import Registration from './Pages/Registration'
import Popdown from './Components/Popdown'
import { useEffect, useState } from 'react';

function App() {
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
    <div className="App">
      <header>
        <figure className='logo-container'>
          <img src={logo} alt='schvarsity logo' />
        </figure>
      </header>

      <main>
        <Registration />
      </main>

      {isDisplayed && <Popdown turnOffPopup={toggleDisplay}/>}
    </div>
  );
}

export default App;
