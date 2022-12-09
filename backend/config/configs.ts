import dotenv from 'dotenv'
dotenv.config()

const  DB_URI = process.env.MONGO_URI ||'mongodb+srv://group32:root@cluster0.tafkacm.mongodb.net/micro_yelp?retryWrites=true&w=majority'
const PORT = process.env.PORT ||'5000'


const configs = {
  DB_URI,
  PORT
}

export default configs