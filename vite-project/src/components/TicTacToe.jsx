import React from 'react'
import './tictactoe.css'
export const tictactoe = () => {
  return (
    <div className='main_class'>
        <h1 className='heading'>TIC TAC TOE IN <span style={{color:"turquoise", marginLeft:"10px"}}>REACT</span></h1>

        <div className="board">
            <div className="row1">
                <div className="boxes"></div>
                <div className="boxes"></div>
                <div className="boxes"></div>
            </div>

            <div className="row2">
                <div className="boxes"></div>
                <div className="boxes"></div>
                <div className="boxes"></div>
            </div>

            <div className="row3">
                <div className="boxes"></div>
                <div className="boxes"></div>
                <div className="boxes"></div>
            </div>
        </div>

        <button className='reset'>RESET</button>
    </div>
  )
}
