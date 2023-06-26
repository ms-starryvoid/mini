'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const just = () => {
  const router = useRouter();
  const { name } = router.query?.name || '';
  return (
    <div>just 
      <p>{name} </p>
    </div>
  )
}

export default just