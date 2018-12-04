let fs = require('fs-extra');

fs.remove('package');

fs.mkdirpSync('package/public');
fs.mkdirpSync('package/nginx/conf/includes');

fs.copySync('build/', 'package/public/');
fs.copySync('pcf/Staticfile', 'package/Staticfile');
fs.copySync('pcf/nginx.conf', 'package/nginx/conf/includes/nginx.conf');

