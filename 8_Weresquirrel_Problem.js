// http://eloquentjavascript.net/04_data.html#h_NvjtahQLlw
// determine coorilation between events


// JOURNAL is array of object literals
// each object literal contains property "events" and property "squirrel"
// "events" contains an array of strings that contain activities
// "squirrel" contains a boolean that indicates whether or not Jacques turned into a squirrel
var JOURNAL = [  {"events":["carrot","exercise","weekend"],"squirrel":false},  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},  {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},  {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},  {"events":["cauliflower","brushed teeth","work"],"squirrel":false},  {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},  {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},  {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},  {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},  {"events":["spaghetti","brushed teeth","work"],"squirrel":false},  {"events":["brushed teeth","computer","work"],"squirrel":false},  {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},  {"events":["brushed teeth","work"],"squirrel":false},  {"events":["cauliflower","reading","weekend"],"squirrel":false},  {"events":["bread","brushed teeth","weekend"],"squirrel":false},  {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},  {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},  {"events":["spaghetti","nachos","work"],"squirrel":false},  {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},  {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},  {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},  {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},  {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},  {"events":["potatoes","exercise","work"],"squirrel":false},  {"events":["pizza","ice cream","computer","work"],"squirrel":false},  {"events":["lasagna","ice cream","work"],"squirrel":false},  {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},  {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},  {"events":["potatoes","brushed teeth","work"],"squirrel":false},  {"events":["carrot","work"],"squirrel":false},  {"events":["pizza","beer","work","dentist"],"squirrel":false},  {"events":["lasagna","pudding","cycling","work"],"squirrel":false},  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},  {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},  {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},  {"events":["lasagna","peanuts","work"],"squirrel":true},  {"events":["pizza","work"],"squirrel":false},  {"events":["potatoes","exercise","work"],"squirrel":false},  {"events":["brushed teeth","exercise","work"],"squirrel":false},  {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},  {"events":["pizza","cycling","weekend"],"squirrel":false},  {"events":["carrot","brushed teeth","weekend"],"squirrel":false},  {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},  {"events":["pizza","peanuts","candy","work"],"squirrel":true},  {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},  {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},  {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},  {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},  {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},  {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},  {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},  {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},  {"events":["bread","candy","work"],"squirrel":false},  {"events":["potatoes","nachos","work"],"squirrel":false},  {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},  {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},  {"events":["brussel sprouts","running","work"],"squirrel":false},  {"events":["brushed teeth","work"],"squirrel":false},  {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},  {"events":["candy","brushed teeth","work"],"squirrel":false},  {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},  {"events":["bread","brushed teeth","weekend"],"squirrel":false},  {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},  {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},  {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},  {"events":["lettuce","brushed teeth","work"],"squirrel":false},  {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},  {"events":["pizza","brushed teeth","work"],"squirrel":false},  {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},  {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},  {"events":["brushed teeth","running","work"],"squirrel":false},  {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},  {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},  {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},  {"events":["carrot","reading","weekend"],"squirrel":false},  {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},  {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},  {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},  {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},  {"events":["pizza","brushed teeth","running","work"],"squirrel":false},  {"events":["lettuce","brushed teeth","work"],"squirrel":false},  {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},  {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}];

// computes phi from table from tableFor()
function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  );
}

// helper function for tableFor()
function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
}

// generates table for each unique event
// using journal and unique list of events
// used to compute phi for each event
// element 1: num times event false test false
// element 2: num times event true test false
// element 3: num times event false test true
// element 4: num times event true test true
function tableFor(event, journal, test) {
  var table = [0, 0, 0, 0];
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)) index += 1;
    if (entry[test]) index += 2;
    table[index] += 1;
  }
  return table;
}

// takes object and a key
// makes unique list of values (strings) stored with that key
// object is array of objects where "key" value in object points to
// array of strings
function mkUniqueEventsList(obj, key) {
  var list = [];
  for (var i = 0; i < obj.length; i++) {
    for (var j = 0; j < obj[i][key].length; j++) {
      if (list.indexOf(obj[i][key][j]) == -1) list.push(obj[i][key][j]);
    }
  }
  return list;
}

// Sort an object return sorted array
function sortObject(obj) {
  var arr = [];
  var prop;
  for (prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      arr.push({ key: prop, value: obj[prop] });
    }
  }
  arr.sort(function(a, b) {
    return a.value - b.value;
  });
  return arr; // returns array
}

// helper function for buildMap
function storePhi(event, phi, map) {
  map[event] = phi;
  return map;
}

// maps phi values to unique events
// requires phi(), tableFor(), buildMap()
// uniqueEvents is an array of unique events from journal
// journal is array of objects with value containing array of strings (events)
// 	and value containing boolean (test)
// test is a string containing the name of the value containing the boolean (test)
function buildMap(uniqueEvents, journal, test) {
  var map = {};
  uniqueEvents.forEach(function(event) {
    map = storePhi(event, phi(tableFor(event, journal, test)), map);
  });
  return map;
}





// determine coorilation
// console.log() final results
//
// Arguments:
//
// journal is array of object literals
// each object literal contains property "events" and property "squirrel"
// "events" contains an array of strings that contain activities
// "squirrel" contains a boolean that indicates whether or not Jacques turned into a squirrel
//
// events - string
// corresponds to the name of the property in journal containing the array of strings
// that represent the various events that we want to corrilate
//
// test - string
// corresponds to the name of the property in journal which contains the boolean we
// are testing against to determine correlation.
//
function renderResult(journal, events, test) {
  var uniqueEvents = mkUniqueEventsList(journal, events);
  var map = buildMap(uniqueEvents, journal, test);
  var coorilations = sortObject(map);
  var highest = coorilations[coorilations.length - 1];
  var lowest = coorilations[0];
  console.log(
    'Highest coorilation: "' +
      highest.key +
      '" with phi: ' +
      highest.value.toFixed(2)
  );
  console.log(
    'Lowest coorilation: "' +
      lowest.key +
      '" with phi: ' +
      lowest.value.toFixed(2)
  );
}

renderResult(JOURNAL, "events", "squirrel");
