export default {
    JWT_SECRET: process.env.JWT_SECRET || 'somesecrettoken',
    jwtSecret: process.env.JWT_SECRET || 'somesecrettoken',
    secretOrPrivateKey: process.env.JWT_SECRET || 'somesecrettoken',

    DB: {
        URI: process.env.MONGODB_URI || 'mongodb+srv://lciccolella:lciccolella@twitterclonecluster.bsdlx.mongodb.net/dbname?retryWrites=true&w=majority',
        USER: process.env.MONGODB_USER|| 'lciccolella',
        PASSWORD: process.env.MONGODB_PASSWORD || 'lciccolella',
    }
}