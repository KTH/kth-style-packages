FROM kthse/kth-nodejs:8.11.0

MAINTAINER KTH Webb "webmaster@kth.se"

# Copy files used by Gulp.
#COPY ["config", "config"]
COPY ["public", "public"]
COPY ["localPackages", "localPackages"]
COPY ["scripts", "scripts"]
#COPY ["i18n", "i18n"]
COPY ["gulpfile.js", "gulpfile.js"]
COPY ["package.json", "package.json"]
COPY ["webpack.config.js", "webpack.config.js"]
COPY ["app.js", "app.js"]
COPY ["server", "server"]

RUN /scripts/ref-install.sh && \
    npm run build && \
    npm prune --production

EXPOSE 3000

ENTRYPOINT ["node", "app.js"]
