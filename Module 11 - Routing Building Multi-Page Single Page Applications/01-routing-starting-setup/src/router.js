import { createRouter, createWebHistory } from "vue-router";

import TeamsList from "./pages/TeamsList.vue";
import UsersList from "./pages/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import NotFound from "./pages/NotFound.vue";
import TeamsFooter from "./pages/TeamsFooter.vue";
import UsersFooter from "./pages/UsersFooter.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/teams",
    },
    /* ya redirect kullanarak anasayfayı /teams yönlendirirsin ya da yönlendirmek istediğin kısma gelip alias eklersin ama alias'ta url değişmez o path'te component çalıştırılır */
    {
      name: "teams",
      path: "/teams",
      meta: {
        needsAuth: true,
      },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: "team-members",
          path: ":teamId",
          component: TeamMembers,
          props: true,
        },
      ],
      /* alias: "/", */
    },
    {
      path: "/users",
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log("users beforeEnter");
        console.log(to, from);
        next();
      },
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
      /* sonda gelmesi lazım */
    },
  ],
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0,
    };
  },
});

router.beforeEach((to, from, next) => {
  console.log("Global beforeEach");
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log("Needs auth!");
    next();
  } else {
    next();
  }
  /* if (to.name === "team-members") {
      next(); // true false alabiliyor veya alttaki gibi
    } else {
      next({ name: "team-members", params: { teamId: "t2" } });
    }  */
});

router.afterEach((to, from) => {
  // sending analytics data
  console.log("Global afterEach");
  console.log(to, from);
});

export default router;
