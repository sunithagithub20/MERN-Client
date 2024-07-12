import { useState } from "react"

export default function Home(){
    const [name,setName]=useState("")
    const [ShowName,SetShowName]=useState("");
    const handleChange=(e)=>{
        setName(e.target.value);
    }
    const handleButton=()=>{
        SetShowName(`Welcome,${name}`);
    }
    return (
        <div> 
            <input type="text" placeholder="Enter Name " value={name} onChange={handleChange}/>
            <button type="button" className="bg-blue-300 border border-1 "onClick={handleButton}>Submit</button>
           <p> {ShowName}</p> 
        </div>
    )
}