import {useState} from 'react'

function MuseumForm({museums,setMuseums}){
    const [name, setName]=useState("")
    const [location,setLocation]=useState("")

    const addNewMuseum=museumAdded=> {const newArray=[...museums, museumAdded]
        setMuseums(newArray)
    }
    async function handleSubmit(e){
        // e.preventDefault()
        const newMuseum={name:name,location:location}
        const res=await fetch("https://cryptic-chamber-54953.herokuapp.com/museums",{
            headers:{"Content-Type":"application/json"},
            method:"POST",
            body:JSON.stringify(newMuseum)
        })
        const museumAdded= await res.json()
        addNewMuseum(museumAdded);
    }

    return(
        
        <div>
            
            <h1>Add a New Museum</h1>
        <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" onChange={(e)=>setName(e.target.value)} value={name}/>
            </div>
            <div className="form-group">
                <label htmlFor="location">Location</label>
                <input type="text" className="form-control" id="location" onChange={(e)=>setLocation(e.target.value)} value={location}/>
            </div>
            <br/>
            <button type="submit" className="btn form-submit">Submit</button>
        </form>
        </div>
        
    )
}

export default MuseumForm