
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var total=0;
var line;
rl.on('line', (line) => {
  

var i=0;
var first=0;
var firstfound=0;
var last=0;
var c;
while(c=line.charCodeAt(i))
{
  if(c>=0x30 && c<=0x39)
  {
    if(firstfound==0)
    {
      firstfound=1;
      first = last = c-0x30;
    } else
    {
      last = c-0x30;
    }
  }
  i++;
}
 var lt=(first*10)+last;
 console.log("line total: "+ lt);
 total+=lt;
 first=last=firstfound=0;
});

rl.once('close', () => {
  console.log("total"+total);
});



