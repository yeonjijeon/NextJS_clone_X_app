import { useRouter } from 'next/router'
import MainMenu from '../components/MainMenu'
import Search from '../components/Search'
import Header from '../components/Header'
import useSWR from 'swr'
import { PostWithUser } from '..'
import { Heart, UnHeart } from '../components/Heart'
import useMutation from '../../lib/client/useMutation'

import useUser from '../../lib/client/useUser'

interface PostType {
  ok: boolean
  isLiked: boolean
  post: PostWithUser
}

export default function Tweet({ name = '' }) {
  const router = useRouter()
  const { user: userData } = useUser()
  const { data: postData, mutate: boundMutate } = useSWR<PostType>(
    router.query.id ? `/api/post/${router.query.id}` : null
  )
  const [toggleLike] = useMutation(`/api/post/${router.query.id}/like`)
  const goToHome = () => router.push('/')
  const onLikeHandler = () => {
    if (!postData) return
    toggleLike({})
    boundMutate(
      (prev) =>
        prev && {
          ...prev,
          post: {
            ...prev.post,
            _count: {
              likes: prev.isLiked
                ? prev.post._count.likes - 1
                : prev.post._count.likes + 1,
            },
          },
          isLiked: !prev.isLiked,
        },
      false
    )
  }

  return (
    <div className="flex justify-between mx-16 w-3/4 h-screen ">
      <Header title={`${name} on X`} />
      <MainMenu email={userData?.email} nickname={userData?.nickname} />

      <div className="border border-gray-100" />

      {postData && (
        <div className="flex flex-col w-3/5 pl-5 pr-5">
          <div className="flex space-x-3 pt-3 pb-3 items-center ">
            <div
              onClick={goToHome}
              className="hover:bg-gray-200 p-3 rounded-full cursor-pointer transition-colors"
            >
              <svg
                className="h-4 w-4 "
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </div>
            <div className="px-6 text-2xl font-semibold">Post</div>
          </div>

          <div className="flex flex-col">
            <div className="flex">
              <div
                className={`rounded-full ${
                  userData?.id === postData.post.userId
                    ? 'bg-sky-500'
                    : 'bg-gray-500'
                } w-12 h-12`}
              >
                <span className="flex items-center justify-center text-2xl font-bold h-full text-white">
                  {postData.post.user.nickname[0].toUpperCase()}
                </span>
              </div>
              <div className="px-2 flex flex-col justify-center">
                <div className="text-base font-semibold">
                  {postData.post.user.nickname}
                </div>
                <div className="text-sm text-gray-500">
                  @{postData.post.user.email}
                </div>
              </div>
            </div>
            <div className="pt-5 pb-5">{postData.post.content}</div>
            <div className="border" />
            <div
              onClick={onLikeHandler}
              className="flex items-center space-x-2 p-2"
            >
              <div className="hover:bg-pink-200 p-2 rounded-full transition-colors ">
                {postData.isLiked ? <Heart /> : <UnHeart />}
              </div>
              <span>{postData.post._count.likes}</span>
            </div>
          </div>
        </div>
      )}

      <div className="border" />

      <div className="flex flex-col w-1/5 my-3 ">
        <Search />
      </div>
    </div>
  )
}
