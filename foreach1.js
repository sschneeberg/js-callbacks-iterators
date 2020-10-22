// (1) Use the .forEach iterator to loop over the following array of foods and say you like them.

// The output should be
// > "I like pizza"
// > "I like tacos"
// > "I like ice cream"

const foods1 = ["pizza", "tacos", "ice cream", "sushi"];

// your code here

foods1.forEach(function(food) {
    console.log(`I like ${food}`);
});