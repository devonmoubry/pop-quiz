console.log('quiz 1');

////////////////////////////////
//         Question 0         //
////////////////////////////////
function begin() {
   console.log('begin');
}
begin();

////////////////////////////////
//     Question 1 - ECHO      //
////////////////////////////////
function echo(value) {
  return value;
}
// console.log(echo('the iron yard'));
echo('the iron yard')

////////////////////////////////
//    Question 2 - MATH       //
////////////////////////////////
function math(one, two, three) {
  return (parseInt(one) + parseInt(two)) * three;
}
// console.log(math(3, 4, 2));
// console.log(math(5, 5, 7));
math();

////////////////////////////////
//   Question 3 - TOSTRING    //
////////////////////////////////
function toString(array) {
  let string = '';
  for (var i = 0; i < array.length; i++) {
    string += (array[i] + ' ');
  }
  return string;
}
console.log(toString(['the','iron','yard']));
// toString();

////////////////////////////////
//     Question 4 - CALLME    //
////////////////////////////////
function callMe(callback) {
  console.log('in first function');
  callback();
}
callMe(function () {
  console.log('in second function');
});

////////////////////////////////
//    Question 5 - CALLME2    //
////////////////////////////////
function callMe2(callback, string) {
  console.log('in first function');
  callback(string);
}
callMe2(function (string) {
  console.log('in second function');
  console.log(string);
}, 'hello');

////////////////////////////////
//    Question 6 - REVERSE    //
////////////////////////////////
function reverse(string) {
  // console.log(string.split(''));
  let array = [];
  let reverse = [];
  array = string.split('');
  for (var i = array.length; i >= 0; i--) {
    // console.log(array[i]);
    reverse.push(array[i]);
  }
  // console.log(reverse.join(''));
  return reverse.join('');
}
console.log(reverse('the iron yard'));

////////////////////////////////
//      Question 7 - SLEEP    //
////////////////////////////////
function sleep() {
  console.log('before sleep loop', Date.now());
  setTimeout(function () {
    console.log('after sleep loop', Date.now());
  }, 1000);
}
sleep();
