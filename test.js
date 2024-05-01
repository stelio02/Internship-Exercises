function boilWater(callback) {
    console.log("Putting water to boil for pasta...");
    console.log("Watching TV while waiting for water to boil...");
    setTimeout(() => {
        console.log("Water is boiling!");
        callback();
    }, 3000); 
}

function cookPasta(callback) {
    console.log("Pouring pasta into boiling water...");
    console.log("Making sauce...");
    setTimeout(() => {
        console.log("Sauce is ready!");
    }, 4000);
    setTimeout(() => {
        console.log("Pasta is ready!");
        callback();
    }, 4000);
}

function eat() {
    console.log("Eating delicious pasta with sauce while watching TV.");
}

boilWater(() => {
        cookPasta(() => {
                eat();
            });
        });
