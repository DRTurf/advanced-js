const arr = [1, 2, 3, 4, 5];
if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function(valueToFind) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] === valueToFind) {
                return true;
            }
        }
        return false;
    };
}



console.log(arr.customIncludes(3));  
console.log(arr.customIncludes(6));  
