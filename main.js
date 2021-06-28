var names=[];
var display=[];


function submit(){
  
for( var j=1;j<=4;j++) {  
var student=document.getElementById("name_of_the_student_"+j).value; 
console.log(student);
names.push(student)
}

var lenght_of_names=names.length;
console.log(lenght_of_names);





for(  var k=0;k<lenght_of_names;k++){
display.push("<h4> name- "+names[k]+"</h4>")
console.log(display);
}

document.getElementById("display_name_with_commas").innerHTML=display;



document.getElementById("submit_button").style.display="none";
     
document.getElementById("sort_button").style.display="inline-block";
}

 function sorting(){
 names.sort();
 display1=[];
 var lenght_of_names=names.length;
console.log(lenght_of_names);





for(  var k=0;k<lenght_of_names;k++){
display1.push("<h4> name- "+names[k]+"</h4>")
console.log=(display1);
}

document.getElementById("display_name_with_commas").innerHTML=display1;















}