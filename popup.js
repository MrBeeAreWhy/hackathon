// // Initialize butotn with users's prefered color
// let changeColor = document.getElementById("changeColor");

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// // When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor,
//   });
// });


// // const periodInMinutes = 0.25;
// // chrome.alarms.create("my-periodic-alarm", {
// //   periodInMinutes
// // });

// // chromes.alarm.create (periodInMinutes=.25)

// setInterval(setPageBackgroundColor, 1000)

// /*function onExecuted(result) {
//   console.log(`We executed in all subframes`);
// }

// function onError(error) {
//   console.log(`Error: ${error}`);
// }

// const executing = browser.tabs.executeScript({
//   file: "/content-script.js",
//   allFrames: true
// });
// executing.then(onExecuted, onError);*/





// // chrome.alarms.onAlarm.addListener(
// // newFunc
// // )


// // The body of this function will be execuetd as a content script inside the
// // current page
// function setPageBackgroundColor() {




//   chrome.scripting.executeScript(
//     {
//       target: {tabId: tab.id},
//       files: ['content.js'],
//     }
//   );

//   // const executing = chrome.tabs.executeScript({
//   //   file: "/content.js",
//   //   allFrames: true
//   // });
//   // executing();

//   // console.log('playing audio')
//   // var audio = new Audio(chrome.runtime.getURL("assets/waterpourglass.mp3"));
//   // audio.volume = 0.1;
//   // setTimeout(() => {audio.play()}, 750);
//   // // chrome.storage.sync.get("color", ({ color }) => {
//   // //   let imgSrc = chrome.runtime.getURL("assets/waterbottle.png")
//   // //   document.body.style.backgroundImage = `${imgSrc}`;
//   // // });


//   // var head = document.getElementsByTagName("head")[0];
//   // var css = document.createElement('link');
//   // css.id = 'button.css';
//   // css.type = 'text/css';
//   // css.rel = 'stylesheet';
//   // css.href = chrome.runtime.getURL("button.css");
//   // css.media = 'screen';
//   // head.appendChild(css);

//   // console.log('adding a div')
//   // let div = document.createElement("div")
//   // div.style.position = 'fixed';
//   // div.style.outline = '0px';
//   // div.style.top = '-75px';
//   // div.style.left = '54%';
//   // let div2 = document.createElement("div")
//   // div2.style.position = 'fixed';
//   // div2.style.outline = '0px';
//   // div2.style.top = '465px';
//   // div2.style.left = '47%';
//   // div.setAttribute("class", "fade-in")
//   // div2.setAttribute("class", "fade-in")

//   // console.log('adding an img')
//   // let img = document.createElement('img');
//   // img.setAttribute('src', chrome.runtime.getURL("assets/waterbottle.png"));
//   // img.style.width = '1230px';
//   // img.style.height = '1100px';
//   // let img2 = document.createElement('img');
//   // img2.setAttribute('src', chrome.runtime.getURL("assets/water.png"));
//   // img2.style.width = '500x';
//   // img2.style.height = '500px';
//   // let body = document.getElementsByTagName('body')[0];

//   // body.appendChild(div);
//   // body.appendChild(div2)
//   // div.appendChild(img);
//   // div2.appendChild(img2);

//   // setTimeout(() => {
//   //   div.setAttribute("class", "fade-out")
//   // div2.setAttribute("class", "fade-out")
//   // }, 3000)
  
//   // setTimeout(() => {img.remove(); div.remove(), img2.remove()}, 5900)

//   //	object.style.backgroundImage="url(img_tree.gif)"

  
// }
