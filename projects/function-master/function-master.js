//objectValues() : Should take an object and return its values in an array",
function objectValues(obj) {
    let output = [];
    for (var key in obj) {
        output.push(obj[key]);
    }
    return output;
}

//"keysToString() : Should take an object and return all its keys in a string each separated with a space"
function keysToString(obj) {
    let arr= Object.keys(obj);
    return arr.join(" ");
}

//"valuesToString() : Should take an object and return all its string values in a string each separated with a space"
function valuesToString(obj) {
    let arr = []
    for (var key in obj) {
        if (typeof obj[key] === "string") {
            arr.push(obj[key]);
        }    
    }
    return arr.join(" ");
}

// "arrayOrObject() : Should take one argument and return 'array' if its an array and 'object' if its an object"
function arrayOrObject(collection) {
    if (Array.isArray(collection) === true) {
        return "array";
    }
    if (typeof collection === "object") {
        return "object";
    }
}

//"capitalizeWord() : Should take a string of one word, and return the word with its first letter capitalized"
function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

//"capitalizeAllWords() : Should take a string of words and return a string with all the words capitalized "
function capitalizeAllWords(string) {
    var splitStr = string.split(" ");
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
    }
    return splitStr.join(" ");
}

//"welcomeMessage() : Should take an object with a name property and return 'Welcome <Name>!'"
function welcomeMessage(obj) {
    if (obj.name !== undefined) {
        return "Welcome" + " " + obj.name.charAt(0).toUpperCase() + obj.name.slice(1) + "!";
    }
}

//"profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>'"
function profileInfo(obj) {
    if (obj.name !== undefined && obj.species !== undefined) {
        return obj.name.charAt(0).toUpperCase() + obj.name.slice(1) + " " + "is a" + " " + obj.species.charAt(0).toUpperCase() + obj.species.slice(1);
    }
}

//"maybeNoises() : Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'"
function maybeNoises(obj) {
    if (obj.noises !== undefined && obj.noises.length > 0) {
        return obj.noises.join(" ");
    } else {
        return "there are no noises";
    }
}

//"hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false."
function hasWord(string, word) {
    if (string.indexOf(word) != -1) {
        return true;
    } else {
        return false;
    }
}

//"addFriend() : Should take a name and an object and add the name to the object's friends array then return the object"
function addFriend(name, obj) {
    obj.friends.push(name);
    return obj;
}

//"isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise"
function isFriend(name, obj) {
    if (obj.friends === undefined) {
        return false;
    }else if (obj.friends.indexOf(name) != -1) {
        return true;
    } else {
        return false;
    }
}

//"nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with"
function nonFriends(name, list) {
    var person, output = [];
    for (var i = 0; i < list.length; i++) {
       if (list[i].name === name) {
            person = list[i];
            break;
        }
    }
    if(person) {
        for (var i = 0; i < list.length; i++) {
            let candidate = list[i];
            if (candidate !== person) {
                if (person.friends.indexOf(candidate.name) === -1) {
                    output.push(candidate.name);
                }
            }
        }
    }
    return output;
}

//"updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.
function updateObject(obj, key, value) {
    obj[key] = value;
    return obj;
}

//"removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>"
function removeProperties(obj, arr) {
    for (var i = 0; i < arr.length; i++) {
        delete obj[arr[i]];
    }
}

//"dedup() : Should take an array and return an array with all the duplicates removed"
function dedup(arr) {
  var output = {};
  return arr.filter(function(item) {
      return output.hasOwnProperty(item) ? false : (output[item] = true);
  })
}