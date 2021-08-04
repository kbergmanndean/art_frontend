import Navbar from "./Navbar"
import {useHistory} from 'react-router-dom'
import {useState} from "react"

function Piece({piece, setArtworks, artworks}){
    const [comment,setComment]=useState("")
    const [comments,setComments]=useState(piece.comments.map((comment)=>comment.comment))

    
    const updateComments=()=>{
        const updatedComments=[...comments,comment]
        setComments(updatedComments)
    }

    async function handleSubmit(e){
        e.preventDefault();
        await fetch(`http://localhost:3000/comments`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({artwork_id: piece.id, comment:comment})
        });updateComments();
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
        <div className="piece-page-whole">
        <Navbar/>
        <div className="pieceInfo">
            
            <h4>{piece.name}</h4>
            <h5>{piece.artist.name}</h5>
            <div>
                {piece.year}
                <br/>
                {piece.artist.dates}
                <br/>
                {piece.museum.name}
                <br/>
                {piece.museum.location}
                <br/>
                <br/>
                <button className="btn btn-dark" onClick={()=>handleDelete(piece.id)}>Remove Artwork</button>
                <br/>
                <br/>
                <form onSubmit={handleSubmit}>
                <p>Add a Comment:</p>
                <textarea onChange={(e)=>setComment(e.target.value)} value={comment} key={comment.id}></textarea>
                <br/>
                <button className="btn btn-dark" type="submit">Submit</button>
                </form>
            </div>
            
        </div>
        <div className="pieceImage">
        <img src={piece.image_url} alt="artwork"/>
        </div>
        <div className="comment-section">
            <h4>Comments</h4>
            <ul>
                {comments.map(item=>{return <li key={item.id}>{item}</li>})}
                
            </ul>
        </div>
        </div>

    )
}

export default Piece