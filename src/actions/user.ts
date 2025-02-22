import client from '@/lib/prisma';
import { currentUser } from "@clerk/nextjs/server"
export const onAuthenticateUser = async () => {
    try {
        const user = await currentUser()
        if (!user) {
            return { status: 403 }
        }
        const existingUser = await client.user.findUnique({
            where: {
                clerkId: user.id
            },
            include: {
                workSpace: {
                    include: {
                        members: {
                            where: {
                                userId: user.id
                            }
                        }
                    }
                }
            }
        })
        if (existingUser) {
            return { status: 200, user: existingUser }
        }
        const newUser = await client.user.create({
            data: {
                clerkId: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                imageUrl: user.imageUrl,
                email: user.emailAddresses[0].emailAddress,
                studio: {
                    create: {},
                },
                subscriptions: {
                    create: {}
                },
                workSpace: {
                    create: {
                        name: `${user.firstName}'s Workspace`,
                        type: "PERSONAL"
                    },
                },
            },
            include: {
                workSpace: {
                    where: {
                        User: {
                            clerkId: user.id
                        },
                    },
                },
                subscriptions: {
                    select: {
                        plan: true,
                    }
                }
            }
        })
        if (newUser) {
            return { status: 201, user: newUser }
        }
        return { status: 400 }
    } catch (error) {
        return { status: 500, error: error }
    }
}