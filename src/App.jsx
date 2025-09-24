import './App.css'
import Carts from './Components/Carts'
import Navbar from './Components/Navber'
import Footer from './Components/Footer'   // Footer আলাদা ফাইল থেকে import করতে হবে
import ToogleBtns from './Components/ToogleBtns'

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Carts */}
      <Carts />
       <ToogleBtns></ToogleBtns>
      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
