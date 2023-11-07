import { NextApiRequest, NextApiResponse } from 'next'
import client from '../../../lib/server/client'
import withHandler, { ResponseType } from '../../../lib/server/withHandler'
import { withApiSession } from '../../../lib/server/withSession'

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    body: { content },
    session,
  } = req
  console.log(session?.user?.id)

  const uploadPost = await client.post.create({
    data: {
      user: {
        connect: {
          id: session?.user?.id,
        },
      },
      content,
    },
  })

  console.log(uploadPost)

  return res.json({
    ok: uploadPost ? true : false,
  })
}

export default withApiSession(
  withHandler({
    methods: ['POST'],
    handler,
  })
)
