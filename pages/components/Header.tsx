import Head from 'next/head'

export default function Header({ title = '' }) {
  return (
    <Head>
      <title>{title} / X</title>
    </Head>
  )
}
