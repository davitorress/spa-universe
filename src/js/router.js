export class Router {
	routes = {};

	add(routeName, page) {
		this.routes[routeName] = page;
	}

	route(event) {
		event = event || window.event;
		event.preventDefault();

		window.history.pushState({}, "", event.target.href);

		this.handle();
	}

	handle() {
		const { pathname } = window.location;
		const route = this.routes[pathname] || this.routes[404];
		const url = route.split("/")[3].split(".")[0] != "404" ? route.split("/")[3].split(".")[0] : "home";

		document.querySelectorAll("a").forEach((link) => link.classList.remove("active"));
		document.querySelector(`#${url}`).classList.add("active");

		fetch(route)
			.then((data) => data.text())
			.then((html) => {
				document.querySelector("#app").innerHTML = html;
				document.querySelector("main").style.backgroundImage = `url(/src/assets/${url}.png)`;
			});
	}
}
