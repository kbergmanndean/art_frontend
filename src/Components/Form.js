import {useState} from 'react'
import Navbar from "./Navbar"
import {useHistory} from "react-router-dom"
import ArtistForm from "./ArtistForm"
import MuseumForm from "./MuseumForm"

function Form({artworks,setArtworks, artists ,museums, setMuseums, setArtists}){
    const [name, setName]=useState("")
    const [artist, setArtist]=useState(0)
    const [year,setYear]=useState(0)
    const [imageURL, setImageURL]=useState("")
    const [museum, setMuseum]=useState(0)
    const [showArtist, setShowArtist]=useState(false)
    const [showMuseum,setShowMuseum]=useState(false)

    const history = useHistory();

    const addNewPiece=pieceAdded=> {const newArray=[...artworks, pieceAdded]
        setArtworks(newArray)
    }
    async function handleSubmit(e){
        e.preventDefault()
        const newPiece={name:name,artist_id:artist,year:year, museum_id:museum, image_url:imageURL}
        const res=await fetch("https://cryptic-chamber-54953.herokuapp.com/artworks",{
            headers:{"Content-Type":"application/json"},
            method:"POST",
            body:JSON.stringify(newPiece)
        })
        const pieceAdded= await res.json()
        addNewPiece(pieceAdded);
        const routeChange = () =>{ 
        let path = `/artworks`; 
        history.push(path);}
        routeChange();
    }
    function toggleArtist(){
        setShowArtist(!showArtist)
    }
    function toggleMuseum(){
        setShowMuseum(!showMuseum)
    }

    return(
        <div id="form">
            <Navbar/>
        <div id="form-page">
            <br/>
            <h1>Add a New Artwork</h1>
        <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" onChange={(e)=>setName(e.target.value)} value={name}/>
            </div>
            <div className="form-group">
                <label htmlFor="artist">Artist</label>
                <select type="text" className="form-control" id="artist" onChange={(e)=>setArtist(parseInt(e.target.value))}>
                    {artists.map((artist)=><option value={artist.id}>{artist.name}</option>)}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="year">Year</label>
                <input type="text" className="form-control" id="year" onChange={(e)=>setYear(parseInt(e.target.value))} value={year}/>
            </div>
            <div className="form-group">
                <label htmlFor="museum">Museum</label>
                <select type="text" className="form-control" id="museum" onChange={(e)=>setMuseum(parseInt(e.target.value))}>
                    {museums.map((museum)=><option value={museum.id}>{museum.name}</option>)}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image URL</label>
                <input type="text" className="form-control" id="image" onChange={(e)=>setImageURL(e.target.value)} value={imageURL}/>
            </div>
            <br/>
            <button type="submit" className="btn form-submit">Submit</button>
        </form>
        <br/>
        <h3>Don't see your Museum or Artist?</h3>
        <br/>
        <button onClick={toggleArtist}className="btn">{showArtist ? "Hide Form" : "Add Artist"}</button>
        <button onClick={toggleMuseum}className="btn">{showMuseum ? "Hide Form" : "Add Museum"}</button>
        <br/>
        <br/>
        {showArtist?<div><ArtistForm artists={artists} setArtists={setArtists}/></div>:null}
        {showMuseum?<div><MuseumForm museums={museums} setMuseums={setMuseums}/></div>:null}
        </div>
        </div>
    )
}

export default Form