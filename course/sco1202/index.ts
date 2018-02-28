/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
import 'animate.css';
import './main.scss';
import 'jquery-ui-dist/jquery-ui';
import 'jquery-ui-touch-punch-c';
import 'flexboxgrid/dist/flexboxgrid.css';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/dialog.css';
import {ScoFactory, Sco, ISco} from "@haztivity/core";
import {HzNavbarComponent} from "@haztivity/hz-navbar";
import {HzHeaderComponent} from "@haztivity/hz-header";

import template from "./sco.pug";


import {page as page7186} from "./pages/7186/page";


let sco: ISco = ScoFactory.createSco(//
    {
        name: "sco1202",
        template: template,
        pages: [

            page7186

        ],
        components: [
            HzNavbarComponent,
            HzHeaderComponent
        ]
    }
);
sco.run();