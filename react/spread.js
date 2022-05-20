const peaks = ['pickle', 'burger'];
const animal = ['lion', 'dog'];
const combine = [...peaks, ...animal];
console.log(combine.join(","));


function test(args) {
    args = 'Ian';
    console.log(args);
}

outerArgs = ['Ian', 'People'];
test(outerArgs);
console.log(outerArgs);
