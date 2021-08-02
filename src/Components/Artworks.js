
import Navbar from "./Navbar"
import Artwork from "./Artwork"
import 'bootstrap';
import {useState} from 'react'
import 'bootstrap/dist/js/bootstrap.js';
import background from "./pictures/polkadot2.jpeg"
import Dropdown from "react-bootstrap/Dropdown"

function Artworks({artworks,artists,museums}){
    const [artist,setArtist]=useState('All')
    const [museum,setMuseum]=useState('All')

    function sortName(){
        artworks.sort((a, b) => (a.name > b.name) ? 1 : -1)
    }
    function sortArtist(){
        artworks.sort((a, b) => (a.artist.name > b.artist.name) ? 1 : -1)
    }

    const filterArtists=artworks.filter(item=>item.artist.name===artist)
    const filterMuseum=artworks.filter(item=>item.museum.name===museum)
    const filterBoth=filterArtists.filter(item=>item.museum.name===museum)

    let artworkGrid
    if (artist==='All' && museum==='All'){
        artworkGrid=artworks.map((artwork)=><Artwork key={artwork.id} artwork={artwork}/>)
    }
    else if (artist!=='All' && museum==='All'){
        artworkGrid=filterArtists.map((artwork)=><Artwork key={artwork.id} artwork={artwork}/>)
    }
    else if (artist==='All' && museum!=='All'){
        artworkGrid=filterMuseum.map((artwork)=><Artwork key={artwork.id} artwork={artwork}/>)
    }
    else {
        artworkGrid=filterBoth.map((artwork)=><Artwork key={artwork.id} artwork={artwork}/>)
    }

    // if (artist!=='All') {
    //     artworkGrid=filterArtists.map((artwork)=><Artwork key={artwork.id} artwork={artwork}/>)
    // }
    // else if (museum!=='All'){
    //     artworkGrid=filterMuseum.map((artwork)=><Artwork key={artwork.id} artwork={artwork}/>)
    // }
    // else{
    //     artworkGrid=artworks.map((artwork)=><Artwork key={artwork.id} artwork={artwork}/>)
    // }

    return(
        <div className="artworks" style={{backgroundImage:`url(${background})`}}>
        
            <Navbar/>
            <br/>
            <div id="sortBox">
                <a className="sort" href="#" onClick={sortName}>Sort by Name</a>
                <br/>
                <a className="sort" href="#" onClick={sortArtist}>Sort by Artist</a>
            </div>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Filter by Artist
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item value='All' onClick={()=>setArtist('All')}>All</Dropdown.Item>
                    {artists.map(artistItem=>{return(<Dropdown.Item value={artistItem.name} onClick={()=>setArtist(artistItem.name)}>{artistItem.name}</Dropdown.Item>)})}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Filter by Museum
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item value='All' onClick={()=>setMuseum('All')}>All</Dropdown.Item>
                    {museums.map(museumItem=>{return(<Dropdown.Item value={museumItem.name} onClick={()=>setMuseum(museumItem.name)}>{museumItem.name}</Dropdown.Item>)})}
                </Dropdown.Menu>
            </Dropdown>
            <div className="card-holder row row-cols-1 row-cols-md-3">
                {artworkGrid.length!==0 ? artworkGrid: <div id="no-result" style={{backgroundImage:`url(${background})`}}><h1>No Result</h1></div>}
                     {console.log(artworkGrid)}
            </div>
        </div>
        
        
    );
}
export default Artworks