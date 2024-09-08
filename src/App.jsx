import { Hero, Navbar } from './components'

const App = () => (
    <div className="bg-primary font-poppins md:px-12">
        <div className='container p-6'>
          <Navbar />
        </div>

        <div className='container p-6'>
          <Hero />
        </div> 
    </div>
  )

export default App