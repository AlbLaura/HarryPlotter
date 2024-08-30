# [HarryPlotter]

_Proyecto final para la materia Práctica Profesional de la carrera Tecnicatura en Diseño y Desarrollo de Videojuegos, Universidad de La Punta._

El proyecto trata de un **E-Commerce** o _tienda digital_ para un cliente que vende productos sublimados de tematica geek, en ella se muestran los productos, cantidades disponibles, noticias de ultima hora de la empresa y se venden los productos utilizando mercado pago como medio de pago por su seguridad implementada.

## Tabla de Contenidos
- [Descripción General](#descripción-general)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [API](#api)
- [Pruebas](#pruebas)
- [Despliegue](#despliegue)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Descripción General
Una descripción más detallada del proyecto, su propósito y sus principales características.

Consta de un login para el usuario y el administrador, dependiendo de quien ingrese es lo que se podra realizar en la página. 
Si entra el administrador, tiene la posibilidad de **agregar, editar o eliminar** productos/noticias (CRUD). Si el que entra es el usuario-cliete, le habilita la posibilidad de registrar productos para comprar online (por _default_ el carrito estará deshabilitado)

En el encabezado tenemos el nombre de la empresa, una barra de busqueda local y las redes sociales. Luego estará el navegador donde estan las distintas paginas disponibles(nombradas a continuación), login y carrito del usuario.
El pie de pagina se encuentra el logo con el nombre de la empresa, una frase especial del cliente, acceso directo a paginas mas visitadas y un formulario de contacto.
Tenemos distintas paginas las cuales son:

* "Home" contiene un carrusel con banners de noticias o descuentos, los ultimos productos agregados y las ultimas noticias publicadas.
* "categorias" es donde se muestran todos los productos disponibles organizados por categorias y subcategorias.
* "anuncios" contiene todos los anuncios publicados por el administrador
* "contacto" muestra las preguntas frecuentes que pueda tener algun cliente con su respuesta y la informacion de la empresa 
* "cuenta" es donde se tiene que loggear el usuario-cliente para poder realizar compras y en donde se loggea el administrador para realizar cambios en los items
* "carrito" principalmente desactivado hasta que un usuario inicie sesion, luego mostrara los productos registrados o no. Si continua la compra, lo lleva al siguiente apartado, mostrando los productos a comprar, metodo de pago y si tiene descuento o no. Luego se emitira la factura al cliente y administrador.

![Interacción con cada sección de la página](src\assets\Interacciones.png)

## Tecnologías Utilizadas
- Frontend: [Angular v18]
- Backend: [Java, SpringBoot]
- Base de datos: [MySQL]
- Otros: [ej. Redis para caché, Elasticsearch para búsqueda]

## Estructura del Proyecto
_Esta información es para personas que no sepan totalmente manejarse con Angular o recien se descargan el código fuente y no sabe que contiene cada una, asi que lo explicaré brevemente_

**db.json** contiene temporalmente toda la informacion de los productos y noticias, con sus categorias y subcategorias. Tambien esta la info del dev y autor, preguntas frecuentes. Se trata de una base de datos provisional para el que está desarrollando, esto luego irá a una base de datos real.

Todo archivo **.spec** es para realizar testeos del código _(Aun no se bien de este tema)_

**tsconfig.json | tsconfig.app.json | package.json | package-lock.json | angular.json** son archivos de configuracion para la aplicacion. Los mas usados son **package.json** y **tsconfig.json** (configuracion del compilador para typescript a javascript)

**src** es en donde se encuentra toda la app. Donde existe un _index.html, main.ts y styles.css_ que son sus archivos base. luego tendremos distintas carpetas
**assets** donde se guardan las imagenes/videos u otros archivos multimedia que utilice la app
**environments** es donde se ejecuta el environment de desarrollo o el environment de produccion (actualmente en desarrollo)
**app** es la carpeta raiz, donde estan todo el mvc (modulos, vistas, componentes)

```
Proyecto/
│
├── node_modules/ (carpeta que esta incluida en el .gitignore, por lo que no se descarga del repo, si no que lo descargas cuando instalas las dependencias)
│   └── *contiene muchas de carpetas, razon por la que se incluye en el gitignore*
│
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   └── core.module.ts
│   │   ├── data/
│   │   │   ├── schema
│   │   │   │   └── ApiClass.class.ts
│   │   │   ├── services/api
│   │   │   │   └── (contiene todos los servicios)
│   │   │   └── data.module.ts
│   │   ├── layout/
│   │   │   └── (contiene footer, header, navigation y el skeleton)
│   │   ├── modules/
│   │   │   └── (contiene las carpetas de cada modulo o vistas)
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   └── (contiene todos los componentes utilizados)
│   │   │   └── shared.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets/
│   │   └── (contiene archivos multimedia)
│   ├── environments/
│   │   ├── environment.development.ts
│   │   └── environment.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
│
├── .hintrc
├── angular.json
├── db.json
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

## Instalación
Pasos para instalar el proyecto localmente.

```bash
git clone https://github.com/usuario/proyecto-ecommerce.git
cd proyecto-ecommerce
npm install
```

## Configuración
Instrucciones para configurar el proyecto, incluyendo variables de entorno, archivos de configuración, etc.

## Uso
Cómo ejecutar el proyecto localmente.

```bash
npm run dev
```

## API
Documentación breve de los principales endpoints de la API. Para documentación detallada, referir a un archivo separado o a una herramienta como Swagger.

## Pruebas
Cómo ejecutar las pruebas automatizadas.

```bash
npm run test
```

## Despliegue
Instrucciones básicas para desplegar el proyecto en producción.

## Contribución
Guías para contribuir al proyecto, incluyendo estándares de código, proceso de pull requests, etc.

## Licencia
Información sobre la licencia del proyecto.
Desarollado por _Laura Soledad Albornoz_ para _Adrian Ezequiel Lopez_, creador de *HarryPlotter*

---

Para más información detallada, consulte la [documentación completa](https://docs.google.com/document/d/1dm5RbJeW2jVqFW5BG7iAVICGa5CoQ8PkWRqj9dmE654/edit?usp=sharing).
