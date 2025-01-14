
# Final UTN - Diplomatura Web Full Stack 🌐

Este proyecto es una **API REST** desarrollada como trabajo final para la Diplomatura en Desarrollo Web Full Stack de la **UTN**. La API permite realizar operaciones CRUD sobre los siguientes modelos: **User**, **Product** y **Category**.

---

## 🛠️ Tecnologías utilizadas

- **Node.js**
- **Express.js**
- **MongoDB** con **Mongoose**
- **jsonwebtoken**
- **bcrypt**
- **dotenv**

---

## 🚀 Cómo correr el proyecto

### 1. Clonar el repositorio
```bash
git clone https://github.com/Jableed43/final-utn-backend.git
```

### 2. Instalar dependencias
Accede a la carpeta raíz del proyecto y ejecuta:
```bash
npm i
```

### 3. Configurar variables de entorno
Asegúrate de que el archivo `.env` del proyecto esté configurado con las credenciales correctas para conectar a MongoDB. Un ejemplo del archivo `.env` podría ser:
```
MONGO_URI=mongodb://localhost:27017/mi_base_de_datos
JWT_SECRET=mi_secreto_jwt
PORT=3000
```

### 4. Configurar la base de datos
1. Abre **MongoDB Compass** u otra herramienta para gestionar MongoDB.
2. Conecta a tu instancia de MongoDB y verifica que la base de datos mencionada en el `.env` esté accesible.

### 5. Iniciar el servidor
Ejecuta el siguiente comando para iniciar el servidor en modo de desarrollo:
```bash
npm run dev
```

---

## 📌 Endpoints disponibles

### **User**
- `GET` - `/api/user/get`  
- `POST` - `/api/user/create`  
- `DELETE` - `/api/user/delete/:id`  
- `PUT` - `/api/user/update/:id`  

### **Product**
- `GET` - `/api/product/get`  
- `POST` - `/api/product/create`  
- `DELETE` - `/api/product/delete/:id`  
- `PUT` - `/api/product/update/:id`  

### **Category**
- `GET` - `/api/category/get`  
- `POST` - `/api/category/create`  
- `DELETE` - `/api/category/delete/:id`  
- `PUT` - `/api/category/update/:id`  

---

## 🔧 Ejemplos de datos mock

### **User**
Para probar la creación de un usuario con `POST /api/user/create`, puedes usar el siguiente ejemplo:
```json
{
  "name": "gabriel",
  "password": "asd",
  "email": "gabriel@gmail.com",
  "role": "ADMIN"
}
```

### **Product**
Para probar la creación de un producto con `POST /api/product/create`, puedes usar el siguiente ejemplo:
```json
{
  "name": "zapas",
  "status": "AVAILABLE",
  "price": 10
}
```

### **Category**
Para probar la creación de una categoría con `POST /api/category/create`, puedes usar el siguiente ejemplo:
```json
{
  "name": "zapas",
  "description": "Calzado deportivo de alta calidad"
}
```

---

## 🧪 Comandos para probar la aplicación

1. **Iniciar el servidor**:  
   ```bash
   npm run dev
   ```

2. **Probar los endpoints**:  
   Usa herramientas como **Postman** u otro **cliente** para enviar solicitudes a los endpoints listados anteriormente. Por ejemplo, para obtener todos los usuarios:
   ```bash
   http://localhost:3000/api/user/get
   ```

3. **Probar datos mock**:  
   Envía los ejemplos de datos JSON mencionados anteriormente en el cuerpo de las solicitudes `POST`.

