const Calculator = {
    
    result: 0,

    add: function(value) {
        this.result += value;
        return this; 
    },

    
    subtract: function(value) {
        this.result -= value;
        return this; 
    },

   
    multiply: function(value) {
        this.result *= value;
        return this; 
    },

    
    divide: function(value) {
        if (value !== 0) {
            this.result /= value;
        } else {
            console.log("Cannot divide by zero");
        }
        return this; 
    },

   
    reset: function() {
        this.result = 0;
        return this; 
    },


    getResult: function() {
        console.log(this.result);
        return this;
    }
};


Calculator.add(10).subtract(2).multiply(5).divide(4).getResult(); 
