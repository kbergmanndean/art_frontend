
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Form from "./Components/Form";
import Home from "./Components/Home";
import Artworks from "./Components/Artworks";
import {useState,useEffect} from "react"
import Piece from "./Components/Piece"



function App() {
  const [artworks,setArtworks]=useState([])
  const [artists, setArtists]=useState([])
  const [museums, setMuseums]=useState([])


    useEffect(()=>{
        async function fetchData(){
        const res=await fetch("http://localhost:3000/artworks")
        const artworkData=await res.json()
        setArtworks(artworkData)
    }fetchData()
},[])

    useEffect(()=>{
      async function fetchData(){
      const res=await fetch("http://localhost:3000/artists")
      const artistData=await res.json()
      setArtists(artistData)
  }fetchData()
},[])

    useEffect(()=>{
      async function fetchData(){
      const res=await fetch("http://localhost:3000/museums")
      const museumData=await res.json()
      setMuseums(museumData)
  }fetchData()
},[])


  return(
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/form" component={()=><Form artworks={artworks} setArtworks={setArtworks} artists={artists} museums={museums}/>}/>
            <Route exact path="/" component={()=><Home/>}/>
            <Route exact path="/artworks" component={()=><Artworks artworks={artworks} setArtworks={setArtworks}/>}/>
            {artworks.map(item=>{return <Route exact path={`/artworks/${item.id}`} component={()=><Piece  key={item.id} piece={item} setArtworks={setArtworks} artworks={artworks}/>}/>})}
          </Switch>
      </Router>
    </div>
  );
}

export default App;
