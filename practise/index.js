//Create a function evenOrOdd that returns an array of the total sum of even and odd separately. Example [1,2,3,4,5,6,7] should return [12, 16] and [2,6,12] should return [20, 0].//
// function evenOrOdd(arr) {
//     let even = 0;
//     let odd = 0;
//     arr.forEach(element => {
//             if (element % 2 == 0) {
//                     even += element
//                     console.log(even)
//             }
//             else if( element % 2 !== 0 ){
//                     odd += element
//                     console.log(odd)
//             }
//     });
//     console.log([even, odd])
//     return [even, odd]

// }
// evenOrOdd([1,2,3,4,5,6,7]) // [[1,3,5,7], [2,4,6]]

// Implement the function encode(plainText) which returns an encoded message.
// It receives a plainText string parameter, for example aaaabcccaaa.
// You must encode it by counting each consecutive sequence of a letter. e.g. in aaaabcccaaa, there are:
// 4 times the letter a
// then 1 b
// then 3 c
// then 3 a
// Therefore you must return the string 4a1b3c3a.
// Constraints :
// plainText is made of lowercase letters: a-z
// plainText is never null and has a maximum length of 15000 characters
// EXAMPLES:
// PlainText
// aabaa
// EncodedText
// 2a1b2a
// PlainText
// aaaabcccaaa
// EncodedText
// 4a1b3c3a
//aaaabcccaaa

// Task Description
// In addition (arithmetic operation), a carry refers to a digit that is transferred from one column to the adjacent column on the left when the result of the addition cannot be represented by a single digit. For example:
//   55
// + 29
// ----
//   84
// In this example, 5 + 9 = 14, which cannot be represented by a single digit, so the 1 is carried to the column on the left and added to the result of 5 + 2.
// Write a function that given two numbers returns the total count of carry operations performed while adding them.
// Example:
// numberOfCarryOperations(65, 55) // 2
// 65 + 55 =>
// 1st column: 5 + 5 = 0 (1 is carried)
// 2nd column: 6 + 5 + 1 (carried) = 2 (1 is carried)
// 3rd column: 1 (carried) = 1
// => 120 (2 carry operations)
// numberOfCarryOperations(123, 456) // 0
// numberOfCarryOperations(555, 555) // 3
// numberOfCarryOperations(900, 11) // 0
// numberOfCarryOperations(145, 55) // 2
// numberOfCarryOperations(0, 0) // 0
// numberOfCarryOperations(1, 99999) // 5
// numberOfCarryOperations(999045, 1055) // 5
// numberOfCarryOperations(101, 809) // 1
// numberOfCarryOperations(189, 209) // 1

// algorithm week 2 day 1

// const arrayPacking = integers => {
//         let arr = [];
//         integers.forEach((ele)=>{
//           arr.push(ele.toString(2).padStart(8, 0))
//         })
//         let binary =  arr.reverse().join('');
//         let result = parseInt(binary, 2);

//         return result;
//       };

//       arrayPacking([24, 85, 0])

//       function filter_list(l) {
//         // Return a new array with the strings filtered out
//         let result = l.filter(ele => {
//                if (typeof ele === 'number'){
//                  return ele;
//                }

//         });
//         return result
//       }

//       function filter_list(l) {


//         // Return a new array with the strings filtered out
//         let result = l.filter(ele => typeof ele === 'number');
//         return result;
//       }

//     console.log(filter_list([1,2,'a','b']))

// let arr = [65, 66, 69, 117, 127, 129, 165, 165, 165, 165, 166, 166, 166, 166, 167, 167]

// let newArr = [];

// arr.reduce((previous, current, i, array)=>{

// console.log(previous)

// }, [])

// console.log()

// const packArray = integers => {

//       let temp = [];
//       let flag = true;

//       while(integers.length > 1){
//       for (let i = 0; i < integers.length; i+=2){
//             if(flag) temp.push(integers[i] + integers[i+1]);
//             else temp.push(integers[i] * integers[i+1]);
//       }
//       flag = (flag) ? false : true;
//       integers = [...temp];
//       temp = [];
// }
//       return integers[0];
// }

// console.log(packArray([1, 2, 3, 4, 5, 6, 7, 8, 7]))

//console.log(arr)

// function classifier(input) {
//   // return if input is not an array or array length is less than 1
//   if (!Array.isArray(input)) {
//     throw Error;
//   }
//   if (!input.length) {
//     return { noOfGroups: 0 };
//   }

//   const newArr = [...input];

//   // calculate age of students
//   const modifiedArray = newArr.map((element) => ({
//     name: element.name,
//     age: calcAge(element.dob),
//     regNo: element.regNo,
//     dob: element.dob,
//   }));

//   // sort array by age
//   const sortedArray = modifiedArray.sort(function (a, b) {
//     return a.age - b.age;
//   });

//   //initialize 1st group with the first student in the sorted array
//   let group = [sortedArray[0]];
//   let studentGroup = [];
//   // sort group by age difference and group length
//   for (let i = 1; i < modifiedArray.length; i++) {
//     if (sortedArray[i].age - group[0].age <= 5 && group.length <= 2) {
//       group.push(modifiedArray[i]);
//     } else {
//       studentGroup.push(group);
//       group = [];
//       group.push(modifiedArray[i]);
//     }
//   }

//   // last group
//   if (group.length) {
//     studentGroup.push(group);
//   }

//   //console.log(studentGroup)

//   // set noOfGroups key
//   let output = {};
//   output.noOfGroups = studentGroup.length;

//   // format groups based on output requirement
//   const groupOutput = studentGroup.map(function (group) {
//     return {
//       members: group.map((el) => ({
//         name: el.name,
//         age: el.age,
//         dob: el.dob,
//         regNo: el.regNo,
//       })),
//       oldest: group[group.length - 1].age,
//       sum: group.reduce((acc, el) => {
//         return acc + el.age;
//       }, 0),
//       regNos: group.map(el => (Number(el.regNo))).sort(function(a, b) {
//         return a - b
//       })
//     };
//   });

//   // set output key for each group
//   groupOutput.forEach((group, idx) => {
//     let currentGroup = `group${idx + 1}`;
//     output = { ...output, [currentGroup]: group };
//   });
//   console.log(output)
//   return output;
// }

// // function to calculate age
// const calcAge = (year) => {
//   const date = new Date(year);
//   return new Date(2019, 0, 1).getFullYear() - new Date(year).getFullYear()
// }

// classifier(input);




//Create a function maxIterations that takes in the length of an array
//and returns the maximum number of iterations it would take to find any number
//using binary search

function maxIterations(length) {

   let result = length/2

}

