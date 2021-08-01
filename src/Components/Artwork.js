

function Artwork({artwork}){
    return(
        <div className="card" style={{width: "18rem", margin:"5rem" }}>
            <img className="card-img-top" src={artwork.image_url} alt="artwork"/>
            <div className="card-body">
                <p className="card-text">
                    {artwork.name}
                    <br/>
                    {artwork.artist.name}
                    <br/>
                    {artwork.year}
                    <br/>
                    {artwork.museum.name}
                    <br/>
                    <a className="view" href={`artworks/${artwork.id}`}>View Artwork</a>
                </p>
            </div>
        </div>
    )
}
export default Artwork