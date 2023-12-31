//import Page2 from './Page2';
export default function Dice({Toggle}){
    
    

    return(
        <div className="container">
            <div className="row">
                <div className="col-7 ">
                    <img src="/dice-pic.jpg" alt="dice pic" className="h-100 w-100"/>
                </div>
                <div className="col-5">
                    <p className="dice-game ">DICE GAME</p>
                    <div className="row">
                        <div className="col-7"></div>
                        <div className="col-5">
                        <button type="submit" className="btn btn-lg btn-dark px-4 py-1" onClick={Toggle}>Play Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}