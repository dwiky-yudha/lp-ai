FROM dhub.dev.siap.id/rocky9

RUN dnf install -y \
        https://yum.dev.siap.id/jpel/9/noarch/Packages/epel-release-jagr-dev-latest-9.noarch.rpm \
    && dnf config-manager \
        --add-repo=https://yum.dev.siap.id/nodejs/config-repo/nodesource-20.repo \
    && dnf install -y \
        gcc-c++ \
        gettext \
        git \
        make \
        nodejs \
        unzip \
    && dnf clean all

RUN npm install -g pnpm

WORKDIR /source
