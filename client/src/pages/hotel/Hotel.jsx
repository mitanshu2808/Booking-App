import './hotel.css'
import Navbar from '../../components/navbar/Navbar.jsx'
import Header from '../../components/header/Header.jsx'
import MailList from '../../components/mailList/MailList.jsx'
import Footer from '../../components/footer/Footer.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const photos = [
    {
      src: '../src/photos/1.jpg'
    },
    {
      src: '../src/photos/2.jpg'
    },
    {
      src: '../src/photos/3.jpg'
    },
    {
      src: '../src/photos/4.jpg'
    },
    {
      src: '../src/photos/5.jpg'
    },
    {
      src: '../src/photos/6.jpg'
    },
  ]

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if(direction === 'l'){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    }
    else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove('l')}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className='sliderImg'/>
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove('r')}/>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent Distance - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi.
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img 
                onClick={()=>handleOpen(i)} 
                src={photo.src} alt="" 
                className='hotelImg' />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus rerum hic, temporibus assumenda cupiditate enim id?
                Incidunt dolorum, recusandae maiores numquam repellat ea hic possimus
                ab aliquam iste sed et.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of krakow,
                this property has an excellent location scoreof 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel