import {useEffect, useState}from 'react'

function App() {
  const [toTop,setToTop]= useState(false);
  useEffect(()=>{ 
    const handleScroll=(e)=>{
      e.preventDefault();
      if(document.documentElement.scrollTop>0) setToTop(true); 
      else setToTop(false); 
    }
    document.addEventListener("scroll",handleScroll);
    
  }) 
  const handleToTop=(e)=>{ 
     window.scrollTo({top: 0, behavior:'smooth'});
  }
  return (
    <div className="App min-h-[200vh] relative">
    {toTop&&
    <div onClick={handleToTop} className=" fixed bottom-4 right-4 z-10 w-14 h-14 rounded-lg bg-gray-200 flex justify-center align-middle hover:bg-red-500 ">
    <img className="w-10 h-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABGklEQVR4nO3WSw7CMAwE0Dkh2cTygp4dJJB6iVaCTdkg+kscx0YeqRuqljw5bQeIRCIRofByuA4BmADMAAY4R7yWwyWGvhAuMbSCcIXhH4hp5Tf2NIkZwBVAXjk3eEJ8Yh5DBxDmMXQCYRZDBQhzGKpAmMGQAKI7hgu+CXulseSe6pM4WhrVJkMViKMLa46RQHTHkCCiG4YLH2yJ0shSLwCpSdSUxlw7GWlEzcJyKSY13gaS2zVtQZ4Ke1nqmscWZFR6ICUw49YfpEV62xmdxFul5B4JwH1Z4wWV+YvSSIKIbhhqgHBRGs/GZGksTbZUGs1hqANCHNMT0bU0tkrWLI2twxqlUSvcsjRqh1uUxl5JkqUxEolEIqjNG+e+24KWm4WXAAAAAElFTkSuQmCC"/>
    </div>}
    </div>
  );
}

export default App;
