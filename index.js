// add solution here
function theBeatlesPlay(musicians, instruments) {
  
  let array = [];
  
  for(let i = 0; i < musicians.length; i++){
    let str1 = musicians[i]; 
    let str2 = instruments[i];
    array.push(musicians[i] + `${plays}` + instruments[i]);
  }
  return array;
}

