# Github - Issues, actions, projects, security e insights

[Descargar Investigación detallada](https://github.com/Danielammmm/Actions_Repo/blob/c0f2fa326b514fc1f16c168908454e9aedf52ea7/Investigaci%C3%B3n%20detallada/4%20-%20Github%20-%20Issues%2C%20actions%2C%20projects%2C%20security%20e%20insights.docx)

**Ejemplos en el repositorio**
## Uso de Issues:
### ●	Usos: 
**Reportar errores (bugs):**
-	Documentar errores encontrados en el software. 
-	Incluir descripciones claras, pasos para reproducir el problema, resultados esperados y observados, capturas de pantalla, y registros de errores.

**Solicitar nuevas funcionalidades (features):**
-	Proponer mejoras o nuevas características para el proyecto.
-	Discutir y priorizar la implementación con el equipo.

**Planificar tareas o documentos:** 
-	Desglosar proyectos grandes en tareas pequeñas.
-	Asignar responsables, etiquetar y organizar con milestones y labels.

  
### ●	Implementación y ejemplo: 
1.	Crear un Issue en el repositorio: issues>New Issue 
 
2.	Añadir nombre y descripción 
 
3.	Agregar detalles necesarios como: assigness, labels, projects, milestone, relationships o development 
 
4.	Crear Issue

## Uso de Actions

#### ● ¿Para qué sirve?
GitHub Actions es una herramienta poderosa para la automatización de flujos de trabajo en los repositorios de GitHub. Se puede utilizar para diversas tareas, incluyendo:

- **Integración continua (CI):** Compilar y probar automáticamente el código cuando se realizan cambios en el repositorio, garantizando que el software sea estable.
- **Despliegue continuo (CD):** Publicar automáticamente una aplicación en un servidor o servicio, como **Azure**, **AWS**, **IIS**, entre otros.
- **Automatización de tareas:** Ejecutar scripts para tareas repetitivas, como limpieza de datos, generación de reportes, actualización de documentación y mantenimiento del repositorio.

---

#### ● Implementación y un ejemplo:
Para configurar un flujo de trabajo en GitHub Actions, sigue estos pasos:

1. **Crear un archivo de workflow**
   - Ubícate en la carpeta `.github/workflows/` dentro del repositorio.
   - Crea un archivo YAML con la configuración deseada (por ejemplo, `deploy-nodejs-azure.yml`).
   
2. **Ejemplo de workflow para desplegar una aplicación Node.js en Azure Web App:**

   ```yaml
   name: Deploy Node.js to Azure Web App

   on:
     push:
       branches:
         - main

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest

       steps:
         - name: Checkout repository
           uses: actions/checkout@v3

         - name: Set up Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '16'

         - name: Install dependencies
           run: npm install

         - name: Build project
           run: npm run build

         - name: Deploy to Azure Web App
           uses: azure/webapps-deploy@v2
           with:
             app-name: "<nombre-de-tu-app>"
             publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
             package: .
   ```

3. **Configurar secretos**
   - En GitHub, ve a **Settings > Secrets and variables > Actions** y agrega el secreto `AZURE_WEBAPP_PUBLISH_PROFILE`, que se obtiene desde el portal de Azure.

4. **Realizar el commit**
   - Guarda y confirma el archivo del workflow en el repositorio.
   - GitHub Actions ejecutará el flujo de trabajo automáticamente en cada `push` a la rama `main`.

---

### Consideraciones adicionales
- Se pueden definir triggers adicionales, como `pull_request`, `schedule` (para ejecución periódica) o `workflow_dispatch` (ejecución manual).
- GitHub Actions permite ejecutar tests antes del despliegue para asegurar la calidad del código.
- Se pueden encadenar múltiples jobs para diferentes entornos (desarrollo, pruebas, producción).

Este flujo de trabajo facilita la implementación de CI/CD, mejorando la eficiencia en el desarrollo y la entrega de software.


## Projects: 
### ●	¿Para qué sirve? 
-	Planificar tareas: dividir un proyecto en pequeños pasos o actividades.
-	Organizar el trabajo: usar columnas como To Do, In Progress, y Done.
-	Rastrear progreso: saber qué tareas están pendientes, en proceso o terminadas.
### ●	Implementación y ejemplo: 
1.	Ir a la pestaña de Projects>New Project
 
2.	Elegir el template de preferencia, asignar un nombre y crear el proyecto: 
 
3.	Agregar los nuevos items necesarios: 
 
4.	Mantener el monitoreo del proyecto.




 
