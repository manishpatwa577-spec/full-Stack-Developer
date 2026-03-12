// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// console.log(factorial(5)); 
// function factorial(num) {
//     if (num<1){
//         return("error");

//     }
//     let result = 1;
//     while (num>1) {
//         result*num;
//         num--
//     }
//     return result

// }
// console.log(factorial(5));
// function calculateFactorial(n) {

//   if (n < 0) {
//     return "Error: Negative numbers are not allowed.";
//   }


//   let result = 1;

//   while (n > 1) {
//     result *= n; 
//     n--;         
//   }

//   return result;
// }


// console.log(calculateFactorial(5)); 
// console.log(calculateFactorial(0)); 

// function countDigit(number, digit) {
//     const numStr = Math.abs(number).toString(); 
//     const target = digit.toString();
//     let count = 0;

//     for (let char of numStr) {
//         if (char === target) {
//             count++;
//         }
//     }

//     return count;
// }


// console.log(countDigit(122342, 2)); 
// function factorial(num) {
//     if (num < 0){
//     return "error";
//     }
//     let value = 1;
//     while (num > 1) {
//         value *= num;
//         num--
//     }
//     return value

// }
// console.log(factorial(5));
// console.log(factorial(0));
// function numberfactorial(num) {
//     if (num < 0) {
//         return "error";
//     }
//     let value = 1;
//     while (num > 1) {
//         value *= num;
//         num-- 
//     }
//     return value

// }
// console.log(numberfactorial(8));
// console.log(numberfactorial(0));


// check number is positive negative or zero 
// function checknumer(num) {
//     if (num < 0) {
//         console.log("number is negative");

//     }
//     else if (num > 0) {
//         console.log("number is positive");

//     }
//     else {
//         console.log("number is zero");

//     }

// }
// checknumer(5)
// checknumer(0)
// checknumer(-1)



// check number is even or odd 
// function checknum(num) {
// if (num %2 ===0) {
//     console.log(num ," is even");

// }   
// else {
//     console.log(num, "is odd");

// } 
// }
// checknum(10)
// checknum(7)



// find largest of two number 
// function findlargest(num1,num2) {
//     if (num1 > num2) {
//         console.log(num1,"is largest");

//     }
//     else {
//         console.log(num2, "is largest");

//     }

// }
// findlargest(10,12)
// findlargest(23,21)



// voting eligibility 
// function checkeligibility(age) {
//     if (age>=18) {
//         console.log(age, "can vote");

//     }
//     else {
//         console.log(age,"not can vote");

//     }

// }
// checkeligibility(23)

// function eligibility(age,adharcard,votercard) {
//     if (age>=18 && adharcard || votercard) {
//         console.log("can vote");

//     }
//     else {
//         console.log("can not vote");

//     }

// }
// eligibility (21,false,false)
// eligibility (21,true,false)



// wheather a year is leap year or not 
// function checkleapyear(year) {
//     if ((year % 4 ===0 && year % 100 !=0) || (year % 400 ===0)) {
//         console.log( year, "year is leap year");

//     }
//     else {
//         console.log(year, "is not leap year");

//     }

// }
// checkleapyear(1900)
// checkleapyear(2005)


// function factorialnum(num) {
//     if (num==0){
//         console.log("no factorial");
//         return 1

//     }
//     let prod = 1;
//     while (num>1) {
//         prod *= num;
//         num--
//     }
//     console.log(prod);
//     return prod

// }
// factorialnum (6)


// count digit 
// function countdigit(num) {
//     let count = 0;
//     while (num > 0) {
//         count++
//         num= Math.floor(num/10);

//     }
//     console.log(count,"ffff");
//     return count


// }
// countdigit (10)

// function countdigit(num) {
//     let count = 0;
//     while (num > 0){
//         count++
//         num= Math.floor(num/10); 


//     }
//     console.log(count,"fff");
//     return count


// }
// countdigit(456545)



// reverse a number 
// function reversnum(num) {
//     let rev = 0;
//     let count =0;
//     while (num>0) {
//         count++;
//         rev = rev*10 + num%10;
//         num = Math.floor(num/10);
//     }
//     console.log(rev,count);


// }
// reversnum (34543)

// function reversenumber(num) {
//     let rev= 0;
//     let count = 0;
//     while (num>0) {
//         count++
//         rev = rev*10 + num%10;
//         num = Math.floor(num/10);

//     }
//     console.log(rev,count);


// }reversenumber(934875)

// function reversenumbers(num) {
//     let rev = 0;
//     let count =0;
//     while (num>0) {
//         count++
//         rev = rev*10 + num%10;
//         num = Math.floor(num/10);

