// Simulated asynchronous functions to simulate boiling water, cooking pasta, making sauce, and eating
function boilWater(callback) {
    console.log("Putting water to boil for pasta...");
    setTimeout(() => {
        console.log("Watching TV while waiting for water to boil...");
    } ,1000);
    setTimeout(() => {
        console.log("Water is boiling!");
        callback();
    }, 3000); // Simulating boiling water for 3 seconds
}

function cookPasta(callback) {
    console.log("Pouring pasta into boiling water...");
    setTimeout(() => {
        console.log("Pasta is ready!");
        callback();
    }, 5000); // Simulating cooking pasta for 5 seconds
}

function makeSauce(callback) {
    console.log("Making sauce...");
    setTimeout(() => {
        console.log("Sauce is ready!");
        callback();
    }, 4000); // Simulating making sauce for 4 seconds
}

function eat() {
    console.log("Eating delicious pasta with sauce while watching TV.");
}

// Starting the process
boilWater(() => {
    cookPasta(() => {
        makeSauce(() => {
            eat();
        });
    });
});
