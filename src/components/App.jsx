import '../assets/style/App.css'
import Home from './Home';
import Services from './Services';
import Contacts from './Contacts';
import Works from './Works';

function App() {

  return (
    <div className='app'>
      <Home />
      <Services />
      <Contacts />
      <Works />
    </div>
  )
}

export default App
