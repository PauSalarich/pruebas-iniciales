## README

Curso: 241

### Índice del curso

* [7683] Portada
* [7694] Frase
* [7684] Presentación 1
* [7685] Presentación 2
* [7686] Indice
* [7695] Como Robocop (portada)
* [7698] Como Robocop (teoría)
* [7687] Como Robocop (ejercicio) ABO
* [7699] La casa del futuro (portada)
* [7688] La casa del futuro (teoría) ABO
* [7700] La casa del futuro (ejercicio) ABO
* [7701] Dinero intocable (portada)
* [7689] Dinero intocable (teoría) ABO
* [7690] Dinero intocable (ejercicio)
* [7702] Seguridad por bandera (portada)
* [7691] Seguridad por bandera (teoría) ABO
* [7692] Seguridad por bandera (ejercicio) ABO
* [7693] Cierre ABO

## Ayuda para el desarrollador

Iniciar la aplicación:
Ruta del proyecto y **hzcli** y a continuación **dev**

Generar el paquete de distribución:
**dist**

```html
    C:\Users\JLBO\Documents\DV Haztivity courses\englishfortravel>hzcli
    haztivity$ dev
```
Para abrir el curso en el navegador

 http://localhost:4444/course/sco1202/index.html

En el campus:

http://www.campusblended.com/mods/scorm/cursos/241/scorm/sco1202/index.html

Para navegar entre páginas:

```javascript
const dev = haztivity.enableDev();
dev.goToPage([index página])
```





### Clonar páginas
Clona la página que le pasemos. Copia todos los archivos y dentro de estos sustituye los string que encuentre en --po y los
reemplaza por lo que enviemos en --pc

Podemos pasar varias páginas para que clone de una misma en --pc=9111,9112,9113,9114
Así nos crearía 4 páginas clonadas de la original

Comando:
```javascript
gulp clone --so=sco1192  --po=6615  --sc=sco1190 --pc=9123
```
Si el sco destino (cloned) es el mismo no hace falta indicarlo
```javascript
gulp clone --so=sco1202  --po=1111  --pc=7700,7690,7692,7693
```
Ejemplo:
```javascript
gulp clone --so=sco1188  --po=9999  --sc=sco1199 --pc=7601,7602,7603,7604,7605,7606,7607,7608,7609,7610,7611,7613,7612,7614,7615,7616,7618,7619,7620,7621,7622,7623,7624,7625,7626,7628,7629,7630,7631,7632,7633,7634,7635
```