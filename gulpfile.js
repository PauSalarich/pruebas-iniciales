/*
* JLBO
* Clona la página que le pasemos. Copia todos los archivos
* y dentro de estos sustituye los string que encuentre en --po y los
* reemplaza por lo que enviemos en --pc
*
* Podemos pasar varias páginas para que clone de una misma
* en --pc=9111,9112,9113,9114
* Así nos crearía 4 páginas clonadas de la original
*
* Comando:
* gulp clone --so=sco1192  --po=6615  --sc=sco1190 --pc=9123
*
* Si el sco destino (cloned) es el mismo no hace falta indicarlo
* gulp clone --so=sco1192  --po=6615  --pc=9123
*/


/*
* Dependencias
*/
const argv = require('yargs').argv;
const debug = require("gulp-debug");
var gulp = require('gulp'),
    replace = require('gulp-replace'),
    fs = require('fs');

gulp.task('clone', function (cb) {
    if((typeof argv.pc).toLowerCase() === "number"){
        argv.pc = argv.pc.toString();
    }
    var pc=argv.pc.split(','); //page cloned
    var po=argv.po; //page origin
    var so=argv.so; //sco origin
    var sc=argv.so; //sco cloned. Toma el mismo valor que el sco origen

    //Si se detalla el sco destino lo actualizamsos
    if(argv.sc){
        sc=argv.sc;
    }
    //Creamos una expresión regular
    var re = new RegExp(po, "igm");

    let completed = 0;
    for(var i=0; i < pc.length; i++) {
        let current = pc[i];
        if(!!current) {
            console.log("Source",'course/' + so + '/pages/' + po + '/**/*');
            console.log("Target",'course/' + sc + '/pages/' + current);
            gulp.src(['course/' + so + '/pages/' + po + '/**/*'])
                .pipe(debug({title: "Cloning:"}))
                .pipe(replace(re, current))
                .pipe(gulp.dest('course/' + sc + '/pages/' + current))
                .on('end',()=>{
                completed++;
            if(completed == pc.length-1){
                cb();
            }
        });
        }
    }
});





var sco=argv.sco;
var assets=argv.a;

var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
var prompt = require("gulp-prompt");
var idCurso=234;

const path= require("path");
var src= path.resolve("dist");

gulp.task('deploy', function(cb){

    gulp.src('gulpfile.js')
        .pipe(prompt.prompt([{
            type: 'input',
            name: 'user',
            message: 'Usuario:'
        },
            {
                type: 'password',
                name: 'password',
                message: 'Contraseña:'
            }], function(res){
            //value is in res.first and res.second
            //console.log(res);


            var includes=[sco+'/**'],
                exclude = getExcludes(src, sco);
            if(assets){
                includes.push('assets/**');
                console.info("Assets de curso incluidos");
            }else{
                console.warn("Assets de curso excluidos");
                exclude.push('assets');
            }

            var config = {
                username: res.user,
                password: res.password,
                host: "88.87.222.77",
                port: 21,
                localRoot: src,
                remoteRoot: '/'+idCurso+'/scorm',

                exclude: exclude,
                include: includes
            };
            console.log("Subiendo archivos...");
            ftpDeploy.deploy(config, function (err) {
                if (err) {
                    console.error(err.message);
                }else{
                    console.log('Archivos subidos');
                }

                cb();
            });


        }));

});



function getExcludes(src, sco) {

    var dir= fs.readdirSync(src)
        .filter(file =>  {
        return fs.statSync( path.join(src, file)).isDirectory() && file.search(/sco*/i) != -1 && file.search(sco) == -1;
});

    return dir;
}

// gulp deploy --sco sco1199
// gulp clone --so=sco1188  --po=9999  --sc=sco1199 --pc=7601,7602,7603,7604,7605,7606,7607,7608,7609,7610,7611,7613,7612,7614,7615,7616,7618,7619,7620,7621,7622,7623,7624,7625,7626,7628,7629,7630,7631,7632,7633,7634,7635
