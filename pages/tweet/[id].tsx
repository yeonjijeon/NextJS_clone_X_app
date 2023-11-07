import { useRouter } from 'next/router'
import MainMenu from '../components/MainMenu'
import Search from '../components/Search'

export default function Tweet() {
  const router = useRouter()
  const goToHome = () => router.push('/')

  return (
    <div className="flex justify-between mx-16 w-3/4 h-screen ">
      <MainMenu />

      <div className="border border-gray-100" />

      {/* 중간 */}
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
            <div className="rounded-full bg-gray-300 w-12 h-12">
              <span className="flex items-center justify-center text-2xl font-bold h-full">
                D
              </span>
            </div>
            <div className="px-2 flex flex-col justify-center">
              <div className="text-base font-semibold">이름</div>
              <div className="text-sm text-gray-500">@d</div>
            </div>
          </div>
          <div className="pt-5 pb-5">내용</div>
          <div className="border" />
          <div className="flex items-center space-x-2 p-2">
            <div className="hover:bg-pink-200 p-2 rounded-full transition-colors ">
              <svg
                className="cursor-pointer "
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
              </svg>
            </div>
            <span>0</span>
          </div>
        </div>
      </div>

      <div className="border" />

      <div className="flex flex-col w-1/5 my-3 ">
        <Search />
      </div>
    </div>
  )
}
