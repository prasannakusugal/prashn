let divcount=1;
let dcount=0;
let i,rmbutton=document.querySelectorAll(".btn");
for (i=0;i<rmbutton.length;i++){
	if (rmbutton[i].className==="btn btn-primary remove") 
	rmbutton[i].style.display="none";
}
if (document.getElementById("choice").innerHTML==="create")
		create();
	else
		res();
console.log(document.getElementById("choice").innerHTML);
function answer(id,op) {
	// body...
	//alert(id);
	//alert(op);
////console.log(document.getElementById(id+'rans'))
////console.log(document.getElementsByName(id+'ans')[op]);
let s=document.getElementById("div"+id+"s1");
	
				if(s.value==="Objective/MCQ"){
				//id=100;
					/*	let x=id,k=1;
						for (let i = 1;  x>=10 ; i++) {
							x=x/10;
						k*=10;
						}
					let q=(op*k*10)+id;*/
				////console.log(q+'q',id);
		document.getElementById(id+'rans').value="Option "+op;						
				}

				if(s.value==="True or False"){
	if(op===0)
		document.getElementById(id+'rans').value="True";
		else
		document.getElementById(id+'rans').value="False";
}
}
function dis(id){
	let val=document.getElementById('fb'+id);
	
	for (let i = 1; i < divcount; i++) 
	{
		document.getElementById('fb'+i).style.display="none";
	}
		val.style.display="flex";

}
function create() {
	let div = document.createElement("div");
	let id="div"+divcount;

		let   an='<div class="input-group mb-3" style="width: 70%;margin-left: 10px;font-size:15px;margin-top:10px;"><div class="input-group-prepend">    <button  style="font-size:15px;" class="btn btn-info" >Answer :</button></div> <input type="text" class="form-control" value="Select Answer" name="'+divcount+'rans" id="'+divcount+'rans" style="font-size:15px;" aria-label="" aria-describedby="basic-addon1"  readonly></div>';
				

	let ss='<button type="button" class="btn btn-warning" style="font-size: 15px">Type:<select class="btn btn-danger" id="div'+divcount+'s1" onchange="change('+divcount+')" style="font-size: 15px" >				<!--	<option>Short Answer</option>			-->	<option>True or False</option><option>Objective/MCQ</option></select></button>';
				let b='<div class="question"><h6 id="'+divcount+'h6">'+divcount+')</h6><textarea rows="1" placeholder="Question " id="'+divcount+'q" onkeydown="autosize('+divcount+')" required></textarea></div><div class="sh-ans" id="div'+divcount+'type"><label name="div'+divcount+'ans">Short Answer </label></div>'+an+'<div id="fb'+divcount+'" class="flex-box">'+ss+'<button type="button" class="btn btn-primary remove"  style="width: 10%;display:none;font-size: 15px" id="'+divcount+'rm" onclick="remove('+divcount+')"  >Remove</button></div>';
				//<button type="button" class="btn btn-primary" style="width: 10%;" onclick="create()" id="1">Create</button>
				/* we can add up button in future <button type="button" class="btn btn-primary" style="width: 10%;" id="'+divcount+'up" onclick="up('+divcount+')">UP</button>*/			
	div.className="form sh";
	div.id=id;
	divcount++;
	dcount++;
//	div.style= 	" 	border: 1px solid black;margin: 0 auto;	width: 90%;	margin-bottom: 20px;	display: flex;	flex-wrap: wrap;	flex-direction: column;	justify-content: space-around;	padding: 10px;";

	//div.appendChild(button);
	let adq=document.getElementById("1");
	adq.remove();
	let sub=document.getElementById("1s");
	sub.remove();
	//		let error=document.getElementById("error");
	//error.remove();
	document.getElementById('form').appendChild(div);
                                    
	document.getElementById('form').appendChild(adq);
	document.getElementById('form').appendChild(sub);
	//document.getElementById('form').appendChild(error);
	
	div.innerHTML=b;
	if(dcount>1){
	rmbutton=document.querySelectorAll(".btn");
	for (i=0;i<rmbutton.length;i++){
	if (rmbutton[i].className==="btn btn-primary remove") 
	rmbutton[i].style.display="block";
}
}	
	//div.onclick=function onclick(event) {dis(divcount-1);};
	//div.onmouseout=function onmouseout(event){dis(divcount-1,0);};

	////console.log(div,id);
	change(divcount-1);
}

