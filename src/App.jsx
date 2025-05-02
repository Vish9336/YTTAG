import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputText,setInputText]=useState("") 
  const [chips,setChips]=useState([]);

  const handleKeyDown=(e)=>{
    if(e.key=="Enter" && inputText.trim()!=''){
      setChips((prev)=>{
        return [...prev,inputText]
      })
      setInputText("");
    }
  }

  const handleDelete=(index)=>{
    let copyChips=[...chips];
    copyChips.splice(index,1)
    console.log("copyChips is ::",copyChips);
    setChips(copyChips)
  }

  return (
    <>
      <div style={{margin:"50px auto",textAlign:'center',fontSize:'40px'}}>Chips Input
        <br />
        <input type="text" style={{width:'400px'}} value={inputText} onChange={(e)=>{
          setInputText(e.target.value.trim()) 
        }} onKeyDown={(e)=>{
          handleKeyDown(e)
        }}   
        />
        <div style={{display:"flex",margin:"50px auto",justifyContent:'center',fontSize:'40px'}}>
          {chips.map((item,index)=>
          <div style={{margin:"10px 10px", backgroundColor:'gray',borderRadius:'5px'}}>{item} 
          <button style={{fontSize:'30px',borderRadius:'15px'}} onClick={()=>handleDelete(index)}>X</button></div>
          )}
        </div>
       
      </div>
     
      
    </>
  )
}

export default App
