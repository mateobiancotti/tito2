// Referencia al contenedor de contenido
const content = document.getElementById('content');

// Plantillas para las diferentes "páginas"
const templates = {
  categories: `
    <section id="page-header">
      <h2>Categorías</h2>
    </section>
    <section id="product1" class="section-p1">
      <h2>Celulares</h2>
      <div class="pro-container" >
        <div class="pro" onclick="window.location.href='pagProductosSubidos.html?id=1'">
          <img src="assets/c1.jpg" alt="">
          <div class="des">
            <h5>Celular Samsung Galaxy A15 - Sm-A155mzkaaro Azul</h5>
            <h4>$299999</h4>
          </div>
        </div>
        <div class="pro" onclick="window.location.href='pagProductosSubidos.html?id=2'">
          <img src="assets/c2.jpg" alt="">
          <div class="des">
            <h5>Celular Motorola Moto G24 Xt2423-1 Lavanda</h5>
            <h4>$249999</h4>
          </div>
        </div>
        <div class="pro" onclick="window.location.href='pagProductosSubidos.html?id=3'">
          <img src="assets/c3.jpg" alt="">
          <div class="des">
            <h5>Celular Motorola Moto G24 Xt2423-1 Verde</h5>
            <h4>$249999</h4>
          </div>
        </div>
        <div class="pro" onclick="window.location.href='pagProductosSubidos.html?id=4'">
          <img src="assets/c4.jpg" alt="">
          <div class="des">
            <h5>Celular Zte Blade A34 Gris</h5>
            <h4>$139999</h4>
          </div>
        </div>
        </div>
    </section>
    <section id="product1" class="section-p1">
      <h2>Accesorios</h2>
      <div class="pro-container" >
        <div class="pro" onclick="window.location.href='pagProductosSubidos.html?id=9'">
          <img src="assets/c9.jpg" alt="">
          <div class="des">
            <h5>Auricular Motorola Moto Buds 085</h5>
            <h4>$69000</h4>
          </div>
        </div>
        </div>
    </section>
    <a href="/error.html" target="_blank" class="whatsapp-link">
      <img src="assets/whatsapp.png" alt="WhatsApp" />
    </a>
  `,
  about: `
    <section class="faq">
      <h2>FAQ (Preguntas Frecuentes)</h2>
      <div class="pro-container">
      <h3>¿Quienes somos?</h3>
      <p>
      Somos una empresa dedicada a la venta de celulares en línea. Nuestro objetivo es brindarte la mejor experiencia de compra y garantizar que tus productos se encuentren en perfectas condiciones.
      </p>
      <h3>¿Cómo puedo cancelar mi compra?</h3>
      <p>
      Si deseas cancelar tu compra, ponte en contacto con nuestro equipo de atención al cliente a través de nuestro número de telefono o correo electrónico. Te responderemos en la brevedad posible.
      </p>
      <h3>¿Cómo comprar en MATEO Cell Shop?</h3>
      <p>
        Entrá en nuestra página web y busca los productos que necesites. Después de encontrar el producto que deseas comprar, haz click en "Agregar al carrito". Luego, ve a la sección "Carrito" y confirma tu compra.
      </p>
        <h3>¿Cómo puedo contactar con el soporte técnico?</h3>
        <p>
          Puedes contactar con nuestro equipo de soporte técnico a través de nuestro número de telefono o correo electrónico. Te responderemos en la brevedad posible.
        </p>
        <h3>¿Cómo puedo pagar mis compras?</h3>
        <p>
          Puedes pagar tus compras con tarjeta de crédito o débito, o con PayPal. También puedes recibir tu compra en efectivo en un establecimiento comercial.
        </p>
        <h3>¿Cómo puedo revisar mis pedidos?</h3>
        <p>
          Puedes revisar tus pedidos en nuestra página web o en tu cuenta de cliente. También puedes contactar con nuestro equipo de atención al cliente a través de nuestro número de telefono o correo electrónico. Te responderemos en la brevedad posible.
        </p>
        <h3>¿Cómo puedo devolverse un producto?</h3>
        <p>
          Si deseas devolver un producto, ponte en contacto con nuestro equipo de atención al cliente a través de nuestro número de telefono o correo electrónico. Te responderemos en la brevedad posible.
        </p>
        <h3>¿Cómo puedo recibir mis productos?</h3>
        <p>
          Puedes recibir tus productos en un establecimiento comercial o en tu domicilio. También puedes elegir la forma de entrega más conveniente para ti.
        </p>
      </div>
    </section>
    <section class="faq">
    <h2>Términos y condiciones</h2>
    <div class="pro-container">
      <h3>Política de privacidad</h3>
      <p>
        En MATEO Cell Shop, nos comprometemos a mantener la confidencialidad y privacidad de tus datos personales. Estos términos y condiciones establecen cómo utilizamos y protegemos tus datos.
      </p>
      <h3>Términos de uso</h3>
      <p>
        Estos términos y condiciones regulan el uso de MATEO Cell Shop y de sus productos y servicios. Si no aceptas estos términos y condiciones, deberás dejar de usar MATEO Cell Shop.
      </p>
      <h3>¿Cómo puedo recibir mis productos?</h3>
      <p>
        Puedes recibir tus productos en un establecimiento comercial o en tu domicilio. También puedes elegir la forma de entrega más conveniente para ti.
      </p>
      <h3>Cambios en estos términos y condiciones</h3>
      <p>
        Puedes solicitar cambios en estos términos y condiciones a través de nuestro número de telefono o correo electrónico. También puedes contactar con nuestro equipo de atención al cliente a través de nuestro número de telefono o correo electrónico. Te responderemos en la brevedad posible.
      </p>
      <h3>¿Cómo puedo contactar con el soporte técnico?</h3>
      <p>
        Puedes contactar con nuestro equipo de soporte técnico a través de nuestro número de telefono o correo electrónico. Te responderemos en la brevedad posible.
      </p>
    </div>
    </section>
    <a href="/error.html" target="_blank" class="whatsapp-link">
      <img src="assets/whatsapp.png" alt="WhatsApp" />
    </a>
  `,
  user: `
        <form class="form-box">
        <div class="login-cont" id="login">
            <div class="top">
                <header>Iniciar Sesión</header>
            </div>
            <div class="input-box">
                <input type="text" class="input-field" placeholder="Email" id="username" required>
                <i class="fa-solid fa-envelope"></i>
            </div>
            <div class="input-box">
                <input type="password" class="input-field" placeholder="Contraseña" id="password" required>
                <i class="fa-solid fa-lock"></i>
              </div>
            <div class="input-box">
                <input type="submit" class="sumbit" value="Iniciar Sesión">
            </div>
        </div>
      </form>
      <a href="/error.html" target="_blank" class="whatsapp-link">
        <img src="assets/whatsapp.png" alt="WhatsApp" />
      </a>
  `,
  admin: `
    <section class="section-p1">
        <form id="product-form">
            <h2>Carga de Productos</h2>
            <label for="nombre-producto">Nombre del producto</label>
            <input type="text" id="nombre-producto" required>
            <label for="descripcion-producto">Descripción del producto</label>
            <input type="text" id="descripcion-producto" required>
            <label for="precio-producto">Precio del Producto</label>
            <input type="number" id="precio-producto" step="0.01" required>
            <label for="imagen-producto">Imagen del Producto</label>
            <input type="file" id="imagen-producto" required>
            <label for="categoria-producto">Categoría del producto</label>
            <input type="text" id="categoria-producto" required>
            <input type="submit" value="Añadir" id="submit-button">
        </form>
        <table class="product-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Producto</th>
                    <th>Descripción</th>
                    <th>Imagen</th>
                    <th>Precio</th>
                    <th>Categoría</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody id="product-table-body">
            </tbody>
        </table>
      </section>
  `
};

