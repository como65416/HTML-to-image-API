FROM ghcr.io/puppeteer/puppeteer:23.2.0

EXPOSE 3031

WORKDIR /app

COPY . /app

USER root

RUN chown -Rh pptruser:pptruser /app

USER pptruser

RUN npm install

CMD ["node", "main.js"]
