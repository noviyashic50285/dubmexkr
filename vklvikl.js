var vse;
function show_hide5()
{
if(vse==1) {
    document.getElementById("butnmenu").style.display="inline";
    return vse=0;
}
else{
    document.getElementById("butnmenu").style.display="none";
    return vse=1;
}
}

var pict01;
function showpict01()
{
if(pict01==1) {
    obnuleniefon();
    obnulenie2();
    document.getElementById("prim01").style.display = "block";
    this.style.color = 'blue';
    return pict01=0;
}
else{
    return pict01=1;
}
}

var pict02;
function showpict02()
{
if(pict02==1) {
    obnuleniefon();
    obnulenie2();
    document.getElementById("prim02").style.display = "block";
    this.style.color = 'blue';
    return pict02=0;
}
else{
    return pict02=1;
}
}
