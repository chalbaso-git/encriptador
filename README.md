# Desafío Encriptador - Alura ONE-Oracle

Este proyecto es una aplicación web desarrollada como parte del desafío del curso Alura ONE-Oracle. La aplicación permite encriptar y desencriptar mensajes de manera segura utilizando un conjunto de reglas específicas. También incluye funcionalidades para copiar el texto encriptado o desencriptado al portapapeles.

## Descripción

La aplicación realiza las siguientes funciones:

- **Encriptar Texto**: Convierte el texto ingresado en su versión encriptada siguiendo una serie de reglas de sustitución.
- **Desencriptar Texto**: Convierte el texto encriptado de vuelta a su versión original.
- **Copiar al Portapapeles**: Permite copiar el resultado de la encriptación o desencriptación al portapapeles.

## Estructura del Proyecto

### Archivos Principales

- **index.html**: Archivo HTML que define la estructura de la página, incluyendo el encabezado, el formulario de encriptación/desencriptación, y el pie de página.
- **style.css**: Archivo de estilos CSS para el diseño y la apariencia de la aplicación.
- **encriptador.js**: Archivo de JavaScript que contiene la lógica para encriptar, desencriptar, y copiar el texto.

#### index.html

El archivo HTML define la estructura básica de la página y contiene:

- Un encabezado con un enlace al sitio de Alura.
- Un área de entrada de texto para encriptar y desencriptar.
- Botones para realizar la encriptación y desencriptación.
- Un área para mostrar el resultado y copiar el texto.
- Un pie de página con enlaces a perfiles de LinkedIn y GitHub.

#### style.css

El archivo CSS proporciona el estilo visual para la aplicación. Incluye:

- **Estilos globales**: Configuración de márgenes, padding, y fuentes.
- **Estilos específicos**: Diseño para el encabezado, el área de encriptación/desencriptación, y el pie de página.
- **Estilos responsivos**: Ajustes para pantallas de diferentes tamaños.

#### encriptador.js

El archivo JavaScript contiene:

- **Selección de elementos**: Obtención de referencias a los elementos del DOM.
- **Eventos de clic**: Funcionalidad para los botones de encriptar, desencriptar y copiar.
- **Validaciones**: Verificación de que el texto ingresado no esté vacío, no tenga caracteres especiales, y esté en minúsculas.
- **Lógica de encriptación/desencriptación**: Aplicación de las reglas específicas para transformar el texto.

## Uso

**Encriptar Texto**:

1. Ingresa el texto en el área de entrada.
2. Haz clic en el botón "Encriptar".
3. El resultado aparecerá en el área de resultado, y podrás copiarlo al portapapeles usando el botón "Copiar".

**Desencriptar Texto**:

1. Ingresa el texto encriptado en el área de entrada.
2. Haz clic en el botón "Desencriptar".
3. El resultado aparecerá en el área de resultado, y podrás copiarlo al portapapeles usando el botón "Copiar".

## Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
    git clone https://github.com/chalbaso-git/encriptador.git
    Navega al directorio del proyecto:

2. Copiar código
    cd encriptador

3. Abre el archivo index.html en un navegador web.

## Contacto
Desarrollado por César Humberto Alba Sosa. Puedes encontrarme en:

LinkedIn
GitHub
Copiar código

Puedes ajustar cualquier detalle adicional según sea necesario. ¡Espero que esto te sea útil!
