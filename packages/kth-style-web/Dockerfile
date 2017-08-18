FROM kthse/kth-nodejs-web:2.3

MAINTAINER KTH Webb "webmaster@kth.se"

# Copy files used by Gulp.
COPY ["config", "config"]
COPY ["public", "public"]
COPY ["i18n", "i18n"]
COPY ["gulpfile.js", "gulpfile.js"]
COPY ["package.json", "package.json"]
COPY ["app.js", "app.js"]
COPY ["server", "server"]

RUN npm install --development --no-optional && \
    npm run build && \
    npm prune --production

EXPOSE 3000

ENTRYPOINT ["node", "app.js"]
