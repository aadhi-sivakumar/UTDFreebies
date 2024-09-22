import Navbar from './components/Navbar'
import FeaturedItem from './FeaturedItem'
import Card from './components/Card'


function App() {
  return (
    <>
    <Navbar/>
    <div className='flex'>
    <FeaturedItem/>
    <Card/>
    </div>
    </>
  )
}

export default App
