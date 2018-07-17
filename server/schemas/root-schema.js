const graphql = require('graphql');
const BookType = require('./book-type');

const {GraphQLObjectType,GraphQLString,GraphQLSchema}=graphql;

// dummy data
const books = [
    { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
    { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' },
];

const RootQuery = new  GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parent,args){
        return books.find(element => element.id === args.id )
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
