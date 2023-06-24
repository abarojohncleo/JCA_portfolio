import '../assets/style/App.css'
import SideBar from './SideBar'
import Main from './Main'

function Home() {

  return (
    <div className='home' id='home'>
      <SideBar />
      <div className='divider'></div>
      <Main />
    </div>
  )
}

export default Home