function sub() {
	let details={};
	if (document.getElementById("title").value== "") {
		document.getElementById("title").focus();
		return(false);
	}
	details["title"]=document.getElementById("title").value;
	for (let i = 1; i <=dcount ; i++) {
		let div=document.getElementById("div"+i);
		
		console.log(div.className);
		if (div.className==="form tf") {
			if (document.getElementById(i+"q").value=="") {
				document.getElementById(i+"q").focus();
				return(false);
			}
			else if (document.getElementById(i+"rans").value=="Select Answer") {
				document.getElementById(i+"rans").focus();
				document.getElementById("1234").innerHTML="Please Select "+i+" Answer !!!";

				return(false);
			}
			else{
			let k={
				"id":i,
				"type":"tf",
				"question":document.getElementById(i+"q").value,
				"answer":document.getElementById(i+"rans").value
			}
				console.log(k);
				details[i]=k;
				console.log(details);	

			}		}

		if (div.className==="form mcq") {
				//alert("d");
		if (document.getElementById(i+"q").value=="") {
				document.getElementById(i+"q").focus();
				return(false);
			}
			else if (document.getElementById(i+"rans").value=="Select Answer") {
				document.getElementById(i+"rans").focus();
				document.getElementById("1234").innerHTML="Please Select "+i+" Answer !!!";

				return(false);
			}

			else {
			let o_no=document.getElementById(i+"a").className.split("=")[1];
			let options={};
			console.log(o_no);
			for (let l = 1; l <= o_no; l++) {
				let id=l+" "+i;
				id=id.split(" ");
				id=id[0]+id[1]+"q";
				console.log(id);

				if(document.getElementById(id).value==""){
					document.getElementById(id).focus();
			
				}
				else{
					options[l]=document.getElementById(id).value;
				}
			}
			let k={
				"id":i,
				"type":"mcq",
				"question":document.getElementById(i+"q").value,
				"answer":document.getElementById(i+"rans").value.split(" ")[1],
				"options":options
	}
			
				console.log(k);
				details[i]=k;
				console.log(details);
				res(details);
	

			}
			}
			}
document.getElementById("1234").innerHTML="";

document.getElementById("details").value=JSON.stringify(details);;
return(true);
}
function dividreset(no,up) {
	// body...
	let flag=0;
	let a,b;
	if(up==true){
		flag=1;
	}

	
		let div=document.querySelectorAll(".form");
		for (let i = 0; i < div.length; i++) {
			////console.log(div[i].id.split("v")[1]);
			let id=div[i].id.split("v")[1];
			let newid=id-1;
			let condition;
			

			if(flag==0){
			if(id>no)
				condition=true;
			else
				condition=false;	
			}
			else{
			if(id==no){
				condition=true;
			
				//console.log("2");
			}
			else if(id==(no-1)){
				newid=id;
				newid++;
				//console.log("1");

				condition=true;	
			}
			}
			if(condition){
				//console.log(newid);
				if (flag==0) {
				div[i].id="div"+(newid);
				}
				document.getElementById((id)+"h6").innerHTML=(newid)+")";
				////console.log(document.getElementById(id+"h6"));//change question Number
				document.getElementById(id+"h6").id=(newid)+"h6";
				document.getElementById(id+"q").onkeydown=function onkeydown(event){autosize(id);};

				document.getElementById(id+"q").id=(newid)+"q";
			
				document.getElementById(id+"rm").onclick=function onclick(event){ remove(newid);};
				document.getElementById(id+"rm").id=(newid)+"rm";
				////console.log(document.getElementById((newid)+"rm").onclick);
				document.getElementById("div"+id+"type").id="div"+(newid)+"type";
				
				let s=document.getElementById("div"+id+"s1");
				s.onchange=function onchange(event){change((newid))};
				s.id="div"+(newid)+"s1";
				document.getElementById(id+'rans').name=newid+'rans';
				document.getElementById(id+'rans').id=newid+'rans';


				
				if(s.value==="True or False"){
				let t=document.getElementsByName(id+"ans")[0];
				let f=document.getElementsByName(id+"ans")[1];
				t.name=newid+"ans";
				f.name=newid+"ans";
				t.id=newid+"true";
				f.id=newid+"false";
				t.onclick=function onclick(event){answer(newid,0)};				
				f.onclick=function onclick(event){answer(newid,1)};				

				}
				if(s.value==="Objective/MCQ"){
					//alert("mcq");//id="'+i+'a" onclick="addoption('+i+')
					let addopbtn=document.getElementById(id+"a");
					addopbtn.id=(newid)+"a";
					addopbtn.onclick=function onclick(event){ addoption(newid);};
					document.getElementById(id+"option").id=(newid)+"option";
						let Things=document.querySelectorAll(".dio");
						let count=1;
						//console.log(Things);
						for (let l = 0; l < Things.length; l++) {
							if(Things[l].className==="dio "+id+"_"+count){
								let ss=count;
								Things[l].onclick=function onclick(event){answer(newid,ss)};
								//console.log(newid,count);
								Things[l].name=newid+"op";				
								Things[l].className="dio "+newid+"_"+count;
								count++;
							}
						}
						let opt=document.querySelectorAll(".optiondiv");
						for (let j = 0; j < opt.length; j++) {
						if(opt[j].className==="optiondiv "+id)
						{		let op=opt[j].id.split("q")[0];
						let newop=op-1;
						if(id==(no-1) && flag==1){
							newid=id+1;
							}

		//						//console.log(id,opt[j]);
							 
							//	//console.log(op);
							
								opt[j].id=(newop)+"qdiv";
								opt[j].className="optiondiv "+(newid);
								let p=document.getElementById(op+"q");
									
								p.onkeydown=function onkeydown(event){autosize(newop);};
								////console.log(newid);
								p.id=newop+"q";

								p=document.getElementById(op+"s");
								p.className="close "+(newid);
								p.onclick=function onclick(event){removeoption(newop,newid);};
								p.id=newop+"s";

								
							
						}		
					}


				}

			}
		//	//console.log(opt[i].id.split("v")[1]);
			
	
		}


}
function remove(id) {
	// body...
	//let div=document.getElementById(i);

	//s//console.log(id);
	divcount--;
	dcount--;
	////console.log(dcount);
	//document.getElementById('home').removeChild(id);
if(dcount===1){
	rmbutton=document.querySelectorAll(".btn");
	for (i=0;i<rmbutton.length;i++){
		////console.log(rmbutton[i]);
	if (rmbutton[i].className==="btn btn-primary remove") 
	rmbutton[i].style.display="none";

}

}
let j= id;
id=document.getElementById("div"+id);
id.remove();	
dividreset(j,false);// div count reset function
////console.log(divcount);
}




