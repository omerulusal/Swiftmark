import prisma from "@/libs/prismadb";

export interface IProductParams {
    category?: string | null;
    search?: string | null;
}

export default async function getProducts(params: IProductParams) {
    try {
        const { category, search } = params;
        let searchStr = search;
        if (!searchStr) {
            // Eger dışarıdan bir search parametresi gelmezse başlangıç olarak boş belirledim (hata almamak icin)
            searchStr = "";
        }
        let sorgu: any = {}
        if (category) {
            sorgu.category = category;
            // eger kişi, kategoriye göre filtreleme yapmak isterse sorgu objesinde category alanı oluşturulur 
            // bu alana gelen deger ise dışarıdan gelen category'i olarak belirtilir.
        }

        const products = await prisma.product.findMany({
            where: {
                ...sorgu,
                OR: [{
                    name: {
                        contains: searchStr,
                        mode: "insensitive", //"insensitive" ifadesi, aramanın büyük/küçük harf duyarsız olmasını sağlar.
                    },
                    description: {
                        contains: searchStr,
                        mode: "insensitive",
                    }
                }]
            },
            include: {
                // include: Ürünlerle birlikte ilişkili reviews (yorumlar) 
                // ve her bir yorumun user (kullanıcı) bilgilerini de getirir.
                reviews: {
                    include: {
                        user: true
                    },
                    orderBy: {
                        createdDate: "desc"
                        // orderBy: Yorumları createdDate alanına göre azalan(yeniden eskiye) sırada sıralar.
                    }
                }
            }
        })
        return products;
    } catch (error: any) {
        throw new Error(error);
    }
}

/**
 * OR: Bu operatör, name veya description alanlarında searchStr içeren ürünleri arar.
 * contains: searchStr: Ürün adı veya açıklaması searchStr içeren ürünleri bulur.
 * 
 * Kullanıcı bir arama kutusuna "telefon" yazıp arama butonuna tıkladığında, 
 * URL şu şekilde olabilir: http://localhost:3000/products?search=telefon
 */