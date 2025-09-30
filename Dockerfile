FROM node:20-alpine AS build

WORKDIR /app

# Copy over the package json files first
COPY package.json package-lock.json /app/

# Afterwards, run a clean install
RUN npm ci

COPY . .

RUN npm run build


# Run the build constructed in the first stage
FROM node:20-alpine AS run

WORKDIR /app

COPY --from=build /app/.next  ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json .

EXPOSE 3000

CMD [ "npm", "start" ]