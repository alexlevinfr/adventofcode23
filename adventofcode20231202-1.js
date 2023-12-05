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
   maxRed: 12,
   maxGreen: 13,
   maxBlue: 14

 };

 function checkMax(x)
{
    
    rc = true;

    var arr = x.trim().split (" ");
    num = parseInt(arr[0]); colour= arr[1]; 
    console.log("c="+colour);
    if(colour=="blue")
    {
      if(num > varObj.maxBlue)
      {
        //console.log("v="+varObj.maxBlue)
        rc = false;
      }
    } else if (colour=="red")
    {
        if (num > varObj.maxRed)
        {
            rc = false;
        }
    } else if (colour=="green")
    {
        if (num > varObj.maxGreen)
        {
            rc = false;;
        }
    }
    console.log("checkmax "+ x+",rc="+rc);
    return rc;
}


 //sample Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
 function maxCondition(presentation)
 {
    var ret = true;
    var cubes = presentation.split(",");
    ret = cubes.every(checkMax);
    console.log("maxcond "+ presentation+",ret="+ret);
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
    if (presentations_a.every(maxCondition))
    {
        return id;
    }
    else
    {
        return -1;
    }
}

 
 
 
 var total=0;
 var line;
 rl.on('line', (line) => {
   

   var ret;
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
 
 
 
 