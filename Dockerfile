# Multi-stage Dockerfile for a Next.js app (adjust package manager commands if you use pnpm/yarn)
FROM node:20-alpine AS deps
WORKDIR /app
# copy lock files first for better caching
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
# Use npm by default. If you use pnpm or yarn, change this line accordingly.
RUN npm ci --silent

FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
EXPOSE 3000
# copy only what's needed to run
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Ensure your package.json has "start": "next start -p $PORT" or adjust the command below
CMD ["npm", "run", "start"]