function change(id,flag=0) {
	// body..div1,div1type,div1s1
	//console.log(id);
let	div=document.getElementById("div"+id);
let pid=document.getElementById("div"+id+"type");
let	sid=document.getElementById("div"+id+"s1");
if(sid.value==="Long Answer"){
addlonganswer(div,pid,sid);
}
else if(sid.value==="Short Answer")
{
addshortanswer(div,pid,sid);
}
else if (sid.value==="True or False") {
 addtorf(div,pid,sid,id) ;
}
else {
	addmcq(div,pid,sid,id);
}
if(flag==0)
	document.getElementById(id+'rans').value="Select Answer";						

}
function addmcq(div,pid,sid,i) {
	// body...

	div.className="form mcq";
	pid.className="MCQ";
	
	pid.innerHTML='<div id="'+i+'option" >				<div id="1'+i+'qdiv" class="optiondiv '+i+'">				<input type="radio" id="1'+i+'op" name="'+i+'op" value="true" onclick="answer('+i+',1)" class="dio '+i+'_1" >				<textarea rows="1" placeholder="Option 1" id="1'+i+'q" onkeydown="autosize(1'+i+')" required></textarea>				<span  class="close '+i+'" id="1'+i+'s" title="Remove Option" onclick="removeoption(1'+i+','+i+')" >&times;</span>			</div>				</div>				<button type="button" class="btn btn-warning op=1" style="width: 50%; align-self: center;font-size: 15px" id="'+i+'a" onclick="addoption('+i+')">Add Option</button>';
	
	{
			let j=i, div=document.querySelectorAll(".close");
		for (let i = 0; i < div.length; i++) {
				if(div[i].className==="close "+j)
				{
					div[i].style.display="none";
				}
			}
	}
}
function addshortanswer(div,pid,sid) {
		
	//alert(div.className);
	div.className="form sh";
	pid.className="sh-ans";
	pid.innerHTML='<label name="'+div.id+'ans">Short Answer </label>';
	
}

function addtorf(div,pid,sid,id) {
	
//	//console.log(div.id);
	
	div.className="form tf";
	pid.className="true_false";
	pid.innerHTML=	'	<div><input type="radio"  name="'+id+'ans" value=Ttrue" id="'+id+'true"  onclick="answer('+id+',0)"><label>True</label></div><div><input type="radio"  name="'+id+'ans" value="False" id="'+id+'false"  onclick="answer('+id+',1)"><label>False</label></div>';

}

function addlonganswer(div,pid,sid) {
	// body...
	////console.log(div.id);

	div.className="form lg";
	pid.className="lg-ans";
	pid.innerHTML='<label name="'+div.id+'ans">Long Answer </label>'
}