//     }
//     console.log(rev,count);


// }
// reversenumbers(843276587)

// let n=11;
// while (n<10) {
//     console.log("hello");
//     n++

// }

// do {
//     console.log("hello this is my do while loop");
//     n++

// }
// while (n<10)

// for loop 
// for (let i=0; i<=10; i++) {
//     console.log(i);

// }

// function sumofnum(num) {

// let sum= 0;
// for (let i=1; i<=num; i++) {
//     sum+=i
// }
// return sum
// while (num>0) {
//     sum+=num;
//     num--
// }
// return sum
//     do {
//         sum+=num;
//         num--
//     }
//     while (num>0);; {
//         console.log(sum);

//     }
//     return sum


// }
// console.log(sumofnum(12));


// find even numbers 
// function findevennum(num) {
//     for (let i=0; i<=num; i++) {
//         if (i %2 ===0) {
//             console.log("this is even",i);


//         }
//     }


// }
// findevennum(45)

// function sumevennum(num) {
//     let sum = 0;

//     for (let i = num; i >= 0; i--) {
//         if (i % 2 === 0) {
//             console.log("this is even", i);
//             sum += i
//         }
//     }
//     console.log(sum);

// }
// sumevennum(12)

// function sumofdigit(num) {
//     let sum= 0;
//     while (num>0){
//         sum+=num%10;
//         num= Math.floor(num/10)
//     }
//     console.log(sum);


// }
// sumofdigit(11)
// sumofdigit(476324877)

// function fibonaciseries(num) {
//     let a=0,b=1;
//     for (let i=0;i<=num;i++){
//         console.log(a);
//         let next = a+b;
//         a=b;
//         b=next;

//     }

// }
// fibonaciseries(5)
// fibonaciseries(10)


// function ArmstrongNum(num) {
//     let temp = num;
//     let temp2 = num;
//     let sum = 0

//     // let digit = countDigit(num);
//     let count = 0
//     while (temp2 > 0) {
//         count++
//         temp2 = Math.floor(temp2 / 10);
//     }
//     while (temp > 0) {
//         let digit = temp % 10;
//         sum += digit ** count;
//         temp = Math.floor(temp / 10);
//     }
//     if (sum === num) {
//         console.log("this is Armstorng",sum);

//     }
//     else {
//         console.log("this is not ", sum);

//     }

// }
// ArmstrongNum(152)
// ArmstrongNum(153)
// ArmstrongNum(27)
// ArmstrongNum(1)

// (1) first triangle

// function printtriangle(num) {
//     let str = "";
//     for (let i=1; i<=num; i++) {
//         for (let j=1; j<=num; j++){
//             str += "*"
//         }
//         console.log(str);

//     }

// }
// printtriangle(3)

// (2) second tringle 

// function printtriangle(num) {
//     let str= "";
//     for (let i=1; i<=num; i++) {
//         for (let j=1; j<=num; j++) {
//             str+= "    *"
//         }
//         console.log(str);

//     }

// }
// printtriangle(4)

// let n = 5; 
// function printtriangle(num) {


//     let str = "";

//     for (let i = 1; i <= num; i++) {

//         for (let j = 0; j < i; j++) {
//             str += "*";
//         }

//         str += "\n";
//     }

//     console.log(str);
// }
// printtriangle(4)


// function printtriangle(num) {


//     let str = "";

//     for (let i = num; i >= 1; i--) {

//         for (let j = 0; j > i; j--) {
//             str += "*".repeat(i);
//         }

//         str += "\n";
//     }

//     console.log(str);
// }
// printtriangle(4)

// let n = 5;
// let str = "";

// for (let i = n; i >= 1; i--) {
//   str += "*".repeat(i) + "\n";
// }

// console.log(str);

// let n = 4;
// let str = "";

// for (let i = 1; i <= n; i++) {
//   str += " ".repeat(n - i);
//   str += "*".repeat(2 * i - 1);
//   str += "\n";
// }

// console.log(str);


// let n = 5;
// let str = "";
// for (let i = n; i >= 1; i--) {
//     str += "*".repeat(i);
//     str += "\n";
// }
// console.log(str);

// let n = 4;
// let str = "";

// for (let i = 1; i <= n; i++) {
//     str += " ".repeat(n - 1);
//     str += "*".repeat(2 * i - 1);
//     str += "\n"
// }
// console.log(str);

// const original = { name: "Alice", details: { age: 25 } };
// const shallowCopy = { ...original }; 

// shallowCopy.name = "Bob"; // Changes only the copy
// shallowCopy.details.age = 30; // Changes BOTH original and copy (shared reference)
// console.log(shallowCopy);

