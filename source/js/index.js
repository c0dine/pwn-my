var headerTapCounter = 0;

currentFirmware = function (userAgent) {
	return userAgent.match(/\OS (.*?)\ like/)[1].replaceAll("_", ".");
};

function EasterEgg() {
	headerTapCounter++;
	if (headerTapCounter == 10) {
		$('section.header .title h1').html('Mantisus')
		$('body').removeClass('default').addClass('sus')
	}
}


async function pwnMe() { 
	if (location.protocol === "https:") {
	  if (
		navigator.userAgent.includes("iPhone") ||
		navigator.userAgent.includes("iPad")
	  ) {
		if (navigator.userAgent.includes("Macintosh")) {
		  alert("MacOS is not supported");
		  return;
		}
		
		if (currentFirmware(navigator.userAgent).startsWith("14.5")) {
		  socket.emit("log_normal", "Starting exploitation for iOS 14.5");
		  await kickstart145();
		  return;
		}
		
		if (currentFirmware(navigator.userAgent).startsWith("14.6")) {
		  socket.emit("log_normal", "Starting exploitation for iOS 14.6");
		  var iframe = document.createElement("iframe");
		  iframe.style.display = "none";
		  iframe.src = "./pwn_14.6.html";
		  document.body.appendChild(iframe);
		  return;
		}
	  } else {
		alert("Detected a unsupported version/device");
		socket.emit("error", "Detected a unsupported version/device");
		return;
	  }
	} else {
	  document.getElementById("jbButton").disabled = true;
	  alert("exploitation only works over https");
	}
};

if 
(
  navigator.userAgent.includes("iPhone") ||
  navigator.userAgent.includes("iPad")
) {  
  if (currentFirmware(navigator.userAgent).startsWith("14.5")) {
	console.log("Starting exploitation for iOS 14.5");
	$('section.info .comp .content').html('Your iPhone on iOS 14.5 is compatible with Manticore')
  }
  
  if (currentFirmware(navigator.userAgent).startsWith("14.6")) {
	console.log("Starting exploitation for iOS 14.6");
	$('section.info .comp .content').html('Your iPhone on iOS 14.6 is comaptible with Manticore')
  }
} else {
  console.log("error", "Detected a unsupported version/device");
  $('section.info .comp .content').html('Cannot detect device/version.')
};

if (navigator.userAgent.includes("Windows")) {
	console.log("Windows is not supported");
	$('section.info .comp .content').html('You are using Windows you idiot, what are you doing.')
}

const appHeight = () => {
	const doc = document.documentElement;
	doc.style.setProperty("--app-height", `${window.innerHeight}px`);
	doc.style.setProperty("--app-height-neg", `-${window.innerHeight}px`);
	doc.style.setProperty("--app-width", `${window.innerWidth}px`);
};

window.addEventListener("resize", appHeight);
appHeight();

// window.onload = () => {
//	//force redirect to https
//	if (window.location.protocol !== "https:") {
//		window.location.protocol = "https:";
//	}
// }

$(document).ready(function() {

	console.log("document loaded");
	$("section.header").addClass('load');

	// prep-start
	setTimeout(function() {
		$("body").addClass('start');
		$("section.header").removeClass('load');
		console.log("prep animation");
	}, 100);

	// Start Animation
	setTimeout(function() {
		$("section.header").addClass('start');
		$("body").removeClass('start').addClass('loading');
		console.log("started animation");
	}, 1000);

	// prep-end Animation
	setTimeout(function() {
		$("body").removeClass('loading').addClass('finalizing');
	}, 2000);

	// End Animation
	setTimeout(function() {
		$("section.header").removeClass('start');
		$("body").removeClass('finalizing').addClass('loaded');
		console.log("finished animation");
	}, 3000);

	// sike, it did not end lmao. move all elements up now.
	setTimeout(function() {
		$("body").addClass('home');
		console.log("really finished the animation this time.");
	}, 4100);

	// show badges
	setTimeout(function() {
		$(".badge").removeClass('hidden');
		console.log("showing badges");
	}, 5100);

	
	if ((navigator.userAgent).includes("Windows")) {
		console.log("detected Mozilla");
	};

	if ((navigator.userAgent).includes("Mac")) {
		console.log("detected Mac");
	};
});

$( document ).ready(function() {
    //Badges
    const globalState = {
    	badges: [
			{name: 'WEB', bg: '#2196f3', color: 'white'},
    	  	{name: 'Beta', bg: '#f44336', color: 'white'},
    	  	{name: 'Deluxe', bg: '#9c27b0', color: 'white'},
    	  	{name: 'PRO', bg: '#ffc107', color: 'white'},
    	  	{name: 'DEV', bg: '#009688', color: 'white'},
    	  	{name: 'EGG', bg: '#9e9e9e', color: 'white'}
    	]
	};

	//Insert badges
    function badge(badges){
        let html = '';
        badges.map((badge) => {
            html += `<div class="hidden badge" style=" background: ${badge.bg}; color: ${badge.color};">${badge.name}</div>`;
        });
        $('.header .title .top .badges').append(html);
    };
	setTimeout(function() {
		badge(globalState.badges, $('.header .title .top .badges'));
	}, 4400);
});