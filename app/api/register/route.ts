import bcrypt from "bcrypt"
import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();//gelen reqteki veriyi jsona çevirdim
    const { name, email, password } = body;//req bodyden bana name... verileri geliyor

    const hashedPassword = await bcrypt.hash(password, 10)//user'ın şifresini hashledim

    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword,
        }
    })

    return NextResponse.json(user);
    //oluşturduğum userı NextResponse üzerinden json formatında dbye yolladım

}