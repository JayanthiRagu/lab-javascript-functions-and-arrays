// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(val1,val2){
  return (val1>val2)?val1:val2;
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words)
{
  var length=0,indVal=[];
  if(words.length == 0)
  return null
  else if(words.length == 1)
  {
    return words[0];
  }
  else{
    words.forEach(function findMaxWord(word1,index,word)
    {
      if(length<word1.length)
      {
        length=word1.length;
        if(indVal.length==0)
          indVal.push(index);
        else
        {
          indVal.pop();
          indVal.push(index);
        }
      }
    });
    return words[indVal[0]];
  }
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers)
{
  var total=0;
  numbers.forEach(function findNetTotal(curVal,index,number)
  {
    total += curVal;
  });
  return total;
}

function add(mixedArr)
{
  var total=0;
  mixedArr.forEach(function findTotal(curVal,index,mixedArray){
    switch(typeof(curVal))
    {
      case "number": 
      {
        total += curVal;
        break;
      }
      case "string": 
      {
        total += curVal.length;
        break;
      }
      case "boolean": 
      {
        if (curVal == true)
        {
          total += 1;
        }
        break;
      } 
      case "object":
      {
        throw new Error("Unsupported data type sir or ma\'am");
      }
      default: 
       total=total;
    }
  });
  return total;
}
// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg)
{
  if(numbersAvg.length == 0)
  {
    return null;
  }
  var sum = netPrice(numbersAvg);
  var total = sum/(numbersAvg.length);
  return total;
}
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr)
{
  var total=0;
  if(wordsArr.length == 0)
  {
    return null;
  }
  wordsArr.forEach(function findWordTotal(curVal,index,wordsArr)
  {
      total += curVal.length;
  });
  return total/(wordsArr.length);
}

//bonus
function avg(arr)
{
  var total=0;
  if(arr.length == 0)
  {
    return null;
  }
  arr.forEach(function findTotal(curVal,index,mixedArray){
    switch(typeof(curVal))
    {
      case "number": 
      {
        total += curVal;
        break;
      }
      case "string": 
      {
        total += curVal.length;
        break;
      }
      case "boolean": 
      {
        if (curVal == true)
        {
          total += 1;
        }
        break;
      } 
      default: 
       total=total;
    }
  });
  var average= Number(((total/arr.length)).toFixed(2));
  return average;
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(wordsUnique)
{
  var newArray = [];
  if(wordsUnique.length == 0)
  {
    return null;
  }
  wordsUnique.forEach(function findUnique(curVal,index,wordsUnique){
    var bool = newArray.includes(curVal);
    if( bool == false)
    {
        newArray.push(curVal);
    }
  });
  return newArray;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind,searchWord)
{
  if(wordsFind.length == 0)
  {
    return null;
  }
  wordsFind.forEach(function findWord(curVal,index,wordsFind){
    var bool = wordsFind.includes(searchWord);
    if(bool == true)
      return true;
    else
      return false;

  });
  return true;
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(wordsCount,searchWord)
{
  var count=0;
  if(wordsCount.length == 0)
  {
    return 0;
  }
  wordsCount.forEach(function findWord(curVal,index,wordsCount){
    if(curVal == searchWord)
      count += 1;
  });
  return count;
}

// Progression #8: FindMaximumProduct
matrix=[
  [ 1,  2, 3, 4, 5],
  [ 1, 25, 3, 4, 5],
  [ 1, 20, 3, 4, 5],
  [ 1, 20, 3, 4, 5],
  [ 1,  4, 3, 4, 5]
]
function maximumProduct(matrix)
{
  var i=0;
  var j=0,total=1;
  do
  {
    total = total * matrix[i][j];
    if(matrix[i][j+1]>matrix[i][j])
      j++;
    else if (matrix[i+1][j]>matrix[i][j])
      i++;
    else
      i++;j++;

  }
  while(i!=5 && j!=5);
  return total;
}

// Progression #8: Bonus
const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

