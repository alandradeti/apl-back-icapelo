# Use a imagem oficial do Node.js como base
FROM node:23.6.0

# Crie o diretório de trabalho no contêiner
WORKDIR /usr/app

# Copia o arquivo package.json para o diretório de trabalho
COPY package.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos para o contêiner
COPY . .

# Compilação do código TypeScript
RUN npm run build

# Expõe a porta que o seu aplicativo vai usar
EXPOSE 3010

# Comando para iniciar o aplicativo quando o contêiner for iniciado
CMD ["node", "dist/main"]