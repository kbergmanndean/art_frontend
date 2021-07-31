import {useState} from 'react'
import Navbar from "./Navbar"
import {useHistory} from "react-router-dom"

function Form({artworks,setArtworks, artists,museums}){
    const [name, setName]=useState("")
    const [artist_id, setArtist]=useState(0)
    const [year,setYear]=useState(0)
    const [museum_id, setMuseum]=useState(0)
    const [imageURL, setImageURL]=useState("")

    const history = useHistory();

    const addNewPiece=pieceAdded=> {const newArray=[...artworks, pieceAdded]
        setArtworks(newArray)
    }
    async function handleSubmit(e){
        e.preventDefault()
        const newPiece={name:name,artist_id:artist_id,year:year,museum_id:museum_id, image_url:imageURL}
        const res=await fetch("http://localhost:3000/artworks",{
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

    return(
        <div>
        <div id="form-page">
            <Navbar/>
            <h1>Add a New Artwork</h1>
        <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" onChange={(e)=>setName(e.target.value)} value={name}/>
            </div>
            <div className="form-group">
                <label htmlFor ="artist">Artist_ID</label>
                <input type="text" className="form-control" id="artist" onChange={(e)=>setArtist(e.target.value)} value={artist_id}/>
            </div>
            <div className="form-group">
                <label htmlFor="year">Year</label>
                <input type="text" className="form-control" id="year" onChange={(e)=>setYear(e.target.value)} value={year}/>
            </div>
            <div className="form-group">
                <label htmlFor="museum">Museum_ID</label>
                <input type="text" className="form-control" id="museum" onChange={(e)=>setMuseum(e.target.value)} value={museum_id}/>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image URL</label>
                <input type="text" className="form-control" id="image" onChange={(e)=>setImageURL(e.target.value)} value={imageURL}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        <div id="artist-index">
            <h4>Artist IDs</h4>
            <ul>
            {artists.map((artist)=>{return <li>{artist.id}-{artist.name}</li>})}
            </ul>
        </div>
        <div id="museum-index">
            <h4>Museum IDs</h4>
            <ul>
                {museums.map((museum)=>{return <li>{museum.id}-{museum.name}</li>})}
            </ul>
        </div>
        </div>
    )
}

export default Form