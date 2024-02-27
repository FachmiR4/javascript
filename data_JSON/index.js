// JSON = (JavaScript Oject Notation) data-interchange format
//         used for exchanging data between a server and web aplication
//         JSON files {key:value} OR [Value1, Value2, Value3]

//         JSON.stringify() = converts a js object to a JSON string
//         JSON.parse() = convert a JSON string to a js object

const names = `["fachmi", "ramadhanan", "januardi", "agustian", "sapardi"]`;
const persons = `{"name": "Fachmi Ramadhan", "age": 23, "hobies": ["Boxing", "Swimming", "Skateboard"]}`;
const people = [{"name": "Fachmi Ramadhan", "age": 23, "hobies": ["Boxing", "Swimming", "Skateboard"]},
                {"name": "Ramdon Jarnuadi", "age": 27, "hobies": ["Fishing", "Fight", "Vloger"]},
                {"name": "Agustian sapraman", "age": 28, "hobies": ["Play Game", "Traveling", "Coli"]}];

const toJSON = JSON.stringify(people);
const toString = JSON.parse(persons);

console.log(toString)

fetch("people.json").then(respone => respone.json())
.then(value => value.forEach(element => console.log(element.name)));
