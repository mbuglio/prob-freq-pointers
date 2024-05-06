// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let str1 = 0;
    let str2 = 0;

    if(!str1) return true;
    while(str2Idx < str2.length){
        if(str2[str2Idx] === str1[str1Idx]){
            str1Idx += 1;
        }
        if(str1Idx === str1.length) return true;
        str2Idx += 1;
    }
    return false;
}
