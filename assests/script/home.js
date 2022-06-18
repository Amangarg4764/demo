change();
function change(){
    var ul=document.getElementById("uldir");
    var li=ul.getElementsByTagName('li');
    for(var i=0;i<li.length;i++){
        var a = li[i].getElementsByTagName("span")[0];
        var txtValue = a.textContent || a.innerText;
        var b=li[i].getElementsByTagName("div")[4];
        if(txtValue=="SCHOOL"){
            b.style.background="rgb(242,167,0)";
        }
        if(txtValue=="WORK"){
            b.style.background="purple";
        }
        if(txtValue=="PERSONAL"){
            b.style.background="blue";
        }
        if(txtValue=="OTHER"){
            b.style.background="lightpink";
        }
        if(txtValue=="CLEANING"){
            b.style.background="#1be948";
        }
    }
}
function del(){
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var arr=[];
    for(var i=0;i<checkboxes.length;i++){
        arr[i]=checkboxes[i].id;
    }
    if(arr.length==0)
        document.getElementsByTagName("a")[0].href=document.getElementsByTagName("a")[0].href+arr[arr.length-1];
    else{
        document.getElementsByTagName("a")[0].href=document.getElementsByTagName("a")[0].href+arr[arr.length-1]+",";
    }
}