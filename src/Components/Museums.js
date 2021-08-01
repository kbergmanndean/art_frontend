import Navbar from "./Navbar"

function Museums({museums,setMuseums}){
    return(
        <div className="museums-page">
        <Navbar/>
        <div className="museums-list-page">
        <ul id="museum-list">{museums.map((museum)=>{return<div><a className="museum" href={`/museums/${museum.id}`} key={museum.id}>{museum.name}</a><br/></div>})}</ul>
        </div>
        </div>
    )

}
export default Museums