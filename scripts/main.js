const form = document.getElementById("form");
form.addEventListener("submit", onSubmit)

function onSubmit(e) {
    e.preventDefault();

    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
       
    const subsField = document.querySelector('input[type = "radio"]:checked');  //To check that something has been checked
    
    const msg = document.getElementById("message");

    console.log()


    if (nameField.value === "" || emailField.value === "" || subsField === null) {
        msg.textContent = "Please complete all required fields";
        msg.setAttribute("class", "alert alert-warning");
        

        
    } else if (/(\w+?@\w+?\x2E.+)/.test(emailField.value) !== true) {
        msg.textContent = "Please enter a valid email address";
        msg.setAttribute("class", "alert alert-warning");
    
    }else {
        msg.textContent = "Subscription successful!";
        msg.setAttribute("class", "alert alert-success");

        let subscriberData = JSON.parse(localStorage.getItem("Subscriptions")) || [];
             
        const userName = nameField.value;
        const userEmail = emailField.value;
        const userSub = subsField.value;

        let userInterest = [];
        const checklist = document.querySelectorAll(('input[type = "checkbox"][name = "interests"]'))
        
        //Find checked items: 
                for (let i = 0; i < checklist.length; i++) {
          if(checklist[i].checked) {
            userInterest.push(checklist[i].value);   //Make sure your checklist items have VALUE attribute, otherwise array says "on", "on"
          }
        }
        console.log(userInterest);

        const dataObject = {userName, userEmail, userSub, userInterest};

        subscriberData.push(dataObject);
        localStorage.setItem("Subscriptions", (JSON.stringify(subscriberData)));

        setTimeout(function() {
            window.location.href = "./pages/subscribers.html"
        }, 3000)

    } 

    setTimeout(function() {
    msg.textContent = "";
    msg.removeAttribute("class")
    }, 3000)
}
