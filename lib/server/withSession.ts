import { withIronSessionApiRoute } from 'iron-session/next'

declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      id: number
      nickname: string
    }
  }
}

const cookieOptions = {
  cookieName: 'xAppSession',
  password: process.env.COOKIE_PASSWORD!,
}

export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions)
}
