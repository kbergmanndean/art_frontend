
import Navbar from "./Navbar"
import Artwork from "./Artwork"
import 'bootstrap';
import {useState} from 'react'
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';



function Artworks({artworks,artists}){
    const [artist,setArtist]=useState('All')

    function sortName(){
        artworks.sort((a, b) => (a.name > b.name) ? 1 : -1)
    }

    function sortArtist(){
        artworks.sort((a, b) => (a.artist.name > b.artist.name) ? 1 : -1)
    }

    return(
        <div className="artworks">
        <div>
            <Navbar/>
            <br/>
            <div id="sortBox">
                <a className="sort" href="#" onClick={sortName}>Sort by Name</a>
                <br/>
                <a className="sort" href="#" onClick={sortArtist}>Sort by Artist</a>
            </div>
            
        </div>

        <div className="container ">
            <div className="dropdrown btn-group">
                <button className="filter-btns btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Artist</button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button  value="All"  className="dropdown-item ">All</button>
                    <button  value="All"  className="dropdown-item ">All</button>
                    <button  value="All"  className="dropdown-item ">All</button>
                </div>
                <div className="dropdrown btn-group">
                    <button className="filter-btns btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Museum</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <button  value="All"  className="dropdown-item">All</button>
                            <button  value="All"  className="dropdown-item">All</button>
                            <button  value="All"  className="dropdown-item">All</button>
                        </div>
                </div>
            </div>
        
        </div>

            <div className="card-holder row row-cols-1 row-cols-md-3">
                {artworks.map((artwork)=><Artwork key={artwork.id} artwork={artwork}/>)}           
            </div>
        </div>
        
        
    );
}
export default Artworks