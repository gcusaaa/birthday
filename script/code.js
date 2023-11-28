
// let person1 = {
//     firstName: 'Thimna'
// }
// let person2 = {
//     firstName: 'Veronique'
// }
// let personDetails = []
// personDetails.push(person1)
// personDetails.push(person2)
// console.log(personDetails);
// console.log(person1);
// console.log(person2);




// let firstName = 'Zubair'
// let state = 'late'
// if (firstName == 'present') {
//     console.log("present");
// }else if (firstName) {
//     console.log("late")
// }else if (firstName) {
//     console.log("late")
// } else {
//     console.log("Absent");
// }



// let firstName = ['Gcusa', 'Sipho']
// let state = 'late'
// switch (false) {
//     case firstName == 'present':
//         console.log("present");
//         break;
//     case firstName !=="":
//         console.log("late");
//         break;
//     case  state !=="":
//         console.log("late -> Final warning");
//         break;
//     default:
//         console.log("absent");
//         break;
// }


// let marksClass1 = [66, 78, 57, 92, 88, 62, 75, 72]
// function marks(marksClass1) {
//     let addUpMarks = marksClass1.length;
//     let sumMarks = 0;
    
//     for(let i=0; i < addUpMarks; i++) {
//         sumMarks += marksClass1[i];
//     }
//     return(sumMarks)
// }
//  let totalMarks = marks(marksClass1);
//  console.log(totalMarks);

// marks(marksClass1)

// function hexToRGB(hexColor) {
//     let hex = hexColor.split('').join('')
//     let r = parseInt(hex.slice(0, 2), 16)    
//     let g = parseInt(hex.slice(2, 4), 16)    
//     let b = parseInt(hex.slice(4), 16)
//     console.log(hex, r, g, b);    
// }


// function hexToRGB(hex) {
//     let Hex = hex.replace('');
//     let [r, g, b] = [
//         Hex.slice(0, 2),
//         Hex.slice(0, 2),
//         Hex.slice(2),
//     ].map(component => parseInt(component, 16));

//     console.log('${hex}, ${r}, ${g}, ${b}');
}




// let numbers = [9, 4, 20, 2, 5, 10]
// console.log(Math.min(...numbers));
// console.log(Math.max(...numbers));
// let size = Math.floor(numbers.length / 2)
// console.log(numbers[size]);





// document.addEventListener('dobCalculator', function () {
//     let input = document.querySelector('.answerBox').value;
//     let label = document.querySelector('.label').value;


//     if (label) {
//         alert('enter your birth date')
//     } return;

//     let 
// })








// buttons.forEach(button => {
//     button.addEventListener('click', function (e) {
//       let buttonText = e.target.textContent;
    
//       switch (buttonText) {
//         case '':
//           calculatevalue();
//           break;
//         default:
//           appendToInput(buttonText);
//           break;
//       }
//     });
//   });
// })

// var a = 'letsfind';
// var b = 'course';
// var c = a/b;
// document.write(c);

// var a = 1;
// document.write(a--);
// document.write(a);

// let num1=5;
// ++num1 +2;


// const pi =3.14;
// let pii =4;
// console.log(pi);

// var x = "0";
// switch (x) {
//   case 0:
//     text = "Off";
//     break;
//   case 1:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
// }

// const d1 = new Date(2020, 1, 1)
// console.log(d1)

// const x1 = new Date(2020, 0, 1)

// console.log(x1);

// const message='How are you'
// message.indexOf('H');
// const message= "How are you?
// message.includes('?');


// let x= new Date();
// console.log(x.getDay());


// console.reset()
// console.log('5*8');


// const x= new Date();
// console.log(typeof x);


// let numbers = [1, 2, 3, 4];
// numbers = [];
// console.log(numbers);


// What will be the new output of myfruits?

// let myfruits=["Mangoes","Apples", "Banana", "Peaches"];
// myfruits.splice(2,0, "Mangoes", "Apples");
// console.log(myfruits);

