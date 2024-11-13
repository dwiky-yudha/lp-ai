ARG PREBUILD_HUB
ARG IMAGE_NAMESPACE
ARG STAGE

FROM ${PREBUILD_HUB}/${IMAGE_NAMESPACE}/base-portal-${STAGE}:latest

ARG DOMAIN
ARG STAGE

RUN \
    sed -ri \
        # set session handler \
        -e "s/DOMAIN/${DOMAIN}/g" \
        -e "43s/\./\\\\./g" \
        /etc/nginx/nginx.conf ; \
    # batasi 1 worker untuk devel
    if [[ ${STAGE} == devel ]] ; then \
        sed -ri \
            -e 's!^worker_processes auto;!worker_processes 1;!g' \
            /etc/nginx/nginx.conf ; \
    fi

WORKDIR /usr/share/nginx/html

RUN rm -rf /usr/share/nginx/html && mkdir /usr/share/nginx/html
COPY --chown=root:root dist .
