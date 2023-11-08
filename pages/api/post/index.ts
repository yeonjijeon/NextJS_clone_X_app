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

  const userPostLike = await client.like.findMany({
    where: {
      userId: user?.id,
    },
    select: {
      postId: true,
    },
  })

  res.json({
    ok: posts ? true : false,
    posts: posts,
    userPostLike: userPostLike,
  })
}

export default withApiSession(
  withHandler({
    methods: ['GET', 'POST'],
    handler,
  })
)
