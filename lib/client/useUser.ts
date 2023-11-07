import { User } from '@prisma/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

interface UserResponse {
  ok: boolean
  user: User
}

export default function useUser() {
  const { data, error, mutate } = useSWR<UserResponse>('/api/users/me')
  const router = useRouter()
  console.log(data)
  useEffect(() => {
    if (data && !data.ok) {
      router.replace('/create-account')
    }
  }, [data, router])

  return { user: data?.user, isLoading: !data && !error }
}
