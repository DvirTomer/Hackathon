
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
         <div id=${pet.degreeName} class="animal" onclick = "Hello2(this.id)">
         <img class="pet-photo" src="${pet.imgsrc}" >
         <h2 class="pet-name">  <p> ${pet.degreeName} </p>
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
           <div id=${pet.courseName} class="animal" onclick = "Hello3(this.id,${pet.degreeID},${pet.idcourse})">
           <img class="pet-photo" src="https://www.binaryit.com.au/wp-content/uploads/2018/01/best-laptop-for-students.jpg">
           <h2 class="pet-name"> <p> ${pet.courseName} </p>
           </h2> 
           </div>
           `    
          }).join('')}
               `
        });
        
  
      }
      function Hello3(val,degid,cid) {
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
             <div id=${pet.idquestions} onclick = "Hello4(this.id)" class="animalques">
             <h2 class="pet-nameques"> </h2> 
             <p>Written By: ${pet.name}  <br /> ${pet.txt}</p>
             <img class="pet-photoques" src="data:image/jpg;base64,${pet.imgPath}" alt="Red dot" onerror="this.style.display='none'" >            
             </div>
             `    
            }).join('')}
            

            <div id="myDIV" class="animalques" >
            <form action="javascript:hello6((subject.value),${cid},(b64.innerHTML),(b65.innerHTML))" enctype="multipart/form-data" >
            
       
 
            <p id="b64" > </p>
            <p id="b65" > </p>
           <label for="subject" class="pet-photo4">Add question</label>
           <textarea class="textarea2" id="subject" name="subject" placeholder="Write something.." style="width:400px" ></textarea>
 
           <label for="myfile">Select a file:</label>
           <input type="file" id="myfile" name="myfile" onchange="javascript:test(myfile.files[0])">
                   
           <input type="submit" value="submit" class="pet-photo4">
       
         </form>
         
             </div>
             
                 ` 
                  hidediv();
          });
         // hidediv();
        //  var x = document.getElementById("myDIV");
        //  console.log(x);
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

                document.getElementById("app").innerHTML = `<h2 class="app-title"> comments  (${data.length} results)  <br />  <img class="pet-photo2" src="data:image/jpg;base64,${data[0].imgPath}"  alt="Red dot" onerror="this.style.display='none'" > <h2> <br />
               
                
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
                                 <p id="timeago" class="text-secondary text-center">${datefunc(pet.date)}</p>
                                 
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
                                 <p> <img class="pet-photo" src="data:image/jpg;base64,${pet.imgPath}" alt="Red dot" onerror="this.style.display='none'" ></p>
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
                <div id="myDIV" class="animal2">

                <form action="javascript:hello5(${data[0].idquestions},(subject.value),${data[0].idCourse},(b64.innerHTML),(b65.innerHTML))" enctype="multipart/form-data" >
      
       
 
                    <p id="b64" > </p>
                    <p id="b65" > </p>
                   <label for="subject" class="pet-photo4">Write comment</label>
                   <textarea id="subject" name="subject" placeholder="Write something.." style="width:400px" class="textarea2"></textarea>
         
                   <label for="myfile" class="pet-photo4">Select a file:</label>
                   <input type="file" id="myfile" name="myfile" onchange="javascript:test(myfile.files[0])">
                           
                   <input type="submit" value="submit" class="pet-photo4">
               
                 </form>
        
             </div>
                     `
                     hidediv();
              });
  
    
        }

        function hello5(id,txt,idCourse,file2,file3)
        {
          console.log(file2);
          const start = Date.now();
        var date = new Date(start);
          var name = sessionStorage.getItem("firstName")+ " " + sessionStorage.getItem("lastName");
          fetch('http://127.0.0.1:8080/addcomment?idquestions='+id+'&txt='+txt+'&idCourse='+idCourse+'&name='+name+'&file='+file2+'&file2='+file3+'&date='+date)
              .then((response) => {
                return response.json();
                
        
              })
              .then((data) => {
                console.log(data);
                console.log(data.length);
                //document.getElementById("app").innerHTML = `<img class="pet-photo" src="data:image/jpg;base64,${data[0].imgPath}" alt="Red dot">`    <br />

                document.getElementById("app").innerHTML = `<h2 class="app-title"> comments  (${data.length} results)  <br />  <img class="pet-photo2" src="data:image/jpg;base64,${data[0].imgPath}"  alt="Red dot" onerror="this.style.display='none'"> <h2> <br />
               
                
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
                                 <p id="timeago" class="text-secondary text-center">${datefunc(pet.date)}</p>
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
                                 <p> <img class="pet-photo" src="data:image/jpg;base64,${pet.imgPath}" alt="Red dot" onerror="this.style.display='none'"></p>
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
                <div id="myDIV" class="animal">
           
                </div>
                    <div>
    
        <form action="javascript:hello5(${data[0].idquestions},(subject.value),${data[0].idCourse},(b64.innerHTML),(b65.innerHTML))" enctype="multipart/form-data" >
      
       
 
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
                    hidediv();
 
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
  
function hello6(txt,idCourse,file2,file3)
{
  var name = sessionStorage.getItem("firstName")+ " " + sessionStorage.getItem("lastName");
  const start = Date.now();
  var date = new Date(start);
  fetch('http://127.0.0.1:8080/addquestion?txt='+txt+'&idCourse='+idCourse+'&name='+name+'&file='+file2+'&file2='+file3+'&date='+date)
          .then((response) => {
            return response.json();
            
    
          })
          .then((data) => {
            console.log(data);
            console.log(data.length);
            document.getElementById("app").innerHTML = `<h2 class="app-title"> question (${data.length} results)<h2>
            ${data.map(function(pet){
             return `
             <div class="animalques">
             <h2 class="pet-nameques">  <a> <button id=${pet.idquestions} value = ${pet.name} onclick = "Hello4(this.id)">${pet.name}</button> </a></h2> 
             <p>${pet.txt}</p>
             <img class="pet-photoques" src="data:image/jpg;base64,${pet.imgPath}" alt="Red dot" onerror="this.style.display='none'">            
             </div>
             `    
            }).join('')}
            <div id="myDIV" class="animalques">
            <form action="javascript:hello6((subject.value),${data[0].idCourse},(b64.innerHTML),(b65.innerHTML))" enctype="multipart/form-data" >
      
       
 
            <p id="b64" > </p>
            <p id="b65" > </p>
           <label for="subject" class="pet-photo4">Add question</label>
           <textarea class="textarea2" id="subject" name="subject" placeholder="Write something.." style="width:400px" ></textarea>
 
           <label for="myfile">Select a file:</label>
           <input type="file" id="myfile" name="myfile" onchange="javascript:test(myfile.files[0])">
                   
           <input type="submit" value="submit" class="pet-photo4">
       
         </form>
         
             </div>

                 `
                 hidediv();
          });
}

function hidediv()
{
            console.log("hm");
            var x = document.getElementById("myDIV");
            if(sessionStorage.getItem("firstName") == null)
            {
              x.style.display = "none";
            }
            else
            {
              x.style.display = "block";
            }
          
}


function datefunc(x)
{
  //console.log("ASDASD");
  var date = timeAgo(x);
  return date;
  
}



const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];


function getFormattedDate(date, prefomattedDate = false, hideYear = false) {
  const day = date.getDate();
  const month = MONTH_NAMES[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    // Adding leading zero to minutes
    minutes = `0${ minutes }`;
  }

  if (prefomattedDate) {
    // Today at 10:20
    // Yesterday at 10:20
    return `${ prefomattedDate } at ${ hours }:${ minutes }`;
  }

  if (hideYear) {
    // 10. January at 10:20
    return `${ day }. ${ month } at ${ hours }:${ minutes }`;
  }

  // 10. January 2017. at 10:20
  return `${ day }. ${ month } ${ year }. at ${ hours }:${ minutes }`;
}


// --- Main function
function timeAgo(dateParam) {
  if (!dateParam) {
    return null;
  }

  const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
  const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
  const today = new Date();
  const yesterday = new Date(today - DAY_IN_MS);
  const seconds = Math.round((today - date) / 1000);
  const minutes = Math.round(seconds / 60);
  const isToday = today.toDateString() === date.toDateString();
  const isYesterday = yesterday.toDateString() === date.toDateString();
  const isThisYear = today.getFullYear() === date.getFullYear();


  if (seconds < 5) {
    return 'now';
  } else if (seconds < 60) {
    return `${ seconds } seconds ago`;
  } else if (seconds < 90) {
    return 'about a minute ago';
  } else if (minutes < 60) {
    return `${ minutes } minutes ago`;
  } else if (isToday) {
    return getFormattedDate(date, 'Today'); // Today at 10:20
  } else if (isYesterday) {
    return getFormattedDate(date, 'Yesterday'); // Yesterday at 10:20
  } else if (isThisYear) {
    return getFormattedDate(date, false, true); // 10. January at 10:20
  }

  return getFormattedDate(date); // 10. January 2017. at 10:20
}