import bcrypt from 'bcryptjs'

import userSchema from './schema'
import connectToDatabase from '../../utils/connectToDatabase'

const SALT = 8

export const createUser = async (userData) => {
  await connectToDatabase()
  const passwordHash = bcrypt.hashSync(userData.password, SALT)
  return userSchema.create({ ...userData, password: passwordHash })
}
