# Resumen de la Arquitectura del Proyecto Demo

Este proyecto se basa en una aplicación desplegada en tres clústers de Azure Kubernetes Service (AKS), cada uno alojando diferentes partes de la aplicación. A continuación, se proporciona un resumen de cómo cada clúster y sus componentes trabajan en conjunto.

## AKS Backend

Este clúster aloja dos servicios esenciales para la funcionalidad de la aplicación:

- `app-deployment.yaml`: Este es el despliegue de la aplicación principal, la cual se encarga de gestionar las operaciones del backend como consultar y manipular la base de datos.

- `mysql-deployment.yaml`: Este es el despliegue de una base de datos MySQL, donde se almacenan todos los datos que la aplicación utiliza.

## AKS Cross

Este clúster aloja tres microservicios, cada uno implementado en un contenedor Docker separado:

- `compra-deployment.yaml`: Este microservicio gestiona la operación de compra de productos.

- `fecha-deployment.yaml`: Este microservicio proporciona funcionalidades relacionadas con la fecha y hora.

- `impuesto-deployment.yaml`: Este microservicio calcula los impuestos correspondientes a cada compra.

## AKS Frontend

Este clúster aloja la interfaz de usuario de la aplicación:

- `app-deployment.yaml`: Este despliegue maneja las solicitudes de los usuarios y presenta la interfaz de usuario. Se comunica con los otros clústers para obtener y mostrar la información relevante a los usuarios.

Los tres clústers trabajan en conjunto para proporcionar una aplicación completa. Los usuarios interactúan con el clúster Frontend, que a su vez se comunica con los clústers Cross y Backend para realizar las operaciones necesarias y presentar la información al usuario.
