import { NextApiRequest, NextApiResponse } from 'next'
import withHandler, { ResponseType } from '../../../lib/server/withHandler'
import { withApiSession } from '../../../lib/server/withSession'
import client from '../../../lib/server/client'

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    session: { user },
  } = req

  const posts = await client.post.findMany({
    include: {
      user: true,
      _count: {
        select: {
          likes: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
  console.log(posts)

  res.json({
    ok: posts ? true : false,
    posts: posts,
  })
}

export default withApiSession(
  withHandler({
    methods: ['GET', 'POST'],
    handler,
  })
)
