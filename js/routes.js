const pageTitle = "JavaScript SPA";

const routes = {
    404: {
        template: "../pages/404.html",
        title: `Page not found | ${pageTitle}`,
        description: "This is only the missing page"
    },
    "/": {
        template: "../pages/home.html",
        title: `Home page | ${pageTitle}`,
        description: "Home page"
    },
    "/about": {
        template: "../pages/about.html",
        title: `About page | ${pageTitle}`,
        description: "About page"
    },
    "/contact": {
        template: "../pages/contact.html",
        title: `contact page | ${pageTitle}`,
        description: "Conatact page"
    },
}

export default routes;