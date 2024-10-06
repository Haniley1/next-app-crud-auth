import { getIronSession } from 'iron-session'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'api/endpoints'
import { defaultSession, SessionData, sessionOptions } from 'api/session'

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
      const reqresResponse = await getToken(
        request.body.email,
        request.body.password
      )

      if (reqresResponse.data.token) {
        session.token = reqresResponse.data.token
        session.isLoggedIn = true
        await session.save()

        return response.status(200).json(session)
      } else {
        return response.status(403).json({ message: 'Something went wrong' })
      }
    case 'DELETE':
      session.destroy()

      return response.json(defaultSession)
  }
}
