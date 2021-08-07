import {useState} from 'react'

function ArtistForm({artists, setArtists}){
    const [name, setName]=useState("")
    const [dates,setDates]=useState("")

    const addNewArtist=artistAdded=> {const newArray=[...artists, artistAdded]
        setArtists(newArray)
    }
    async function handleSubmit(e){
        // e.preventDefault()
        const newArtist={name:name,dates:dates}
        const res=await fetch("https://cryptic-chamber-54953.herokuapp.com/artists",{
            headers:{"Content-Type":"application/json"},
            method:"POST",
            body:JSON.stringify(newArtist)
        })
        const artistAdded= await res.json()
        addNewArtist(artistAdded);
    }

    return(
        
        <div>
            
            <h1>Add a New Artist</h1>
        <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" onChange={(e)=>setName(e.target.value)} value={name}/>
            </div>
            <div className="form-group">
                <label htmlFor="dates">Dates</label>
                <input type="text" className="form-control" id="dates" onChange={(e)=>setDates(e.target.value)} value={dates}/>
            </div>
            <br/>
            <button type="submit" className="btn form-submit">Submit</button>
        </form>
        </div>
        
    )
}

export default ArtistForm