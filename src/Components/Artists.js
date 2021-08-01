import Navbar from './Navbar'

function Artists({artists,setArtists}){

    return(
        <div className="artists-page">
        <Navbar/>
        <ul id="artist-list">{artists.map((artist)=>{return<div><a className="artist" href={`/artists/${artist.id}`} key={artist.id}>{artist.name}</a><br/></div>})}</ul>
        </div>
    )

}
export default Artists
