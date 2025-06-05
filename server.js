require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');

const schema = require('./schema/taskSchema');
const rootValue = require('./resolvers/taskResolvers');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}));

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Servidor en http://localhost:${process.env.PORT}/graphql`);
    });
  })
  .catch(err => console.error(err));
