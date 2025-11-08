# G11 – MVP CRUD con React

## Índice
1. [Resumen del proyecto (MVP)](#resumen-del-proyecto-mvp)  
2. [Objetivos](#objetivos)  
3. [Criterios mínimos (MVP)](#criterios-mínimos-mvp)  
4. [Stack y recursos](#stack-y-recursos)  
5. [Estructura del proyecto sugerida](#estructura-del-proyecto-sugerida)  
6. [Cómo iniciar el proyecto](#cómo-iniciar-el-proyecto)  
7. [Entregables](#entregables)  
8. [Aspectos a evaluar](#aspectos-a-evaluar)  
9. [Etapas de desarrollo](#etapas-de-desarrollo)

---

## Resumen del proyecto (MVP)
El proyecto consiste en construir una aplicación **CRUD básica** (Create, Read, Update, Delete) usando **React**.  
La idea es enfocarse en lo esencial: listar datos desde una API, crear nuevos registros con un formulario simple, editar registros existentes y eliminar registros, todo con una sola entidad o recurso.

Este trabajo se plantea como un **MVP** (producto mínimo viable). Lo importante es presentar algo funcional.

> [!NOTE]  
> Se puede Obviar alguna de las acciones como Update o Delete en el CRUD, lo importante es el avance y tener al menos 2

---

## Objetivos
El objetivo principal es **usar los fundamentos de JavaScript y React** para crear un CRUD sencillo.  
- JavaScript: manejo de arrays y objetos, promesas/`fetch`, validaciones simples.  
- React: componentes, estado (`useState`), efectos (`useEffect`), props y formularios controlados.

---

## Criterios mínimos (MVP)
El proyecto debe cubrir la base de un CRUD  (ejemplo: `users`, `tasks`, `products`):

1. **Read (listar):** vista con listado del recurso (tabla o tarjetas).  
2. **Create (crear):** formulario controlado con validaciones mínimas, guardando en API.  
3. **Update (editar):** editar un registro y actualizar la información en API.  
4. **Delete (eliminar):** acción para borrar con confirmación.  
5. **UI mínima:** Que funcione en desktop principalmente, ideal que también en mobile

> [!NOTE]  
> De nuevo, se puede obviar alguna de las acciones como Update o Delete en el CRUD, lo importante es el avance y tener al menos 2 de las acciones

> [!NOTE]  
> Pueden tomar como referencia el proyecto 05-admin
---

## Stack y recursos
**Tecnologías principales**
- React  
- Fetch API o Axios para peticiones HTTP  
- API desarrollada en backend

**Recursos de apoyo**  
- [Guía para Planificar MVP de CRUD](./recursos/README.md)
- [Resources/README.md](https://github.com/jmontes50/G9Java/blob/master/Info/Resources/README.md)  
- Documentación oficial de React: <https://react.dev>  

---

## Estructura del proyecto sugerida
Una estructura mínima y clara:

```
/project-root
├─ /src
│  ├─ /components
│  │  ├─ ItemForm.jsx       # formulario crear/editar
│  │  └─ ItemList.jsx       # lista del recurso + acciones
│  ├─ /services
│  │  └─ api.js             # funciones para CRUD
│  ├─ /styles               # opcional, estilos globales o modulares
│  ├─ App.jsx
│  └─ main.jsx
├─ .env.local               # VITE_API_BASE_URL="https://...miapi.io/api/v1"
├─ package.json
└─ README.md
```

---

## Cómo iniciar el proyecto
Con React:

```bash
# 1) Crear proyecto
npm create vite@latest g29-crud -- --template react
cd g11-crud

# 2) Instalar dependencias
npm install

# 3) Configurar la API base (MockAPI)
# Crear .env.local con:
# VITE_API_BASE_URL="https://<tu-subdominio>.mockapi.io/api/v1"

# 4) Arrancar en desarrollo
npm run dev
```

---

## Entregables
- Código en el repositorio con este README actualizado.  

---

## Aspectos a evaluar
- **Funcionalidad CRUD:** debe crear, listar, editar y eliminar correctamente en MockAPI.  
- **Código y arquitectura:** componentes claros y separados, código entendible.  
- **Estado y efectos:** uso adecuado de `useState` y `useEffect`.  

---

## Etapas de desarrollo
1. **Definir backend** (ej. `tasks` con `title`, `description`).  
2. **Preparar el proyecto React** y configurar acceso a API.  
3. **Listar (Read):** mostrar los datos con estados de carga/error.  
4. **Crear (Create):** formulario controlado y POST a API.  
5. **Editar (Update):** reusar formulario o modal para actualizar.  
6. **Eliminar (Delete):** borrar con confirmación y actualizar vista.  
7. **Pulir y entregar**: Presentar repositorio si es posible deployeado.
