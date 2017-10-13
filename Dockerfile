FROM kthse/kth-nodejs:2.3

COPY ["packages", "packages"]
COPY ["scripts", "scripts"]

CMD [ "/scripts/pack-for-ref.sh" ]