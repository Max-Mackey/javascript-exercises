const reverseString = function(string) {
    var splitString = string.split("")
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    console.log(joinArray);
    
};
reverseString("reversethis two words");


