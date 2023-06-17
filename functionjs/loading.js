

/*   window.addEventListener("load", function() {
    // select the spinner element
    var spinner = document.querySelector(".cat");
    // set its display property to none
    spinner.style.display = "none";
   

  });
 */
/*   function onReady(callback) {
    var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 1000);
  }
  
  function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }
  
  onReady(function() {
    setVisible('body', true);
    setVisible('.cat', false);
  }); */

window.addEventListener("load",()=>{
  const loader = document.querySelector(".catf");
  loader.classList.add("catf-hidden")
})
