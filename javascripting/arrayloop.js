

var pets = ['cat', 'dog', 'rat'];

for (var pet in pets) {
    pets[pet] = pets[pet] + "s";
}

console.log(pets);