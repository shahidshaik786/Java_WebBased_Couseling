function hellome()
{	
	var xmlHttp;
	if(window.XMLHttpRequest)
	{
		xmlHttp = new XMLHttpRequest();
	}
	else
	{
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if(xmlHttp)
		{
			xmlHttp.open("POST","./Search_Servlet?hallticket="+document.getElementById('hallticket').value,true);
			xmlHttp.onreadystatechange = callme;
			xmlHttp.send();
		}
	else{
		alert("no xmlHttp created");
	}
	function callme()
	{
		if(xmlHttp.readyState==4)
		{
			if(xmlHttp.status==200)
			{
				var json = eval('(' + xmlHttp.responseText +')');
				document.getElementById('reghallticket').value= json.hallticketvalue;
				document.getElementById('regrank').value= json.rank;
				document.getElementById('regname').value= json.name;
				document.getElementById('regdob').value= json.dob;
				document.getElementById('regcatagiry').value= json.catagiry;
				document.getElementById('reggender').value= json.gender;
				document.getElementById('regerror').innerHTML= json.error;
			}
		}
	}
}
function hai()
{	
	var xmlHttp;
	if(window.XMLHttpRequest)
	{
		xmlHttp = new XMLHttpRequest();
	}
	else
	{
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if(xmlHttp)
		{
			xmlHttp.open("POST","./Search_Seat_Servlet?hallticket="+document.getElementById('hallticket').value,true);
			xmlHttp.onreadystatechange = call;
			xmlHttp.send();
		}
	else{
		alert("no xmlHttp created");
	}
	function call()
	{
		if(xmlHttp.readyState==4)
		{
			if(xmlHttp.status==200)
			{
				var json = eval('(' + xmlHttp.responseText +')');
				document.getElementById('regerror2').innerHTML= json.hallticketvalue1;
				document.getElementById('regerror3').value= json.hallticketvalue1;
				
			}
		}
	}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function cheack(){
	cheack2();
	var hallticket=document.getElementById("hallticket").value;
	if(hallticket=="")
	{
		document.getElementById("hidden1").style.visibility='visible';
		return false;
	}
	var college=document.getElementById('college').value;
	var course=document.getElementById('course').value;
	if((college=="0")||(course=="0"))
	{
		document.getElementById("hidden2").style.visibility='visible';
		return false;
	}
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function cheack2(){
	var me=document.getElementById("regerror3").value;
	if(me!="")
	{
		document.getElementById('hallticket').value= "";
		return false;
	}
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function hallticketclear()
{
		document.getElementById('regerror').innerHTML= "";
		document.getElementById("hidden1").style.visibility='hidden';
		document.getElementById('regerror2').innerHTML= "";
		document.getElementById('regerror3').value="";
		return false;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
function optioncheack(){
	document.getElementById("hidden2").style.visibility='hidden';
	return false;
}
////////////////////////////////////////////////////////////////////////////////////////////////

























