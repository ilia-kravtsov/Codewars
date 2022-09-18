
// Training JS #1: create your first JS function and print "Hello World!"

function helloWorld() {
    const str = "Hello World!";
    console.log(str);
  }

// BP

helloWorld = function() {
    var str = "Hello World!";
    console.log( str );
  }

// Training JS #2: Basic data types--Number

  var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
  function equal1(){
    var a=v1   
    var b=v1   
    return a+b;
  }
  //Please refer to the example above to complete the following functions
  function equal2(){
    var a=v3   //set number value to a
    var b=v1   //set number value to b
    return a-b;
  }
  function equal3(){
    var a=v1   //set number value to a
    var b=v5   //set number value to b
    return a*b;
  }
  function equal4(){
    var a=v4   //set number value to a
    var b=v5   //set number value to b
    return a/b;
  }
  function equal5(){
    var a=v6   //set number value to a
    var b=v3   //set number value to b
    return a%b;
  }

// BP

var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250

const equal1 = () => v1 + v1
const equal2 = () => v3 - v1
const equal3 = () => v1 * v5
const equal4 = () => v4 / v5
const equal5 = () => v2 % v4

// Training JS #3: Basic data types--String

/* In javascript, String is one of basic data types. Use "" or '' to declare a string variable.
  It can be letters:a,b,c,A,B,C, numbers: 123..., Various symbol:@#$%^&* , Control symbol:\n,\t etc..
 String can use operators +, Connect two or more strings together.*/

 var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
 function Dad(){
   //select some variable to combine "Dad"
   return d1+a2+d2;
 }
 function Bee(){
   //select some variable to combine "Bee"
   return b1+e2+e2;
 }
 function banana(){
   //select some variable to combine "banana"
   return b2+a2+n2+a2+n2+a2;
 }
 
 //answer some questions if you finished works above
 function answer1(){
   //the answer should be "yes" or "no"
   return "no";
 }
 function answer2(){
   //the answer should be "yes" or "no"
   return "no";
 }
 function answer3(){
   //the answer should be "yes" or "no"
   return "yes";
 }

 // BP

 var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"

 const Dad = () => d1 + a2 + d2
 const Bee = () => b1 + e2 + e2
 const banana = () => b2 + a2 + n2 + a2 + n2 + a2
 
 const answer1 = () => "no"
 const answer2 = () => "no"
 const answer3 = () => "yes"

 // Training JS #4: Basic data types--Array

 function getLength(arr){
  return arr.length;
}
function getFirst(arr){
  return arr[0];
}
function getLast(arr){
  return arr[arr.length - 1];
}
function pushElement(arr){
  var el=1;
  arr.push(el);
  return arr;
}
function popElement(arr){
  arr.pop();
  return arr;
}

// BP

