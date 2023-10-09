

const connection = require('../config/connection');
const { thought, User } = require('../models');
const { getRandomName, getRandomAssignments } = require('./data');
const {
  getRandomArrUser,
  getRandomReaction,
  getRandomThought,
  genRandomIndex,
} = reqiure ('./data');


connection.on('error', (err) => {
  console.log('Error: ' + err);
});

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  let thoughtCheck = await connection.db.listCollections({ thought: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  let UsersCheck = await connection.db.listCollections({ user: 'Users' }).toArray();
  if (UsersCheck.length) {
    await connection.dropCollection('Users');
  }

  // Create empty array to hold the Users
  const Users = [];

  // Loop 20 times -- add Users to the Users array
  for (let i = 0; i < 20; i++) {

    const post = 
    const user = getRandomUser();
    const thought = getRandomThought()
    const reaction = 

    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];
    const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

    Users.push({
      first,
      last,
      github,
      assignments,
    });
  }

  
      // Add Users to the collection and await the results
      await User.collection.insertMany(Users);

      // Add thoughts to the collection and await the results
      await thought.collection.insertOne({
        thoughtName: 'UCLA',
        inPerson: false,
        Users: [...Users],
      });

      // Log out the seed data to indicate what should appear in the database
      console.table(Users);
      console.info('Seeding complete! 🌱');
      process.exit(0);
    });



    // ---------------------------------------------------------
    connection.on('error', (err) => err);

    connection.once('open', async () => {
      console.log('connected');
      // Delete the collections if they exist
      let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
      if (thoughtCheck.length) {
        await connection.dropCollection('thoughts');
      }

      let usersCheck = await connection.db.listCollections({ name: 'Users' }).toArray();
      if (usersCheck.length) {
        await connection.dropCollection('Users');
      }
      // Create empty array to hold the Users
      const Users = [];

      // Loop 20 times -- add Users to the Users array
      for (let i = 0; i < 20; i++) {
        // Get some random assignment objects using a helper function that we imported from ./data
        const assignments = getRandomAssignments(20);

        const fullName = getRandomName();
        const first = fullName.split(' ')[0];
        const last = fullName.split(' ')[1];
        const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

        Users.push({
          first,
          last,
          github,
          assignments,
        });
      }

      // Add Users to the collection and await the results
      await User.collection.insertMany(Users);

      // Add thoughts to the collection and await the results
      await thought.collection.insertOne({
        thoughtName: 'UCLA',
        inPerson: false,
        Users: [...Users],
      });

      // Log out the seed data to indicate what should appear in the database
      console.table(Users);
      console.info('Seeding complete! 🌱');
      process.exit(0);
    });
