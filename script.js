// завдання 1 

let {first: f = 'Name №1', second: s = 'Name №2', third: t = 'Name №3'} = names;

// завдання 2

let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};

let {names:[name1, name2, name3, name4], ages:[age1, age2, age3, age4]} = data;

// завдання 3

function mul(...args) {
    return args.reduce((prev, curr) => typeof(curr) === 'number' ? prev * curr : +prev);
};

// завданя 4

let server = {
    data: 0,
    convertToString: function (callback) {
       callback(() => {
          return this.data + "";
       });
    },
 };
 let client = {
    server: server,
    result: "",
    calc: function (data) {
       this.server.data = data;
       this.server.convertToString(this.notification());
    },
    notification: function () {
       return (callback) => {
          this.result = callback();
       };
    }
 };

// завдання 5

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];

function mapBuilder (keysArray, valuesArrays) {
    let map = new Map();
    keysArray.map(i => map.set(keysArray[i], valuesArrays[i]));
    return map;
};

let map = mapBuilder(keys, values);

console.log(map.size);
console.log(map.get(2)); 

// завдання 6

var arr = [];

for (var i = 0; i <= 2; i++) {
   (function(index) {
      arr[index] = function () {
         console.log(index);
      };
   })(i);
};


