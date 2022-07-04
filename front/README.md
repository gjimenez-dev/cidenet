

Para iniciar el funcionamiento del proyecto front, hacemos lo siguiente:

Instalar paquetes

cd front
npm install
Configurar las variables de entorno del frontend

2.1. Ir a la carpeta environments

cd front/src/environments
2.2. Configurar las variables de entorno en desarrollo, en el archivo environment.ts

Ejemplo:

```
{
  production: false,

  API: 'http://<ip servidor api>:<puerto>'
}

```

3. Compilar y correr el frontend.

En desarrollo

```
ng serve o npm start
```

En Producción

```
ng build
```
## Estructura del proyecto front

El proyecto está desarrollado con angular2+, y está dividido de la siguiente manera:

- app
  - core
    - services
  - dashboard
    - pages
      - catalog-employee
      - home
      - modal-employee
  - shared
    - footer
    - header
- assets
  - images
  - styles
- environments


Componentes comunes de la aplicacion:
### 1. Core

En esta carpeta se declaran los proveedores de datos de la aplicación, estos son consumidos por los componentes.

### 2. Dashboard

En esta carpeta de declaran los componentes y módulos de la aplicación, cada componente esta compuesto de al menos 3 tipos archivos: *.html, *.scss y *.ts.

### 3. Shared

En esta carpeta de declaran los componentes compartidos y que son llamados comunmente desde otros módulos, cada componente esta compuesto de al menos 3 tipos archivos: *.html, *.scss y *.ts.

### 4. Assets

En esta carpeta de almacenan imágenes predeterminadas del sistema y estilos globales.

### 5. Enviroments

En esta carpeta se declaran las variables de entorno para el despliegue de la aplicacion en desarrollo y en producción


