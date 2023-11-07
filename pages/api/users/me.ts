import { NextApiRequest, NextApiResponse } from 'next'
import { withApiSession } from '../../../lib/server/withSession'
import withHandler, { ResponseType } from '../../../lib/server/withHandler'
import client from '../../../lib/server/client'

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { session } = req
  // console.log(session)
  const loginUser = await client.user.findUnique({
    where: {
      id: session?.user?.id,
    },
  })
  console.log(loginUser)
  res.json({
    ok: true,
    user: {
      ...loginUser,
    },
  })
}

export default withApiSession(
  withHandler({ methods: ['GET'], handler: handler })
)
