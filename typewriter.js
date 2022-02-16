
const sentence = "hello there from lighthouse labs";
let time = 0;
for (const char of sentence) { //iterating through characters
  time += 50; //setting counter
  count = 0;
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
}
setTimeout(() =>
  process.stdout.write('\n') // fixing the new line at the end.
  , time);
