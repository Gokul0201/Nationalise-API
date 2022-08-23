var div= document.createElement("div");
div.innerHTML=`
<h1>nationality</h1>
<input type="text" id="text" placeholder="Enter Name Ex: Praveen..."> </input>
<button type="submit" onclick="foo()" >Search</button>
<div id="container">
<div id="name"></div> 
<div id="country"></div>
 <div id="probability"></div> 
<div id="country1"></div>
 <div id="probability1"></div></div>`
div.style.textAlign="center"
document.body.append(div)

async function foo(){
 try{
    let name= document.getElementById("text").value;
    let res= await fetch(`https://api.nationalize.io/?name=${name}`)
     let res1= await res.json();
     console.log(res1)
     var result=res1.name;
     console.log(result);

     var result1=res1.country[0].country_id;
     var result2=res1.country[0].probability;
     var result3=res1.country[1].country_id; 
     var result4=res1.country[1].probability;
     console.log(result1)
     console.log(result2)
     console.log(result3)
     console.log(result4)
    
     document.getElementById("name").innerText=`Name: ${result}`
     document.getElementById("country").innerText=`Country: ${result1} `
     document.getElementById("probability").innerText=`Probablity: ${result2} `
     document.getElementById("country1").innerText=`Country: ${result3} `
     document.getElementById("probability1").innerText=`Probablity: ${result4} `
    }catch(error){
        console.log(error)
    }
  
}