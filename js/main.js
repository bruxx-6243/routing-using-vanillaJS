import routes from "./routes.js";

document.addEventListener("click", (e) => {
  const { target } = e;

  if (!target.matches("nav a")) {
    return;
  }
  e.preventDefault();
  urlRoute();
});

const urlRoute = (event) => {
  event = event || window.event;
  event.preventDefault();

  window.history.pushState({}, "", event.target.href);
  urlLocationHandler();
};

const urlLocationHandler = () => {
  const location = window.location.pathname;

  if (location.length == 0) {
    location = "/";
  }

  setTimeout(async () => {
    const route = routes[location] || routes[404];
    const html = await fetch(route.template).then((response) =>
      response.text()
    );

    document.getElementById("content").innerHTML = html;
    document.title = route.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", route.description);
  }, 100);
};

window.onpopstate = urlLocationHandler;
window.route = urlRoute;

urlLocationHandler();