// Función para cambiar de "página"
function loadPage(page) {
  content.innerHTML = templates[page];

  if (page === 'user') {
    attachLoginEvent();
  } else if (page === 'admin') {
    loadAdminPage();
  } else if (page === 'categories') {
    loadCategoriesPage();
  }
}

// Función para cargar la página de categorías con productos
function loadCategoriesPage() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const productList = document.getElementById("product-list");

  // Limpiar la lista de productos
  productList.innerHTML = "";

  // Mostrar productos en la página
  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("pro");
    productDiv.innerHTML = `
      <img src="${product.imagen}" alt="${product.nombre}">
      <div class="des">
        <h5>${product.nombre}</h5>
        <h4>$${product.precio}</h4>
      </div>z
      <a href="error.html"><i class="fa-solid fa-cart-shopping"></i></a>
    `;
    productList.appendChild(productDiv);
  });
}

// Función para cargar la página de administración
function loadAdminPage() {
  // Cargar los productos almacenados en localStorage
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const tableBody = document.getElementById("product-table-body");

  // Limpiar tabla
  tableBody.innerHTML = "";

  // Mostrar productos en la tabla
  products.forEach(product => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${product.id}</td>
      <td>${product.nombre}</td>
      <td>${product.descripcion}</td>
      <td><img src="${product.imagen}" alt="Producto" width="50"></td>
      <td>${product.precio}</td>
      <td>${product.categoria}</td>
      <td><button class="delete-btn" data-id="${product.id}">Eliminar</button></td>
    `;
    tableBody.appendChild(row);
  });

  // Asignar evento al formulario para agregar productos
  const form = document.getElementById("product-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const productName = document.getElementById("nombre-producto").value;
    const productDescription = document.getElementById("descripcion-producto").value;
    const productPrice = document.getElementById("precio-producto").value;
    const productCategory = document.getElementById("categoria-producto").value;
    const productImage = document.getElementById("imagen-producto").files[0];

    if (!productImage) {
      alert("Por favor, selecciona una imagen para el producto.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = function() {
      // Generar ID aleatorio de 2 dígitos
      const randomId = generateRandomId();

      // Verificar si el ID ya existe en los productos
      const products = JSON.parse(localStorage.getItem("products")) || [];
      const existingProduct = products.find(product => product.id === randomId);

      if (existingProduct) {
        alert("Ya existe un producto con este ID. Por favor, intente nuevamente.");
        return;
      }

      const newProduct = {
        id: randomId,
        nombre: productName,
        descripcion: productDescription,
        precio: productPrice,
        categoria: productCategory,
        imagen: reader.result // Convertimos la imagen a base64
      };

      // Guardar producto en localStorage
      products.push(newProduct);
      localStorage.setItem("products", JSON.stringify(products));

      // Limpiar el formulario y recargar la tabla
      form.reset();
      loadAdminPage();
    };
    reader.readAsDataURL(productImage);
  });

  // Asignar evento de eliminación a los botones dinámicamente generados
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach(button => {
    button.addEventListener("click", function() {
      const productId = this.getAttribute("data-id");
      deleteProduct(productId);
    });
  });
}

// Función para generar un ID aleatorio de 2 dígitos
function generateRandomId() {
  return Math.floor(Math.random() * 90) + 10; // Genera un número de 2 dígitos aleatorios entre 10 y 99
}

// Función para eliminar un producto
function deleteProduct(productId) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const updatedProducts = products.filter(product => product.id != productId); // Cambio a != para comparar correctamente los números
  localStorage.setItem("products", JSON.stringify(updatedProducts));
  loadAdminPage(); // Recargar la página de administración para reflejar el cambio
}

// Eventos para los botones de navegación
document.getElementById('categoriesBtn').addEventListener('click', () => loadPage('categories'));
document.getElementById('aboutBtn').addEventListener('click', () => loadPage('about'));
document.getElementById('userBtn').addEventListener('click', () => loadPage('user'));
document.getElementById('adminBtn').addEventListener('click', () => loadPage('admin')); 

// Cargar una página inicial al cargar el DOM (por ejemplo, categorías)
document.addEventListener("DOMContentLoaded", () => loadPage('categories'));
function attachLoginEvent() {
  const form = document.querySelector(".form-box");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const validUsername = "admin";
      const validPassword = "1234";

      if (username === validUsername && password === validPassword) {
        alert("Inicio de sesión exitoso.");
        loadPage('admin')
      } else {
        alert("Email o contraseña incorrectos.");
      }
    });
  } else {
    console.error("Formulario no encontrado.");
  }
}