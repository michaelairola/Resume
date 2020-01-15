#/!/bin/bash
sleep 60;
curl --compressed https://service.prerender.cloud/pdf/https://${URL} > Resume.pdf
