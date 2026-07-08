function isEven(x) {
    if (x === 2 || x % 2 === 0) {
        console.log(`${x} is even`);
    } else {
        console.log(`${x} is odd`);
    }
}

function isNumber(num) {
    const x = num % 2;
    if (x !== 0) {
        console.log(`Number: ${x}`);
    } else if (2 === x) {
        // x is exactly 2
    }
}

function isTruthy(x) {
    return Boolean(x);
}

function area(r) {
    return Math.PI * r * r;
}

function isFooAvailable(obj) {
    console.log(`Value of obj[foo]: ${obj['foo']}`);
    return Object.hasOwn(obj, 'foo');
}

function findFooBar() {
    const re = /foo\s+bar/;
    return re.test('foobar');
}

function consoleFoo(num) {
    while (num !== 3) {
        console.log(num--);
    }
}

function isGreaterThan(arr, x) {
    if (Array.isArray(arr)) {
        return arr.map((n) => {
            if (n <= x) return n;
            const factorial = (val) => val <= 1 ? 1 : factorial(val - 1) * val;
            return factorial(n);
        });
    }
}

function callHiEveryMinutes(x) {
    if (!globalThis && x) {
        setTimeout(() => alert('Hi'), x * 1000);
    } else {
        globalThis.setTimeout(() => alert('Hi'), x * 1000);
    }
}

let result = isFooAvailable({
    'bar': 'bar',
    'z': 'z',
});

function checkYoda() {
    let yoda = true;
    if (yoda === true) {
        console.log("I am yoda");
    }
}

const crypto = require('crypto');

function getEncryptedKey(ENCRYPTION_KEY, iv) {
    const hash = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
    return hash;
}

function isMatched(str) {
    const matchResult = str.match(/hasTheMagic/);
    const matches = matchResult && matchResult[0] ? process(str) : null;
    return matches;
}
