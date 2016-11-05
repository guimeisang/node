"use strict";
var s = "hello";
function greet(name){
    console.log(s+","+name+"!");

}
function hello(){
    console.log("hello")
}
module.exports = {
    hello:hello,
    greet:greet
};