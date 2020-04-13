
function Hello() {
    var f = false;
    fetch('http://127.0.0.1:8080/degree')
      .then((response) => {
        return response.json();
        

      })
      .then((data) => {
        console.log(data);
        console.log(data.length);
        document.getElementById("app").innerHTML = `<h1 class="app-title"> Degree (${data.length} results)<h1>
        ${data.map(function(pet){
         return `
         <div class="animal">
         <img class="pet-photo" src="${pet.imgsrc}">
         <h2 class="pet-name">  <a> <button value = ${pet.degreeName} onclick = "Hello2(this.value)">${pet.degreeName}</button> </a>
         </h2> 
         </div>
         `    
        }).join('')}
             `
      });
      

    }
    function Hello2(...x) {
        console.log(x);
        alert(x);
        
        }
    
