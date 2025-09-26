## Built-in Typescript declarations

Por lo que he entendido, son metodos y propiedades que vienen de base o estandarizados en typescript, como metodos propios del lenguaje, class string, metodos como StartsWith.. 


## Typescript declarations provided by @types/

Estos en cambio, son metodos y propiedades externas, propias del paquete que te has descargado, que pueden venir de otros lenguajes por ejemplo.  


## Relación con las propiedades types y typeRoots del tsconfig.json

TypeRoots son las carpetas donde se irán a buscar esos tipos externos. Types por otro lado, son los paquetes específicos que se tienen que buscar. 
