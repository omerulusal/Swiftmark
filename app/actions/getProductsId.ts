import prisma from "@/libs/prismadb";

interface IParams {
    productId?: string;
}

export async function getProductsId(params: IParams) {
    try {
        const { productId } = params;
        const product = await prisma.product.findUnique({
            where: {
                id: productId,
            },
            include: {
                reviews: {
                    include: {
                        user: true,
                    },
                    orderBy: {
                        createdDate: "desc"
                    }
                },
            }
        })

        if (!product) {
            return null;
        }

        return product;
    } catch (error: any) {
        console.error("Ürün getirme hatası:", error);
        throw new Error(error);
    }
}