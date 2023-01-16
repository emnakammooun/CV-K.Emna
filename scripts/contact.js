function sendMail(){
        var params ={
            name: document.getElementById("name").value,
            email: document.getElementById ("email").value,
            message: document.getElementById ("message").value
        };
   
   const serviceID = "service_nbrnluh";
   const templateID ="template_e9fs66d"
   emailjs.send(serviceID,templateID,params)
   .then(
        res => {
            document.getElementById("name").value=="";
            document.getElementById("email").value=="";
            document.getElementById("message").value=="";
            console.log(res);
            alert ("your message sent sucessfully");
        }
   )
   .catch((err)=>console.log(err));
    } 