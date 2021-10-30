// VOORRAAD ARRAY MET TV'S
const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];

//FUNCTIONS


//1. counts the total number of items to sell --------------------------
function totalStockCounter() {
    let stockArray = inventory.map((item) => {
        return item.originalStock - item.sold;
    });

    let totalStock = 0;
    for (let i = 0; i < stockArray.length; i++) {
        totalStock = totalStock + stockArray[i];
    }
    return totalStock;
}

totalStockCounter();

//returns the result to index.html
document.getElementById("stockCounter").innerHTML = totalStockCounter();

//2a. array of all type names -------------------------------------------
const typeNames = inventory.map((item) => {
    return item.name;
});

//2b. array of all sold-out items ---------------------------------------
const soldOut = inventory.filter((item) => {
    return (item.originalStock - item.sold) === 0;
});

//2c. array of all items with AmbiLight --------------------------------
const hasAmbi = inventory.filter((item) => {
    return item.options.ambiLight === true;
});


//2d. array of all items listed from lowest to highest price -----------
function lowestToHighestPrice() {
    const lowestToHighestPrice = inventory.sort((a, b) => {
        return a.price - b.price;
     }); return document.getElementById("allProducts").innerHTML = allProducts(lowestToHighestPrice);
}
//3a. Target: Amount when all is sold-out ------------------------------
function target() {
    const targetPerItem = inventory.map((item) => {
        return item.originalStock * item.price;
    });

    let targetCounter = 0;
    for (let i = 0; i < targetPerItem.length; i++) {
        targetCounter = targetCounter + targetPerItem[i];
    }
    return targetCounter;
}

//returns the result to index.html
document.getElementById("targetCounter").innerHTML = target();

//3b. Counter: Current amount sold --------------------------------------
function sold() {
    const totalAmountSoldPerItem = inventory.map((item) => {
        return (item.originalStock - item.sold) * item.price;
    });

    let counter = 0;
    for (let i = 0; i < totalAmountSoldPerItem.length; i++) {
        counter = counter + totalAmountSoldPerItem[i];
    }
    return counter;
}

//returns the result to index.html
document.getElementById("soldCounter").innerHTML = sold();

//4. shows two type names ------------------------------------------------
const typeNameOne = inventory[0].name;
const typeNameTwo = inventory[1].name;

//returns the result to index.html
document.getElementById("inTheSpotLightsOne").innerHTML = typeNameOne;
document.getElementById("inTheSpotLightsTwo").innerHTML = typeNameTwo;

//5a function shows brand, type and name of one item as string ----------

let randomItem = inventory[Math.floor(Math.random() * inventory.length)];

function itemName(item) {
    return item.brand + " " + item.type + " - " + item.name;
}

//returns result to index.html
document.getElementById("itemName").innerHTML = itemName(randomItem);

//5b function shows the price of one item as string with euro sign ------

function itemPrice(item) {
    return "€" + item.price + ",-";
}

//returns result to index.html
document.getElementById("itemPrice").innerHTML = itemPrice(randomItem);

//5c function calculates inches to cm and shows screen-sizes as string --
function screenSizeInCm(item) {
    const sizes = item.availableSizes.map((size) => {
        return size + " inch (" + size * 2.54 + " cm)";
    });
    return sizes.join(" | ");
}

//returns result to index.html
document.getElementById("screenSize").innerHTML = screenSizeInCm(randomItem);


//5d using function a, b and c to present one item in box ---------------
//already did this in 5a, b and c

//5e tv generator function -----------------------------------------------
function allProducts(list) {
    const products = list.map((item) => {
        return '<div class="block">' + itemName(item) + '<br>' + itemPrice(item) + '<br>' + screenSizeInCm(item) +'</div>'
    }); return products.join(" ");
}

//returns result to index.html
document.getElementById("allProducts").innerHTML = allProducts(inventory);

//Extra: Three buttons (soort by price, ambi lght TV's, sold out items)--

document.getElementById("LowToHigh-button").addEventListener("click", lowestToHighestPrice);
// document.getElementById("ambiLight-button").addEventListener("click", hasAmbi);
// document.getElementById("soldOut-button").addEventListener("click", soldOut);

//test
console.log("Gebeurt er iets?")