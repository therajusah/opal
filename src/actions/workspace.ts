"use server"

import { currentUser } from "@clerk/nextjs/server"

export const verifyAccessToWorkspace = async (workspaceId: string) => {
    try {
        const user = await currentUser()
        if(!user) return {status:403}
        const isUserInWorkspace = await client.workspace.findUnique({
            where: {
                id: workspaceId,
                OR: [
                     User: {
                        clerkd: 
                     }
                ]
            },
           
        })
    } catch (error) {
        
    }
