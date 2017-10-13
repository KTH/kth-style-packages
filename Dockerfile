FROM kthse/kth-nodejs:2.3

COPY ["packages", "packages"]

RUN ls
RUN /scripts/pack-for-ref.sh
RUN ls /build

CMD [ "cp", "-r", "/build", "/docker-build" ]
