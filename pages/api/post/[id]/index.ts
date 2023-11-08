import { NextApiRequest, NextApiResponse } from 'next'
import withHandler, { ResponseType } from '../../../../lib/server/withHandler'
import { withApiSession } from '../../../../lib/server/withSession'
import client from '../../../../lib/server/client'

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
  } = req

  const post = await client.post.findUnique({
    where: { id: +id },
    include: {
      user: true,
      _count: {
        select: {
          likes: true,
        },
      },
    },
  })

  const isLiked = Boolean(
    await client.like.findFirst({
      where: {
        postId: post?.id,
        userId: user?.id,
      },
    })
  )

  res.json({
    ok: true,
    post,
    isLiked,
  })
}

export default withApiSession(
  withHandler({
    methods: ['GET'],
    handler,
  })
)
