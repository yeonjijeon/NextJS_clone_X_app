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

  const aleradyExists = await client.like.findFirst({
    where: {
      postId: +id.toString(),
      userId: user?.id,
    },
  })

  if (aleradyExists) {
    await client.like.delete({
      where: {
        id: aleradyExists.id,
      },
    })
  } else {
    await client.like.create({
      data: {
        user: {
          connect: {
            id: user?.id,
          },
        },
        post: {
          connect: {
            id: +id.toString(),
          },
        },
      },
    })
  }

  res.json({
    ok: true,
  })
}

export default withApiSession(
  withHandler({
    methods: ['POST'],
    handler,
  })
)
