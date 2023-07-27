
export function createlog(text) {
	const body = document.querySelector('body');
	const padre = document.createElement('div');
	padre.classList.add("log")
	padre.style.cssText ='font-family: Helvetica, sans-serif; padding: 10px 20px; position: fixed; width: 80%; max-width: 800px; bottom: 0; right: 20px; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; color: rgb(0, 0, 0); font-size: 16px; border-radius: 10px 10px 0 0; background-color: white;';
	const p = document.createElement('pre');  
	p.style.cssText = " pre {        white-space: pre-wrap;        word-break: keep-all    }"
	
	body.append(padre);
  }


/* export function log(text) {
	const body = document.querySelector('body');
	const padre = document.createElement('div');
	body.style.cssText = "height: 100vh;"
	padre.classList.add("log")
	padre.style.cssText ='font-family: Helvetica, sans-serif; padding: 10px 20px; position: fixed; width: 80%; max-width: 800px; bottom: 0; right: 20px; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; color: rgb(0, 0, 0); font-size: 16px; border-radius: 10px 10px 0 0; background-color: white;';
	const p = document.createElement('p');  
	typeof text === 'string' ? (p.style.color = 'green') : '';
	typeof text === 'number' ? (p.style.color = 'blue') : '';
	typeof text === 'undefined' ? p.textContent = "undefined" : '';
  
	p.innerHTML = `<pre>${text}</pre>`;
	padre.append(p);
	body.append(padre);
	
	console.log(text);
  } */


  let former = console.log;
  console.log = function(msg){
	const p = document.createElement('p'); 
	if(typeof msg === 'string')p.style.color = 'green'
	if(typeof msg === 'number')p.style.color = 'blue'
	if(msg === true)p.style.color = 'blue'
	if(msg === false)p.style.color = 'red'
	// if(msg.includes("Uncaught")) p.style.color = 'red'
	if(typeof msg === 'object'){		
		// msg = msg.outerHTML;
		p.style.color = 'orange'
	}

		
	
		p.innerHTML = msg;
	  former(msg);  //maintains existing logging via the console.
	  document.querySelector(".log").append(p);
  }
  
  window.onerror = function(message, url, linenumber) {
	  console.log(message + " on line " + 
			  linenumber );
  }