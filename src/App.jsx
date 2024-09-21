import React, { useEffect, useState } from "react"
import Card from './components/Card';


function App() {
  const [dis,setDis] = useState(false);
  const [score,setScore]= useState(0);
  const [max,setMax]= useState(0);
  const [choices,setChoices] = useState([]);
  const [links , setLinks] = useState([]);
  const poke=async(id)=>{
    try{
      const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if(!promise.ok){
        throw new Error("no pokemon exists");
      }
      const response = await promise.json();
      const image = response.sprites.front_shiny;
      return response;
    }
    catch(error){
      console.log("sorry about the eror", error.message);
    }
  }


  const genlink=async()=>{
    let b=[];
    let a=[];
    let i=0;
    while(i<8){
      let j = Math.floor(Math.random() * 15) + 1
      while(a.includes(j)){
        j=Math.floor(Math.random() * 15) + 1
      }
      a[i]=j;
      b[i]= await poke(a[i]);
      i++;
    }
    setLinks(b);
  }

  useEffect(()=>{
    genlink();
  },[])

  useEffect(()=>{
    setDis(false)
    setTimeout(() => {
      setDis(true)
    }, 100);
  },[links])
  
  
  return(
    <div className="bg-[#0A0908] relative  min-h-screen">
    <div className="flex justify-between pl-5 pt-3 text-white w-full">
    <div>
      <h1 className="text-4xl font-extrabold">
        POKEMON MEMORY GAME
      </h1>
      <br/>
      <span>
      Get points by clicking on an image but don't click on any more than once!
      </span>
    </div>
    <div className="text-right">
    <h1 className="text-right text-white pr-4 text-lg inline font-medium">SCORE: {score}</h1><br/>
    <h1 className="text-right text-white text-lg pr-4 inline font-semibold">MAX SCORE: {max}</h1>
    </div>
    </div>
    <div className="flex gap-5  flex-wrap w-[70%] opacity-100 transition-opacity duration-1000 mt-5  pt-5 mx-auto justify-center">
  {dis && links.map((link) => (
    <Card 
      obj={link} 
      key={link.id} 
      click={genlink} 
      choices={choices} 
      chngchoic={setChoices} 
      score={score} 
      max={max} 
      chngscore={setScore} 
      chngmax={setMax} 
      
    />
  ))}
</div>
    </div>
  )
}

export default App
