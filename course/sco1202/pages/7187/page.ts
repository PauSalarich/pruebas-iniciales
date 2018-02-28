/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
import "./page.scss";
import {PageFactory, PageRegister, PageController} from "@haztivity/core";
import template from "./page.pug";
import "velocity-animate";
import "velocity-animate/velocity.ui";
import "jquery-ui-dist/jquery-ui.js";
import { HzAnimResource } from "@haztivity/hz-anim";

export let page: PageRegister = PageFactory.createPage(
    {
        title: "Índice",
        name: "7187",
        resources: [HzAnimResource],
        template: template
    }
);
page.on(
    PageController.ON_RENDERING, null, (eventObject, template, pageController: PageController) => {
        console.log(`${pageController.options.name} rendering`);
    }
);
page.on(
    PageController.ON_RENDERED, null, (eventObject, $page: JQuery, pageController: PageController) => {
        console.log(`${pageController.options.name} rendered`);
    }
);
page.on(
    PageController.ON_SHOW, null, (eventObject, $page, $oldPage, oldPageRelativePosition, pageController) => {
        console.log(`${pageController.options.name} show start`);

        function _bullets_anim(element){
            return $.Velocity.animate(
                $page.find(element),
                "transition.slideLeftIn", { stagger: 250, display:"flex" }
            );
        }

        _bullets_anim(".container p");

    }

);
page.on(
    PageController.ON_SHOWN, null, (eventObject, $page, $oldPage, oldPageRelativePosition, pageController) => {
        console.log(`${pageController.options.name} show end`);
    }
);
page.on(
    PageController.ON_COMPLETE_CHANGE, null, (eventObject, isCompleted, $page, pageController) => {
        console.log(`${pageController.options.name} complete change`);
    }
);
page.on(
    PageController.ON_DESTROY, null, (eventObject, $page, pageController) => {
        console.log(`${pageController.options.name} destroy`);
    }
);
