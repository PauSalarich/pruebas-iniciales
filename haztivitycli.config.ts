/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
import {ConfigService,IHaztivityCliConfig} from "@haztivity/cli";
export const config:IHaztivityCliConfig = {
    homeDir:"./course",
    scoTest:/sco*/,
    dev:{
        server:{
            root:".",
            port:4444,
            hmr:true
        },
        fusebox:{
            cache:false,
            log:true,
            debug:true,
            shim: {
                jquery: {
                    source: "node_modules/jquery/dist/jquery.js",
                    exports: "$",
                }
            }
        }
    },
    dist:{
        fusebox:{
            cache:false,
            log:true,
            debug:true,
            shim: {
                jquery: {
                    source: "node_modules/jquery/dist/jquery.js",
                    exports: "$"
                }
            }
        },
        copy:[
            "{{homeDir}}/**/*.{ttf,otf,woff,woff2,eot}",
            "{{homeDir}}/**/*.{gif,jpg,png,svg}",
            "{{homeDir}}/**/*.{mp4,avi}",
            "{{homeDir}}/**/index.html"
        ]
    }
};