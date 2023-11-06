import { NextApiRequest, NextApiResponse } from 'next'
import client from '../../../lib/server/client'
import withHandler, { ResponseType } from '../../../lib/server/withHandler'
import { withApiSession } from '../../../lib/server/withSession'

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email, password } = req.body
  const loginUser = await client.user.findFirst({
    where: {
      email,
      password,
    },
  })
  console.log(loginUser)

  if (!loginUser)
    return res.json({
      ok: false,
    })

  req.session.user = {
    id: loginUser?.id,
    nickname: loginUser?.nickname,
  }
  await req.session.save()

  console.log(loginUser)

  return res.json({
    ok: loginUser ? true : false,
  })
}

export default withApiSession(
  withHandler({
    methods: ['POST'],
    handler: handler,
    isPrivate: false,
  })
)
