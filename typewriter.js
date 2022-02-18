
const sentence = "hello there from lighthouse labs\n";
let time = 0;
for (const char of sentence) { //iterating through characters
  time += 50; //setting counter
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
}

