let button = document.getElementById("btn");

function wordCount(str) {
  str = str.replace(/(^\s*)|(\s*$)/gi, "");
  str = str.replace(/[ ]{2,}/gi, " ");
  str = str.replace(/\n /, "\n");
  count = str.split(" ").length;
  return count;
}

button.addEventListener("click", function () {
  let text = document.getElementById("textbox").value;
  let count = wordCount(text);
  let output = document.getElementById("output");

  output.innerHTML = `<h1>${count}</h1>`;
});
