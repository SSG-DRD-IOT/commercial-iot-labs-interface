FROM nginx 
MAINTAINER daniel.w.holmlund@intel.com

COPY ./dist /usr/share/nginx/html

EXPOSE 80
