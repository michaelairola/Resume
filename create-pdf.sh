#/!/bin/bash
echo "creating pdf..."
sleep 5;
echo "URL:" $URL
sleep 5;
curl --compressed https://service.prerender.cloud/pdf/https://${URL} > index.pdf
echo "pdf created:"
cat index.pdf