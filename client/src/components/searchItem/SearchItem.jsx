import './searchItem.css'

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="../src/photos/room1.jpg" 
        className='siImg'
        alt="" 
        />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
                Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
                Entire studio+ 1 bathroom + 21m<sup>2</sup> full bed
            </span>
            <span className="siCancelOp">Free Cancellation</span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$134</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className='siCheckButton'>See availability</button>
            </div>
        </div>
    </div>
)
}

export default SearchItem