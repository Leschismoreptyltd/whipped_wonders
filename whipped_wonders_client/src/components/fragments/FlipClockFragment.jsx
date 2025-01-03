
const FlipClockFragment = (props) => {
  
    const previousNumber = props.previousNumberInput;
    const currentNumber = props.currentNumberInput;
    const cardName = props.cardName;
    const isFlipped = props.flipped;


   
    return(
        <>
        <div className={`card js-${cardName} ${isFlipped? "js-transition-card" : " "} font-bebasNeue`}>
              <div className="panel panel-top panel-in--shadow">
                <span className="number">{currentNumber}</span>
              </div>
              <div className="panel panel-btm panel-in">
                <span className="number number--btm">{currentNumber}</span>
              </div>
              <div className="panel panel-top panel-out">
                <span className="number">{previousNumber }</span>
              </div>
              <div className="panel panel-btm panel-out--shadow">
                <span className="number number--btm">{previousNumber}</span>
              </div>
            </div>
        </>
    )}

    export default FlipClockFragment;
