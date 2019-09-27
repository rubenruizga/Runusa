server {
  listen 443 http2;
  listen [::]:443 http2;
  root /var/www/runusapecan.com;
  index index.html;
  server_name runusapecan.com www.runusapecan.com;
  location / {
    try_files $uri $uri/ =404;
  }
  location ~* \.(jpg|jpeg|png|gif|ico)$ {
      expires 30d;
  }
  location ~* \.(css|js)$ {
    expires 7d;
  }

  ssl on;
  ssl_certificate /etc/letsencrypt/live/runusapecan.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/runusapecan.com/privkey.pem;

  gzip on;
  gzip_types application/javascript image/* text/css;
  gunzip on;
}
server {
  listen 0.0.0.0:80;
  server_name runusapecan.com www.runusapecan.com;
  rewrite ^ https://$host$request_uri? permanent;
}