// const user = { id: 1, name: "Alice", role: "admin" };
// const { id, ...copyWithoutId } = user; // 'copyWithoutId' is a shallow copy
// console.log(user);
// console.log(copyWithoutId);
// const deepCopy = structuredClone(original);
// console.log(deepCopy);

// arr1=[30,33,40,22]
// console.log(arr1.every((x)=>x>33))

// arr2=[3,7,12,5,20]
// console.log(arr2.find((x)=>x>=10));


// let dddd =[10,5,20,8,20];
// let set = new Set(dddd)
// result=[...set].sort((a,b)=>b-a)
// console.log(result[1]);

// let d1=[1,2,3,4,5,6]
// let even=d1.filter((x)=>x%2===0)
// console.log(even.length);
// console.log(even.reduce((x,y)=>x+y));

// let d2=[1,2,3,4,5,6]
// let odd=d2.filter((x)=>x%2!==0);
// console.log(odd.length);
// console.log(odd.reduce((x,y)=>x+y));

// function findMissingNumber(arr) {
    // const n = arr.length + 1; // N is length including the missing number
    // const expectedSum = (n * (n + 1)) / 2;
    // const actualSum = arr.reduce((acc, curr) => acc + curr, 0);
    
    // return expectedSum - actualSum;
// }

// const arr = [1, 2, 4, 5];
// console.log(findMissingNumber(arr)); // Output: 3

// return Elements grt than 3
// let ar1=[1,2,3,4,5];
// let newar1=ar1.filter((x)=>x>3)
// console.log(newar1);

// return odd Elements
// let ar2=[1,2,3,4,5,6]
// let newar2=ar2.filter((x)=>{return x%2!==0;})
//   console.log(newar2);

// return Elements whose length is grt than 5
// let ar3=["apple","hi","hello","cat","banana"]
// let newar3=ar3.filter((x)=>{return x.length>=5;})
// console.log(newar3);

// return even No and mul by 3
// let ar4=[1,2,3,4,5,6];
// let newar4=ar4.filter((x)=>x%2==0).map((x)=>x*3)
// console.log(newar4);

// return factoiral
// let ar5=[1,2,3,4,5]
// let newar5=ar5.reduce((acc,curr)=> acc*curr) //initial value at the end
// console.log(newar5);

// return length
// let ar6=[1,2,3,4,5]
// let newar6=ar6.reduce((x)=>x+1)
// console.log(newar6);

// return largest Element
// let ar7=[1,2,3,4,5]
// let newar7=ar7.reduce((acc,curr)=>curr>acc ? curr : acc)
// console.log(newar7);


// ADD /REMOVE
// push add at last
// pop remove last item
// unshift add in start
// shift remove in start


// TRAVERSAL / ITERATION
// foreach does not return anything
// map retruns new array
// filter return new array with filter condition
// reduce return single value


//SEARCHING methods
// let res=[23,4,50,3,40,60,3]
// let val = res.findIndex((val)=>val>20)
// let val1 = res.includes(50);
// let val2 = res.indexOf(3)
// let val3 = res.lastIndexOf(3)

// console.log(val);
// console.log(val1);
// console.log(val2);
// console.log(val3);







// SORTING /REVERSING
// let val =res.sort((a,b)=>a-b)


// array.map questions 
// muliply each element by 5
// let arr1=[1,2,3,4,5,6,7,8,9,10]
// let updateArr= arr1.map(x => x*5);
// console.log(updateArr);

// odd ones should be multiplied by 3 & evens with 2
// let arr5=[1,2,3,4,5]
// let newarr= arr5.map((val)=>{
//   if(val%2===0) return val*2
//   return val*3;
// })
// console.log(newarr);


// find length of each Element
// let arrNames=["pritam","harsh","vivek"]
// let len=arrNames.map(x=> x.length);
// console.log(len);

// output should be [10,21,32]
// let arr100=[10,20,30];
// let newarr1=arr100.map((x,i)=>x+i)
// console.log(newarr1);

let employees = [
    {name:"satish",salary:50000},
        {name:"nitu",salary:55000},
    {name:"radha",salary:51000},
    {name:"ragini",salary:54000},
    {name:"anamika",salary:52000},
    {name:"supriya",salary:60000},
    {name:"aditya",salary:40000},

]
averagesalary = employees.reduce((acc,emp)=>acc+emp.salary,0)/employees.length
console.log(averagesalary);

function add(a) {
    return function (b){
        return function (c) {
            return a+b+c
        }
    }
    
}
console.log(add(2)(4)(23));









