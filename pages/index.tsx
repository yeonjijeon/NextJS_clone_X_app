import React, { useEffect } from 'react'
import MainMenu from './components/MainMenu'
import Search from './components/Search'
import useMutation from '../lib/client/useMutation'
import { Like, Post, User } from '@prisma/client'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import useUser from '../lib/client/useUser'
import Header from './components/Header'
import { Heart, UnHeart } from './components/Heart'

interface UploadPostMutation {
  ok: boolean
  post: Post
}

interface UploadForm {
  id: string
  content: string
}

export interface PostWithUser extends Post {
  user: User
  _count: {
    likes: number
  }
}

export interface PostListType {
  ok: boolean
  posts: PostWithUser[]
  userPostLike: {
    postId: number
  }[]
}

export default function Home() {
  const router = useRouter()
  const { register, handleSubmit } = useForm<UploadForm>()
  const { user, isLoading } = useUser()
  const { data: postData } = useSWR<PostListType>('/api/post')
  const [upload, { loading: uploadLoading, data }] =
    useMutation<UploadPostMutation>('/api/post/upload')

  console.log(postData)
  const onUpload = (data: UploadForm) => {
    if (!data) return
    upload(data)
    // refresh 시켜주기
  }
  const goToTweet = (postId: number) => router.push(`/tweet/${postId}`)

  return (
    <div className="flex justify-between px-20 w-screen h-screen ">
      <Header title="Home" />
      <div className="flex flex-col mr-12 w-[20rem] my-3 relative">
        <MainMenu nickname={user?.nickname} email={user?.email} />
      </div>
      <div className="border border-gray-100" />

      <div className="flex flex-col w-[60rem]">
        <div className="flex justify-center items-center border border-b border-x-0">
          <div className="flex justify-center items-center w-1/2 cursor-pointer hover:bg-gray-200 p-4 font-bold">
            For you
          </div>

          <div className="flex justify-center items-center w-1/2 font-bold text-gray-400">
            Following
          </div>
        </div>

        <div className="border border-sky-500 w-1/2 items-center justify-center"></div>

        <div>
          <form onSubmit={handleSubmit(onUpload)}>
            <textarea
              {...register('content')}
              className="w-full border-b-0 px-16 pt-8 pb-10 resize-none overflow-y-hidden focus:outline-none "
              placeholder="What is happening?!"
            />
            <div className="py-2 border border-x-0 border-t-0 flex justify-end pr-4">
              <button className="bg-sky-500 text-white font-bold px-5 py-2 rounded-full hover:bg-sky-600">
                {uploadLoading ? 'Wait..' : 'Post'}
              </button>
            </div>
          </form>
        </div>

        <div>
          {postData?.posts.map((data) => {
            return (
              <div
                key={data.id}
                onClick={() => goToTweet(data.id)}
                className="flex w-full p-4 border-b cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <div>
                  <div
                    className={`flex rounded-full w-12 h-12 ${
                      data.userId == user?.id ? 'bg-sky-500' : 'bg-gray-500'
                    }`}
                  >
                    <div className="flex w-full h-full items-center justify-center text-2xl font-bold text-white ">
                      {data?.user.nickname[0].toUpperCase()}
                    </div>
                  </div>
                </div>
                <div className="px-2 flex flex-col justify-center">
                  <div className="flex space-x-2">
                    <div className="text-base font-semibold text-wh">
                      {data.user?.nickname}
                    </div>
                    <div className="text-sm text-gray-500">
                      @{data.user.email}
                    </div>
                  </div>
                  <div className="flex pb-2">{data.content}</div>
                  <div className="flex items-center space-x-2">
                    {postData.userPostLike
                      .map((data) => data.postId)
                      .includes(data.id) ? (
                      <Heart />
                    ) : (
                      <UnHeart />
                    )}
                    <span>{data._count.likes}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="border border-gray-100" />

      <div className="flex flex-col w-[20rem] my-3 ">
        <Search />
      </div>
    </div>
  )
}
