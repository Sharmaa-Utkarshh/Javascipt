//Object argument in functions.
//All the arguments of a function are stored inside an object whose name is arguments.
//For example if I pass (a,b,c) as parameters in function then, arguments[0]=a; arguments[1]=b; and arguments[2]=c
//Argument (object) has not an array but have some properties same as array like .length and index positioning
function add(a,b){
    document.write(a + b);
}
add("Hello", "world");
document.write("<br>")
//Also we can change these arguments by changing the indexes of the object
//Example
function adding(a,b){
    arguments[0]="String";
    //The first parameter was initially a in line 21, but we changed it to "String" in line 22 using arguments[0] and changing the entry in object
    document.write(a + b);

}
adding("Hello", "World") //This will print string world because we changed argument[0] that is first parameter
document.write("<br>")
//Also we can find how many arguments have been passed to a function using .length function with objects
function len(){
    document.write(arguments.length);
}
len('a','s','d','sd','s'); //The argument length that is shown is 5 which is true

//Final Conclusion==> The arguments inside of a function are stored in an object named arguments.
