console.log('Its working')
// function send() {
// 	console.log('atif i s the bers')
//     // $('#submit-button').click(function() {
//     //     $('#contact-form').attr('action',
//     //                    'mailto:atifreyazkhan@gmail.com?subject=' +
//     //                    $('#subject').val() + '&body=' + $('#message').val());
//     //     $('#contact-form').submit();

//     // });
// }
let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}

    var form = document.getElementById("contact-form");

    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)


	function validate(){
		var name = document.getElementById("name").value;
		var subject = document.getElementById("subject").value;
	
		var email = document.getElementById("email").value;
		var message = document.getElementById("message").value;
		var error_message = document.getElementById("error_message");

		error_message.style.padding = "10px";
	
		
		var text;
		if(name.length < 5){
		  text = "Please Enter valid Name";
		  error_message.innerHTML = text;
		  return false;
		}
		if(subject.length < 10){
		  text = "Please Enter Correct Subject";
		  error_message.innerHTML = text;
		  return false;
		}
		if(isNaN(phone) || phone.length != 10){
		  text = "Please Enter valid Phone Number";
		  error_message.innerHTML = text;
		  return false;
		}
		if(email.indexOf("@") == -1 || email.length < 6){
		  text = "Please Enter valid Email";
		  error_message.innerHTML = text;
		  return false;
		}
		if(message.length <= 140){
		  text = "Please Enter More Than 140 Characters";
		  error_message.innerHTML = text;
		  return false;
		}
		alert("Form Submitted Successfully!");
		return true;
	  }	