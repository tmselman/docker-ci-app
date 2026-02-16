function callBackend() {
  fetch("/api")
    .then(res => res.text())
    .then(data => {
      document.getElementById("result").innerText = data;
    });
}
