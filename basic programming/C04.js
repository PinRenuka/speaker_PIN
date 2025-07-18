// Array

//1. extract a string from a given string <s>
//   starting from character at position <i> and getting <n> characters.
// ดึงข้อความจากสตริง <s> โดยเริ่มจากตำแหน่งที่ <i> และเอามาทั้งหมด <n> ตัวอักษร
s = 'this is a long string'; 
i = 5;
n = 4;
s.slice(i,i+n)
console.log(s);
 
//2.1 get the position of the first occurrence of a given string <t> in a given string <s>.
// หาตำแหน่งของตัวอักษรหรือข้อความ <t> ที่ปรากฏครั้งแรกในสตริง <s>
s = "ghjkl;ghjkl"
t = "l"
s.indexOf(t)
console.log(s);

 
 
//2.2 get the position of the last occurrence of a given string <t> in a given string <s>.
// หาตำแหน่งของตัวอักษรหรือข้อความ <t> ที่ปรากฏครั้งสุดท้ายในสตริง <s>
s = "ghjkl;ghjkl"
t = "l"
s.lastIndexOf(t)
console.log(s);
 
 
//3. convert a given string <s> into another string so that all characters
//   from position <i> (inclusive) to position <j> (exclusive) of string <s>
//   become uppercase characters.
// แปลงข้อความในสตริง <s> ให้ตัวอักษรทั้งหมดตั้งแต่ตำแหน่ง <i> (รวม) ถึง <j> (ไม่รวม) กลายเป็นตัวพิมพ์ใหญ่ (uppercase)
s = "hello my name is renuka"
i = 5
j = 8
s.slice(0,i) + s.slice(i,j).toUpperCase() + s.slice(j)
console.log(s);
 
//4. given an array <a>, remove all elements from position <i> (inclusive)
//   to position <j> (exclusive).
// ลบสมาชิกทั้งหมดในอาร์เรย์ <a> ตั้งแต่ตำแหน่ง <i> (รวม) ถึง <j> (ไม่รวม)
a = [1, 2, 3, 4, 5, 6];
i = 2;
j = 5;
a.splice(i, j)
console.log(a); 


 
 
//5. given an array <a>, insert elements: <x>,<y>, and <z> at position <i>
//   so that all elements from position <i> move away for 3 positions.
// ในอาร์เรย์ <a> ให้แทรกสมาชิก <x>, <y>, และ <z> ที่ตำแหน่ง <i> โดยเลื่อนสมาชิกเดิมจากตำแหน่ง <i> ไปข้างหน้า 3 ตำแหน่ง
a = [10, 20, 30, 40];
i = 3;
a.splice(i, 0, "x", "y", "z"); 
console.log(a);  







