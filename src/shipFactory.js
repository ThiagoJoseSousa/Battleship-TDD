// I forgot that was using modules, so I remade hit and sinKChecker on gameBoard
// those two below are useless.
const ship = (length, namer) => {
  const lengthCounter=length;
  const name=namer;
  let lengthStatus= lengthCounter;


  const hit = () => {
    lengthStatus-=1;
    sinkChecker();
  };

  const sinkChecker = () =>{
    let isSink=false;
    if (lengthStatus===0) {
      isSink=true;
    }
    return isSink;
  };
  const lengthUpdate = () => {
    return lengthStatus;
  };
  return {hit, lengthUpdate, name, sinkChecker};
};
module.exports = ship;
