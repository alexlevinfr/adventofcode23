/*
 AdventOfCode2023 day1 part 2.
 parse strings for numbers as digits and words and find the first and last to make a 2 digit number
 onetwothreefourfivesixseveneightnine = 19
 overlaps possible 1,3,5,9 can be followed by 8
 2 can be followed by 1
 7 can be followed by 9
 8 can be followed by 2
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let varObj = {
  first: 0,
  firstfound: 0,
  last: 0,
  i : 0,
  line: ""
};

function setfoundvars(varObj, value)
{
    if(varObj.firstfound == 0)
    {
      varObj.firstfound = 1;
      varObj.first = varObj.last = value
    } else
    {
      varObj.last = value;
    }

}

function updateFoundIfNumberFound(varObj,needle,value,rewind)
{
  var sstr = varObj.line.substring(varObj.i+1, varObj.i + 1 +needle.length);
  var found;
  found = sstr.indexOf(needle); //contains either -1 for not found or a number
  if (found>-1)
  {
    setfoundvars(varObj, value);
    varObj.i+=needle.length - rewind; //advance to the e
    return 1;
  }
  return 0;
}

var total=0;
var line;
rl.on('line', (line) => {
  
  varObj.line = line;
  varObj.i = 0;
  var cols = varObj.line.length;
  var c;
  var found=-1;
  while(c=varObj.line[varObj.i])
  {
    switch (c)
    {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        setfoundvars(varObj, (c.charCodeAt(0)-0x30));
        break;
      case 'o': //o
        //possible 1, rewind for 8.
        if(updateFoundIfNumberFound(varObj,"ne",1,1))
        {
          break;
        }
        break;
      case 't': //t
      //possible 2/3
        //2 rewind for 1
        
        if(updateFoundIfNumberFound(varObj,"wo",2,1))
        {
          break;
        }
    
        //3 rewind for 8
        if(updateFoundIfNumberFound(varObj,"hree",3,1))
        {
          break;
        }
        break;

      case 'f': //f
        //possible 4/5
        //4 rewind 0
        if(updateFoundIfNumberFound(varObj,"our",4,0))
        {
          break;
        }
  
        //5 rewind 1
        if(updateFoundIfNumberFound(varObj,"ive",5,1))
        {
          break;
        }
        break;
      case 's':  //s
        //6, rewind 0
        if(updateFoundIfNumberFound(varObj,"ix",6,0))
        {
          break;
        }
        
        //7 rewind 1 to check 9
        if(updateFoundIfNumberFound(varObj,"even",7,1))
        {
          break;
        }
        break;
      case 'e': //e
        // 8 rewind 1 to check 2/3
        if(updateFoundIfNumberFound(varObj,"ight",8,1))
        {
          break;
        }
        break;
        //8 - rewind one to check 2/3
      case 'n': //n
        //9 rewind one to check eight
        if(updateFoundIfNumberFound(varObj,"ine",9,1))
        {
          break;
        }
        break;
      default:
        break;

    }
    varObj.i++;
}
 var lt = (varObj.first * 10) + varObj.last;
 total += lt;
 varObj.first = varObj.last = varObj.firstfound =0;
 varObj.line="";
});

rl.once('close', () => {
  console.log("total:"+total);
});



