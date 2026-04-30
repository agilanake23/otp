FROM node:20

WORKDIR /otpgenerate

# Copy package files first
COPY package*.json ./

RUN npm install

# Copy full project (IMPORTANT)
COPY . .

EXPOSE 3000

CMD ["npm", "start"]