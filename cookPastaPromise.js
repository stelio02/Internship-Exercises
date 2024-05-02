function putWater() {
    return new Promise((resolve, reject) => {
        console.log("Putting water to boil for pasta...");
        watchTV();
        setTimeout(() => {
            console.log("Water is boiling!");
            resolve();
        }, 2000);
    });
}

function watchTV() {
    setTimeout(() => {
        console.log("Watching TV while waiting for water to boil...");
    }, 1000);
}

function cookPasta() {
    return new Promise((resolve, reject) => {
        console.log("Pouring pasta into boiling water...");
        makeSauce();
        setTimeout(() => {
            console.log("Pasta is ready!")
            resolve();
        }, 4000);
    });
}

function makeSauce() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Making sauce...")
            resolve();
        }, 500);

        setTimeout(() => {
            console.log("Sauce is ready!")
        }, 4000);
    });
}

function eatPasta() {
    console.log("Eating delicious pasta with sauce while watching TV.");
}

function main() {
    putWater()
        .then(() => cookPasta())
        .then(() => eatPasta())
        .catch((error) => {
            console.error('An error occurred:', error);
        });
}

main();





    






