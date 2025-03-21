# SwiftMark E-Ticaret Projesi 🛍️

SwiftMark, modern web teknolojileri kullanılarak geliştirilmiş bir e-ticaret platformudur. Next.js 13, TypeScript, Prisma, MongoDB ve Firebase teknolojilerini bir araya getirerek güçlü ve ölçeklenebilir bir alışveriş deneyimi sunar.

## 🚀 Özellikler

- 👤 Kullanıcı kimlik doğrulama (NextAuth.js)
  - Email/Şifre ile kayıt ve giriş
  - Google hesabı ile giriş
- 🛒 Gelişmiş sepet yönetimi
  - Ürün ekleme/çıkarma
  - Miktar güncelleme
  - Yerel depolama ile sepet kalıcılığı
- 📦 Ürün yönetimi
  - Kategorilere göre filtreleme
  - Arama fonksiyonu
  - Detaylı ürün sayfaları
- ⭐ Ürün değerlendirme sistemi
- 👨‍💼 Admin paneli
  - Ürün ekleme/silme
  - Stok yönetimi

## 🛠️ Teknoloji Yığını

- **Frontend:** Next.js 13, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Veritabanı:** MongoDB, Prisma ORM
- **Kimlik Doğrulama:** NextAuth.js
- **Dosya Depolama:** Firebase Storage
- **Durum Yönetimi:** React Context API
- **Form Yönetimi:** React Hook Form

## 📁 Proje Yapısı

```
├── app/
│   ├── actions/     # Sunucu tarafı işlemler
│   ├── admin/       # Admin panel sayfaları
│   ├── api/         # API rotaları
│   ├── cart/        # Sepet sayfası
│   └── components/  # React bileşenleri
├── hooks/           # Custom React hooks
├── libs/            # Yardımcı kütüphaneler
├── pages/           # Next.js sayfaları
├── prisma/          # Veritabanı şeması
├── provider/        # Context sağlayıcıları
├── public/          # Statik dosyalar
└── utils/           # Yardımcı fonksiyonlar
```

## 🔧 Kurulum

```
1. Projeyi klonlayın:
git clone https://github.com/kullaniciadi/swiftmark.git
cd swiftmark
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Çevre değişkenlerini ayarlayın:
   `.env` dosyası oluşturun ve aşağıdaki değişkenleri ekleyin:

```bash
env
DATABASE_URL="mongodb_baglanti_url"
NEXTAUTH_SECRET="gizli_anahtar"
GOOGLE_CLIENT_ID="google_client_id"
GOOGLE_CLIENT_SECRET="google_client_secret"
FIRE_BASE_API="firebase_api_key"
```

4. Veritabanı şemasını senkronize edin:
```bash
npx prisma generate
npx prisma db push`
```

5. Geliştirme sunucusunu başlatın:
   `npm run dev`

## 📝 Önemli Bileşenler

### Kimlik Doğrulama

`pages/api/auth/[...nextauth].ts` dosyası NextAuth.js yapılandırmasını içerir. Credentials ve Google provider'ları kullanılarak kimlik doğrulama sağlanır.

### Sepet Yönetimi

`hooks/useCart.tsx` dosyası Context API kullanarak sepet yönetimini sağlar. Ürünler localStorage'da saklanır.

### Admin Paneli

`app/admin/` dizini altında yönetici işlevleri bulunur. Ürün ekleme/silme gibi işlemler buradan yapılır.

### Veritabanı Şeması

`prisma/schema.prisma` dosyası MongoDB koleksiyonlarının yapısını tanımlar:

- User (Kullanıcılar)
- Product (Ürünler)
- Review (Yorumlar)
- Account (Hesaplar)

## 🤝 Katkıda Bulunma

1. Bu depoyu fork edin
2. Yeni bir özellik dalı oluşturun (`git checkout -b yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Dalınıza push yapın (`git push origin yeni-ozellik`)
5. Bir Pull Request oluşturun

## 📸 Ekran Görüntüleri

| ![Ana Sayfa](/public/1.png) | ![Ürün Detay](/public/2.png) |
|:---:|:---:|
| *Ana Sayfa* | *Ürün Detay Sayfası* |

| ![Urun Ekleme](/public/3.png) | ![Admin Panel](/public/4.png) |
|:---:|:---:|
| *Sepet Sayfası* | *Admin Panel* |
