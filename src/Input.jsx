import React, { useState } from "react";
// import Task from "./components/Task";
import "./index.css";
 

export default function Input() {

      const  [ age, setAge ] = useState(1)
      const  [ name, setName ] = useState("Dear Iris")
      const  [ title, setTitle ] = useState("Happy Birthday")
      const  [ text, setText ] = useState( "Greetings from Anne")
      const [showForms, setShowForms] = useState(true)
      const [showDiv, setShowDiv] = useState({opacity:'1.0'})     // useState({backgroundColor:'green'})

   
     const toggleFunction = (par) => {
    
     // console.log(par)
     // return( setShowDiv({opacity:'0.3'}))
     return(setShowDiv({opacity:par}))
     }

      const toggleForms= (event)=> {
       // setShowForms(true) ? console.log("hallo") : console.log("nein")
        setShowForms(!showForms)
      
      }

      const changeAge =(event)=>{
        const setAgeNew = event.target.value
        setAge(setAgeNew)
      }
      const changeTitle = (event)=>{
        const setTitleNew = event.target.value
        setTitle(setTitleNew)
      // console.log(setAge) 
      }

      const changeName = (event)=>{
        const setNameNew = event.target.value
        setName(setNameNew)
      // console.log(setAge)
      }

      const changeText = (event)=>{
        const setTextNew = event.target.value
        setText(setTextNew)
      // console.log(setAge)
      }
        
      
    const handleSubmit = (event) => {
    event.preventDefault();
    age.toString()
   
    const testUrl = `http://d-berkenheger.de/index.php?article_id=${age}`;
    // window.location.href= testUrl;
    console.log(testUrl)
    /*
    alert(`Your state values: \n 
    
    Url: ${name} \n 
    Age: ${age} \n 
    {window.location.replace('https://targetx.de'}
    You can replace this alert with your process`);
      */
    
    }
   
    
        
      return(     
      <>
      <div className="meindiv">
          <div className="meindiv2"><h1>{age}</h1></div>
          <div className="meindiv3"><h2>{title}</h2></div>
          <div className="meindiv4"><h3>{name}</h3> </div>
          <div className="meindiv5"><h4>{text}</h4></div>

      <div className="meindiv">
          <form onSubmit={handleSubmit}>
            <div className="meindiv2" id="id2"  style={showDiv}  >  
                <input className="input" onChange={changeAge} />  
            </div>
            <div className="meindiv3" id="id3"  style={showDiv}  >  
                <input className="input" onChange={changeTitle} /> 
            </div>
            <div className="meindiv4" id="id4"  style={showDiv}  >  
                <input className="input" onChange={changeName} />  
            </div>
            <div className="meindiv5" id="id5"   style={showDiv}  >        
                <input className="input"  onChange={changeText} /> 
            </div>
            {/*-
            <div className="button2">  
          <button id="button1" type="submit">
          Submit
        </button>
        
        </div>
        */}
      </form>
      <div className="button2">  
              <button  
                onClick={()=>{
                  showForms ?
                  toggleFunction(0.0) : toggleFunction(1.0) // opacity either transparent or 100% 
                  setShowForms(!showForms)   // toggle true or false
              }}
              >
              Show/Hide Forms
              </button>
      </div>
      
    
      </div>
      
        

      </div>
      </>
    )
}
