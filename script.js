function keyHasBeenPressed(){
    let textAreaContent=document.querySelector('textarea');
    // Total characters functionality
    let charCount=document.querySelector(".charcount");
    charCount.innerHTML=String(textAreaContent.value).length;
    // Total number of words
    let wordCount=document.querySelector(".wordcount");
    wordCount.innerHTML=String(textAreaContent.value).split(' ').length;
    // Total Sentences functionality
    let sentCount=document.querySelector(".sentCount");
    sentCount.innerHTML=String(textAreaContent.value).split('.').length-1;
    // Total Characters left : 200 functionality
    let charLimit=200;
    let charLimitElement=document.querySelector(".charLimitSpan");
    charLimitElement.innerHTML=charLimit-textAreaContent.value.length;
    if(textAreaContent.value.length >200){
        textAreaContent.value = String(textAreaContent.value).substring(0,charLimit);
    }
    
}
// Button Functionality
let clearButton=document.querySelector('.clearButton');
clearButton.addEventListener('click',()=>{
    document.querySelector('textarea').value='';
    document.querySelector(".charcount").innerHTML=0;
    document.querySelector(".wordcount").innerHTML=0;
    document.querySelector(".sentCount").innerHTML=0;
    document.querySelector(".charLimitSpan").innerHTML=200;

})