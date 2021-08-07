
import './App.css';
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import Form from "./Components/Form";
import Home from "./Components/Home";
import Artworks from "./Components/Artworks";
import {useState,useEffect} from "react"
import Piece from "./Components/Piece"
import Artists from "./Components/Artists"
import ArtistPiece from "./Components/ArtistPiece"
import Museums from "./Components/Museums"
import MuseumPiece from "./Components/MuseumPiece"


function App() {
  const [artworks,setArtworks]=useState([])
  const [artists, setArtists]=useState([])
  const [museums, setMuseums]=useState([])


    useEffect(()=>{
        async function fetchData(){
        const res=await fetch("https://cryptic-chamber-54953.herokuapp.com/artworks")
        const artworkData=await res.json()
        setArtworks(artworkData)
    }fetchData()
},[])

    useEffect(()=>{
      async function fetchData(){
      const res=await fetch("https://cryptic-chamber-54953.herokuapp.com/artists")
      const artistData=await res.json()
      setArtists(artistData)
  }fetchData()
},[])

    useEffect(()=>{
      async function fetchData(){
      const res=await fetch("https://cryptic-chamber-54953.herokuapp.com/museums")
      const museumData=await res.json()
      setMuseums(museumData)
  }fetchData()
},[])


  return(
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/form" component={()=><Form artworks={artworks} setArtworks={setArtworks} artists={artists} setArtists={setArtists} museums={museums} setMuseums={setMuseums}/>}/>
            <Route exact path="/" component={()=><Home/>}/>
            <Route exact path="/artists" component={()=><Artists artists={artists} setArtists={setArtists}/>}/>
            <Route exact path="/museums" component={()=><Museums museums={museums} setMuseums={setMuseums}/>}/>
            <Route exact path="/artworks" component={()=><Artworks artworks={artworks} setArtworks={setArtworks} artists={artists} museums={museums}/>}/>
            {artworks.map(item=>{return <Route exact path={`/artworks/${item.id}`} component={()=><Piece  key={item.id} piece={item} setArtworks={setArtworks} artworks={artworks}/>}/>})}
            {artists.map(item=>{return <Route exact path={`/artists/${item.id}`} component={()=><ArtistPiece artist={item} artists={artists} artworks={artworks}/>}/>})}
            {museums.map(item=>{return <Route exact path={`/museums/${item.id}`} component={()=><MuseumPiece museum={item} museums={museums} artworks={artworks}/>}/>})}
          </Switch>
      </Router>
    </div>
  );
}

export default App;
