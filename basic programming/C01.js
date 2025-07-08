// Data types and Variables and Operators
// JS is : dynamic typing
 
// declaration เป็นการประกาศตัวแปล
// var x; เป็นแบบเก่าไม่ต้องกำหนดค่าให้ก็ได้สามารถไปเปลี่ยนได้ function scope
// let y; เป็นแบบใหม่ไม่ต้องกำหนดค่าให้สามารถเปลี่ยนค่าได้ในภายหลัง block scope
// const r = 16; ย่อมากจาก constant ต้องกำหนดค่าให้มันไม่สามารถเป็นทีหลังได้
 
// assigment ใช้ =
// initialization(first assigmmwnt) ใช้ =
 
// data types : primitive type VS derived/abstract/user-defined type
// primitive type : number , charater/string , boolean , special type (represrnt nothing-ness ,
// undefined ไม่กำหนดค่าให้ , null ค่าที่ตั้งใจให้ว่าง object , NaN ค่าที่เกิดข้อผิดพลาดว่าไม่ใช่ตัวเลข , BigInt เป็นชนิดของตัวเลขพิเศษที่ใหญ่กว่า Number )
 
// operator : typeof ==> return string
 
// create 10 variables having boolean , number , string , undefined , null
// and console.log their values
 
// Booleans
let bl1 = true;
let bl2 = false;
console.log('Booleans :',bl1,typeof bl1)
console.log('Booleans :',bl2,typeof bl2)
// Numbers:
let length = 16;
let weight = 7.5;
console.log('Numbers :',length,typeof length);
console.log('Numbers :',weight,typeof weight);
// Strings:
let color = "Yellow";
let lastName = "Johnson";
console.log('Strings :',color,typeof color);
console.log('Strings :',lastName,typeof lastName);
// Undefined
let favcolor;
let nameja;
console.log('Undefined :',favcolor,typeof favcolor)
console.log('Undefined :',nameja,typeof nameja)
//null
let user = null;
console.log('null :',user,typeof user)
let usernume = null;
console.log('null :',usernume,typeof usernume)
// Object:
const person = {firstName:"John", lastName:"Doe"};
console.log(person);
// Array object:
const cars = ["Saab", "Volvo", "BMW"];
// Date object:
const date = new Date("2022-03-25");
// BigInt :
const big = 654123456789987654n;
console.log(big);
const bigints = BigInt("654123456789987654");
console.log(bigints);
 
//========
var num = 10.0000;
var flt = 10.0001;
var inf = Infinity;
var nan = NaN;
 
console.log('num :',num,typeof num,Number.isInteger(num),Number.isFinite(num),Number.isNaN(num));
console.log('flt :',flt,typeof flt,Number.isInteger(flt),Number.isFinite(flt),Number.isNaN(flt));
console.log('inf :',inf,typeof inf,Number.isInteger(inf),Number.isFinite(inf),Number.isNaN(inf));
console.log('nan :',nan,typeof nan,Number.isInteger(nan),Number.isFinite(nan),Number.isNaN(nan));
 
//---------------------
var b = null;
console.log(String(b)); //explicit type conversion
console.log(Number(b)); //explicit type conversion
console.log(Boolean(b)); //explicit type conversion
//----------------------
console.log("9" + 6 * 3);
console.log("9" + 6 - 10);
console.log( 6 * 3 + "9");
 
// หาค่าของ x ยกกำลัง y กับ z  และ x ยกกำลัง y ยกกำลังz โดยที่ x = 5 , y = 3 , z = 2 โดยใช้ ** oparator และไม่ใช้วงเล็บ
var x = 5;
var y = 3;
var z =2;
console.log((x**y)**z);
console.log(x**y**z);
//หาเศษจาก a หารด้วย b  => remaider และหาค่าแบบปัดเศษจาก x หารด้วย y (c)โดยที่ a = 30 , b = 7
var a = 30;
var b = 7;
console.log(a%b);
console.log(a/b);
console.log((a-(a%b))/b);

 