// let myfruits=["Mangoes","Apples", "Banana", "Peaches"];
// myfruits.shift();
// console.log(myfruits);

// let numbers1=[ 22, 45, 5, 7, 9, 8, 2, 1 ];

// numbers1.length=0;
// console.log(numbers1);

// const num1=[9,8,7,6];

// const num2=[1,2,3,4];
// num2.concat(num1);
// num2[2];
// console.log(num2[2]);


// const num1=[9,8,7,6];
// const num2=[1,2,3,4];
// let combined=num1.concat(num2);
// console.log(num1);


// const number =[1, 2, 3, 4, 5];
// number.forEach((number, index)=>console.log(index, number));
// console.log(number);

// const myresolution2021 ='I want to excel in this course';
// const parts2021= myresolution2021.split(' ');
// console.log(parts2021);

// const myresolution2021 ='I want to excel in this course';
// console.log(myresolution2021.split(' ').join('-'));
// 

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const  energy = fruits.join(" and ");
// console.log(energy);

// function func() {
//     const a = [ 1, 2, 3, 4, 5, 6 ];
//     document.write(a.join('|'));
// }
// func();


// const title = 'JavaScript array join example';
// const url = title.split(' ') .join('-') .toLowerCase();
// console.log(url);

// const arr=["AngularJs","Node.js","JQuery"]  
// const result=arr.join()  
// document.write(result);

// const array = ["Joe", "Kevin", "Peter"];
// console.log(array.join(""));

// let string1 = ”123”;
// let  intvalue = 123;
// alert( string1 + intvalue );


// string  a = ”hi”;
// string  b =”there”;
// alert(a+b);


// let x=10, y=3;
// answer=x**y;
// console.log(answer);

// function findUnique(array1, array2) {
//     let arrayscombine = [...array1, ...array2];

//     let uniqueElements = arrayscombine.filter((value, index, self) => {
//     return self.indexOf(value) == index;
//     });

//     return uniqueElements.map(String).sort();
// }

// console.log(findUnique([1, 2, 3], [100, 2, 1, 10]));
// console.log(findUnique([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// console.log(findUnique([1, 2, 3], [100, 2, 1, 10]));



// let booleanArray = [true, false, true, true, false];
// let trueCount = booleanArray.reduce(function (count, value) {
//   return value ? count + 1 : count;
// }, 0);
// console.log(+ trueCount);






// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["1", "2", "3", "4", "5", "6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]







// const message='How are you';
// message.trim('How')

// message.replace('How','').trim().replace("", 'are you');

// function gfg() {  
//     let PMarks = 40 
//     let result = (PMarks > 39)? 
//         "Pass":"Fail"; 
  
//     document.write(result); 
//     }  
//     gfg(); 


// let result = (10 > 0) ? true : false;
// console.log(result);


// function Test()
//   {  let marks = 95;
//   let result = (marks < 40) ? "Unsatisfactory" : (marks < 60) ? "Average" : (marks < 80) ? "Good" : "Excellent" ;
//     console.log(result);
// }
// Test();


// let arr = [1,2,3];
// let arr2 = [4,5];
// result=[...arr, ...arr2];


// let z=6, k=9;
// result=z+k;
// k=result-k;
// z=result-k;
// console.log(z, k);


// function height()
// {
//    let height=123.56;
//      let type =(height>=190)?"Taller":"Little short";
//     return type;
// }
// height();










// var a = 10;
// if(a == a++)
// document.write(a);

// let book = "maths";
//             if( book == "history" ) {
//                document.write("<b>History Book</b>");
//             } else if( book == "maths" ) {
//                document.write("<b>Maths Book</b>");
//             } else if( book == "economics" ) {
//                document.write("<b>Economics Book</b>");
//             } else {
//                document.write("<b>Unknown Book</b>");
//             }