let sentence= "Afaf Kelai"

console.log(sentence.length);
let  nbr =sentence.split(" ").length;

console.log(nbr);
console.log(sentence.indexOf('a'));
let nbrofA=sentence.match(/\a/g)
console.log(nbrofA.length);

function getVowels(str) {
    var vowelsCount = 0;
  
    //turn the input into a string
    var string = str.toString();
  
    //loop through the string
    for (var i = 0; i <= string.length - 1; i++) {
  
    //if a vowel, add to vowel count
      if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
        vowelsCount += 1;
      }
    }
    return vowelsCount;
  }

  console.log(getVowels(sentence));


  