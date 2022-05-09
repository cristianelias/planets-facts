import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Router, useRouter } from 'next/router'
import { type } from 'os'

const Aspect: NextPage = () => {
  const router = useRouter()
  const { planet, aspect } = router.query

  if (!['overview', 'structure', 'geology'].includes(aspect)) {
    console.log("error")
  }

  return (
    <>
      {JSON.stringify(router.query)}
    </>
  )
}

export default Aspect
