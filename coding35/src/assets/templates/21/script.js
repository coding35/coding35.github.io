(() => {
  const topic = document.getElementById("Topic");
  const printBtn = document.getElementById("Print");
  const placeholder = document.getElementsByClassName("placeholder");
  topic.addEventListener("keyup", () => {
    for (item of placeholder) {
      item.innerHTML = topic.value;
    }
  });
  printBtn.addEventListener("click", () => {
    console.log(document.getElementsByClassName("content-box"));
    if (document.getElementsByClassName("content-box").length == 0) {
      const topicBlocks = document.getElementsByTagName("p");
      for (item of topicBlocks) {
        let div = document.createElement("div");
        div.className = "content-box";
        item.appendChild(div);
      }
    }
    window.print();
  });
})();
