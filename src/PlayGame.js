import { useState } from "react"

export default function PlayGame(props){
    const Rules=()=>(
            <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 bg-color my-5">
                    <h3>How to play dice game</h3><br/>
                    Select any number<br/>
                    Click on dice image
                    <p>after click on dice if selected number is equal to dice number you will get same point as dice if you get wrong guess  then 2 points will be deducted</p>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
            
            )
    const [showRules,setShowRules]=useState(false);
    const DisplayRules=()=>{
        setShowRules((prev)=> !prev);
    }

    return (
        
        <>
        <div className="container text-end">
            <p className="fs-5 text-red">You have not selected any number</p>
            <button className="btn btn-outline-dark px-3 py-3 mx-2"><b>1</b></button>
            <button className="btn btn-outline-dark px-3 py-3 mx-2"><b>2</b></button>
            <button className="btn btn-outline-dark px-3 py-3 mx-2"><b>3</b></button>
            <button className="btn btn-outline-dark px-3 py-3 mx-2"><b>4</b></button>
            <button className="btn btn-outline-dark px-3 py-3 mx-2"><b>5</b></button>
            <button className="btn btn-outline-dark px-3 py-3 mx-2"><b>6</b></button>
            <br/><br/>
            
            <p className="text-size"><b>Select Number</b></p>
        </div>
        <div className="container text-start">
            <h1 className="score-size mx-4">0</h1>
            <b className="fs-5">Total Score</b>
        </div>
        <div className="text-center">
        
        <b className="fs-5">Click on Dice to Roll</b><br/>
        <button className="btn btn-outline-dark px-5 "><b>Reset Score</b></button><br/><br/>
        <button className="btn btn-dark px-5 " onClick={DisplayRules}><b>Show Rules</b></button><br/>
        </div>
        
        {showRules ? Rules() : <p className="text-center py-3"><b>click on Show Rules tab to display rules</b></p>}
        </>
    )
}