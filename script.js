const searchBox = document.getElementById("search");

searchBox.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    const { value } = searchBox;
    if (value.replace(/ /gm, "").length > 0)
      location.href = `https://www.google.com/search?q=${value}`;
    else searchBox.value = "";
  }
});

window.onload = () => {
  document.getElementsByTagName("body")[0].removeAttribute("class");
};

// const is_url =
//   /^(((http)|(https)):\/\/)?(www\.)?[a-zA-Z0-9]+\.[a-zA-Z]+\/?([a-zA-Z0-9/?=&%-_]+)?$/;
// const is_ip =
//   /^(((http)|(https)):\/\/)?([0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}|localhost)(:[0-9]{1,5})?(\/[a-zA-Z0-9/?=&%-_]+)?$/;
//
// const search_term = document.getElementById("search_box").value;
// const url_match = search_term.match(is_url);
// const ip_match = search_term.match(is_ip);
// if (e.code == "Enter") {
//   if (url_match != null) {
//     window.location.href =
//       url_match[0].substring(0, 4) == "http"
//         ? url_match[0]
//         : "https://" + url_match[0];
//   } else if (ip_match != null) {
//     window.location.href =
//       ip_match[0].substring(0, 4) == "http"
//         ? ip_match[0]
//         : "http://" + ip_match[0];
//   } else {
//     window.location.href = search_url + encodeURIComponent(search_term);
//   }
// }
// window.onload = () => {
//   document.getElementsByTagName("body")[0].removeAttribute()
// }
