###################
# BUILD FOR LOCAL DEVELOPMENT
###################
FROM node:18-alpine AS development
# RUN apt-get update && apt-get install -y openssl
WORKDIR /usr/src/app
COPY --chown=node:node package.json ./
COPY --chown=node:node yarn.lock ./
RUN yarn install --frozen-lockfile
COPY --chown=node:node . .
RUN yarn prisma generate
USER node

###################
# BUILD FOR PRODUCTION
###################
FROM node:18-alpine AS build
WORKDIR /usr/src/app
COPY --chown=node:node package.json ./
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .
RUN yarn build
ENV NODE_ENV production
RUN yarn install --frozen-lockfile --prod && yarn cache clean
USER node

###################
# PRODUCTION
###################
FROM node:18-alpine AS production
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD ["node", "dist/main.js"]
