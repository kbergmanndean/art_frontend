

function Artwork({artwork}){
    return(
        <div className="card" style={{width: "22rem", margin:"4rem" }}>
            <img className="card-img-top" src={artwork.image_url} alt="artwork"/>
            <div className="card-body">
            <h4>{artwork.name}</h4>
            <h5>{artwork.artist.name}</h5>
                <p className="card-text">
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