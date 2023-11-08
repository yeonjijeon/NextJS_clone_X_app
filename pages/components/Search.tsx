export default function Search() {
  return (
    <div className="flex flex-col p-2">
      <div className="pb-5">
        <div className="relative">
          <svg
            className="w-5 h-5 absolute top-3 left-3"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </div>
        <input
          className="bg-gray-100 rounded-full w-full py-2 pl-11 placeholder-black focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:border"
          placeholder="Search"
        ></input>
      </div>
      <div className="flex w-full h-max bg-gray-100 rounded-2xl">
        <div className="flex flex-col items-start justify-center p-3">
          <span className="text-2xl font-bold pb-3">Subscribe to Premium</span>
          <span className="font-bold pb-3">
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue.
          </span>
          <button className="bg-black text-white rounded-3xl w-2/5 p-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}
