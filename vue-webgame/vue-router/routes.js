import Vue from "vue";
import VueRouter from "vue-router";
import NumberBaseball from "../3.NumberBaseball/NumberBaseball";
import ResponseCheck from "../4.ResponseCheck/ResponseCheck"
import RockScissorsPaper from "../5.RockScissorsPaper/RockScissorsPaper"
import LottoGenerator from "../6.lotto/LottoGenerator"
import GameMatcher from "./GameMatcher";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        {path: '/numberBaseball', component: NumberBaseball},
        {path: '/responseCheck', component: ResponseCheck},
        {path: '/rockScissorsPaper', component: RockScissorsPaper},
        {path: '/lottoGenerator', component: LottoGenerator},
        {path: '/game/:name', component: GameMatcher},
    ]
})