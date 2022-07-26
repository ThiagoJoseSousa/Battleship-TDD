const ship = (length, name, sink) => {
  const lengthCounter=length;
  const shipName=name;
  const isSink=sink;
  let lengthStatus= lengthCounter;

  const hit = () => {
    lengthStatus=lengthStatus -1;
    sinkChecker();
  };

  const sinkChecker = () =>{
    let isSink=false;
    if (lengthStatus===0) {
      isSink=true;
    }
    return isSink;
  };
  return {lengthStatus, shipName, isSink, hit, sinkChecker};
};
module.exports = ship;
