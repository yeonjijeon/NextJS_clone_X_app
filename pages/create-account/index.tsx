import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import useMutation from '../../lib/client/useMutation'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Input from '../components/Input'

interface JoinForm {
  email: string
  nickname: string
  password: string
}
export interface MutationResult {
  ok: boolean
}

export default function CreateAccount() {
  const router = useRouter()
  const [join, { loading, data, error }] =
    useMutation<MutationResult>('/api/users/join')
  const [isCreate, setIsCreate] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { register, handleSubmit } = useForm<JoinForm>()

  const popupHandler = () => setIsCreate((prev) => !prev)
  const successHandler = () => router.push('/')
  const onValid = (data: JoinForm) => {
    if (!data) return
    join(data)
  }
  useEffect(() => {
    if (data?.ok) {
      setIsCreate(false)
      setIsSuccess(true)
    }
  }, [router, data])

  return (
    <div
      className={`flex h-screen w-screen items-center justify-center fixed ${
        (isCreate || isSuccess) && 'bg-gray-400'
      }`}
    >
      {isCreate && (
        <div className="flex justify-start items-center fixed w-[30rem] h-3/5 bg-white z-10 rounded-2xl ">
          <div
            className="absolute top-0 left-0 p-3 cursor-pointer"
            onClick={popupHandler}
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </div>
          <form onSubmit={handleSubmit(onValid)}>
            <div className="flex flex-col p-16 space-y-11 w-full">
              <div className="text-3xl font-bold">계정을 생성하세요</div>
              <div className="space-y-6 ">
                <Input
                  register={register('email', {
                    required: true,
                  })}
                  type="email"
                  placeholder="이메일"
                  required={true}
                />
                <Input
                  register={register('nickname', {
                    required: true,
                  })}
                  type="text"
                  autoComplete="username"
                  placeholder="닉네임"
                  required={true}
                />
                <Input
                  register={register('password', {
                    required: true,
                  })}
                  type="password"
                  autoComplete="current-password"
                  placeholder="비밀번호"
                  required={true}
                />
              </div>
              <button className="w-full border h-14 rounded-full bg-black text-white font-semibold hover:bg-gray-800">
                {loading ? '진행중..' : '등록'}
              </button>
            </div>
          </form>
        </div>
      )}
      {isSuccess && (
        <div className="flex justify-center items-center fixed w-[30rem] h-2/5 bg-white z-10 rounded-2xl flex-col space-y-10">
          <div className="text-2xl font-bold">가입이 완료되었습니다.</div>
          <button
            onClick={successHandler}
            className="w-2/3 border h-14 rounded-full bg-black text-white font-semibold hover:bg-gray-800"
          >
            이용하기
          </button>
        </div>
      )}
      <Header
        title={isCreate ? 'X 가입하기' : 'X. 무슨 일이 일어나고 있나요?'}
      />
      <div className="flex">
        <div className="m-8 px-14">
          <svg
            className="w-[24rem] h-[24rem]"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
        </div>
        <div className="flex flex-col ml-16">
          <div className="font-extrabold text-6xl pb-5">
            지금 일어나고 있는 일
          </div>
          <div className="w-[19rem] flex flex-col">
            <div className="font-extrabold text-3xl py-8">지금 가입하세요.</div>
            <div className="flex flex-col mb-10">
              <div className="flex flex-col items-center mb-2">
                <button className="w-72 h-10 border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-200 transition-colors mb-2">
                  <div className="flex space-x-2 items-center justify-center">
                    <div>
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 488 512"
                      >
                        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                      </svg>
                    </div>
                    <div className="text-sm">Google 계정으로 가입하기</div>
                  </div>
                </button>
                <button className="w-72 h-10 border rounded-full border-gray-200  hover:bg-gray-200 transition-colors">
                  <div className="flex space-x-2 items-center justify-center">
                    <div>
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 384 512"
                      >
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                      </svg>
                    </div>
                    <div className="text-sm">Apple에서 가입하기</div>
                  </div>
                </button>
                <div className="relative w-[19rem] pt-4 z-0">
                  <div className="absolute w-full border-t border-gray-200" />
                  <div className="relative -top-3 text-center ">
                    <span className="bg-white px-2">또는</span>
                  </div>
                </div>

                <button
                  className="w-72 h-11 border bg-sky-500 rounded-full hover:bg-sky-600 transition-colors "
                  onClick={popupHandler}
                >
                  <div className="flex space-x-2 items-center justify-center">
                    <span className="font-bold text-white">계정 만들기</span>
                  </div>
                </button>
              </div>

              <span className="text-xs">
                가입하시려면 <span className="text-sky-500">쿠키 사용</span>을
                포함해 <span className="text-sky-500">이용약관</span>과{' '}
                <span className="text-sky-500">개인정보 처리 방침</span>에
                동의해야 합니다.
              </span>
            </div>
            <div>
              <div className="font-bold py-4">이미 트위터에 가입하셨나요?</div>
              <button className="w-72 h-10 border border-gray-200 rounded-full hover:bg-sky-100 hover:border-gray-300 transition-colors mb-2">
                <span className="font-bold text-sky-500">로그인</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
