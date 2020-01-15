#/bin/bash
LIST=$(ls src)

GiveFileVer () {
	filename="${1%.*}"
	ext="${1##*.}"
	VER=$2; 
	FILE=$3
	REGEX="\(${filename}\)\.\(${ext}\)"
	sed -i "s/${REGEX}/\1-${VER}.\2/g" "./${FILE}"
}

VER=$RANDOM
for i in $LIST; do(
	cd src/
	for j in $LIST; do
		GiveFileVer ${i} $VER $j
	done;
	GiveFileVer ${i} $VER ..\/index.html
); done;
for i in $LIST; do 
	mv src/$i src/"${i%.*}-${VER}.${i##*.}"
done;

