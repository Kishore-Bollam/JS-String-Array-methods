//STIRNG METHODS

//toLowercase()  ========> convert uppercase to lower case

// let _name = "KISHORE BOLLAM "
// let value = _name.toLocaleLowerCase();
// console.log(value)   
                     //kishore bollam

//touppercase()=====> convert lowercase to upper case

// let _name = "kishore bollam";
// let value = _name.toUpperCase();
// console.log(value)        //KISHORE BOLLAM


//length()  ========> to find the lenth of the string

// let len = "kishore"
// document.write(len.length) 7

//concat() ===>   add  new names to the old name
// let _name = "kishore bollam"
// let concatinated = _name.concat("software" ,"tcs")
// document.write(concatinated)     //kishore bollamsoftwaretcs

//replace()  ============> it is used to replace the current name with new name
// let _name="kishore bollam";
// let replace = _name.replace("bollam", "kumar");
// document.write(replace)    //kishore kumar

//split()  ==========   names strings will converted into array of values

// let _name = "kishore bollam   karthik bollam";
// let splitted = _name.split()
// console.log(splitted)    // ['kishore bollam   karthik bollam']


// if we give space in between the split " " it will be formed into array of strings 

// let _name = "kishore bollam   karthik bollam";
// let splitted = _name.split(" ")  // added space
// console.log(splitted)      // ['kishore', 'bollam', '', '', 'karthik', 'bollam']




// if we did nt give space it will formed into with each charcter
// let _name = "kishore bollam   karthik bollam";
// let splitted = _name.split("")  // without space
// console.log(splitted)    // ['k', 'i', 's', 'h', 'o', 'r', 'e', ' ', 'b', 'o', 'l', 'l', 'a', 'm', ' ', ' ', ' ', 'k', 'a', 'r', 't', 'h', 'i', 'k', ' ', 'b', 'o', 'l', 'l', 'a', 'm']


// remove the @ symbol and formed into array of words
// let  _name = "kis@hor@e  @boll@am"
// let splitted = _name.split("@")
// console.log(splitted)    //['kis', 'hor', 'e  ', 'boll', 'am']


//replaceall() ======  it is used to rplace the al @ symbols and give the new  name
// let  _name = "kis@hor@e  @boll@am"
// let splitted = _name.replaceAll("@" , "")
// console.log(splitted)  //  kishore  bollam



// by default javascript takes the name values as  array of characters   and based on the index position it gives the output

// let _name = "kishore  ";
// console.log(_name[3])       //h  ===> index position is 3


//charCodeAt()   =====>  each charcter has one specific value 
// bu using   charCodeAt()   we can find the  specific value
// let _name = "webla";
// let char = _name.charCodeAt(3)
// console.log(char)  //108

// print each and every word
// let _str = " webla web world"
// document.write(_str);  // webla web world


// let _str = " webla web world";
// for( let i = 0 ; i<= _str.length;i++){
//     document.write(_str.charAt(i));    //webla web world

// }


//print repeted characters
// let _str = "kishore kumar karthik";
// let count =0;
// for(let i =0 ; i<=_str.length;i++){
//     if(_str.charAt(i) == "k"){
//         count++;
//     }
// }

// document.write(count)    // 4


//print small and capitals
//it will print all capital and small "k" in the given string 
// let _str = "Kishore Kumar karthiK"
// let count = 0;
// for(i = 0; i<=_str.length;i++){
//     if(_str.charAt(i) == "K"  || _str.charAt(i) == "k"){
//         count++;
//     }
// }
// document.write(count);    // 4

//2nd way to finf all small and capital "w"s in the given string
// let _str = "Webla web world";
// let count =0;
// let char = "w";
// for(i=0; i<=_str.length;i++){
//     if(_str.charAt(i).toLowerCase() == char){
//         count++;
//     }
// }
// document.write(count)           // 3
   


//includes()    ============> it will check the given string is ther or not 
//if it is there  output will be true
//if it is not there output but will false

// let _str = "webla web world";
// let include    =  _str.includes("web")
// document.writeln(include)    //true


// let _str = "webla web world";
// let include    =  _str.includes("webx")
// document.writeln(include)    //false


//indexof()
// it is used to find the index positionof the given string inside the includesof("world")
// let _str = "webla web world"
// let index = _str.indexOf("world")
// document.write(index)    //10



//lastindexof()
// let _str = "webla web world";
// let lastIndex = _str.lastIndexOf("web")
// document.write(lastIndex)   //   6 



//slice()  =====>
// it is used to find the string in  between the index positions
// let _str = "webla web world";
// let slice = _str.slice(5,9)
// document.write(slice)  //web


//ARRAY METHODES
//======================// ===========================================================================================

//push()
// we can insert the value base on the index position in the given array
// let array = [1,2,3,4,5]
// array[5] =10;
// console.log(array)   //   [1, 2, 3, 4, 5, 10]


// we can push the multpile values at a time     
// let arr = [1,2,3,4,5]
// arr.push(10,20,30)
// console.log(arr)   //  [1, 2, 3, 4, 5, 12, 20]

// let arr = [1,2,3,4,5]
// arr[arr.length] = 10 
// console.log(arr)      //(6) [1, 2, 3, 4, 5, 10]



//pop()
//remove last index from array
//it will delate the last index and print the remaining values in the array format
// let arr = [1,2,3,4,5,6,7]
// let popped = arr.pop()
// console.log(arr)        //[1, 2, 3, 4, 5, 6]


//unshift()    add the values in the 1st index position in the array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.write(fruits.unshift("Lemon", "Pineapple"));



//slice()
// it is used to  take the sub array in the given array
//it will add new array from index positio "0" to "3"  means is will will print index position 0 ,1,2
// let arr  = [1,2,3,4,5,6]
// let subarr = arr.slice(0,3)
// console.log(subarr)                (3) [1, 2, 3]


// splice()   ==> remove
// it is used to  remove the values in the middle of  array and as well as add the values in the middleof on array
// let array  = [1,2,3,4,5,6,7,8]
//  let spli = (array.splice(2,2));
//  console.log(spli)           //(2) [3, 4]


//add

// let arr = [1,2,3,5,6]
// let spli = arr.splice(2,0,4)
// console.log(spli)



//join()
 //it used to convert the array to  string
// let array = [1,2,3,4]
// let str = array.join()
//     console.log(str)            // 1,2,3,4



//parseInt











































































