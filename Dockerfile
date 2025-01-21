# Use a imagem oficial do Node.js para a fase de construção
FROM node:23.6.0

# Crie o diretório de trabalho no contêiner
WORKDIR /usr/app

# Copia o arquivo package.json para o diretório de trabalho
COPY package.json ./

# Instala as dependências
RUN npm install

# Copia os arquivos do diretório atual para o diretório de trabalho
COPY . .

# Compilação do código TypeScript
RUN npm run build

# Expõe a porta utilizada pelo seu aplicativo Nest.js (por padrão, é a porta 3000)
EXPOSE 3010

# Comando para iniciar o aplicativo quando o contêiner for iniciado
CMD ["node", "dist/main"]
