#/!/bin/bash
echo "creating pdf..."
sleep 10;
curl --compressed https://service.prerender.cloud/pdf/https://${URL} > Resume.pdf
echo "pdf created:"
cat index.pdf