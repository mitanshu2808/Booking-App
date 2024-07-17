import './propertyList.css'

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <div className="overflow">
          <img src="../src/photos/hotel.jpg" className="pListImg" />
        </div>
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>213 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <div className="overflow">
          <img src="../src/photos/apartment.jpg" className="pListImg" />
        </div>
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>56 apartments</h2>
        </div>
      </div>
      <div className="pListItem">
        <div className="overflow">
          <img src="../src/photos/resort.jpg" className="pListImg" />
        </div>
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>45 resorts</h2>
        </div>
      </div>
      <div className="pListItem">
        <div className="overflow">
          <img src="../src/photos/villa.jpg" className="pListImg" />
        </div>
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>69 villas</h2>
        </div>
      </div>
      <div className="pListItem">
        <div className="overflow">
          <img src="../src/photos/cabin.jpg" className="pListImg" />
        </div>
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>89 cabins</h2>
        </div>
      </div>
    </div>
  )
}

export default PropertyList