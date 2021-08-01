import Navbar from "./Navbar"

function MuseumPiece({museum,museums,artworks}){

const filterArt=artworks.filter(artwork=>artwork.museum.id==museum.id)

    return(
        <div id="museum-piece-page">
            <Navbar/>
            <div>
        <div className="museumPage">
        <h1>{museum.name}</h1>
        <h4>{museum.location}</h4>
        </div>
        <div className="museumPiece">
        {filterArt.map(artwork=>{return(
        <div>
            <h4>{artwork.name}</h4>
            <h5>{artwork.artist.name}</h5>
            <h5>{artwork.year}</h5>
            <img src={artwork.image_url}></img>
        </div>
        )})}
        </div>
        </div>
        </div>
    )
}
export default MuseumPiece