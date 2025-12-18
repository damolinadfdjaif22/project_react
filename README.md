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
