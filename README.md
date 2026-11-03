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
