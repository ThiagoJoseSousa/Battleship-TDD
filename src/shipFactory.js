const ship = (length, name, align) => {
  const lengthCounter=length;
  const shipName=name;
  let lengthStatus= lengthCounter;
  const alignment = align;

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
  return {hit, get lengthStatus() {
    return lengthStatus;
  }, shipName, sinkChecker, alignment};
};
module.exports = ship;
