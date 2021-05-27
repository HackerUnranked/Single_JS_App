import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";

// If you expect the back-button to take you to the previous piece of content you interacted 
// with on the page that is the only case for using history.pushState() since it adds a new history entry.
const navigate_to = url => {

    history.pushState(null, null, url);
    router();
}

const router = async () => {

    // this is an array of objects in js
    const routes = [

        {path: "/", view: Dashboard },
        {path: "/posts", view: Posts },
        {path: "/settings", view: Settings },
    ];

    // this calls the route function on every obj in routes
    // route is each object in routes and is the only arguement to the function hence
    // route => where route is an obj from routes
    // return the obj and true or false if the path matches our current url
    const potentialMatches = routes.map(route => {

        return {

            route: route,
            isMatch: location.pathname === route.path
        }; 
    });

    // find if the location is a match
    let matches = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    // if there are no matches go to the first route
    if (!matches)
    {
        matches = {
            route:routes[0],
            isMatch: true
        };
    }

    // create a new class object
    const view = new matches.route.view();

    // grab the app element
    document.querySelector("#app").innerHTML = await view.getHtml();
 
};

// listen when a history changes because of the browser action call router
// an example is pressing the back button on the browser
window.addEventListener("popstate", router);

// when the document is loaded call router function
document.addEventListener("DOMContentLoaded", () => {

    // when a link is clicked call this funciton
    document.body.addEventListener("click", e => {

        // if the type attribute is data-link
        if(e.target.matches("[data-link]")){

            // cancel the event
            e.preventDefault();

            // push the history and store it before navigating
            // this prevents a page refresh when we click each link
            navigate_to(e.target.href);
        }
    });
    router();
});