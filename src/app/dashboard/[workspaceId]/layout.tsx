import { onAuthenticateUser } from '@/actions/user'
import { verify } from 'crypto'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    params : {workspaceId: string}
    children: React.ReactNode
}

const Layout = async ({params: {workspaceId}, children}: Props) => {
    const auth = await onAuthenticateUser();
    if(!auth.user?.workSpace) redirect('/auth/sign-in')
    if(!auth.user.workSpace.length) redirect('/auth/sign-in') 
    const hasAccess = await verifyAccessToWorkspace(workspaceId) 
  return (
    <div>Layout</div>
  )
}

export default Layout