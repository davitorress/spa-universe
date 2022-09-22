import { Router } from "./router.js";

const router = new Router();

router.add("/", "/src/pages/home.html");
router.add(404, "/src/pages/404.html");
router.add("/universe", "/src/pages/universe.html");
router.add("/explore", "/src/pages/explore.html");

router.handle();

window.route = () => router.route();
window.onpopstate = () => router.handle();