function autosize(el){
	el=document.getElementById(el+"q");
  setTimeout(function(){
   
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
 	if(el.scrollHeight<22)
 		el.style.cssText='height:' + 22 + 'px';

  },0);
}

function addoption(id) {
	// body... last op id will b sent as optioncountdiv
	let add= document.getElementById(id+"a");
	let opcnt=add.className.split("=")[1];
	opcnt++;
	add.className="btn btn-warning op="+opcnt;
	let div = document.createElement("div");
	let con='<div id="'+opcnt+id+'qdiv" class="optiondiv '+id+'" ><input type="radio" id="'+opcnt+id+'op" name="'+id+'op" value="true" class="dio '+id+'_'+opcnt+'" onclick="answer('+id+','+opcnt+')" ><textarea rows="1" placeholder="Option '+opcnt+'" id="'+opcnt+id+'q" onkeydown="autosize('+opcnt+id+')" required></textarea><span  class="close '+id+'" id="'+opcnt+id+'s" title="Remove Option" onclick="removeoption('+opcnt+id+','+id+')" >&times;</span></div>';
	div.innerHTML=con;
	document.getElementById(id+'option').appendChild(div);
	{
			let div=document.querySelectorAll(".close");
		for (let i = 0; i < div.length; i++) {
				if(div[i].className==="close "+id)
				{
					div[i].style.display="block";
				}
			}
	}

}
function resetop(ar,id,newid) {
	// body...

	let div=document.querySelectorAll(".optiondiv");
		for (let i = 0; i < div.length; i++) {
				if(div[i].className==="optiondiv "+id)
				{		let op=div[i].id.split("q")[0];
					if (ar<op) {
					//	//console.log(div[i]);
					//	//console.log(op.split(""));
							let len=op.split("").length;
						let d_id=op.split("")[len-1];
						let op_id=0;
						/*let radio=(op)=>{

						};*/
						div[i].id=(op-10)+"qdiv";
						let p=document.getElementById(op+"q");
						let k=(op-10)/10;
						k=k.toString();
						k=k.split(".")[0];
						p.placeholder="Option "+k;
						p.onkeydown=function onkeydown(event){autosize(op-10);};
						p.id=op-10+"q";
						p=document.getElementById(op+"s");
						p.onclick=function onclick(event){removeoption(op-10,id);};
						p.id=op-10+"s";
						
					}
				}		
			}

			let Things=document.querySelectorAll(".dio");
						let count=1;
						////console.log(Things);
						for (let l = 0; l < Things.length; l++) {
							let kkk=Things[l].className.split("count")[0];
								kkk=kkk.split(" ")[1]
								kkk=kkk.split("_");
							let	d_id=kkk[1]+kkk[0];
							////console.log(kkk);
							////console.log(ar);
							if(d_id>ar){				
								Things[l].className="dio "+kkk[0]+"_"+(kkk[1]-1);
								Things[l].onclick=function onclick(event){answer(kkk[0],(kkk[1]-1))};
								}

						}


		

}
function removeoption(ar,id) {
	// body...
	let op=document.getElementById(ar+"qdiv");
	op.remove();
	let pk=ar.toString();
	////console.log(pk.split(id)[0],document.getElementById(id+'rans').value.split(" ")[1]);
	let hp=(document.getElementById(id+'rans').value.split(" ")[1])+id.toString();
	console.log(hp);
	console.log(pk);
	if(pk<hp && document.getElementById(id+'rans').value !="Select Answer" )
	document.getElementById(id+'rans').value="Option "+((document.getElementById(id+'rans').value.split(" ")[1])-1);	


	if(pk==hp)
	document.getElementById(id+'rans').value="Select Answer";						
	
	let add= document.getElementById(id+"a");
	let opcnt=add.className.split("=")[1];
	opcnt--;
	add.className="btn btn-warning op="+opcnt;
	resetop(ar,id);
	if(opcnt==1){
			let div=document.querySelectorAll(".close");
		for (let i = 0; i < div.length; i++) {
				if(div[i].className==="close "+id)
				{
					div[i].style.display="none";
				}
			}
	}
}
let details={
	1:{
	answer: "False",
	id: 1,
	question: "Car is faster than Aeroplane ?",
	type: "tf"
	},
	2:
	{
		answer: "3",
	id: 2,
	options:{
	1: "Codebloacks",
	2: "vs code",
	3: "aurdino ide",},
	question: "Node Mcu is programmed using ?",
	type: "mcq"
	},
	3:{
	answer: "1",
	id: 3,
	options:{
	1: "RAM",
	2: "ROM",},
	question: "Which is main memory ?",
	type: "mcq"
	},
	title: "First Question Paper"
	};
