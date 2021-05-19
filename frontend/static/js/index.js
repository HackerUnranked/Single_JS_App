const router = async () => {

    // this is an array of objects in js
    const routes = [

        {path: "/", view: () => console.log("Viewing Dashboard") },
        {path: "/posts", view: () => console.log("Viewing Posts") },
        {path: "/settings", view: () => console.log("Viewing Settings") },
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

    let matches = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!matches)
    {
        matches = {
            route:routes[0],
            isMatch: true
        };
    }

    // display the obj
    console.log(matches.route.view());
};

// when the document is loaded call router function
document.addEventListener("DOMContentLoaded", () => {

    router();
});