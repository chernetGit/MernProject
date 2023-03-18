import mongoose from 'mongoose'
const connectDB = (url) => {
  return mongoose.connect(url)
}
export default connectDB
// const connectionString =
//   'mongodb+srv://<username>:<password>@cluster0.0ltqtfe.mongodb.net/?retryWrites=true&w=majority'