//	renderform();
	function renderform() {
			// body...
			let len=Object.keys(details).length;
			
			document.getElementById('title').innerHTML= details["title"];
			for (var i = 1; i < len; i++) {
				//console.log(details[i]);
				let ob=details[i];
			
	
					let div = document.createElement("div");
						let id="div"+ob["id"];
							let ss='<button type="button" class="btn btn-warning" style="font-size: 15px">Type:<select class="btn btn-danger" id="div'+ob["id"]+'s1" onchange="change('+ob["id"]+')" style="font-size: 15px" >				<!--	<option>Short Answer</option>			-->	<option>True or False</option><option>Objective/MCQ</option></select></button>';
							let an='<div class="input-group mb-3" style="width: 70%;margin-left: 10px;font-size:15px;margin-top:10px;"><div class="input-group-prepend">    <button  style="font-size:15px;" class="btn btn-info" >Answer :</button></div> <input type="text" class="form-control"  name="'+ob["id"]+'rans" id="'+ob["id"]+'rans" style="font-size:15px;" aria-label="" aria-describedby="basic-addon1" value="'+ob["answer"]+'" readonly></div>';
		
					div.className="form tf";
				
				
			 if (ob["type"]=="mcq") {
					{
		 ss='<button type="button" class="btn btn-warning" style="font-size: 15px">Type:<select class="btn btn-danger" id="div'+ob["id"]+'s1" onchange="change('+ob["id"]+')" style="font-size: 15px" >				<!--	<option>Short Answer</option>			-->	<option>Objective/MCQ</option><option>True or False</option></select></button>';
		  an='<div class="input-group mb-3" style="width: 70%;margin-left: 10px;font-size:15px;margin-top:10px;"><div class="input-group-prepend">    <button  style="font-size:15px;" class="btn btn-info" >Answer :</button></div> <input type="text" class="form-control"  name="'+ob["id"]+'rans" id="'+ob["id"]+'rans" style="font-size:15px;" aria-label="" aria-describedby="basic-addon1" value="Option '+ob["answer"]+'" readonly></div>';
		
					}
				}
	
		
					let b='<div class="question"><h6 id="'+ob["id"]+'h6">'+ob["id"]+')</h6><textarea rows="1" placeholder="Question " id="'+ob["id"]+'q" onkeydown="autosize('+ob["id"]+')" required>'+ob["question"]+'</textarea></div><div class="sh-ans" id="div'+ob["id"]+'type"></div>'+an+'<div id="fb'+ob["id"]+'" class="flex-box">'+ss+'<button type="button" class="btn btn-primary remove"  style="width: 10%;display:none;font-size: 15px" id="'+ob["id"]+'rm" onclick="remove('+ob["id"]+')"  >Remove</button></div>';
		div.className="form tf";
		div.id=id;
		divcount++;
		dcount++;
		document.getElementById('form').appendChild(div);
		div.innerHTML=b;
		let adq=document.getElementById("1");
		adq.remove();
		let sub=document.getElementById("1s");
		sub.remove();	
		document.getElementById('form').appendChild(adq);
		document.getElementById('form').appendChild(sub);
		change(divcount-1,flag=1);
		if (ob["type"]=="mcq"){
					let ok=ob["options"];
					let op_len=Object.keys(ok).length;
					document.getElementById("1"+ob["id"]+"q").innerHTML=ok["1"];
		for (let k = 2; k<= op_len; k++) {
						addoption(ob["id"]);
			console.log(k.toString()+ob["id"]+"q");
				
					document.getElementById(k.toString()+ob["id"]+"q").innerHTML=ok[k];
	
					}
					document.getElementById(ob["answer"].toString()+ob["id"]+"op").checked=true;
				}
					else
				if(ob["type"]=="tf") {
					if(ob["answer"]==="True")
						document.getElementById(ob["id"]+"true").checked=true;
					else
						document.getElementById(ob["id"]+"false").checked=true;

				}
	
			}
	
		if(dcount>1){
		rmbutton=document.querySelectorAll(".btn");
		for (i=0;i<rmbutton.length;i++){
		if (rmbutton[i].className==="btn btn-primary remove") 
		rmbutton[i].style.display="block";
	}
	}
	document.getElementById("title").value=details["title"];	
		}
	
		function res(){
			$.ajax({
		url:"/up",
	   
		data:{"lk":0},
		success:function(data)
	   {
		   details=data;
		   
	   renderform();
		console.log(data);
	   }   
	   });
	   
	   }
	//   res();
	
