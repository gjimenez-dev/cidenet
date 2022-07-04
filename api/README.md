# API

El objetivo de este proyecto es tener toda la lógica necesaria de la solución para interactuar con la base de datos de MySQL. Además, cualquier regla de negocio debe estar en esta API.

## Versión

1.0.0
	
## Estructura del proyecto api

El proyecto está desarrollado con nodejs (express), y está dividido de la siguiente manera:

-   controladores: [controller](./controllers)
-   modelos: [models](./models/)
-   rutas: [routes](./routes/)
-   servicios: [services](./services/)

## Instalación

Para iniciar el funcionamiento del proyecto api, hacemos lo siguiente:

1. Instalar la API

    ```
    cd api
    npm install ó npm i
    ```

2. Configurar las variables de entorno en el archivo .env

    Ejemplo:

    ```
    PORT = <port>
    ```

3. Iniciar la API

    ```
    npm start
    ```

# Endpoints

## /routes/area.js

### /api/area/

Método que obtiene todas las áreas activas.

#### Tipo

```
GET
```

#### Request

```
N/A
```

#### Response

```
[
    nArea,
    cDescription
]
```

## /routes/country.js

### /api/country/

Método que obtiene todos paises activos del empleo.

#### Tipo

```
GET
```

#### Request

```
N/A
```

#### Response

```
[
    nCountry,
    cDescription
]
```

## /routes/employee.js

### /api/employee/

Método que obtiene todos los empleados registrados.

#### Tipo

```
GET
```

#### Request

```
N/A
```

#### Response

```
[
    nId,
    cFirstName,
    cOthersName,
    cSurname,
    cSecondSurname,
    nCountry,
    nTypeID,
    cNumberID,
    cEmail,
    dAdmissionDate,
    nArea,
    bStatus,
    bActive,
    dRegisterDate,
    dLastDate,
    dDeleteDate
]
```

### /api/employee/:type/:numberid

Método que obtiene la información de un empleado por su ID.

#### Tipo

```
GET
```

#### Request

```
type,
numberid
```

#### Response

```
[
    nId,
    cFirstName,
    cOthersName,
    cSurname,
    cSecondSurname,
    nCountry,
    nTypeID,
    cNumberID,
    cEmail,
    dAdmissionDate,
    nArea,
    bStatus,
    bActive,
    dRegisterDate,
    dLastDate,
    dDeleteDate
]
```

### /api/employee/

Método que crea un registro de empleado nuevo.

#### Tipo

```
POST
```

#### Request

```
cFirstName,
cOthersName,
cSurname,
cSecondSurname,
nCountry,
nTypeID,
cNumberID,
cEmail,
dAdmissionDate,
nArea
```

#### Response

```
No regresa ningún dato, pero el status de la respuesta es 200.
```

### /api/employee/

Método que actualiza un registro de empleado.

#### Tipo

```
PUT
```

#### Request

```
nId,
cFirstName,
cOthersName,
cSurname,
cSecondSurname,
nCountry,
nTypeID,
cNumberID,
cEmail,
dAdmissionDate,
nArea
```

#### Response

```
No regresa ningún dato, pero el status de la respuesta es 200.
```

### /api/employee/:id

Método que elimina el registro de un empleado por su id.

#### Tipo

```
DELETE
```

#### Request

```
nId
```

#### Response

```
No regresa ningún dato, pero el status de la respuesta es 200.
```

## /routes/type_id.js

### /api/type-id/

Método que obtiene todos los tipos de identificación activos.

#### Tipo

```
GET
```

#### Request

```
N/A
```

#### Response

```
[
    nTypeID,
    cDescription
]
```