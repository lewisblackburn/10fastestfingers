// this is the code which will be injected into a given page...

(function () {
  var input = document.getElementById("inputfield");
  setInterval(() => {
    input.value = document.getElementsByClassName("highlight")[0].innerHTML;
  }, 100);
})();
