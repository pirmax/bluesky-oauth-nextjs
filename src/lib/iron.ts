'use server'

import { User } from '@/functions/create-user'
import { getIronSession, type IronSession } from 'iron-session'
import { ResponseCookies } from 'next/dist/server/web/spec-extension/cookies'
import { cookies } from 'next/headers'

export type Session = {
  user: User | null
}

const getSession = async (): Promise<IronSession<Session>> => {
  return await getIronSession<Session>(cookies() as ResponseCookies, {
    cookieName: 'sid',
    password: process.env.COOKIE_PASSWORD as string,
  })
}

export default getSession
