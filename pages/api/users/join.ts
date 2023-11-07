import { NextApiRequest, NextApiResponse } from 'next'
import client from '../../../lib/server/client'
import withHandler, { ResponseType } from '../../../lib/server/withHandler'

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email, nickname, password } = req.body
  const user = await client.user.create({
    data: {
      email,
      nickname,
      password,
    },
  })

  return res.json({
    ok: user ? true : false,
  })
}

export default withHandler({
  methods: ['POST'],
  handler: handler,
  isPrivate: false,
})
