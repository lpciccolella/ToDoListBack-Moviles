export default {
    JWT_SECRET: process.env.JWT_SECRET || 'somesecrettoken',
    jwtSecret: process.env.JWT_SECRET || 'somesecrettoken',
    secretOrKey: 'secret',

    DB: {
        URI: process.env.MONGODB_URI || 'mongodb+srv://lciccolella:lciccolella@twitterclonecluster.bsdlx.mongodb.net ',
        USER: process.env.MONGODB_USER|| 'lciccolella',
        PASSWORD: process.env.MONGODB_PASSWORD || 'lciccolella',
    }
}