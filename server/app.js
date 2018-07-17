const express = require('express');
const graphqlHTTP = require('express-graphql')
const RootSchema = require('./schemas/root-schema')

const app = express();

app.use('/graphql',graphqlHTTP({schema:RootSchema,graphiql:true}));

app.listen(4000,()=>console.log('now listening for requests on port 4000'))
