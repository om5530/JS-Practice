//dot notation

const person = {
  name: "john",
};

console.log(person.name);
person.age = 25;
console.log(person);


//square bracket notation
console.log();

const item = {
  "featured-item": ["item1", "item2"],
};
console.log(item["featured-item"]);
console.log(person["name"]);

let appState = "loading";
appState = "error";
let keyName = "computer";
const app = {
  [appState]: true,
};
app[keyName] = "apple";
console.log(app);

const state = {
  loading: true,
  name: "",
  job: "",
};

function updateState(key, value) {
  state[key] = value;
}

updateState("name", "john");
updateState("job", "dev");
updateState("loading", false);
updateState("products", ['xyz','abc']);
updateState("name", "peter");

console.log(state);
