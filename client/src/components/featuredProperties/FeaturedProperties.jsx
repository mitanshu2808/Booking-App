import './featuredProperties.css'

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img src="../src/photos/hotel1.jpg" className="fpImg" />
        <span className="fpName">Hilton Hotels & Resorts</span>
        <span className="fpCity">Virginia</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>9.0</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="../src/photos/hotel2.jpg" className="fpImg" />
        <span className="fpName">Marriott International</span>
        <span className="fpCity">Washington DC</span>
        <span className="fpPrice">Starting from $190</span>
        <div className="fpRating">
          <button>9.5</button>
          <span>Brilliant</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="../src/photos/hotel3.jpg" className="fpImg" />
        <span className="fpName">Ritz-Carlton</span>
        <span className="fpCity">Paris</span>
        <span className="fpPrice">Starting from $90</span>
        <div className="fpRating">
          <button>8.0</button>
          <span>Decent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="../src/photos/hotel4.jpg" className="fpImg" />
        <span className="fpName">Holiday Inn</span>
        <span className="fpCity">Memphis</span>
        <span className="fpPrice">Starting from $100</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Better</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties