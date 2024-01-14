# HarryPlotter

Proyecto final para la **Practica Profesional** de la **Tecnicatura de Diseño y Desarrollo de Videojuegos**
Se trata de un E-Commerce o tienda digital para un cliente que vende productos sublimados de tematica geek.

Consta _(por ahora)_ de un login para el usuario y el administrador, dependiendo de quien ingrese es lo que se podra realizar en la página. 
Si entra el administrador, tiene la posibilidad de **agregar, editar o eliminar** productos/noticias (CRUD). Si el que entra es el usuario-cliete, le habilita la posibilidad de registrar productos para comprar online (por _default_ el carrito esta deshabilitado)

En el encabezado tenemos el nombre de la empresa, una barra de busqueda local y las redes sociales. Luego estará el navegador donde estan las paginas disponibles, login y carrito del usuario.
El pie de pagina se encuentra el logo y nombre de la empresa, acceso directo a paginas mas visitadas y un formulario de contacto.
Tenemos distintas paginas las cuales son:
* "Home" contiene un carrusel con banners de noticias o descuentos, los ultimos productos agregados y las ultimas noticias publicadas.
* "categorias" es donde se muestran todos los productos disponibles organizados por categorias y subcategorias.
* "anuncios" contiene todos los anuncios publicados por el administrador
* "contacto" muestra las preguntas frecuentes que pueda tener algun cliente con su respuesta y la informacion de la empresa 
* "cuenta" es donde se tiene que loggear el usuario-cliente para poder realizar compras y en donde se loggea el administrador para realizar cambios en los items
* "carrito" principalmente desactivado hasta que un usuario inicie sesion, luego mostrara los productos registrados o no.
  Si continua la compra, lo lleva al siguiente apartado, mostrando los productos a comprar, metodo de pago y si tiene descuento o no. Luego se emitira la factura al cliente y administrador.

# Explicacion de carpetas

**db.json** contiene temporalmente toda la informacion de los productos y noticias, con sus categorias y subcategorias. Tambien esta la info del dev y autor.

Todo archivo _.spec_ es para realizar testeos (Aun no se bien de este tema)

*tsconfig.json | tsconfig.app.json | package.json | package-lock.json | angular.json* son archivos de configuracion para la aplicacion. Los mas usados son *package.json* y *tsconfig.json*

*src* es en donde se encuentra toda la app. Donde existe un _index.html, main.ts y styles.css_ que son sus archivos base. luego tendremos distintas carpetas
*assets* donde se guardan las imagenes/videos u otros archivos multimedia que utilice la app
*environments* es donde se ejecuta el environment de desarrollo o el environment de produccion (actualmente en desarrollo)
*app* es la carpeta raiz, donde estan todo el mvc (modulos, vistas, componentes)