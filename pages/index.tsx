import React, { useEffect } from 'react'
import MainMenu from './components/MainMenu'
import Search from './components/Search'
import useMutation from '../lib/client/useMutation'
import { Like, Post, User } from '@prisma/client'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import useUser from '../lib/client/useUser'

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
}

export default function Home() {
  const router = useRouter()
  const { register, handleSubmit } = useForm<UploadForm>()
  const { user, isLoading } = useUser()
  const { data: postData } = useSWR<PostListType>('/api/post')
  const [upload, { loading: uploadLoading, data }] =
    useMutation<UploadPostMutation>('/api/post/upload')

  const onUpload = (data: UploadForm) => {
    if (!data) return
    upload(data)
    // refresh 시켜주기
  }
  const goToTweet = (postId: number) => router.push(`/tweet/${postId}`)

  console.log(postData)

  return (
    <div className="flex justify-between mx-16 w-3/4 h-screen ">
      <MainMenu nickname={user?.nickname} email={user?.email} />

      <div className="border border-gray-100" />

      {/* 중간 */}
      <div className="flex flex-col w-3/5 ">
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
                onClick={() => goToTweet(data.id)}
                className="flex p-4 border-b cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <div className="rounded-full bg-gray-300 w-12 h-12">
                  <span className="flex items-center justify-center text-2xl font-bold h-4/5">
                    {data?.user.nickname[0]}
                  </span>
                </div>
                <div className="px-2 flex flex-col justify-center">
                  <div className="flex space-x-2">
                    <div className="text-base font-semibold">
                      {user?.nickname}
                    </div>
                    <div className="text-sm text-gray-500">
                      @{data?.user.email}
                    </div>
                  </div>
                  <div className="pb-2">{data.content}</div>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="cursor-pointer "
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                    </svg>
                    <span>{data._count.likes}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="border" />

      <div className="flex flex-col w-1/5 my-3 ">
        <Search />
      </div>
    </div>
  )
}
