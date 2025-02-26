import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/libs/prismadb";
export async function getSession() {
    return await getServerSession(authOptions);
}

export async function getCurrentUser() {
    try {
        const session = await getSession();//oturum acılıp acılmadıgının kontrolu
        if (!session?.user?.email) {
            return null;
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session?.user?.email as string,
            }
        });
        if (!currentUser) {
            return null;
        }

        return {
            ...currentUser,//mevcut user'ın tum bilgilerini aldım
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updateAt.toISOString(),
            emailVerified: currentUser.emailVerified?.toISOString() || null,
            //schema.prismadaki user modelinden geliyor
        }
    } catch (error: any) {
        return null;
    }
}