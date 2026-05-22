 # Backend TaskApp

## Propósito

Proyecto backend para gestión de tareas (crear, listar, actualizar y eliminar). Sirve como base educativa y práctica para aprender rutas, controladores y manejo básico de datos en Node.js.

**Referencia de documento:** GFPI-F-135 V04

## Estructura del proyecto

- `src/` — Código fuente
	- `index.js` — Punto de entrada del servidor
	- `routes/` — Rutas de la API
		- `tasks.routes.js`
		- `users.routes.js`
- `package.json` — Scripts y dependencias
- `README.md` — Documentación

Vista rápida:

```
package.json
README.md
src/
	index.js
	routes/
		tasks.routes.js
		users.routes.js
```

## Requisitos

- Node.js (recomendado v16+)

## Cómo ejecutar el servidor

1) Instalar dependencias:

```bash
npm install
```

2) Iniciar servidor (modo desarrollo):

```bash
npm run dev
```

El script `dev` está definido en `package.json` y ejecuta `node src/index.js`.

Por defecto el servidor debería escuchar en el puerto definido en `src/index.js` (comúnmente `3000`).

## Ejemplos (opcionales)

- Petición para listar tareas:

```bash
curl http://localhost:3000/tasks
```

- Crear tarea (ejemplo):

```bash
curl -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d '{"title":"Mi tarea"}'
```

¿Quieres que agregue un script `start` en `package.json` o más ejemplos documentados?

