async function putWater() {
    console.log("Putting water to boil for pasta...");
    await watchTV();
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Water is boiling!");
            resolve();
        }, 2000);
    });
};

function watchTV() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Watching TV while waiting for water to boil...");
            resolve();
        }, 1000);
    });
};

async function cookPasta() {
    console.log("Pouring pasta into boiling water...");
    await makeSauce();
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Pasta is ready!")
            resolve();
        }, 4000);
    });
};

async function makeSauce() {
    console.log("Making sauce...");
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log("Sauce is ready!")
            resolve();
        }, 4000);
    });
};

function eatPasta() {
    console.log("Eating delicious pasta with sauce while watching TV.");
};

async function main() {
    try {
        await putWater();
        await cookPasta();
        eatPasta();
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

main();
