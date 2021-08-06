import Navbar from './Navbar'

function Artists({artists,setArtists}){

    return(
        <div className="artists-page">
        <Navbar/>
        <div className="circle"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="artist-list-page">
            <h2 className="header">Artists</h2>
        <ul id="artist-list">{artists.map((artist)=>{return<div><a className="artist" href={`/artists/${artist.id}`} key={artist.id}>{artist.name}</a><br/></div>})}</ul>
        </div>
        {/* <div className="circle"></div> */}
        </div>
    )

}
export default Artists
