const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { resolvers, typeDefs } = require('./schemas')
const db = require('./config/connection')
const path = require('path');
require("dotenv").config();

// Express app
const PORT = process.env.PORT || 3002;
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Serve up static assets
// app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async ( ) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};
  
// Call the async function to start the server
startApolloServer( );