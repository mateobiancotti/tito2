let productos = JSON.parse(localStorage.getItem("products")) || [
    { 
        id: 1, 
        nombre: "Celular Samsung Galaxy A15 - Sm-A155mzkaaro Azul", 
        descripcion: "Celular. Pantalla de 6.5 (1080 x 2340), FHD+. Frecuencia 90 Hz. Super AMOLED. Procesador Mediatek MT6789V/CD. Octa core (2.2GHz,2GHz). Capacidad 128 Gb. RAM 4 Gb. Camara principal 50 + 5 + 2 Mp. F1.8 , F2.2 , F2.4. Conexiones: Wi FI 802.11a/b/g/n/ac 2.4GHz+5GHz, VHT80. Bluetooth 5.3. NFC. USB 2.0 tipo C. Sistema operativo Android. Bateria de 5000 mAh. GPS, Glonass, Beidou, Galileo, QZSS. SIM (SIM 1 + MicroSD). Sensores: acelerometro, huella dactilar, geomagnetico, sensor de luz y proximidad. Incluye cable de datos. No trae cargador.", 
        precio: 299999, 
        imagen: "assets/c1.jpg", 
        disponible: true 
    },
    { 
            id: 2, 
            nombre: "Celular Motorola Moto G24 Xt2423-1 Lavanda", 
            descripcion: "descripcion", 
            precio: 249999, 
            imagen: "assets/c2.jpg", 
            disponible: true 
    },
   
    { 
        id: 3, 
        nombre: "Celular Motorola Moto G24 Xt2423-1 Verde", 
        descripcion: "Celular. Pantalla de 6.56 (20:9), IPS. Resolución de 720 x 1612 HD+, 269 ppi, HiD, 90 Hz. Procesador MediaTek Helio G85, Octa core 2.0 GHz. Almacenamiento de 128 GB, expande hasta 512 GB. Memoria RAM de 4 GB. Camara principal de 50 MP (74.26°) F1.8 + Macro: 2 MP (86.2°) F2.4. Zoom digital (4x fotos / 4x videos). Flash LED. Camara frontal de 8 MP (78°) F2.0. Flash frontal: Backlight. Conexiones: Wifi 802.11 a/b/g/n/ac - WIFI5. Wi-Fi Direct / Hotspot. Bluetooth 5.2. GPS. Conector USB C. Jack de Audio (3.5 mm). Lector de tarjeta micro SD. Sistema operativo Android 14. Bateria de 5000 mAh. Radio FM. Sensores: Acelerómetro, sensor de proximidad, brújula (campo magnético), giroscopio, huella dactilar, desbloqueo facial. Inlcuye: Cubierta protectora, herramienta de extracción de SIM, cable de datos USB-A - USB-C y cargador 20W USB-A.", 
        precio: 249999, 
        imagen: "assets/c3.jpg", 
        disponible: true 
    },
    { 
        id: 4, 
        nombre: "Celular Zte Blade A34 Gris", 
        descripcion: "Celular. Pantalla de 6.6 HD+ (1612x720). Procesador UNISOC SC9863A, Octa core. Capacidad 64 Gb, expandible hasta 256 Gb. Memoria RAM 2 Gb + 4Gb Fusion RAM. Camara principal 8 Mp AF. Camara frontal 5 Mp FF. Conexiones: Wi Fi 802.11b/g/n, 2.4G. Bluetooth 5.2. USB tipo C. Entrada para auricular de 3.5mm. Lector de tarjetas Micro SD. Bateria de 5000 mAh. Acelerómetro / HDR / Fotos panorámicas / Estabilizador de imagen. GPS/AGPS/GLONASS/Galileo. Nano SIM.", 
        precio: 139000, 
        imagen: "assets/c4.jpg", 
        disponible: true 
    },
    { 
        id: 5, 
        nombre: "Celular Motorola Moto G24 Power Xt2425-1 Celeste", 
        descripcion: "Celular. Pantalla de 6.56 (20:9), IPS. Resolución de 720 x 1612 HD+, 269 ppi, HiD, 90 Hz. Procesador MediaTek Helio G85, Octa core 2.0 GHz. Almacenamiento de 128 GB, expande hasta 512 GB. Memoria RAM de 8 GB. Camara principal de 50 MP (74.26°) F1.8 + Macro: 2 MP (86.2°) F2.4. Zoom digital (4x fotos / 4x videos). Flash LED. Camara frontal de 8 MP (78°) F2.0. Flash frontal: Backlight. Conexiones: Wifi 802.11 a/b/g/n/ac - WIFI5. Wi-Fi Direct / Hotspot. Bluetooth 5.2. GPS. Conector USB C. Jack de Audio (3.5 mm). Lector de tarjeta micro SD. Sistema operativo Android 14. Bateria de 6000 mAh. Radio FM. Sensores: Acelerómetro, sensor de proximidad, brújula (campo magnético), giroscopio, huella dactilar, desbloqueo facial. Inlcuye: Cubierta protectora, herramienta de extracción de SIM, cable de datos USB-A - USB-C y cargador 20W USB-A.", 
        precio: 289999, 
        imagen: "assets/c5.jpg", 
        disponible: true 
    },
    { 
        id: 6, 
        nombre: "Celular Samsung Galaxy A55 - Sm-A556e Azul", 
        descripcion: "Celular. Pantalla de 6.6 FHD+ (1080 x 2340) Super AMOLED. Frecuencia 120 Hz. Procesador Exynos1480 Octa core (2.75 GHz, 2 GHz). Capacidad 128 Gb (expandible hasta 1 Tb). RAM 8 Gb. Camara principal 50 + 12 + 5 MP. F1.8, F2.2, F2.4. Zoom digital hasta 10x. Camara frontal 32 Mp. F2.2. Conexiones: Wi Fi 802.11a/b/g/n/ac/ax 2.4GHz+5GHz, HE80, MIMO, 1024-QAM. Bluetooth 5.3. NFC. USB 2.0 tipo C. Lector de tarjetas Micro SD. Sistema operativo Android. Bateria de 5000 mAh. Sensores: Acelerometro, fingerprint. Gyro, geomagnetico, hall, sensor de luz y proximidad. GPS, glonass, veidou, galileo, QZSS. Dual SIM.", 
        precio: 699000, 
        imagen: "assets/c6.jpg", 
        disponible: true 
    },
    { 
        id: 7, 
        nombre: "Celular Samsung Galaxy S24 Fe - Sm-S721b Gris", 
        descripcion: "Celular. Pantalla de 6.7 (1080x2340) FHD+. Frecuencia 120 Hz. Dynamic AMOLED 2X. Procesador Samsung Exynos 2400E, Deca-Core (3.1GHz, 2.9GHz, 2.6GHz, 1.95GHz). Capacidad 256 Gb. RAM 8 Gb. Cámara principal 50 + 12 + 8 Mp. F1.8 , F2.2 , F2.4. Conexiones: Wi FI 802.11 A/b/g/n/ac/ax 2.4 GHz + 5 GHz + 6 GHz, HE160, MIMO, 1024-QAM. Bluetooth 5.3. NFC. USB 3.2 gen1 tipo C. Sistema operativo Android. Bateria de 4700 mAh. GPS, Glonass, Beidou, Galileo, NavIC, QZSS. Dual SIM. Sensores: acelerómetro, barómetro, huella dactilar, giroscopio, geomagnetico, hall sensor, sensor de luz y proximidad.", 
        precio: 1300000, 
        imagen: "assets/c7.jpg", 
        disponible: true 
    },
    { 
        id: 8, 
        nombre: "Celular Xiaomi Redmi Note 13 - Mzb0ga0ar Negro", 
        descripcion: "Celular. Pantalla de 6.67 (1080 x 2400). AMOLED, 1B colors*, 120Hz, 1000 nits (peak). Procesador Snapdragon 685 Octa core (hasta 2.8 Ghz 4 Arm Cortex A73, hasta 1.9 GHz 4 Arm Cortex A5). Capacidad 128 Gb. RAM 6 Gb. Camara principal 108 (9 en 1 de 1,92, 1/1,67) + 8 (ultra gran angular) + 2 Mp (macro). Flash LED. Camara frontal 16 Mp. Conexiones: Bluetooth 5.1. Wi-Fi 802.11 a/b/g/n/ac, dual-band. USB Type-C 2.0, OTG. Conector de 3.5mm. Sistema operativo Android 13, MIUI 14. Bateria de 5000 mAh. GPS, Glonass, Galileo, BDS. Sensores: Huella digital, acelerómetro, brújula, Detección de proximidad virtual. Nano SIM. IP54: protección contra salpicaduras y polvo. Altavoces estéreo duales: Dolby Atmos.", 
        precio: 459000, 
        imagen: "assets/c8.jpg", 
        disponible: true 
    },
	{
        id: 9, 
        nombre: "Auricular Motorola Moto Buds 085", 
        descripcion: "Auricular True Wireless in ear inalambrico. Diseño de auriculares de ajuste ergonómico para mayor comodidad y ajuste seguro. Control táctil: Para un control sin esfuerzo con simples gestos directamente desde los auriculares. Estuche de transporte de bolsillo: Para una fácil portabilidad y almacenamiento. Duración de la batería: Admite hasta 15 horas de reproducción. Menor consumo de energía. Se recarga rápidamente con un cable de carga USB-C compatible. Protección clasificada IPX5 para todo tipo de clima contra sudor, derrames y accidentes. Botón táctil inteligente. Micrófono para llamadas manos libre. Utiliza cada auricular como BT Mono Headset. Asistente de control de voz. Sonido stereo de alta fidelidad. Asistente de voz inteligente: Siri, Google Assistant. Compatibilidad: Android / iOS.", 
        precio: 69000, 
        imagen: "assets/c9.jpg", 
        disponible: true 
    },
];

