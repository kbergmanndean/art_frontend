

import background from "./pictures/kusama.jpg"

function Home (){
    return(
    <div className="homePage" style={{backgroundImage:`url(${background})`}}> 
    <div>
        <h1 id="homeTitle">Welcome</h1>
    </div>
    <div className="buttons">
    <a className="btn btn-dark" href="/artworks" role="button">View Artworks</a>
    <br/>
    <br/>
    <a className="btn btn-dark" href="/form" role="button">Add an Artwork</a>
    <br/>
    <br/>
    <a className="btn btn-dark" href="/artists" role="button">View Artists</a>
    <br/>
    <br/>
    <a className="btn btn-dark" href="/museums" role="button">View Museums</a>
    </div>
    <div>
        <p id="kusama-caption">Yayoi Kusama,"The Spirit of the Pumpkins Descended into the Heavens."</p>
    </div>
    </div>
    );
}
export default Home