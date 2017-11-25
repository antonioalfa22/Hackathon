# Batería con Kinect
Proyecto que por medio de la cámara Kinect hace que con nuestros gestos podamos tocar una batería.

### Proyecto Node-RED

El proyecto es una plantilla que lee unos json que son el resultado de grabar unos movimientos con la kinect, para que en vez de leer ese json predefinido lea realmente la kinect, se debe conectar el nodo IBM IoT y darle la API Key correspondiente.

![Bateria](https://raw.githubusercontent.com/antonioalfa22/Hackathon/master/img/Bateria.jpeg)



## Pasos a seguir
1.   Copiar la ![Plantilla txt](https://raw.githubusercontent.com/antonioalfa22/Hackathon/master/Plantilla.txt) con "Control A" + "Control C"

2.   Ir al menú contextual de nuestra aplicación Node-RED

3.   Importar

4.   Clipboard

5.   Import Nodes -> "Control V" para pegar la template

6.   Aceptar pulsando el botón de "Import"

7.   Configura el nodo IBM IoT Input con la Api Key correspondiente.

8.   Para renderizar los componentes del dashboard necesitas instalar la dependencia "node-red-dashboard"

9.   Ir al menú contextual de nuestra aplicación Node-Red -> "Manage Palette" -> Install

10.  Escribimos -> "node-red-dashboard" para Web | "node-red-dashboard-es" para mobile
