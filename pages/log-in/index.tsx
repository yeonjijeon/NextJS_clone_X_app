import { useForm } from 'react-hook-form'
import useMutation from '../../lib/client/useMutation'
import { MutationResult } from '../create-account'
import Input from '../components/Input'
import Header from '../components/Header'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

interface LoginForm {
  email: string
  password: string
}

export default function LogIn() {
  const router = useRouter()
  const { register, handleSubmit } = useForm<LoginForm>()
  const [login, { loading, data, error }] =
    useMutation<MutationResult>('/api/users/login')

  const onValid = (data: LoginForm) => {
    if (!data) return
    login(data)
  }

  const goToJoin = () => router.push('/create-account')

  useEffect(() => {
    if (data?.ok) {
      router.push('/')
    }
  }, [data, router])
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-300">
      <Header title="X에 로그인하기" />
      <div className="flex justify-center items-center fixed w-[30rem] h-3/5 bg-white z-10 rounded-2xl ">
        <div
          onClick={goToJoin}
          className="absolute top-0 left-0 p-3 cursor-pointer"
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
                register={register('password', {
                  required: true,
                })}
                type="password"
                placeholder="비밀번호"
                required={true}
              />
            </div>
            <button className="w-full border h-14 rounded-full bg-black text-white font-semibold hover:bg-gray-800">
              {loading ? '진행중..' : '로그인하기'}
            </button>
            <div
              onClick={goToJoin}
              className="text-center text-sm underline text-blue-400 cursor-pointer"
            >
              계정 만들기
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
