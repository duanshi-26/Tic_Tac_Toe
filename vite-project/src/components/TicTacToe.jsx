import React from 'react'
import './tictactoe.css'
import circle from './circle.png'
import cross from './cross.png'
import { useState } from 'react';

let data=["","","","","","","","",""];
export const TicTacToe = () => {
    let titleRef = React.useRef(null);
    let [count, setCount] = useState(0);
    let [winner, setWinner] = useState(false);
    let box1 = React.useRef(null);
    let box2 = React.useRef(null);
    let box3 = React.useRef(null);
    let box4 = React.useRef(null);
    let box5 = React.useRef(null);
    let box6 = React.useRef(null);
    let box7 = React.useRef(null);
    let box8 = React.useRef(null);
    let box9 = React.useRef(null);

    let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9];
    const toggle = (e,index)=>{
        if(winner)
            return 0;

        if(count%2===0 && data[index]==="")
        {
            data[index]="X";
            e.target.innerHTML=`<img src=${cross} alt="" />`;
            setCount(count+1);
        }
        else if (count%2!==0 && data[index]==="")
        {
            data[index]="O";
            e.target.innerHTML=`<img src=${circle} alt="" />`;
            setCount(count+1);
        }
        console.log(count);
        checkWinner();
    }

const checkWinner = ()=>{
    if(data[0]===data[1] && data[1]===data[2] && data[0]!=="")
    {
        setWinner(true);
        won(data[0]);
    }
    if(data[3]===data[4] && data[4]===data[5] && data[3]!=="")
    {
        setWinner(true);
        won(data[3]);
    }
    if(data[6]===data[7] && data[7]===data[8] && data[6]!=="")
    {
        setWinner(true);  
        won(data[6]);  
    }
    if(data[0]===data[3] && data[3]===data[6] && data[0]!=="")
    {
        setWinner(true);
        won(data[0]);
    }
    if(data[1]===data[4] && data[4]===data[7] && data[1]!=="")
    {
        setWinner(true);
        won(data[1]);
    }
    if(data[2]===data[5] && data[5]===data[8] && data[2]!=="")
    {
        setWinner(true);
        won(data[2]);
    }
    if(data[0]===data[4] && data[4]===data[8] && data[0]!=="")
    {
        setWinner(true);
        won(data[0]);
    }
    if(data[2]===data[4] && data[4]===data[6] && data[2]!=="")
    {
        setWinner(true);
        won(data[2]);
    }
    if(count===8 && !winner)
    {
        alert("Match Draw");
    }
}

const won = (player)=>{
    
        titleRef.current.innerHTML=`<img src=${player==="X"?cross:circle} alt="" /> won the match`;
    }

    const reset=()=>{
        setWinner(false);
        setCount(0);
        box_array.map((box)=>{
            box.current.innerHTML="";
        });
        titleRef.current.innerHTML="TIC TAC TOE IN <span style={{color:'turquoise'}}>REACT</span>";
    }
  return (

    <div className='main_class'>
        <h1 className='heading' ref={titleRef}>TIC TAC TOE IN <span style={{color:"turquoise", marginLeft:"10px"}}>REACT</span></h1>

        <div className="board">
            <div className="row1">
                <div className="boxes" ref={box1} onClick={(e)=>toggle(e,0)}></div>
                <div className="boxes" ref={box2} onClick={(e)=>toggle(e,1)}></div>
                <div className="boxes" ref={box3} onClick={(e)=>toggle(e,2)}></div>
            </div>

            <div className="row2">
                <div className="boxes" ref={box4} onClick={(e)=>toggle(e,3)}></div>
                <div className="boxes" ref={box5} onClick={(e)=>toggle(e,4)}></div>
                <div className="boxes" ref={box6} onClick={(e)=>toggle(e,5)}></div>
            </div>

            <div className="row3">
                <div className="boxes" ref={box7} onClick={(e)=>toggle(e,6)}></div>
                <div className="boxes" ref={box8} onClick={(e)=>toggle(e,7)}></div>
                <div className="boxes" ref={box9} onClick={(e)=>toggle(e,8)}></div>
            </div>
        </div>

        <button className='reset' onClick={()=>{reset()}}>RESET</button>
    </div>
  )
}
