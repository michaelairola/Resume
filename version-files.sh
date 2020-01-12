#/bin/bash
pwd
LIST=$(echo index.html style.css script.js data.js html-template.js)

GiveFileVer () {
	filename="${1%.*}"
	ext="${1##*.}"
	VER=$2; 
	FILE=$3
	REGEX="\(${filename}\)\.\(${ext}\)"
	sed -i "s/${REGEX}/\1-${VER}.\2/g" "./${FILE}"
	# sed -i "s/${REGEX}/\1-${VER}.\2/g" $FILE
}

VER=$RANDOM
for i in $LIST; do 
	mv $i "${i%.*}-${VER}.${i##*.}"
	for j in $LIST; do
		GiveFileVer $i $VER $j
	done;
done;
