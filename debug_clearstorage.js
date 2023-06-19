document.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.key == " ") {
    localStorage.removeItem("config");
    localStorage.removeItem("questions_data");
    localStorage.removeItem("study_data");
    alert("[debug]: Config cleared");
  }
});

let timer;
document.addEventListener("touchstart", (e) => {
  if (e.touches.length >= 2) {
    if (!timer) {
      timer = setTimeout(() => {
        if (confirm("[debug]: Clear config?")) {
          localStorage.removeItem("config");
          localStorage.removeItem("questions_data");
          localStorage.removeItem("study_data");
          alert("[debug]: Config cleared");
        }
      }, 3000);
    }
  }
});
document.addEventListener("touchend", (e) => {
  if (timer) {
    clearTimeout(timer);
    timer = undefined;
  }
});
