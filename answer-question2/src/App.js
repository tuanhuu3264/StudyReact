import Circle from "./Components/Circle.jsx"
import Circle1 from "./Components/Circle1.jsx";
import Circle2 from "./Components/Circle2.jsx";
import Button from "./Components/Button.jsx";
import {useState} from "react"; 
function App() {
  const [color,setColor]=useState("green"); 
  const next=()=>{
    if(color==="green") setColor("yellow");
    else if(color==="yellow") setColor("red");
    else setColor("green");
    console.log(color);
  }
  return (
    <>
    <Button onClick={next}>Next</Button>
    <div className="flex p-1">
      <Circle color={color}/>
      <Circle1 color={color}/>
      <Circle2 color={color}/>
      </div>
      </>
  );
}

export default App;
