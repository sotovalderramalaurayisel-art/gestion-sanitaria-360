# Gestión Sanitaria 360 SAS

Prototipo de aplicación web en español con sitio público y panel de gestión.

## Ejecutar

Requiere Node.js 22 o superior. Sin dependencias externas.

```sh
npm start
```

El servidor utiliza el puerto 3000; se puede configurar con `PORT`.

```sh
npm test
```

## Funciones

- Sitio público con servicios, presentación y formulario de solicitud.
- Panel con indicadores, búsqueda, clientes y trámites con edición de estado y fecha.
- Referencias documentales con vencimiento (no carga archivos).
- Solicitudes visibles en el panel del mismo navegador.
- Diseño adaptable a móviles.

## Alcance de esta versión

Es una demostración sin autenticación ni base de datos compartida. Incluye datos ficticios y guarda los cambios en localStorage. Las solicitudes no se envían a la empresa. No usar información personal, documentos ni datos reales. Borrar el almacenamiento del navegador elimina los registros locales.

Para producción faltan autenticación, roles, almacenamiento seguro, copias de seguridad, carga de archivos, envío de solicitudes y revisión de privacidad y contenido comercial. No existe integración con INVIMA ni se garantiza la aprobación de trámites.

## Juego para iPhone: Lluvia de estrellas

Disponible en `public/juego/`, independiente del panel sanitario. Con `npm start`, abrir la ruta `/juego/`. Para instalar desde una dirección HTTPS, abrir en Safari → Compartir → Añadir a pantalla de inicio. El juego prepara una caché sin conexión y muestra su estado. No está publicado en App Store. Récord local, sin cuenta, anuncios ni compras.

Arrastrar la nave o usar las flechas. Estrellas: 10 puntos; meteoritos y estrellas perdidas: una vida. Cada 150 puntos sube el nivel. Cambiar de aplicación pausa la partida.
