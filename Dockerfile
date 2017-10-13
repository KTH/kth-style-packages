FROM kthse/kth-nodejs-web:2.3

COPY ["packages", "packages"]
COPY ["scripts", "scripts"]

RUN mkdir "/buildOut"
RUN apk add nodejs=6.11.4-r0
RUN pwd
RUN /scripts/pack-for-ref.sh

CMD ["cp", "-r", "/build", "/buildOut"]