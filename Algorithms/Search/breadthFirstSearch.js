let friends = {};
friends["Monaco"] = ["Moscow", "Paris"];
friends["Moscow"] = ["New-York", "Barcelona"];

function isRight(name) {
    return name[name.length - 1] === 'a';
}

function search(name) {
    let queue = [];
    queue = queue.concat(friends[name]);
    const searched = [];
    while (queue.length) {
        let person = queue.shift();
        if (searched.indexOf(person) === -1) {
            if (isRight(person)) {
                console.log(person + " was found!");
                return true;
            }
            queue = queue.concat(friends[person]);
            searched.push(person);
        }
    }
    return false;
}

search("Monaco");