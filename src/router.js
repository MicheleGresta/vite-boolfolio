import { createRouter, createWebHistory } from "vue-router"; 

    import AboutPage from "./pages/About.vue";
    import ProjectsPage from "./pages/Projects.vue";
    import ContactsPage from "./pages/Contacts.vue";
    import HomePage from "./pages/Home.vue";
    import ProjectShowPage from "./pages/ProjectShow.vue";

    const routes = [
        {
            path: "/",
            name: "home",
            component: HomePage
        },
        {
            path: "/about",
            name: "about",
            component: AboutPage
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectsPage
        },
        {
            path: "/contacts",
            name: "contacts",
            component: ContactsPage
        },
        {
            path: "/projects/:id",
            name: "project.show",
            component: ProjectShowPage
        }
    ]
    const router = createRouter({
        history: createWebHistory(),
        routes
    })

    export { router };