
function putWater() {
    console.log("Putting water to boil for pasta...");
    watchTV();
    return new Promise((resolve, reject) => {
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
    console.log("Pouring pasta into boiling water...");
    return new Promise((resolve, reject) => {
        makeSauce().then(() => {
            setTimeout(() => {
                console.log("Pasta is ready!")
                resolve();
            }, 4000);
        });
    });
}

function makeSauce() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Making sauce...")
        }, 500);

        setTimeout(() => {
            console.log("Sauce is ready!")
            resolve();
        }, 4000);
    });
}

function eatPasta() {
    console.log("Eating delicious pasta with sauce while watching TV.");
}

putWater()
    .then(() => cookPasta())
    .then(() => eatPasta())
    .catch((error)=>{
        console.log("Something went wrong.");
    });





    






