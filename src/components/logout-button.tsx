'use client'

import { signOut } from '@/lib/actions'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

// This is the logout button
export default function LogoutButton() {
  const router = useRouter()

  // Handle the form submission
  const handleClick = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault()

    // Sign out
    await signOut()

    router.push(`/`)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-md bg-blue-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      Logout
    </button>
  )
}
