/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
import {Resource,ResourceController,$,EventEmitterFactory,DataOptions} from "@haztivity/core";
import "jquery-ui-dist/jquery-ui.js";
@Resource(
    {
        name:"HzVoid",
        dependencies:[
            $,
            EventEmitterFactory,
            DataOptions
        ]
    }
)
export class HzVoidResource extends ResourceController {
    protected static readonly DEFAULTS = {

    };
    public static readonly NAMESPACE = "hzVoid";

    /**
     * Recurso de tooltip para Haztivity.
     * @param _$
     * @param _EventEmitterFactory
     * @param _ScormService
     */
    constructor(_$: JQueryStatic, protected _eventEmitterFactory, protected _dataOptions) {
        super(_$, _eventEmitterFactory);
    }

    init(options, config?) {
        this._config = config;
        this._options = options;
    }
    markAsCompleted(){
        this._markAsCompleted();
    }
}