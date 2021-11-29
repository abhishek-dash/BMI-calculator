function CreateObject(arr) {
    // Write your code here
    let info={};
    for(var i=0;i<arr.length;i+=2){
        info[arr[i]]=arr[i+1]
    }
    return info
}

module.exports = CreateObject;
