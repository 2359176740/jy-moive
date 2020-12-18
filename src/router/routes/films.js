import films from "@/views/Films/Films";
import comingsoon from "@/views/Films/ComingSoon";
import nowplaying from "@/views/Films/NowPlaying";

export default {
    path: "/films",
    component: films,
    redirect:'/films/comingsoon',
    children: [
      { path: "comingsoon", component: comingsoon },
      { path: "nowplaying", component: nowplaying },
    ],
  }