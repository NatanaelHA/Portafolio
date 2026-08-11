# Flujo de proyectos

`HomeProjectsSection` coordina la lista de proyectos y su modal. Los cards y el modal no se llaman directamente: Zustand funciona como puente entre ambos.

## Estructura en Home

```text
Home.jsx
  → HomeProjectsSection.jsx
    ├─ ProjectCard.jsx (uno por cada proyecto)
    └─ ProjectModal.jsx
```

`Home.jsx` obtiene los datos desde `src/data/projects.js` y los entrega a `HomeProjectsSection`. Esta sección crea los cards y mantiene disponible el modal asociado a la lista.

## Flujo de selección

```text
ProjectCard.jsx
  → openProject(project)
    → Zustand guarda selectedProject
      → ProjectModal.jsx detecta el cambio
        → ProjectModalContent.jsx se muestra
```

1. El usuario presiona **Ver proyecto** en un card.
2. `ProjectCard` ejecuta `openProject(project)`.
3. Zustand guarda el objeto en `selectedProject`.
4. `ProjectModal` observa ese valor y renderiza el contenido.
5. `closeProject()` devuelve `selectedProject` a `null` y desmonta el modal.

## Composición visual del modal

```text
ProjectModalContent.jsx
  ├─ ProjectModalHeader.jsx
  ├─ ProjectTechnicalDetails.jsx
  │   ├─ ProjectArchitecture.jsx
  │   └─ ProjectHighlights.jsx
  └─ ProjectGallery.jsx
```

El proyecto seleccionado llega una vez a `ProjectModalContent`. Desde allí, cada componente hijo recibe solamente los datos que necesita mostrar.

## Dónde realizar cada cambio

```text
Datos de los proyectos       → src/data/projects.js
Contenido y acciones del card → ProjectCard.jsx
Apertura y cierre             → ProjectModal.jsx / useProjectModal.js
Encabezado del detalle        → ProjectModalHeader.jsx
Información técnica           → ProjectTechnicalDetails.jsx
Arquitectura                   → ProjectArchitecture.jsx
Puntos destacados             → ProjectHighlights.jsx
Carrusel visual                → ProjectGallery.jsx
Gestos del carrusel            → useProjectGallery.js
Inclinación del card           → useProjectCardEffect.js
Colores por proyecto           → projectThemes.js
Estado del proyecto activo     → useProjectModalStore.js
```

## Datos esperados

Cada proyecto puede incluir:

- `title`, `desc`, `stack`, `category` y `variant`.
- `thumbnail` e `images`.
- `architecture` y `highlights`.
- `featured` y `liveUrl` cuando correspondan.

Para agregar un proyecto, el punto de entrada es `src/data/projects.js`. Si necesita una variante visual nueva, también debe agregarse en `projectThemes.js`.
