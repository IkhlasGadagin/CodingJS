console.log("Hello World");

function reverseFunction(str){
    const reverse=str.split("").reverse().join("");
    if(reverse === str){
        const ans = `$the give string ${str} is palindrome`;
        return ans;
    }
    else{
        const ans = `$the give string ${str} is not palindrome`;
        return ans;
    }
}

console.log(reverseFunction("moM"));


//Find the Longest Word in a String

function longestWord(str){
    const words = str.split(" ");
    const longestword= words.reduce((cur,acc)=>cur.length>acc.length?cur:acc,"");
    return longestword;
}

console.log(longestWord("The quick brown fox jumps over the lazy dog"));
