FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf

COPY .next/ /usr/share/nginx/html/
