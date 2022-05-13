import * as React from 'react';
import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";

import axios from "axios";



// if (!quoteData) {
//     return <p>Loading Quote…Simpness Awaits!</p>;
// }


export default function Home () {


    const canvasRef = useRef(null);
    const ctxRef = useRef(null);

    
    const [isDrawing, setIsDrawing] = useState(false);
    const [lineWidth, setLineWidth] = useState(5);
    const [lineColor, setLineColor] = useState("black");
    const [lineOpacity, setLineOpacity] = useState(0.1);


   
    // Initialization when the component
    // mounts for the first time
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
     
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.globalAlpha = lineOpacity;
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = lineWidth;
      ctxRef.current = ctx;
      
      
    }, [lineColor, lineOpacity, lineWidth]);


    

    
      
    
    // Function for starting the drawing
    const startDrawing = (e) => {
      ctxRef.current.beginPath();
      ctxRef.current.moveTo(
        e.nativeEvent.offsetX, 
        e.nativeEvent.offsetY
      );
      setIsDrawing(true);
    };
    
    // Function for ending the drawing
    const endDrawing = () => {
      ctxRef.current.closePath();
      setIsDrawing(false);
    };
    
    const draw = (e) => {
      if (!isDrawing) {
        return;
      }
      ctxRef.current.lineTo(
        e.nativeEvent.offsetX, 
        e.nativeEvent.offsetY
      );
        
      ctxRef.current.stroke();

   
    };
    

   
        const [quoteData, setQuoteData] = useState([])
        const options = {
            method: 'GET',
            url: 'https://famous-quotes4.p.rapidapi.com/random',
            params: {category: 'all', count: '1'},
            headers: {
              'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
              'X-RapidAPI-Key': '37ca969405msh1437660d6e030dbp15c6ebjsna316a5d2a3f8'
            }
          };
          const getQuote= async() => {

            try {await  axios.request(options).then(function 
                (response) {
                console.log(response.data);
                setQuoteData(response.data[0].text)
                })}
                catch(error) {
                    console.error(error);
                   };
                }
                
         useEffect(() => {
             getQuote();
             },[])
  
             const newQuote = () => {
               getQuote();
             }

   

    return (

     <>
     
        <h1 className="header">Still Life <br></br>of a <br></br>Procrastinator</h1>
        <p className="wiggle">Lets begin ▾</p>
      
        <img src="https://i.imgur.com/aZcOv9o.jpg"></img>
 
        <h4>What are we doing here?</h4>
        <h2>Let this be your moment for procrastination to shine. Below is a quote that you can use as a guide to get creative. Maybe it reminded you of something, maybe it helped you decide you dont want to draw anything
            realted, maybe a word stood out, or maybe even the general vibe gave you direction. Let the quote offer you a gental suggestion of inspiration!
        </h2>
        <p className="quote">"{quoteData}"<br></br> <button className="newquote" onClick={newQuote}>New Quote</button></p>
       

       
        

        <h3>Lets Draw!</h3>
        <img id="S2" className="canvasimg" src="https://i.imgur.com/G4WIrCL.png"></img>
        <canvas id="myCanvas"
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
          ref={canvasRef} 
          width={`460vw`}
          height={`300vw`}
        />
          <div className="draw-area">
        
        <Menu
          
          setLineColor={setLineColor}
          setLineWidth={setLineWidth}
          setLineOpacity={setLineOpacity}
        />
       <button className="clear"
    onClick={() => {
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }}
  >
    Clear
  </button>

        <p className="hint">*Hint- The color white is an eraser</p>
      </div>
      
        </>
        
    )
    }