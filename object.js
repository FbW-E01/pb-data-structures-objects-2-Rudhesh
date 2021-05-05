

const checkObject = (number, object) => {
    if (number >= object.min && number <= object.max) {
      return true;
    } else {
      return false;
    }
  };
  
  console.log(checkObject(4, { min: 0, max: 5 }));
  console.log(checkObject(10, { min: 4, max: 5 }));
  console.log(checkObject(8, { min: 6, max: 10 }));
  console.log(checkObject(4, { min: 5, max: 5 }));
  
//   2. scrabble

let scrabble = [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ];



let tiles = () => {
score = 0;

for (let i = 0; i < scrabble.length; i++) {
    score += scrabble[i].score;
    
}
return score;
}
console.log(tiles())

// Is it an empty object? 

let object1 = (object) => {

    if (Object.entries(object).length === 0) {
        return true;
        
    }
return false;
}

console.log(object1({a: 1}))
console.log(object1({}))


// Counting Letters

const countLetters = (word) => {
    let letter = {};
    for (let i = 0; i < word.length; i++) {
    let  letters = word[i];
       
    letter[letters] = letter[letters] + 1 || 1;
        
    }

    return letter;    

}
console.log(countLetters("tree"))

// 5. Free Shipping.

let freeShipping = (object) => {

    let cost = Object.values(object);
    for (let i = 0; i < cost.length; i++) {
        cost = cost[i];

        if (cost > 50) {
            return true;
        }
       return false;
        
    }
}

console.log(freeShipping({ "Sponge": 3.50, "Soap": 5.99 }))
console.log(freeShipping({ "Surround Sound Equipment": 499.99 }))
console.log(freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }))

// 6. Programming Object.

const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes:
      "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
  };


  programming.languages.push("Go")
console.log(programming)


programming.difficulty = 7;

console.log(programming)


delete programming.jokes
console.log(programming)

programming.isFun = true;

console.log(programming)

for (const programmer of programming.languages) {
    
    console.log(programmer)
}


    keyOfObject = Object.keys(programming)
for (let i = 0; i < keyOfObject.length; i++) {
    const object11 = keyOfObject[i];
    console.log(object11)
}

valuesOfObject = Object.values(programming)
for (let i = 0; i < valuesOfObject.length; i++) {
    const object22 = valuesOfObject[i];
   
    console.log(object22)
}


let program = (object) => { 
    if (programming.isChallenging === true && programming.isRewarding === true ) {
       return 'Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging.'
    }
}
console.log(program(programming))
console.log(programming)