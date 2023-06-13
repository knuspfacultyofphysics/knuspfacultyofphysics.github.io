document.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.key == " ") {
    localStorage.removeItem("config");
    localStorage.removeItem("questions_data");
    localStorage.removeItem("study_data");
    alert("[debug]: Config cleared");
  }
});
