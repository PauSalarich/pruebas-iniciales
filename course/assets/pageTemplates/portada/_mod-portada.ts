/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
import "./_mod-portada.scss";
import {Page, PageFactory, InjectorService,     ResourceInitializerService,     ResourceSequenceFactory, PageRegister, GenericPageController, PageController} from "@haztivity/core";
import "velocity-animate";
import "velocity-animate/velocity.ui";
import "jquery-ui-dist/jquery-ui.js";

@Page(
    {
        name: "ModPortadaController",
        dependencies: [
            $,
            InjectorService,
            ResourceInitializerService,
            ResourceSequenceFactory
        ]
    }
)
export class ModPortadaController extends GenericPageController {
    protected _show($oldPage, oldPageRelativePosition): JQueryPromise<null> {
        let defer = this._$.Deferred();
        if ($oldPage) {
            $oldPage.fadeOut(
                400, () => {
                    this.$element.fadeIn(
                        400, () => {
                            $.Velocity.animate(
                                this.$element.find(".js_animate"),
                                "transition.slideLeftIn", { stagger: 250, }
                            ).then(()=>{
                                defer.resolve();
                            });
                        }
                    )
                }
            );
        } else {
            this.$element.fadeIn(
                400, () => {
                    $.Velocity.animate(
                        this.$element.find(".js_animate"),
                        "transition.slideLeftIn", { stagger: 250,  }
                    ).then(()=>{
                        defer.resolve();
                    });
                }
            );
        }
        return defer.promise();
    }


}
