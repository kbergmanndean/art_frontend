import Navbar from "./Navbar"
import {useHistory} from 'react-router-dom'
import {useState} from "react"

function Piece({piece, setArtworks, artworks}){
    const [comment,setComment]=useState("")
    const [comments,setComments]=useState([])

    
    const updateComments=()=>{
        const updatedComments=[...comments,comment]
        setComments(updatedComments)
    }

    async function handleSubmit(e){
            e.preventDefault();
            await fetch(`http://localhost:3000/artworks/${piece.id}`,{
            method:"PATCH",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({comments:comments})
        }); 
            updateComments();
            console.log(comments)
    }

    const history = useHistory();
    const routeChange = () =>{ 
        let path = `/artworks`; 
        history.push(path);
    }

    async function handleDelete(id){
        await fetch(`http://localhost:3000/artworks/${id}`,{
            method:"DELETE",
        })
            .then(()=>{
            const filteredArt=artworks.filter(artwork=>artwork.id!==id)
            setArtworks(filteredArt)
            routeChange();
            })
        }

    return(
        <div>
        <Navbar/>
        <div className="pieceInfo">
            
            <h4>{piece.name}</h4>
            <div>
                {piece.year}
                <br/>
                {piece.artist.name}
                <br/>
                {piece.artist.dates}
                <br/>
                {piece.museum.name}
                <br/>
                {piece.museum.location}
                <br/>
                <br/>
                <button onClick={()=>handleDelete(piece.id)}>Remove Artwork</button>
                <br/>
                <br/>
                <form onSubmit={handleSubmit}>
                <p>Add a Comment:</p>
                <textarea onChange={(e)=>setComment(e.target.value)} value={comment}></textarea>
                <br/>
                <button type="submit">Submit</button>
                </form>
            </div>
            
        </div>
        <div className="piecePage">
        <img src={piece.image_url} alt="artwork"/>
        </div>
        <div>
            <h4>Comments</h4>
            <ul>{comments.map(item=>{return <li>{item}</li>})}
                
            </ul>
        </div>
        </div>

    )
}

export default Piece