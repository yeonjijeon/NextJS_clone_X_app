import { useRouter } from 'next/router'
import Logo from './Logo'

export default function MainMenu({ nickname = '', email = '' }) {
  const router = useRouter()
  const goHome = () => router.push('/')
  return (
    <div className="flex flex-col pr-12 w-[20rem] my-3 relative">
      <div className="space-y-3 w-full">
        <div
          onClick={goHome}
          className="flex justify-start items-center w-min p-2 cursor-pointer hover:bg-gray-200 rounded-full transition-colors "
        >
          <svg
            className="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
        </div>
        <div className="flex space-x-5 justify-start items-center w-min p-2 cursor-pointer hover:bg-gray-200 rounded-full transition-colors ">
          <div>
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
            >
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
            </svg>
          </div>
          <span onClick={goHome} className="text-xl">
            Home
          </span>
        </div>
        <div className="flex space-x-5 justify-start items-center w-min p-2 cursor-pointer hover:bg-gray-200 rounded-full transition-colors">
          <div>
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </div>
          <span className="text-xl">Explore</span>
        </div>
        <div className="flex space-x-5 justify-start items-center w-min p-2 cursor-pointer hover:bg-gray-200 rounded-full transition-colors">
          <div>
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
            </svg>
          </div>
          <span className="text-xl">Notifications</span>
        </div>
        <div className="flex space-x-5 justify-start items-center w-min p-2 cursor-pointer hover:bg-gray-200 rounded-full transition-colors">
          <div>
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
            </svg>
          </div>
          <span className="text-xl">Messages</span>
        </div>
        <div className="flex space-x-5 justify-start items-center w-min p-2 cursor-pointer hover:bg-gray-200 rounded-full transition-colors">
          <div>
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
            </svg>
          </div>
          <span className="text-xl">Lists</span>
        </div>
        <div className="flex space-x-5 justify-start items-center w-min p-2 cursor-pointer hover:bg-gray-200 rounded-full transition-colors">
          <div>
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
            </svg>
          </div>
          <span className="text-xl">Bookmarks</span>
        </div>
        <div className="flex space-x-5 justify-start items-center w-min p-2 cursor-pointer hover:bg-gray-200 rounded-full transition-colors">
          <div>
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 640 512"
            >
              <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
            </svg>
          </div>
          <span className="text-xl">Communities</span>
        </div>
        <div className="flex space-x-5 justify-start items-center w-min p-2 cursor-pointer hover:bg-gray-200 rounded-full transition-colors">
          <div>
            <Logo className="w-7 h-7" />
          </div>
          <span className="text-xl">Premium</span>
        </div>
        <div className="flex space-x-5 justify-start items-center w-min p-2 cursor-pointer hover:bg-gray-200 rounded-full transition-colors">
          <div>
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
            </svg>
          </div>
          <span className="text-xl">Profile</span>
        </div>
        <div className="flex space-x-5 justify-start items-center w-min p-2 cursor-pointer hover:bg-gray-200 rounded-full transition-colors">
          <div>
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
            </svg>
          </div>
          <span className="text-xl">More</span>
        </div>
        <div className="flex space-x-5 justify-start items-center cursor-pointer">
          <button className="w-full border rounded-full h-14 bg-sky-500 hover:bg-sky-600">
            <span className="font-semibold text-xl text-white">Post</span>
          </button>
        </div>
      </div>

      <div className="flex items-center absolute bottom-0 w-max bg-white p-2 hover:bg-gray-200 rounded-full transition-colors cursor-pointer">
        <div className="flex w-1/4 pr-6">
          <div>
            <div className="rounded-full bg-sky-500 w-12 h-12 pr-1">
              <span className="flex items-center justify-center text-2xl font-bold w-full h-full text-white">
                {nickname[0]?.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col pr-10 w-2/4">
          <div className="text-sm font-semibold">{nickname}</div>
          <div className="text-sm text-gray-500">{email}</div>
        </div>
        <div className="flex w-1/4">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
          </svg>
        </div>
      </div>
    </div>
  )
}
