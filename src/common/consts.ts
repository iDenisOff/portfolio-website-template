export const routesPaths = {
    npmPage: "/npm",
    mainPage: "/",
    authorPage: "/author-page",
    worksPage: "/works-page",
    processPage: "/process-page",
    contactsPage: "/contacts-page",
};

export const mainMenuItems: { name: string; route: string }[] = [
    {
        name: "Главная",
        route: routesPaths.mainPage,
    },
    {
        name: "Об авторе",
        route: routesPaths.authorPage,
    },
    {
        name: "Работы",
        route: routesPaths.worksPage,
    },
    {
        name: "Процесс",
        route: routesPaths.processPage,
    },
    {
        name: "Контакты",
        route: routesPaths.contactsPage,
    },
];
