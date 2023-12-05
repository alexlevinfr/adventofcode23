/*
 AdventOfCode2023 day2 part 2
 So this 
 RGB
Bag contains cubes - different amount each game
then show them and put them in the bag
gameid: number colour,…;

we want to find max number for a cube so that if maxred>12 or maxblue>14 or maxgreen>13 then 
add up the ids of the games

 */
 const readline = require("readline");
 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
   terminal: false
 });
 
 let varObj = {
   minRed: 0,
   minGreen: 0,
   minBlue: 0,
   cube: 0
 };

 function checkMax(x)
{
    
    var updated = false;

    var arr = x.trim().split (" ");
    num = parseInt(arr[0]); colour= arr[1]; 
    console.log("c="+colour);
    if(colour=="blue")
    {
      if(num > varObj.maxBlue)
      {
        //console.log("v="+varObj.maxBlue)
        varObj.maxBlue = num;
        updated = true;
      }
    } else if (colour=="red")
    {
        if (num > varObj.maxRed)
        {
          varObj.maxRed = num;
          updated=true;
        }
    } else if (colour=="green")
    {
        if (num > varObj.maxGreen)
        {
          varObj.maxGreen = num;
          updated=true;
        }
    }
    console.log("checkmax "+ x+",updated="+updated);
    return updated;
}


 //sample Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
 function maxCondition(presentation)
 {
    var ret = false;
    var cubes = presentation.split(",");
    ret = cubes.forEach(checkMax);
    console.log("maxcond "+ presentation+",ret="+ret+",r="+varObj.maxRed+",g="+varObj.maxGreen+",b="+varObj.maxBlue);
    return ret;
 }

 function retIdIfPossible(line)
 {
    var idstr, id, presentations;
    
    var array = line.split (":");
    idstr = array[0];
    presentations = array[1];
    id = idstr.split(" ")[1]; // Discard Game
    console.log(presentations);

    var presentations_a = presentations.split(";");
    presentations_a.forEach(maxCondition);
    var cube = varObj.maxRed*varObj.maxGreen*varObj.maxBlue
    console.log("cube="+cube);
    return cube;
}

 
 
 
 var total=0;
 var line;
 rl.on('line', (line) => {
   

   var ret;
   varObj.maxRed = varObj.maxBlue = varObj.maxGreen = 0;
   ret = retIdIfPossible(line);
   if (ret != -1)
   {
    total += parseInt(ret);
    console.log("found outside "+ret +", tot="+total);
   }
 });
 
 rl.once('close', () => {
   console.log("total:"+total);
 });
 
 
 
 