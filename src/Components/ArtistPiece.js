import Navbar from "./Navbar"

function ArtistPiece({artworks,artist}){

const filterArt=artworks.filter(artwork=>artwork.artist.id==artist.id)

    return(
        <div>
            <Navbar/>
        <div id="artistPage">
        <h1>{artist.name}</h1>
        <h4>{artist.dates}</h4>
        </div>
        <div id= "artistPiece">
        {filterArt.map(artwork=>{return(
        <div>
            <h4>{artwork.name}</h4>
            <img src={artwork.image_url}></img>
        </div>
        )})}
        </div>
        </div>
    )
}
export default ArtistPiece