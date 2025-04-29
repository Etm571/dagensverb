FROM node:18-bookworm

WORKDIR /app

RUN apt-get update && apt-get install -y \
    openssl \
    netcat-openbsd \  
    && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
COPY prisma ./prisma/


RUN apt-get update && apt-get install -y \
    openssl \
    netcat-openbsd \
    postgresql-client \ 
    && rm -rf /var/lib/apt/lists/*

RUN npm install
RUN npx prisma generate

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY . .

EXPOSE 3000

ENTRYPOINT ["/entrypoint.sh"]