import EmptyFilter from '@/app/components/EmptyFilter'
import React from 'react'

type SearchParams = {
  callbackUrl: string;
};

export default async function SignIn({ searchParams }: { searchParams: Promise<SearchParams> }) {
  // Await resolution of the promise to extract params
  const resolvedParams = await searchParams;
  return (
    <EmptyFilter
        title='You need to be logged in to do that'
        subtitle='Please click below to login'
        showLogin
        callbackUrl={resolvedParams.callbackUrl} 
    />
  )
}
