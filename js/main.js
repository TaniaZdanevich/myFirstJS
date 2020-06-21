var myNum=10;
var myStr='строка';
var myBool=true;
var myArr=[1,2,3,4,5];
var myObj = {
    first: 'First Name',
    last: 'Last Name'
  };
console.log('myNum: ', myNum);
console.log('myStr: ', myStr);
console.log('myBool: ', myBool);
console.log('myArr:', myArr);
console.log('myObj ', myObj);

var decimal2 = myNum.toFixed(2);


var i=10;
console.log(i++);
console.log(++i);
console.log(i--);
console.log(--i);
console.log(i);

var myTest = 20;
myTest +=20;
console.log('+=', myTest);
myTest -=20; 
console.log('-=', myTest);
myTest /=20;
console.log('-/', myTest);
myTest *=10; 
console.log('*=', myTest);
myTest %= 3;
console.log('%=', myTest);

var myPi=Math.PI;
console.log('myPi:', myPi);

var myRound=Math.round(89.279);
console.log('myRound:', myRound);

var myRandom=Math.random()*10;
console.log('myRandom:', myRandom);

var myPow = Math.pow(3,5);
console.log('myPow:', myPow);

var strObj = {str: 'Мама мыла раму, рама мыла маму'};
strObj.length = strObj.str.length;
console.log('strObj', strObj );

var isRamaPos = strObj.str.indexOf('рама');
console.log('isRamaPos:', isRamaPos);

var strReplace = strObj.str.replace('Мама мыла раму, рама мыла маму' , 'Мама моет раму, Рама держит маму');

console.log('strReplace', strReplace);


console.log(strObj.str.toUpperCase());


console.log(strObj.str.toLowerCase());

