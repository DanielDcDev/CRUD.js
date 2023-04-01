function reverseString(str) {
    let novaString=""
  console.log(novaString);
  for(let i = str.length -1; i>=0;i--){
      novaString+= str[i];
  }
  console.log(novaString);
}
reverseString("nova");