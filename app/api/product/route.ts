import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const currentUser = await getCurrentUser();
    if (!currentUser || currentUser.role !== "ADMIN") {
        return NextResponse.error();
    }
    const body = await request.json();
    const { name, description, brand, category, price, inStock, image } = body;
    const product = await prisma.product.create({
        data: {
            name,
            description,
            brand,
            category,
            price:parseFloat(price),
            // gelen priceların number tipinde olması gerektiginden parse edildi
            inStock,
            image
        }
    })

    return NextResponse.json(product);
    //oluşturduğum userı NextResponse üzerinden json formatında dbye yolladım

}
/**
 * product oluşturmak icin kullanıcının giriş yapması ve bu kullanıcının 
 * rolunun Admin olması gerekir.
 */