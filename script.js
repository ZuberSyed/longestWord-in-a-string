function findLongstStr(){
    const Strg =document.getElementById('str').value;
    const Result = document.getElementById('result');
    const words = Strg.split(' ');
    let maxLength = 0;
    if(Strg.length == ""){
      Result.innerHTML = "Please enter String"; 
    }else{
    for(let i=0; i < words.length; i++){
        if(words[i].length > maxLength){
            maxLength = words[i].length;
        }
    }
    Result.innerHTML = `The Longest word in a string :  ${maxLength}`; 
}
 
}