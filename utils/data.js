const user = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
];

const thought = [
  'Decision Tracker',
  'Find My Phone',
  'Learn Piano',
  'Starbase Defender',
  'Tower Defense',
  'Monopoly Money Manager',
  'Movie trailers',
  'Hello world',
  'Stupid Social Media App',
  'Notes',
  'Messages',
  'Email',
  'Compass',
  'Firefox',
  'Running app',
  'Cooking app',
  'Poker',
  'Deliveries',
];

const reaction = [
  'lorem',
  'imsum',
  'dolor',
  'sit',
  'amet',
  'consectetur',
  'adipiscing',
  'elit',
  'curabitur',
  'vel',
  'hendrerit',
  'libero',
  'eleifend',
  'blandit',
  'nunc',
  'ornare',
  'odio',
  'ut',
];

const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

// this is to select a random thought and assign them to a user

// This gets a random user in the in the array
const getRandomArrUser = (arr) => arr[Math.floor(Math.random() * arr.length)];

// This gets random thoughts from the array

const getRandomReaction = () => `${reaction[genRandomIndex(reaction)]}`;

// This assiagn a thought 

const getRandomThought = (int) => {
  const results = [];  
  for (let i = 0; i < int; i++) {
    results.push({
      thought: getRandomThought(thoughts),
      user: getRandomArrUser().split(' ')[0],
      reaction: getRandomReaction(reaction),
    })
  }
  return thought;
};

// Should it be this? VVVVV for ^^^^^
thought += ` ${getRandomThought()}`;

module.exports = {
  getRandomArrUser,
  getRandomReaction,
  getRandomThought,
  genRandomIndex,
};

/*

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random assignments that we can add to student object.
const getRandomAssignments = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      assignmentName: getRandomArrItem(appDescriptions),
      score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomAssignments };

*/
