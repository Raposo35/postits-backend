import userSchema from './schema'
import connectToDatabase from '../../utils/connectToDatabase'

export const createUser = async (userdata) => {
  await connectToDatabase()
  return userSchema.create({ ...userdata })
}
