FROM dhub.dev.siap.id/rocky9

# setup repo, install nginx dan cleanup
RUN dnf install -y \
        https://yum.dev.siap.id/jpel/9/noarch/Packages/epel-release-jagr-dev-latest-9.noarch.rpm \
    && dnf install -y \
        nginx \
    && dnf clean all

EXPOSE 80/tcp
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]

COPY --chown=root:root files/ /
