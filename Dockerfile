# Base image olarak Node.js'in resmi imajını kullanıyoruz
FROM node:18-alpine

# OpenSSL ve diğer gerekli paketleri yüklüyoruz
RUN apk add --no-cache openssl openssl-dev libc6-compat

# Çalışma dizinini belirliyoruz
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyalıyoruz
COPY package*.json ./

# Bağımlılıkları yüklüyoruz
RUN npm install

# Prisma'yı kuruyoruz
RUN npm install prisma --save-dev

# Önce .env dosyasını kopyalayalım
COPY .env .env

# Sonra diğer dosyaları kopyalayalım
COPY . .

# Tailwind CSS'i build ediyoruz
RUN npx tailwindcss init -p

# Prisma istemcisini oluşturuyoruz
RUN npx prisma generate

# Next.js için production build
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Build öncesi environment değişkenlerini kontrol edelim
RUN echo "DATABASE_URL=${DATABASE_URL}"

# Uygulamayı build ediyoruz
RUN npm run build

# Uygulamayı çalıştırıyoruz
CMD ["npm", "run", "dev"]

# Port 3000'i dışarıya açıyoruz
EXPOSE 3000


# İmajı oluşturmak ve container'ı başlatmak için:
# docker-compose up --build

# Container'ı arka planda çalıştırmak için:
# docker-compose up -d

# Container'ı durdurmak için:
# docker-compose down