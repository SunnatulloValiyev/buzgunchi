// let memoryHog = [];

// function eatMemory() {
//     for (let i = 0; i < 100000; i++) {
//         memoryHog.push({ data: new Array(100000).fill('*') });
//     }
//     console.log("Xotira ishlatilmoqda...");
//     setTimeout(eatMemory, 100);
// }

// eatMemory();


function overloadCPU() {
    while (true) {
        console.log("CPU overloaded");
        Math.random();  
    }
}

function overloadMemory() {
    let memoryHog = [];
    setInterval(() => {
        memoryHog.push(new Array(1000000).fill('*'));
        console.log("Xotira ishlatilmoqda...");
    }, 100);
}


overloadCPU();
overloadMemory();


function overloadCPU() {
    while (true) {
        console.log("CPU overloaded");
        Math.sqrt(Math.random() * 9999999); 
    }
}

overloadCPU();


let memoryHog = [];

function overloadMemory() {
    setInterval(() => {
        memoryHog.push(new Array(1000000).fill('*'));
        console.log("Xotira ishlatilmoqda...");
    }, 100);
}

overloadMemory();
