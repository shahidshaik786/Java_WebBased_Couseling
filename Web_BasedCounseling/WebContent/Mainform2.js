
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
			xmlHttp.open("POST","./Search_Servlet2?hallticket="+document.getElementById('hallticket').value,true);
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
				document.getElementById('amountcatagiry').value= json.catagiry;
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
			xmlHttp.open("POST","./Search_Registration_Servlet?hallticket="+document.getElementById('hallticket').value,true);
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
/////////////////////////////////////////////////////////////////////////////////////////////////
function hallticketclear()
{
		document.getElementById('regerror').innerHTML= "";
		document.getElementById("hidden1").style.visibility='hidden';
		document.getElementById('regerror2').innerHTML= "";
		document.getElementById('regerror3').value="";
		return false;
}
//////////////////////////////////////////////////////////////////////////////////////////////////
function cheack(){
	cheack2();
	var remail=document.getElementById("hallticket").value;
	if(remail=="")
	{
		document.getElementById("hidden1").style.visibility='visible';
		return false;
	}else
		{
		var amount=document.getElementById('amount').value;
		if((amount==""))
		{
			document.getElementById("hidden2").style.visibility='visible';
			return false;
		}
		}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function cheack2(){
	var me=document.getElementById("regerror3").value;
	if(me!="")
	{
		document.getElementById('hallticket').value= "";
		return false;
	}
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function amountcheack(){
	document.getElementById("hidden2").style.visibility='hidden';
	return false;
}
