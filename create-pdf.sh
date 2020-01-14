#/!/bin/bash
echo "creating pdf..."
echo $URL
sleep 5;
curl --compressed https://service.prerender.cloud/pdf/https://${URL} > index.pdf
echo "pdf created:"
cat index.pdf