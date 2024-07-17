import './featured.css'

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="../src/photos/wellington.jpg" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Wellington</h1>
          <h2>55 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="../src/photos/dubai.jpg" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Dubai</h1>
          <h2>112 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="../src/photos/sydney.jpg" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Sydney</h1>
          <h2>75 Properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured