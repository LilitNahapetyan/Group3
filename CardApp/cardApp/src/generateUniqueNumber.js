const arr = [];

function generateUniqueNumber() {
  let randomNumber = Math.ceil(Math.random() * 1000);
  if (!arr.includes(randomNumber)) {
    arr.push(randomNumber)
    return randomNumber;
  }else{
  	return generateUniqueNumber();
  }
}
export {generateUniqueNumber};