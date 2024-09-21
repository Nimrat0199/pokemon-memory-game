import React, { useEffect, useRef } from "react";

function Card({obj, click, choices , chngchoic , score , max, chngscore , chngmax}){
    const inputref = useRef(null)
    const mon=()=>{
        if(choices.includes(obj.id)){
            chngchoic([]);
            if(score>max) chngmax(score)
            chngscore(0);
        }
        else{
            const newChoices = [...choices, obj.id]; 
            chngchoic(newChoices);
            chngscore(score+1)
        }
        click()
    }

   useEffect(()=>{
    setTimeout(() => {
        inputref.current.classList.remove("h-0");
        inputref.current.classList.add("h-52");
    }, 1000);
   },[obj])


    return(
        <div  className="p-3  bg-[#49111C] w-56 shadow-none hover:shadow-lg hover:shadow-blue-500/50 transition-shadow rounded-lg " onClick={mon}>
            <img ref={inputref} src={obj.sprites.front_shiny} alt="pikachu" className="h-0 w-52 rounded-lg bg-[#F2F4F3] transition-all duration-500" />
            <div className="h-20 text-center pt-4 ">
                <h1 className="text-white text-2xl  font-bold cursor-pointer">{obj.name.toUpperCase()}</h1>
            </div>
        </div>
    )
}

export default Card;