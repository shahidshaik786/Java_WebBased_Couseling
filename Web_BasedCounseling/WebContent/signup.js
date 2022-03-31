function formvalidation()
{
	var username=f1.username.value;
	var password =f1.password.value;
	if((username=="")||(password==""))
	{
		document.getElementById("validateuser").innerHTML = "*Incorrect user name or password*";
		f1.username.focus();
		return false;
	}
}
//////////////////////////////////////////////////////////////////////////////////
function rnameval()
{
		document.getElementById("hidden1").style.visibility='hidden';
		return false;
}
/////////////////////////////////////////////////////////////////////////////////
function rsurnameval()
{
		document.getElementById("hidden1").style.visibility='hidden';
		return false;
}
////////////////////////////////////////////////////////////////////////////////
function rusernameval()
{
	document.getElementById("hidden2").style.visibility='hidden';
	var rname=f2.rname.value;
	var rsurname =f2.rsurname.value;
	if((rname=="")||(rsurname==""))
	{
		document.getElementById("hidden1").style.visibility='visible';
		return false;
	}
				
}
////////////////////////////////////////////////////////////////////////////////
function rpass1val()
{
	document.getElementById("hidden3").style.visibility='hidden';
	var rusername=f2.rusername.value;
	if(rusername=="")
	{
		document.getElementById("hidden2").style.visibility='visible';
		var rname=f2.rname.value;
	var rsurname =f2.rsurname.value;
	if((rname=="")||(rsurname==""))
	{
		document.getElementById("hidden1").style.visibility='visible';
		return false;
	}
		return false;
	}
	var rname=f2.rname.value;
	var rsurname =f2.rsurname.value;
	if((rname=="")||(rsurname==""))
	{
		document.getElementById("hidden1").style.visibility='visible';
		return false;
	}
}
///////////////////////////////////////////////////////////////////////////////////
function remailval()
{
	passwordcompare();
	document.getElementById("hidden4").style.visibility='hidden';
	rpass1val();
	var rpass1=f2.rpass1.value;
	var rpass2=f2.rpass2.value;
	if((rpass1=="")||(rpass2==""))
	{
		document.getElementById("hidden3").style.visibility='visible';
		return false;
	}
}
/////////////////////////////////////////////////////////////////////////////////////
function rphoneval()
{
	document.getElementById("hidden5").style.visibility='hidden';
	remailval();
	var remail=f2.remail.value;
	if(remail=="")
	{
		document.getElementById("hidden4").style.visibility='visible';
		return false;
	}
}
//////////////////////////////////////////////////////////////////////////////////
function rsexval()
{
	document.getElementById("hidden6").style.visibility='hidden';
	rphoneval()
	var rphone=f2.rphone.value;
	if(rphone=="")
	{
		document.getElementById("hidden5").style.visibility='visible';
		return false;
	}
}
/////////////////////////////////////////////////////////////////////////////////
function rdayval()
{
	rsexval();
	document.getElementById("hidden7").style.visibility='hidden';
	var male=f2.gender.value;
	if((male!="Male")&&(male!="Female"))
	{
		document.getElementById("hidden6").style.visibility='visible';
		return false;
	}
}
///////////////////////////////////////////////////////////////////////////////////////
function valsubmit()
{
	rdayval();
	var day=f2.birthday_day.value;
	var month=f2.birthday_month.value;
	var year=f2.birthday_year.value;
	if((day=="0")||(month=="0")||(year=="0"))
	{
		document.getElementById("hidden7").style.visibility='visible';
		return false;
	}
}
/////////////////////////////////////////////////////////////////////////////////////////
function passwordcompare()
{
	var rpass1=f2.rpass1.value;
	var rpass2=f2.rpass2.value;
	if((rpass1!=rpass2))
	{
		document.getElementById("hidden3").style.visibility='visible';
		return false;
	}
	else
	{
		document.getElementById("hidden3").style.visibility='hidden';
	}
}
/////////////////////////////////////////////////////////////////////////////////////////////////
function CheckPasswordStrength(password) {
        var password_strength = document.getElementById("password_strength");
 
        //TextBox left blank.
        if (password.length == 0) {
            password_strength.innerHTML = "";
            return;
        }
 
        //Regular Expressions.
        var regex = new Array();
        regex.push("[A-Z]"); //Uppercase Alphabet.
        regex.push("[a-z]"); //Lowercase Alphabet.
        regex.push("[0-9]"); //Digit.
        regex.push("[$@$!%*#?&]"); //Special Character.
 
        var passed = 0;
 
        //Validate for each Regular Expression.
        for (var i = 0; i < regex.length; i++) {
            if (new RegExp(regex[i]).test(password)) {
                passed++;
            }
        }
 
        //Validate for length of Password.
        if (passed > 2 && password.length > 8) {
            passed++;
        }
 
        //Display status.
        var color = "";
        var strength = "";
        switch (passed) {
            case 0:
            case 1:
                strength = "Weak";
                color = "red";
                break;
            case 2:
                strength = "Good";
                color = "darkorange";
                break;
            case 3:
            case 4:
                strength = "Strong";
                color = "green";
                break;
            case 5:
                strength = "Very Strong";
                color = "darkgreen";
                break;
        }
        password_strength.innerHTML = strength;
        password_strength.style.color = color;
    }
/////////////////////////////////////////////////////////////////////////    
function checkEmail() {

    var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    	document.getElementById("hidden4").style.visibility='visible';
    	return false;
 }
 else{
 	document.getElementById("hidden4").style.visibility='hidden';
    return false;
 }
}
///////////////////////////////////////////////////////////////////////////
var tday=new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
var tmonth=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate();
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

if(nhour==0){ap=" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}

if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

document.getElementById('clockbox').innerHTML=""+tday[nday]+" \t "+ndate+" "+tmonth[nmonth]+",  "+nhour+":"+nmin+":"+nsec+ap+"";
}

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}
///////////////////////////////////////////////////////////////////////////

var xmlHttp;
if(window.XMLHttpRequest)
{
	xmlHttp = new XMLHttpRequest();
}
else{
	xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
}
function hellome(){
	
	if(xmlHttp)
		{
			xmlHttp.open("POST","login?username="+document.getElementById('username').value+"&password="+document.getElementById('password').value,true);
			xmlHttp.onreadystatechange = callme; 
			xmlHttp.send();
		}
	else{
		alert("no xmlHttp created");
	}
		
}
function callme()
{
	if(xmlHttp.readyState == 4)
	{
		if(xmlHttp.status == 200)
		{
			document.getElementById("theD").innerHTML= xmlHttp.responseXML.getElementsByTagName("responseFromServer")[0].textContent;
		}
	}
}

//////////////////////////////

function text1clear(){
	document.getElementById("username").value= "";
	document.getElementById("theD").innerHTML= "";
}
function text2clear(){
	document.getElementById("password").value= "";
	document.getElementById("theD").innerHTML= "";
}

/////////////////////////////////////////////
