const { ApolloServer, gql } = require('apollo-server');
const products = [
  {
    title: 'Apple',
    price: 0.5,
    categoryId: 'Fruit',
    imageUrl:
      'https://previews.123rf.com/images/innakreativv/innakreativv1901/innakreativv190100157/119894677-eaten-apple-close-up-on-a-white-isolated-.jpg',
    id: 1,
  },
  {
    title: 'Pear',
    price: 0.5,
    categoryId: 'Fruit',
    imageUrl: 'https://www.stockvault.net/data/2007/03/01/98589/preview16.jpg',
    id: 2,
  },
  {
    title: 'Banana',
    price: 0.1,
    categoryId: 'Fruit',
    imageUrl: 'https://i.ytimg.com/vi/lrgx1Vbhh70/hqdefault.jpg',
    id: 3,
  },
];

const typeDefs = gql`
  type Product {
    title: String
    price: Float
    categoryId: String
    imageUrl: String
    id: Int
  }
  type Query {
    products: [Product]
  }
`;
const resolvers = {
  Query: {
    products: () => products,
  },
};
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`server is ready! @~ ${url}`);
});
