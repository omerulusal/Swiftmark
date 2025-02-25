import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
    // prisma adında global bir değişken tanımladım
}

const client = globalThis.prisma || new PrismaClient();
// client ya global değişkenlerde prisma olabilir ya da yeni bir PrismaClient olmalı
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;
export default client;
/**
 * uygulama genelinde aynı PrismaClient örneğini kullanabilmek için yapılır.
 * declare global ifadesi, TypeScript'te global bir değişken tanımlamak için kullanılan özel bir yapıdır.
 */