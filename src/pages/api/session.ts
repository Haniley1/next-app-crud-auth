import type { AxiosError } from 'axios'
import { getIronSession } from 'iron-session'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'api/endpoints'
import { defaultSession, SessionData, sessionOptions } from 'api/session'
import { SignInErrorResponse } from './../../api/endpoints/auth'

export default async function login(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const session = await getIronSession<SessionData>(
    request,
    response,
    sessionOptions
  )

  switch (request.method) {
    case 'GET':
      return response.json(session.isLoggedIn ? session : defaultSession)
    case 'POST':
      return getToken(request.body.email, request.body.password)
        .then(async (res) => {
          session.token = res.data.token
          session.isLoggedIn = true
          await session.save()

          return response.status(200).json(session)
        })
        .catch((error: AxiosError<SignInErrorResponse>) => {
          return response.status(403).json(error.response?.data)
        })
    case 'DELETE':
      session.destroy()

      return response.json(defaultSession)
  }
}