// Contenedor de productos en el HTML
const contenedorProductos = document.getElementById('products-container');

// Función para renderizar los productos en la página de listado de productos
function renderizarProductos() {
    productos.forEach((producto) => {
        // Crear elemento "a" contenedor del producto
        const link = document.createElement('a');
        link.href = `pagProductosSubidos.html?id=${producto.id}`;  // Enlace con el ID del producto
        
        // Crear la tarjeta del producto
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('product');

        // Crear y agregar la imagen
        const imagen = document.createElement('img');
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;
        productoDiv.appendChild(imagen);

        const categoria = document.createElement('span');
        categoria.textContent = producto.categoria;
        productoDiv.appendChild(categoria);

        // Crear y agregar el nombre
        const nombre = document.createElement('h5');
        nombre.textContent = producto.nombre;
        productoDiv.appendChild(nombre);
        productoDiv.classList.add('des');

        // Crear y agregar el precio
        const precio = document.createElement('h4');
        precio.textContent = `$${producto.precio.toLocaleString()}`;
        productoDiv.appendChild(precio);

        // Agregar la tarjeta de producto al enlace
        link.appendChild(productoDiv);

        // Agregar el enlace con la tarjeta al contenedor de productos
        contenedorProductos.appendChild(link);
    });
}


renderizarProductos();