// example for built-in join
const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];
console.log('example for built-in join');
console.log(schools.join('. '))

// example for built-in filter
const animals = ['mammals', 'dog', 'cat', 'human', 'people'];
const toCut = ['human', 'people'];
const notHuman = (speice) => speice !== 'human' && speice !== 'people';
const realAnimal = animals.filter(animal => notHuman(animal));
console.log(`example for built-in filter`);
console.log(realAnimal);


// example for built-in map
const teams = ['lakers', 'heat', 'celtics', 'duke'];
const toObj = (item) => {
    return {
        "Team Name": item
    };
}
const transferToObj = (teams) => teams.map((team) => toObj(team));
console.log(`example for built-in map`);
console.log(transferToObj(teams));
console.log(Object.keys(transferToObj(teams)));

// example for Object.keys (create an array of keys for object)
const myobj = {
  Yorktown: 10,
  "Washington & Liberty": 2,
  Wakefield: 5
};
console.log(`example for Object.keys`);
console.log(Object.keys(myobj));

// example for built-in reduce to find max value
const nums = [100, 200, 5, 300, 5];
const findMax = (nums) => nums.reduce((max, num) => (num > max) ? num : max, 0);
console.log(`example for built-in reduce to find max value`);
console.log(findMax(nums));


// example for wrting a compose (compose function together to make it more readable)
const mutlpleBy10 = (args) => args * 10;
const addAHundred = (args) => args + 100;

const compose = (...fns) => (args) => fns.reduce((composed, f) => f(composed), args);

const equation = compose(mutlpleBy10, addAHundred);
console.log(`example for compose`);
console.log(equation(5));
