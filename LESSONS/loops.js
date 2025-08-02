// The for loop
// Th for loop is a fundamental control structure in JavaScript that allows you to repeat a block of code a specific number of times.
// It consists of three main parts: initialization, condition, and increment/decrement.  
// Example of a for loop that prints an asterisk (*) five times to the console.
// The loop starts with `i` initialized to 0, checks if `i` is less than or equal to 5, and increments `i` by 1 after each iteration.
// The loop will run five times, printing an asterisk each time.
// After the loop completes, `i` will be 6, which is greater than 5, so the loop stops.

 for (let i = 0; i <= 5; i++) 
  {
  //  console.log("*" + " ");
  }
  // console.log('------------------------------------------------')
  
  // The while loop
  // The while loop is another control structure that allows you to repeat a block of code as long as a specified condition is true.
  // It consists of a condition that is checked before each iteration, and if the condition is true, the code block inside the loop is executed.

// Example of a while loop that prints an asterisk (*) five times to the console.
// The loop starts with `l` initialized to 0, checks if `k` is less than 5, and increments `k` by 1 after each iteration.
// The loop will run five times, printing an asterisk each time.

  let k = 0;
while (k < 5) {
  // console.log("*");
  k++; // Increment i to avoid an infinite loop
}
  // console.log('------------------------------------------------')

// The do...while loop
// The do...while loop is similar to the while loop, but it guarantees that the code block will be executed at least once before the condition is checked.
// It consists of a code block that is executed first, followed by a condition that is checked after the code block has executed.
// Example of a do...while loop that prints an asterisk (*) five times to the console.
// The loop starts with `s` initialized to 0, executes the code block, and then checks if `s` is less than 5.
// If the condition is true, the loop continues; otherwise, it stops.
let s = 0;    
do {
  // console.log("*");
  s++; // Increment j to avoid an infinite loop
} while (s < 5);

// partterns
// The for loop can also be used to create patterns. For example, you can use nested loops to create a pattern of asterisks.


let row;
for (let i = 0; i < 5; i++) 
  {
    row = "";
    for (let j = 0; j < 5; j++) 
      {
        if (i == 0 || i == 5-1 || j == 0 || j == 5-1)
          {
            row += "* "; // Append an asterisk to the row string
          }else{
            row += "  "; // Append a space to the row string
          }
      }
      console.log(row)
  }

  // This will print 10 asterics in a row
let x;
let y;
z = ''

for (x=0;x<=10;x++){
  z+='*'
}
console.log(z)
console.log('---------------------------')

  // This will print a square filled with 10 asterics
let i;
let j;
let ro;

for (i=1;i<=5;i++){
  ro = '  ';
  for (j=1;j<=5;j++){
  ro+='*  ';
  }
  console.log(ro)
}