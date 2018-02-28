import "./page.scss";
import {PageFactory, PageRegister, PageController} from "@haztivity/core";
import template from "./page.pug";
import {HzTooltipResource} from "@haztivity/hz-tooltip";
import {HzAnimResource} from "@haztivity/hz-anim";
export let page: PageRegister = PageFactory.createPage(
    {
        title: "Índice",
        name: "7186",
        resources: [
            HzTooltipResource,
            HzAnimResource
        ],
        template: template
    }
);