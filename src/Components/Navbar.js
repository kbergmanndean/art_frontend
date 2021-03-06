
function Navbar (){
    return(
    <div >
    <nav className="navbar navbar-expand-lg navbar-light" id="navyellow">
  <div className="container-fluid">
    <a className="navbar-brand" href="/art_frontent/#">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/artworks">Artworks</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/artists">Artists</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/museums">Museums</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/form" tabIndex="-1" aria-disabled="true">Add an Artwork</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )}

export default Navbar