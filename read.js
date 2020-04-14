
function Hello() {
    fetch('http://127.0.0.1:8080/degree')
      .then((response) => {
        return response.json();
        

      })
      .then((data) => {
        console.log(data);
        console.log(data.length);
        document.getElementById("app").innerHTML = `<h2 class="app-title"> Degrees (${data.length} results)<h2>
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
    function Hello2(val) {
      fetch('http://127.0.0.1:8080/course?degreeName='+val)
        .then((response) => {
          return response.json();
          
  
        })
        .then((data) => {
          console.log(data);
          console.log(data.length);
          document.getElementById("app").innerHTML = `<h2 class="app-title"> Courses (${data.length} results)<h2>
          ${data.map(function(pet){
           return `
           <div class="animal">
           <img class="pet-photo" src="https://www.binaryit.com.au/wp-content/uploads/2018/01/best-laptop-for-students.jpg">
           <h2 class="pet-name">  <a> <button value = ${pet.courseName} onclick = "Hello3(this.value,${pet.degreeID})">${pet.courseName}</button> </a>
           </h2> 
           </div>
           `    
          }).join('')}
               `
        });
        
  
      }
      function Hello3(val,degid) {
        fetch('http://127.0.0.1:8080/question?courseName='+val+'&degreeID='+degid)
          .then((response) => {
            return response.json();
            
    
          })
          .then((data) => {
            console.log(data);
            console.log(data.length);
            document.getElementById("app").innerHTML = `<h2 class="app-title"> question (${data.length} results)<h2>
            ${data.map(function(pet){
             return `
             <div class="animal">
             <img class="pet-photo" src="data:image/jpg;base64,${pet.imgPath}" alt="Red dot">
             <h2 class="pet-name">  <a> <button id=${pet.idquestions} value = ${pet.name} onclick = "Hello4(this.id)">${pet.name}</button> </a>
             </h2> 
             </div>
             `    
            }).join('')}
            <div>
    
        <form action="javascript:hello6((subject.value),${data[0].idCourse},5,(b64.innerHTML),(b65.innerHTML))" enctype="multipart/form-data" >
      
       
 
           <p id="b64" > </p>
           <p id="b65" > </p>
          <label for="subject" class="pet-photo4">Write comment</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style="width:400px" class="textarea2"></textarea>

          <label for="myfile">Select a file:</label>
          <input type="file" id="myfile" name="myfile" onchange="javascript:test(myfile.files[0])">
                  
          <input type="submit" value="submit" class="pet-photo4">
      
        </form>
        
      </div>
                 `
          });
          
        }
         // <img class="pet-photo" src="data:image/jpg;base64,${pet.imgPath}" alt="Red dot">
          //                 <a href="data:image/jpg;base64,${pet.imgPath}" alt="Red dot"><img class="lower" src="data:image/jpg;base64,${pet.imgPath}" alt="Red dot"></a>
          function Hello4(val) {
            fetch('http://127.0.0.1:8080/comments?idquestions='+val)
              .then((response) => {
                return response.json();
                
        
              })
              .then((data) => {
                console.log(data);
                console.log(data.length);
                //document.getElementById("app").innerHTML = `<img class="pet-photo" src="data:image/jpg;base64,${data[0].imgPath}" alt="Red dot">`    <br />

                document.getElementById("app").innerHTML = `<h2 class="app-title"> comments  (${data.length} results)  <br />  <img class="pet-photo2" src="data:image/jpg;base64,${data[0].imgPath}"  alt="Red dot"> <h2> <br />
               
                
                ${data.map(function(pet){
                  
                 return `
                 <head>
                 <link rel = "stylesheet" href="question_css.css">
                 <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
                 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
             </head>
                 <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

                 <div class="container">
                
                 
                 <div class="card">
                     <div class="card-body">
                         <div class="row">
                             <div class="col-md-2">
                                 <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid"/>
                                 <p class="text-secondary text-center">15 Minutes Ago</p>
                             </div>
                             <div class="col-md-10">
                                 <p>
                                     <a class="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong> ${pet.name}</strong></a>
                                     <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                                     <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                                     <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                                     <span class="float-right"><i class="text-warning fa fa-star"></i></span>
             
                                </p>
                                <div class="clearfix"></div>
                                 <p>${pet.txt}</p>
                                 <p> <img class="pet-photo" src="data:image/jpg;base64,${pet.imgPath}" alt="Red dot"></p>
                                 <p>
                                     <a class="float-right btn btn-outline-primary ml-2"> <i class="fa fa-reply"></i> Reply</a>
                                     <a class="float-right btn text-white btn-danger"> <i class="fa fa-heart"></i> Like</a>
                                </p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
                 `    
                }).join('')}
                    <div>       

                    <form action="javascript:hello5(${data[0].idquestions},(subject.value),${data[0].idCourse},5,(b64.innerHTML),(b65.innerHTML))" enctype="multipart/form-data" >
      
       
 
                    <p id="b64" > </p>
                    <p id="b65" > </p>
                   <label for="subject" class="pet-photo4">Write comment</label>
                   <textarea id="subject" name="subject" placeholder="Write something.." style="width:400px" class="textarea2"></textarea>
         
                   <label for="myfile">Select a file:</label>
                   <input type="file" id="myfile" name="myfile" onchange="javascript:test(myfile.files[0])">
                           
                   <input type="submit" value="submit" class="pet-photo4">
               
                 </form>
        
      </div>
                     `
 
              });
  
    
        }

        function hello5(id,txt,idCourse,name,file2,file3)
        {
          console.log(file2);

          fetch('http://127.0.0.1:8080/addcomment?idquestions='+id+'&txt='+txt+'&idCourse='+idCourse+'&name='+name+'&file='+file2+'&file2='+file3)
              .then((response) => {
                return response.json();
                
        
              })
              .then((data) => {
                console.log(data);
                console.log(data.length);
                //document.getElementById("app").innerHTML = `<img class="pet-photo" src="data:image/jpg;base64,${data[0].imgPath}" alt="Red dot">`    <br />

                document.getElementById("app").innerHTML = `<h2 class="app-title"> comments  (${data.length} results)  <br />  <img class="pet-photo2" src="data:image/jpg;base64,${data[0].imgPath}"  alt="Red dot"> <h2> <br />
               
                
                ${data.map(function(pet){
                  
                 return `
                 <head>
                 <link rel = "stylesheet" href="question_css.css">
                 <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
                 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
                 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
             </head>
                 <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

                 <div class="container">
                
                 
                 <div class="card">
                     <div class="card-body">
                         <div class="row">
                             <div class="col-md-2">
                                 <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid"/>
                                 <p class="text-secondary text-center">15 Minutes Ago</p>
                             </div>
                             <div class="col-md-10">
                                 <p>
                                     <a class="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong> ${pet.name}</strong></a>
                                     <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                                     <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                                     <span class="float-right"><i class="text-warning fa fa-star"></i></span>
                                     <span class="float-right"><i class="text-warning fa fa-star"></i></span>
             
                                </p>
                                <div class="clearfix"></div>
                                 <p>${pet.txt}</p>
                                 <p> <img class="pet-photo" src="data:image/jpg;base64,${pet.imgPath}" alt="Red dot"></p>
                                 <p>
                                     <a class="float-right btn btn-outline-primary ml-2"> <i class="fa fa-reply"></i> Reply</a>
                                     <a class="float-right btn text-white btn-danger"> <i class="fa fa-heart"></i> Like</a>
                                </p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
                 `    
                }).join('')}
                    <div>
    
        <form action="javascript:hello5(${data[0].idquestions},(subject.value),${data[0].idCourse},5,(b64.innerHTML),(b65.innerHTML))" enctype="multipart/form-data" >
      
       
 
           <p id="b64" > </p>
           <p id="b65" > </p>
          <label for="subject" class="pet-photo4">Write comment</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style="width:400px" class="textarea2"></textarea>

          <label for="myfile">Select a file:</label>
          <input type="file" id="myfile" name="myfile" onchange="javascript:test(myfile.files[0])">
                  
          <input type="submit" value="submit" class="pet-photo4">
      
        </form>
        
      </div>
                     `
 
              });
        }

        function test(fil)
    {
        var FR = new FileReader();
        FR.addEventListener("load",function(e)
        {
            var str = e.target.result;
            const words = str.split(';');
            document.getElementById("b64").innerHTML = words[0];
            document.getElementById("b65").innerHTML = words[1];
        });
        FR.readAsDataURL(fil);
    }
  
function hello6(txt,idCourse,name,file2,file3)
{
  fetch('http://127.0.0.1:8080/addquestion?courseName='+val+'&degreeID='+degid)
          .then((response) => {
            return response.json();
            
    
          })
          .then((data) => {
            console.log(data);
            console.log(data.length);
            document.getElementById("app").innerHTML = `<h2 class="app-title"> question (${data.length} results)<h2>
            ${data.map(function(pet){
             return `
             <div class="animal">
             <img class="pet-photo" src="data:image/jpg;base64,${pet.imgPath}" alt="Red dot">
             <h2 class="pet-name">  <a> <button id=${pet.idquestions} value = ${pet.name} onclick = "Hello4(this.id)">${pet.name}</button> </a>
             </h2> 
             </div>
             `    
            }).join('')}
            <div>
    
        <form action="javascript:hello6((subject.value),${data[0].idCourse},5,(b64.innerHTML),(b65.innerHTML))" enctype="multipart/form-data" >
      
       
 
           <p id="b64" > </p>
           <p id="b65" > </p>
          <label for="subject" class="pet-photo4">Write comment</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style="width:400px" class="textarea2"></textarea>

          <label for="myfile">Select a file:</label>
          <input type="file" id="myfile" name="myfile" onchange="javascript:test(myfile.files[0])">
                  
          <input type="submit" value="submit" class="pet-photo4">
      
        </form>
        
      </div>
                 `
          });
}