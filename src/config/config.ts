export default {
    JWT_SECRET: process.env.JWT_SECRET,
    jwtSecret: process.env.JWT_SECRET , 
    secretOrKey: process.env.JWT_SECRET,

    DB: {
        URI: process.env.MONGODB_URI,
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD,
    }
}