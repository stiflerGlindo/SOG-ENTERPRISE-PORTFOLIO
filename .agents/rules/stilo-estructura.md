---
trigger: always_on
glob: "**/*.{js,css,html,md}"
description: "Establece las normas de estilo, estructura y documentación obligatoria para todo el código generado o modificado."
---

# Reglas de Estilo, Estructura y Documentación

Debes seguir estas reglas estrictamente al escribir o modificar código:

## 1. Documentación Obligatoria
- **Cabeceras de Archivos:** Cada archivo debe comenzar con un comentario breve explicando su propósito general y qué contiene.
- **Funciones y Métodos:** Todas las funciones, clases y métodos deben documentarse (ej. usando formato JSDoc en JavaScript). Debes explicar su propósito, describir los parámetros (`@param`) y detallar el valor de retorno (`@returns`).
- **Código Complejo:** Añade comentarios explicativos para la lógica no trivial. Explica el *por qué* de la decisión técnica, no solo el *qué* hace el código.

## 2. Nomenclatura (Naming Conventions)
- **Variables y Funciones:** Utiliza `camelCase` (ej. `getUserData`, `isModalOpen`). Usa nombres explícitos y descriptivos. No uses nombres genéricos como `data` o `temp` sin contexto.
- **Clases:** Utiliza `PascalCase` (ej. `MenuController`).
- **Constantes:** Utiliza `UPPER_SNAKE_CASE` (ej. `API_BASE_URL`, `MAX_RETRIES`).
- **Clases CSS / IDs:** Utiliza `kebab-case` (ej. `btn-primary`, `main-header`).

## 3. Estructura del Código
- **Responsabilidad Única:** Mantén las funciones pequeñas y enfocadas en hacer una sola cosa bien. Si una función hace demasiado, divídela en funciones más pequeñas.
- **Manejo de Errores:** Incluye manejo de errores (`try/catch`) en operaciones de red, manipulación del DOM o cálculos complejos, documentando adecuadamente el comportamiento en caso de fallo.
- **Indentación y Formato:** Mantén una indentación y espaciado consistente. Elimina siempre el código comentado o en desuso (dead code) antes de guardar.

## 4. Mejores Prácticas Web (HTML/CSS)
- **HTML Semántico:** Prioriza el uso de etiquetas semánticas (`<main>`, `<article>`, `<section>`, `<nav>`) en lugar de abusar de `<div>`.
- **CSS Modular:** Organiza las reglas CSS lógicamente (ej. Layout > Tipografía > Colores > Animaciones) y documenta las secciones con comentarios (ej. `/* --- Header Styles --- */`).
