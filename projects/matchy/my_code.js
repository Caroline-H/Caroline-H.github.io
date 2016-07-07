var animal = {};

animal.species = "dog";
animal["name"] = "Moose";
animal.noises = [];

console.log(animal);


var noises = [];

noises[0] = "woof";
noises.push("howl");
noises.unshift("yip");
noises[noises.length] = "growl";

console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

animal["noises"] = noises;
animal.noises.push("bark");

console.log(animal);


var animals = [];
animals.push(animal);

console.log(animals);

var duck = {
    species: "duck",
    name: "Jerome",
    noises: ["quack","honk","sneeze","woosh"]
};
animals.push(duck);

console.log(animals);

var cat = {
    species: "cat",
    name: "Whiskers",
    noises: ["meow", "purr", "hiss"]
};
animals.push(cat);

var horse = {
    species: "horse",
    name: "Bob",
    noises: ["neigh", "whiny"]
};
animals.push(horse);

console.log(animals);
console.log(animals.length);

// I chose an array to hold our list of friends because the order of the friends
// doesn't matter and we don't need a key because they are all names

var friends = [];

function getFriends() {
    return animals[Math.floor(Math.random() * (animals.length - 0)) + 0];
}

friends.push(getFriends().name);

console.log(friends);

animal.friends = friends;

console.log (animals);

function search(name) {
  for (var i = 0; i < animals.length; i++) {
        if (name.toUpperCase() === animals[i].name.toUpperCase()) {
          return animals[i];
        } 
          return null;
    }
}

function edit(name, object) {
    for (var i = 0; i < animals.length; i++) {
        if (name.toLowerCase() === animals[i].name.toLowerCase()) {
            animals.splice(i, 1, object);   
        }    
    }
}

function remove(name) {
    for (var i = 0; i < animals.length; i++) {
        if (name.toLowerCase() === animals[i].name.toLowerCase()) {
            animals.splice(i, 1);
        }
    }    
}

function create(object) {
    for (var i = 0; i < animals.length; i++) {
        if (object.name.toUpperCase() === animals[i].name.toUpperCase()) {
            return;
        }
    }
    
    if (object.name.length > 0 && object.species.length > 0) {
        animals.push(object);
    }
}