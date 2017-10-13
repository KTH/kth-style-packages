FROM kthse/kth-nodejs-web:2.3

COPY ["packages", "packages"]
COPY ["scripts", "scripts"]

RUN mkdir "/buildOut"
RUN echo $(which npm)
RUN pwd
RUN /scripts/pack-for-ref.sh

CMD ["cp", "-r", "/build", "/buildOut"]