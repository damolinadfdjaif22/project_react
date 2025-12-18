# Proyecto React con Vite

## Descripción
Proyecto base desarrollado con React y Vite como parte del trabajo grupal.

## Requisitos
- Node.js (v18 o superior)

## Instalación
```bash
npm install
npm run dev
```

## Funcionalidades implementadas

### Carga dinámica de características (Features)

Se implementó una sección de características utilizando datos locales en formato JSON y renderizado dinámico con React.

**Detalles técnicos:**

- Los datos se almacenan en `src/data/features.json`.
- Se utiliza el hook `useEffect` para cargar el archivo JSON de forma dinámica.
- Los datos se guardan en estado local mediante `useState`.
- Cada elemento se renderiza usando un componente reutilizable.

### Componente FeatureCard

Se creó el componente reutilizable `FeatureCard` para mostrar cada característica.

**Props utilizadas:**

- `title` (string): título de la característica.
- `description` (string): descripción de la característica.

**Buenas prácticas aplicadas:**

- Uso de `props` tipadas con `PropTypes`.
- Uso de `key` único al renderizar listas.
- Separación clara entre datos y presentación.
- JSX limpio sin lógica compleja.

### Manejo de efectos con useEffect

Se implementó el hook `useEffect` para:

- Cargar los datos locales desde `features.json`.
- Evitar ejecuciones innecesarias al montar el componente.
- Mantener el código organizado y legible.

---

## Componente Stats

Se implementó el componente **Stats** para mostrar estadísticas simples de interacción del usuario, como visitas y likes, utilizando estado local y persistencia básica.

**Detalles técnicos:**

- Componente ubicado en `src/components/Stats/Stats.jsx`.
- Uso del hook `useState` para manejar los contadores de visitas y likes.
- Persistencia de datos mediante `localStorage` para mantener el estado entre recargas.
- Uso de funciones de actualización funcional (`setState(prev => prev + 1)`) para evitar condiciones de carrera.
- Renderizado accesible con `aria-live` para anunciar cambios dinámicos.

**Funcionalidades:**

- Incremento de visitas.
- Incremento de likes.
- Botón para restablecer estadísticas.

---

## Componente Footer

Se desarrolló el componente **Footer** para mostrar información final del proyecto y enlaces externos relevantes.

**Detalles técnicos:**

- Componente ubicado en `src/components/Footer/Footer.jsx`.
- Uso de estructura semántica HTML (`footer`, `nav`).
- Inclusión de enlaces externos a GitHub y LinkedIn.
- Aplicación de buenas prácticas de seguridad en enlaces externos:
  - Uso de `target="_blank"` junto con `rel="noopener noreferrer"`.
- Año dinámico generado automáticamente con JavaScript.

---

## Manejo de tema claro / oscuro

La aplicación implementa un sistema de tema claro y oscuro que afecta a toda la interfaz.

**Detalles técnicos:**

- Estado global del tema gestionado en `App.jsx`.
- Cambio de tema mediante `useState`.
- Persistencia del tema en `localStorage`.
- Aplicación de clases dinámicas (`.app.light` / `.app.dark`) para controlar estilos.
- Compatibilidad visual con todos los componentes (Hero, Features, Stats y Footer).

---

## Estilos y diseño

Se aplicaron estilos globales y específicos para asegurar coherencia visual y buena experiencia de usuario.

**Aspectos destacados:**

- Uso de Flexbox y Grid para layout responsivo.
- Contraste adecuado para ambos temas (claro / oscuro).
- Diseño consistente entre secciones.
- Animaciones y transiciones suaves.
- Uso de clases reutilizables y separación entre estructura y estilo.

---

## Accesibilidad

Se aplicaron principios básicos de accesibilidad web:

- Uso de etiquetas semánticas (`header`, `main`, `section`, `footer`).
- Textos alternativos y etiquetas ARIA donde corresponde.
- Uso de `.sr-only` para contenido accesible solo para lectores de pantalla.
- Estados dinámicos anunciados con `aria-live`.
