
import Navbar from "./Navbar"
import Artwork from "./Artwork"

function Artworks({artworks}){
    



    return(
        <div className="artworks">
            <Navbar/>
            <div className="card-holder row row-cols-1 row-cols-md-3">
                {artworks.map((artwork)=><Artwork key={artwork.id} artwork={artwork}/>)}           
            </div>
        </div>
    );
}
export default Artworks