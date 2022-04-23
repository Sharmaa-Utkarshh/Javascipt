document.write("Hi, I'm Javascript");

//Alert in in-browser js
// let a= alert("This is a message");
// //It is a function that can never return anything
// //Takes string as argument
//  console.log(a);
 //Undefined that is doesn't return anything
 
//  let name= prompt("What's your name", "Guest");
//  console.log(name);

let deletepost = confirm("Do you really want to delete this post?");
if(deletepost){
    console.log("The post has been deleted");
}
else{
    console.log("Your post has not been deleted");
}
// console.log(delete);