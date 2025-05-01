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






