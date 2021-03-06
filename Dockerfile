FROM kthse/kth-nodejs:8.11.0

COPY ["packages", "packages"]
COPY ["scripts", "scripts"]

RUN mkdir /buildOut

RUN pwd
RUN /scripts/pack-for-ref.sh

CMD ["cp", "-r", "/build", "/buildOut"]