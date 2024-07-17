import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import './home.css'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <div className="homeTitle">Browse by property type</div>
        <PropertyList/>
        <div className="homeTitle">Homes guests love</div>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div> 
    </div>
  )
}

export default Home