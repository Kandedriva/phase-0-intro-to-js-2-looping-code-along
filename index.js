// Code your solutions in this file



function writeCards(namesArray, eventName) {
  let messagesArray = [];
  for (let i = 0; i < namesArray.length; i++) {
    messagesArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
  }
  return messagesArray;
}

function countDown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}
// for (let age = 30; age<40; age++){
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
//
// }

// const gifts = ["teddy bear", "drone", "doll"];
//
// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }
//
//   return gifts;
// }
//
// wrapGifts(gifts);
