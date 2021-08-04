
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


    return(
        <div className="artworks">
            <Navbar/>
            <br/>
            <div className="sort-filter">
            <div id="sortBox">
                <a className="btn btn-dark sort" href="#" role="button" onClick={sortName}>Sort by Name</a>
                <a className="btn btn-dark sort" href="#" role="button" onClick={sortArtist}>Sort by Artist</a>
            </div>
                <div className="dropdown">
            <Dropdown>
                <Dropdown.Toggle variant="secondary" className="dropdown-basic">
                    Filter by Artist
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item value='All' onClick={()=>setArtist('All')}>All</Dropdown.Item>
                    {artists.map(artistItem=>{return(<Dropdown.Item value={artistItem.name} onClick={()=>setArtist(artistItem.name)}>{artistItem.name}</Dropdown.Item>)})}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" className="dropdown-basic">
                    Filter by Museum
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item value='All' onClick={()=>setMuseum('All')}>All</Dropdown.Item>
                    {museums.map(museumItem=>{return(<Dropdown.Item value={museumItem.name} onClick={()=>setMuseum(museumItem.name)}>{museumItem.name}</Dropdown.Item>)})}
                </Dropdown.Menu>
            </Dropdown>
            </div>
            </div>
            <div className="card-holder row row-cols-1 row-cols-md-3">
                {artworkGrid.length!==0 ? artworkGrid: <div id="no-result"><h1>No Result</h1></div>}
                    
            </div>
        </div>
        
        
    );
}
export default Artworks