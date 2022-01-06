import { createUser } from './service'
import { created, serverError, badRequest } from '../../utils/responses'

export const createAccount = async (event) => {
  try {
    const body = JSON.parse(event.body)
    const user = await createUser(body)
    return created(user)
  } catch (err) {
    if (err.code === 11000) return badRequest('email existente!!')
    return serverError(err)
  }
}
