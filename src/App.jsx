import ThemeProvider from './provider/ThemeProvider'
import Navbar from './Navbar'
import Hero from './Hero'
import Service from './Service'
import Stats from './Stats'
import LatestService from './LatestService'
import Skill from './Skill'
import Education from './Education'
import Experience from './Experience'
import LogoGrid from './LogoGrid'
import Portfolio from './Portfolio'
import MySkill from './MySkill'
import Pricing from './Pricing'
import Testimonial from './Testimonial'
import Blog from './Blog'
import Footer from './Footer'

function App() { 

  return (
    <ThemeProvider>
    <>
      <Navbar/>
      <Hero/>
      <Service/>
      <Stats/>
      <LatestService/>
      <Skill/>
      <Education/>
      <Experience/>
      <LogoGrid/>
      <Portfolio/>
      <MySkill/>
      <Pricing/>
      <Testimonial/>
      <Blog/>
      <Footer/>
    </>
    </ThemeProvider>
  )
}

export default App
