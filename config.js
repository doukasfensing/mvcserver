module.exports = {
  port: process.env.PORT || 8080,
  db: {
    prod: 'mongodb+srv://alexasimakis:<alexasimakis>@mvc.8hij0.mongodb.net/mvc?retryWrites=true&w=majority',
    test: process.env.DATABASE_URL,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  },
  jwt: {
    secret: 'development_secret',
    expiry: '7d'
  }
};
