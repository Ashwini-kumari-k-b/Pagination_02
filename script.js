var pagenumber = 0;

//var lowlimit=document.getElementById('script').getAttribute("lowlimit");
//var uplimit=document.getElementById('script').getAttribute("uplimit");
function paggination(){
    fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json").then
(res=>{
res.json().then(
    data=>{
        console.log(data);
        if (data.length > 0){
            var temp = "";
            var count = 1;
            var limit1 = (pagenumber-1)*10;
            var limit2 = pagenumber*10;

            data.forEach((element) => {
                  if(count <= limit2 && count > limit1)
                  {
                         temp += "<tr>";
                temp += "<td>" + element.id + "</td>";
                temp += "<td>" + element.name + "</td>";
                temp += "<td>" + element.email + "</td>";
                temp += "</tr>";
                  }
               count++;
                  
            });
            document.getElementById("data").innerHTML = temp;
        }
      
            
        }

    
)}
)}
 
function previouspage(){
    pagenumber -= 1;

    paggination ();
}
function nextpage(){
    pagenumber += 1;
    paggination ();
}
function currentpage(pageno){
    pagenumber = pageno;
    paggination();
}