"use client"
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/auth'
import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'

const Dashboard = () => {
    const { logout, user } = useAuth()

    useEffect(() => {
        if (!user) {
            redirect('/login')
        }
    })
    return (
        <div>
            <div
                className="bg-indigo-600 rounded-md px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
            >
                <p>You are seeing this dashboard page because your authenticated</p>
                <Button onClick={logout} variant={'secondary'}>Logout</Button>
            </div>
        </div>
    )
}

export default Dashboard
