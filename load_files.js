(async () => {
  let data = JSON.parse(localStorage.getItem("study_data"));
  if (data === null) {
    localStorage.setItem("study_data", JSON.stringify(await fetch("study_data.json").then((d) => d.json())));
  }
})();
(async () => {
  let data = JSON.parse(localStorage.getItem("questions_data"));
  if (data === null) {
    localStorage.setItem("questions_data", JSON.stringify(await fetch("questions_data.json").then((d) => d.json())));
  }
})();
(async () => {
  let data = JSON.parse(localStorage.getItem("config"));
  if (data === null) {
    localStorage.setItem("config", JSON.stringify(await fetch("config.json").then((d) => d.json())));
  }
})();

async function wait_to_load() {
  while (!(localStorage.getItem("study_data") && localStorage.getItem("questions_data") && localStorage.getItem("config"))) {
    await new Promise((res) => setTimeout(res, 50));
  }
}
