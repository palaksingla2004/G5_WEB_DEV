import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
//Schema & types(scalar n custom)
const typeDefs = `#graphql
type book{
    id:ID!
    title: String!
    author:Author!
}

type Author{
    id:ID!
    name:String!
    books:[Book!]!
}

type Query{
    books:[Book!]!
    authors:[Author!]!
}

type Mutation{
    addAuthor(name:String!):Author!
    addBook(id:ID!,title:String!,authorId:ID!):Book!
}

`;

//In-memory data
const data={
    authors:[
        {id:"1",name:"J.K.Rowling"},
        {id:"2",name:"J.R.R.Tolkien"},
    ],
    books:[
        {id:"1",title:"Harry Potter and the Philosopher's Stone",authorId:"1"},
        {id:"2",title:"Harry Potter and the Chamber of Secrets",authorId:"1"},
        {id:"3",title:"The Hobbit",authorId:"2"},
        {id:"4",title:"The Lord of the Rings",authorId:"2"},
    ]
};

//Resolvers: controllers of rest
const resolvers = {
    //'GET' from above typeDefs
    Query: {
        books: () => data.books,
        authors: () => data.authors,
    },
    Book: {
        author: (parent) => data.authors.find((author) => author.id === parent.authorId)
        },
    Author:{
        books: (parent) => data.books.filter((book) => book.authorId === parent.id)
    },
    //update,delete
    Mutation:{
        addAuthor: (_, { name }) => {
            const newAuthor = {
                id: String(data.authors.length + 1),
                name
            };
            data.authors.push(newAuthor);
            return newAuthor;
        },
        addBook: (_, { id, title, authorId }) => {
            const newBook = {
                id: String(data.authors.length + 1),
                title,
                authorId
            };
            data.books.push(newBook);
            return newBook;
        }
},
}


//Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);





