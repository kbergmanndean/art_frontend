

import background from "./pictures/kusama.jpg"

function Home (){
    return(
    <div className="home" style={{backgroundImage:`url(${background})`}}> 
    <div>
        <h1 id="home-title">Welcome</h1>
        <div className="home-subtitle-container">
        <h3 id="home-subtitle">to an interactive museum of art by women</h3>
        </div>
    </div>
    <div className="buttons">
    <a className="btn btn-dark" href="/art_frontend/#/artworks" role="button">View Artworks</a>
    <br/>
    <br/>
    <a className="btn btn-dark" href="/art_frontend/#/form" role="button">Add an Artwork</a>
    <br/>
    <br/>
    <a className="btn btn-dark" href="/art_frontend/#/artists" role="button">View Artists</a>
    <br/>
    <br/>
    <a className="btn btn-dark" href="/art_frontend/#/museums" role="button">View Museums</a>
    </div>
    <div className="home-caption">
        <p id="kusama-caption">Yayoi Kusama,"The Spirit of the Pumpkins Descended into the Heavens."</p>
    </div>
    </div>
    );
}
export default Home