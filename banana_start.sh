PATH=/www/server/nodejs/v22.14.0/bin:/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

export NODE_PROJECT_NAME="banana"
export HOME=/root
/www/server/nodejs/v22.14.0/bin/pm2 start /www/server/nodejs/vhost/pm2_configs/banana/ecosystem.config.cjs