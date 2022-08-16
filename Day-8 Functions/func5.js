function getstr(str)
{
    var finalstr;
    if (str.length<3) return str;
    return(finalstr=str.slice(0,3)+str.slice(-3,));
}

str="PANKAJKAPOOR";
console.log(getstr(str));