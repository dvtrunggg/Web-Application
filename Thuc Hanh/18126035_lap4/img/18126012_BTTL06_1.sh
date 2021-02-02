n=0
while [ $n -ne $# ]
do
    a=("$@")
    echo ${a[n]}
    n=$(($n+1))
done
