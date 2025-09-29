FROM node:20-alpine AS base

WORKDIR /app

# Copy over the package json files first
COPY package.json package-lock.json /app/

# Afterwards, run a clean install
RUN npm ci

COPY . .

RUN npm run build


# Run the build constructed in the first stage
FROM base AS run

WORKDIR /app

COPY --from=base /app/.next /app
COPY --from=base /app/public /app
COPY --from=base /app/package.json /app
COPY --from=base /app/node_modules /app

EXPOSE 3000

CMD [ "npm", "start" ]