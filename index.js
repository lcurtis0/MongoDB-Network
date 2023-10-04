const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const { Message } = require('./models');

const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.get('/', async (req, res)
try {
  const result = await Message
  .aggregate([
    // Where prices are less or equal to 5
    { $match: { price: { $lte: 5 } } },
    {
      $group: {
        // Group by null (no additional grouping by id)
        _id: null,
        // Sum of all prices
        sum_price: { $sum: '$price' },
        // Average of all prices
        avg_price: { $avg: '$price' },
        // Maximum price
        max_price: { $max: '$price' },
        // Minimum price
        min_price: { $min: '$price' },
      },
    },
  ])
res.status(200).send(result);
} catch (err) {
res.status(500).send(err);
}
});
}
)

//Use this link for knowing aggergate stages : https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
const activity = cwd.includes('01-Activities')
  ? cwd.split('01-Activities')[1]
  : cwd;

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});
