//function to add even numbers in an array
function sumEvenNumbers(...numbers){
     let result = 0;
        numbers.forEach(number =>{
            if(number % 2 == 0)
              result += number;    
        })
        return result
}

console.log(sumEvenNumbers(2,4,5,6,7,12,8,2,10))

//function that taking two array and return a unique array

function uniqueNumbers(array1, array2){
    let newArray = array1.concat(array2)
        newArray.sort((a, b) =>{
            return a-b
        })
        let hightestNum = newArray[newArray.length -1];
        return hightestNum
}

console.log(uniqueNumbers([1, 3, 5, 7], [2, 3, 4, 6]))
//function that takes in a new string and return a new string with a letter remove

function removeEveryOtherCharacter(string){
     let newString = '';
        for(i = 0; i < string.length; i += 2){
            newString += string[i]        }

    return newString;

}
console.log(removeEveryOtherCharacter("Hello world"));

//function that returns a first number from an array that repeats it self
 function firstNumberDuplication(array){
        const seen = {};
            for(i = 0; i < array.length ; i++){
                
                if(seen[array[i]]){
                    return i;
                }
                    seen[array[i]] = true
                
            }
            return -1

 }
 console.log(firstNumberDuplication([1,4,6,7,7,5,0,1,2]))
 //callback function that return a manipulated array

 function myMap(array, callback ){
        let newArray = [];
            for(i = 0; i < array.length; i++){
                newArray.push(callback(array[i]))
            }
            return newArray

 }

 


 console.log(myMap([2, 4, 8, 10], x => x * 2))
 //function on filters using arrays and callbacks 

 function filter(array, callback){
        let newArray =[];
            for(i = 0; i < array.length; i++){
                if(callback(array[i]))
                newArray.push((array[i]))
            }
            return newArray
 }
 function callback(x){
    if(x % 2 === 0){
        return x
    }

 }

 console.log(filter([1, 2, 3, 4, 5], callback))
 //iterating through objects
  function countProperties(object){
    let count = 0;
        for(let key in object){
            if(object.hasOwnProperty(key)){
                count++;
            }
        }
        return count
  }
  console.log(countProperties({name: 'john', age: 30, location: 'new york'}))
  //OR
  let object = {name: 'john', age: 30, location: 'new york'}
  function capitalLetter(obj){
    const newObj = {};
    for(let keys in obj){
        if(obj.hasOwnProperty(keys)){
            const capitalizeKeys = keys.charAt(0).toUpperCase() + keys.slice(1);
            newObj[capitalizeKeys] = obj[keys]
        }
    }
    return newObj
  }
  console.log(capitalLetter(object))
  const count = countProperties(object)
  console.log(count)

  // capitalizing data in an array
  function capitalizeKeys(array){
    let newArray = []
        array.forEach(items => { newArray.push(items.toUpperCase())})
        return newArray
  }
console.log(capitalizeKeys(['matthew', 'peter', 'love']))
// praticing symbols
const mySymbol = Symbol("mySymbol");
const obj = {
    [mySymbol] : 'value',
    age: 30,
}
console.log(obj[mySymbol])
console.log(object.keys(obj))