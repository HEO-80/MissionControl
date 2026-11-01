// ============================================================
// MissionControl — HEO
// ============================================================

const STORAGE_KEY = 'missioncontrol_v2';

const CATEGORY_LABELS = {
    priority: '🔥 Prioridad',
    active: '🚀 En curso',
    idea: '💡 Idea',
    teaching: '📚 Docencia',
    gaming: '🎮 Gaming',
    skills: '🧠 Habilidades',
    home: '🏠 Casa & Cocina',
    personal: '🌱 Personal',
    paused: '⏸ Pausado',
    done: '✅ Cerrado'
};

const CATEGORY_ORDER = { priority:0, active:1, teaching:2, gaming:3, skills:4, home:5, personal:6, idea:7, paused:8, done:9 };

// ---------- DATOS INICIALES ----------
const DEFAULT_PROJECTS = [

    // =================== 🔥 PRIORIDAD ===================
    {
        id: 'codetyper',
        name: 'CodeTyper',
        repo: 'HEO-80/codetyper',
        description: 'App freemium de mecanografía orientada a programación. Reposicionar hacia typing/writing experience. Cerrar y publicar como portfolio.',
        category: 'priority',
        progress: 60,
        tasks: [
            { text: 'Definir posicionamiento final (typing vs learn-to-code)', done: false },
            { text: 'Cerrar MVP funcional', done: false },
            { text: 'Publicar en LinkedIn como pieza de portfolio', done: false }
        ]
    },
    {
        id: 'quicktest',
        name: 'QuickTest Exam',
        repo: 'HEO-80/quicktest-exam',
        description: 'Simulador de exámenes de certificaciones (Azure + AWS) y oposiciones. Proyecto principal de monetización.',
        category: 'priority',
        progress: 40,
        tasks: [
            { text: 'Completar banco de preguntas Azure', done: false },
            { text: 'Diseñar modelo de suscripción/pago', done: false },
            { text: 'Landing page de producto', done: false },
            { text: 'Primeras ventas / validar mercado', done: false }
        ]
    },
    {
        id: 'unipro',
        name: 'Bachelor UNIPRO',
        repo: '',
        description: 'Grado online en Informática (UNIPRO Universitat, Andorra) para habilitar como profesor de FP en lo público. Prioridad alta por las materias y organización.',
        category: 'priority',
        progress: 10,
        tasks: [
            { text: 'Completar matriculación', done: false },
            { text: 'Organizar calendario de estudio', done: false },
            { text: 'Planificar cómo compaginar con docencia', done: false },
            { text: 'Definir materias del primer cuatrimestre', done: false }
        ]
    },
    {
        id: 'oposiciones',
        name: 'Oposiciones Informática',
        repo: '',
        description: 'TAI AGE, TAI Ayto Zaragoza, y profesor FP "Sistemas y Aplicaciones Informáticas". Examen previsto marzo/abril 2027.',
        category: 'priority',
        progress: 15,
        tasks: [
            { text: 'Planificar temario y calendario de estudio', done: false },
            { text: 'Recopilar material de exámenes anteriores', done: false },
            { text: 'Estudiar bloque de legislación', done: false },
            { text: 'Hacer simulacros de examen', done: false }
        ]
    },

    // =================== 🚀 EN CURSO ===================
    {
        id: 'portfolio-cyberpunk',
        name: 'Portfolio Cyberpunk',
        repo: 'HEO-80/portfolio-cyberpunk',
        description: 'Portfolio personal con estética cyberpunk. Retomar y actualizar.',
        category: 'active',
        progress: 50,
        tasks: [
            { text: 'Revisar estado actual del código', done: false },
            { text: 'Actualizar secciones con proyectos recientes', done: false },
            { text: 'Deploy en GitHub Pages', done: false }
        ]
    },
    {
        id: 'netwatch',
        name: 'NETWATCH Terminal',
        repo: 'HEO-80/netwatch-terminal',
        description: 'App de escritorio Tauri + React con estética Cyberpunk 2077.',
        category: 'active',
        progress: 30,
        tasks: [
            { text: 'Ver estado actual y decidir dirección', done: false },
            { text: 'Actualizar dependencias Tauri', done: false }
        ]
    },
    {
        id: 'calcount',
        name: 'CalCount',
        repo: '',
        description: 'PWA personal de conteo de calorías.',
        category: 'active',
        progress: 25,
        tasks: [
            { text: 'Definir funcionalidades MVP', done: false },
            { text: 'Implementar registro diario', done: false }
        ]
    },
    {
        id: 'homelab',
        name: 'Homelab Proxmox',
        repo: 'HEO-80/homelab-proxmox-cyberlab',
        description: 'Laboratorio Proxmox en Beelink (hostname cyberlab). Kali VM, VMs/LXC para docencia ASIR/ciberseguridad y DevOps.',
        category: 'active',
        progress: 40,
        tasks: [
            { text: 'Configurar VMs para prácticas de clase', done: false },
            { text: 'Documentar arquitectura del lab', done: false },
            { text: 'Montar escenarios de ciberseguridad', done: false }
        ]
    },
    {
        id: 'obsidian',
        name: 'CyberCortex (Obsidian)',
        repo: '',
        description: 'Vault de Obsidian — second brain / grafo de conocimiento personal.',
        category: 'active',
        progress: 35,
        tasks: [
            { text: 'Organizar estructura de carpetas', done: false },
            { text: 'Migrar notas sueltas al vault', done: false }
        ]
    },
    {
        id: 'heo-agent',
        name: 'HEO-AGENT',
        repo: '',
        description: 'Ecosistema AI personal en Beelink (OpenClaw + Telegram bot @JhonSystembot).',
        category: 'active',
        progress: 20,
        tasks: [
            { text: 'Evaluar estado actual del bot', done: false },
            { text: 'Decidir stack final (OpenClaw vs alternativa)', done: false }
        ]
    },
    {
        id: 'libro-terminal',
        name: 'Libro Terminal',
        repo: '',
        description: 'Libro sobre PowerShell, Bash y CMD — personalización, scripting y administración.',
        category: 'active',
        progress: 15,
        tasks: [
            { text: 'Definir índice de capítulos', done: false },
            { text: 'Escribir capítulo 1: Intro a la terminal', done: false },
            { text: 'Repo público con material docencia terminal', done: false }
        ]
    },
    {
        id: 'ainhoafitness',
        name: 'AinhoaFitness Landing',
        repo: '',
        description: 'Landing page para amiga trainer/nutricionista. Posible puerta a freelance fitness.',
        category: 'active',
        progress: 80,
        tasks: [
            { text: 'Pulir diseño final', done: false },
            { text: 'Deploy y entregar', done: false }
        ]
    },
    {
        id: 'bitdefenders',
        name: 'BitDefenders: La Moneda del Futuro',
        repo: '',
        description: 'Novela cyberpunk que quieres convertir en cómic.',
        category: 'active',
        progress: 30,
        tasks: [
            { text: 'Terminar guión/narrativa', done: false },
            { text: 'Buscar ilustrador o herramienta IA para arte', done: false }
        ]
    },

    // =================== 📚 DOCENCIA ===================
    {
        id: 'master-ciber',
        name: 'Máster Ciberseguridad',
        repo: '',
        description: 'Módulo "Incidentes de ciberseguridad" en el Máster de FP de Océano Atlántico.',
        category: 'teaching',
        progress: 30,
        tasks: [
            { text: 'Preparar material de incidentes', done: false },
            { text: 'Montar laboratorios prácticos', done: false }
        ]
    },
    {
        id: 'linguatales',
        name: 'LinguaTales',
        repo: '',
        description: 'App de aprendizaje de idiomas con historias cortas — traducción, TTS, pronunciación, repetición espaciada. Empezando por inglés. Potencial herramienta docente.',
        category: 'teaching',
        progress: 10,
        tasks: [
            { text: 'Definir MVP mínimo', done: false },
            { text: 'Prototipo de una historia en inglés', done: false },
            { text: 'Evaluar uso como recurso en clase', done: false }
        ]
    },
    {
        id: 'charlas',
        name: 'Charlas & Ponencias',
        repo: '',
        description: 'Plan de dar charlas/masterclass en inglés (ciberseguridad e IA). Objetivo: Bucarest.',
        category: 'teaching',
        progress: 5,
        tasks: [
            { text: 'Preparar charla piloto en inglés', done: false },
            { text: 'Buscar eventos/conferencias donde presentar', done: false }
        ]
    },

    // =================== 🎮 GAMING ===================
    {
        id: 'gaming-jugando',
        name: 'Jugando ahora',
        repo: '',
        description: 'Juegos que estoy acabando actualmente.',
        category: 'gaming',
        progress: 50,
        tasks: [
            { text: 'God of War Ragnarök — terminar historia', done: false },
            { text: 'Cyberpunk 2077 + Phantom Liberty — terminar', done: false },
            { text: 'Battlefield 6 — subir Engineer y vehículos', done: false },
            { text: 'REDSEC — seguir progresando', done: false }
        ]
    },
    {
        id: 'gaming-wishlist',
        name: 'Wishlist — Quiero jugar',
        repo: '',
        description: 'Juegos que tengo pendientes o quiero comprar.',
        category: 'gaming',
        progress: 0,
        tasks: [
            { text: 'V Rising', done: false },
            { text: 'Death Must Die', done: false },
            { text: 'The Blood of Dawnwalker', done: false },
            { text: 'Last Epoch', done: false },
            { text: 'Returnal', done: false },
            { text: 'Helldivers 2', done: false },
            { text: 'Dark Souls Trilogy (DS1 Remastered, DS3, DS2) en PC', done: false },
            { text: 'Lies of P', done: false },
            { text: 'Black Myth Wukong', done: false },
            { text: 'Nine Sols', done: false },
            { text: 'Ghostrunner', done: false },
            { text: 'Hollow Knight Silksong', done: false },
            { text: 'Blasphemous 1+2', done: false },
            { text: 'Dead Cells', done: false },
            { text: 'Devil May Cry 5', done: false }
        ]
    },
    {
        id: 'gaming-completados',
        name: 'Juegos completados',
        repo: '',
        description: 'Historial de juegos terminados.',
        category: 'gaming',
        progress: 100,
        tasks: [
            { text: 'Elden Ring + DLC', done: true },
            { text: 'Sekiro', done: true },
            { text: 'Dead Nation', done: true },
            { text: 'God of War III Remastered', done: true },
            { text: 'Hollow Knight', done: true },
            { text: 'Sifu', done: true },
            { text: 'Sleeping Dogs', done: true },
            { text: 'Until Dawn', done: true }
        ]
    },
    {
        id: 'gaming-coleccion',
        name: 'Colección física',
        repo: '',
        description: 'Juegos físicos que tengo y que quiero conseguir (PS4, Xbox One, Switch, N64).',
        category: 'gaming',
        progress: 30,
        tasks: [
            { text: 'Conseguir: Dark Souls III (PS4)', done: false },
            { text: 'Conseguir: Hollow Knight (PS4)', done: false },
            { text: 'Conseguir: Batman Arkham Collection', done: false },
            { text: 'Conseguir: RE2 Remake', done: false },
            { text: 'Conseguir: Ghost of Tsushima', done: false },
            { text: 'Conseguir: NieR Automata + Replicant', done: false },
            { text: 'Conseguir: Gran Turismo 7', done: false },
            { text: 'Tengo PS4: GoW III, Bloodborne, Infamous SS, TLOU, PoP Lost Crown, Assetto Corsa, PES 2018', done: true },
            { text: 'Tengo Xbox: Cyberpunk 2077, RDR2, Sekiro, Jedi Fallen Order, Deus Ex MD', done: true },
            { text: 'Tengo colección Nintendo 64', done: true }
        ]
    },

    // =================== 🧠 HABILIDADES ===================
    {
        id: 'skills-tech',
        name: 'Habilidades técnicas',
        repo: '',
        description: 'Stack técnico y nivel de dominio en tecnologías.',
        category: 'skills',
        progress: 60,
        tasks: [
            { text: 'JavaScript/TypeScript — nivel alto', done: true },
            { text: 'HTML/CSS — nivel alto', done: true },
            { text: 'React — nivel medio-alto', done: true },
            { text: 'Node.js — nivel medio-alto', done: true },
            { text: 'C# / .NET — nivel medio (2ª eval DAM)', done: false },
            { text: 'Python — nivel básico-medio, quiero mejorar', done: false },
            { text: 'Solidity / Web3 — nivel medio', done: true },
            { text: 'Azure (AZ-104 aprobado, AI-200 siguiente)', done: false },
            { text: 'PowerShell — mejorando, nivel medio', done: false },
            { text: 'Bash/Linux — mejorando, nivel básico-medio', done: false },
            { text: 'Docker — nivel básico, quiero mejorar', done: false },
            { text: 'SQL / bases de datos — nivel medio', done: true },
            { text: 'Git/GitHub — nivel alto', done: true }
        ]
    },
    {
        id: 'skills-baile',
        name: 'Baile: Bachata, Salsa & Kizomba',
        repo: '',
        description: 'Mejorar en baile social — bachata, salsa y kizomba.',
        category: 'skills',
        progress: 10,
        tasks: [
            { text: 'Buscar clases de bachata en Zaragoza', done: false },
            { text: 'Aprender pasos básicos de bachata', done: false },
            { text: 'Practicar salsa cubana', done: false },
            { text: 'Probar clase de kizomba', done: false },
            { text: 'Ir a sociales/fiestas para practicar', done: false }
        ]
    },
    {
        id: 'skills-encanto',
        name: 'Encanto & Habilidades sociales',
        repo: '',
        description: 'Desarrollar carisma, encanto personal y habilidades de comunicación/persuasión.',
        category: 'skills',
        progress: 5,
        tasks: [
            { text: 'Leer "Cómo ganar amigos e influir sobre las personas" (Dale Carnegie)', done: false },
            { text: 'Leer "The Charisma Myth" (Olivia Fox Cabane)', done: false },
            { text: 'Practicar escucha activa en conversaciones', done: false },
            { text: 'Trabajar lenguaje corporal y contacto visual', done: false },
            { text: 'Practicar storytelling en situaciones sociales', done: false }
        ]
    },

    // =================== 🏠 CASA & COCINA ===================
    {
        id: 'home-recetas-domino',
        name: 'Recetas que domino',
        repo: '',
        description: 'Platos que sé preparar bien.',
        category: 'home',
        progress: 40,
        tasks: [
            { text: 'Asado argentino', done: true },
            { text: 'Sushi casero', done: true },
            { text: 'Paella', done: true },
            { text: 'Tortilla de patata', done: true },
            { text: 'Recetas con airfryer (pollo, verduras)', done: true },
            { text: 'Recetas con soja texturizada y tofu', done: true }
        ]
    },
    {
        id: 'home-recetas-aprender',
        name: 'Recetas que quiero aprender',
        repo: '',
        description: 'Platos que me gustaría incorporar a mi repertorio.',
        category: 'home',
        progress: 0,
        tasks: [
            { text: 'Curry japonés', done: false },
            { text: 'Ramen casero (sin horno, adaptado)', done: false },
            { text: 'Pad Thai', done: false },
            { text: 'Ceviche', done: false },
            { text: 'Tacos al pastor', done: false },
            { text: 'Hummus casero', done: false }
        ]
    },
    {
        id: 'home-organizacion',
        name: 'Orden & Organización del hogar',
        repo: '',
        description: 'Mejorar en limpieza, orden y organización de la casa. Desarrollar el hábito.',
        category: 'home',
        progress: 10,
        tasks: [
            { text: 'Establecer rutina de limpieza semanal', done: false },
            { text: 'Método de organización: un sitio para cada cosa', done: false },
            { text: 'Despejar y organizar armarios', done: false },
            { text: 'Leer/ver contenido sobre organización (Marie Kondo, etc.)', done: false },
            { text: 'Sistema para mantener escritorio y zona de trabajo limpios', done: false }
        ]
    },

    // =================== 🌱 PERSONAL ===================
    {
        id: 'personal-lectura',
        name: 'Lectura & Desarrollo personal',
        repo: '',
        description: 'Libros leídos, pendientes y hábito de lectura.',
        category: 'personal',
        progress: 20,
        tasks: [
            { text: 'Leído: Hábitos atómicos', done: true },
            { text: 'Leído: libros de Brian Tracy y Zig Ziglar', done: true },
            { text: 'Pendiente: Juego de Tronos (novela)', done: false },
            { text: 'Pendiente: The Witcher (novela)', done: false },
            { text: 'Pendiente: Dale Carnegie — Cómo ganar amigos', done: false },
            { text: 'Pendiente: The Charisma Myth', done: false }
        ]
    },
    {
        id: 'personal-idiomas',
        name: 'Idiomas',
        repo: '',
        description: 'Progreso en inglés (en curso) y francés (planeado después).',
        category: 'personal',
        progress: 30,
        tasks: [
            { text: 'Inglés: mejorar speaking y fluidez', done: false },
            { text: 'Inglés: preparar nivel para charlas/ponencias', done: false },
            { text: 'Francés: empezar después de consolidar inglés', done: false }
        ]
    },

    // =================== 💡 IDEAS ===================
    {
        id: 'prefloplab',
        name: 'PreflopLab',
        repo: '',
        description: 'App de entrenamiento de poker. FastAPI + MongoDB + React. Cerrar como portfolio.',
        category: 'idea',
        progress: 15,
        tasks: [
            { text: 'Cerrar mínimamente y poner en LinkedIn', done: false }
        ]
    },
    {
        id: 'workspace-manager',
        name: 'Workspace Manager',
        repo: '',
        description: 'Gestor de escritorios virtuales multiplataforma (Win + Linux) que recuerda y restaura apps.',
        category: 'idea',
        progress: 0,
        tasks: [
            { text: 'Investigar APIs de escritorios virtuales Win/Linux', done: false },
            { text: 'Definir funcionalidad mínima', done: false }
        ]
    },
    {
        id: 'beelink-server',
        name: 'Beelink AI Server',
        repo: 'HEO-80/beelink-ai-server',
        description: 'Valorar si sacar partido al proyecto actual o pivotar a Proxmox.',
        category: 'idea',
        progress: 10,
        tasks: [
            { text: 'Decidir: mantener proyecto o migrar todo a Proxmox', done: false }
        ]
    },
    {
        id: 'vaultflow',
        name: 'VaultFlow',
        repo: '',
        description: 'Plataforma escrow Web3 multi-chain.',
        category: 'idea',
        progress: 10,
        tasks: [
            { text: 'Decidir si retomar o archivar', done: false }
        ]
    },
    {
        id: 'solidity-portfolio',
        name: 'Solidity Security Patterns',
        repo: '',
        description: 'Portfolio de contratos Solidity en GitHub + oferta freelance.',
        category: 'idea',
        progress: 15,
        tasks: [
            { text: 'Revisar y actualizar contratos', done: false }
        ]
    },
    {
        id: 'canal-narrativo',
        name: 'Canal Narrativo YouTube',
        repo: '',
        description: 'Canal de YouTube sobre series/películas para entrenar narrativa y voz propia.',
        category: 'idea',
        progress: 5,
        tasks: [
            { text: 'Grabar primer vídeo piloto', done: false },
            { text: 'Definir línea editorial', done: false }
        ]
    },
    {
        id: 'impresion3d',
        name: 'Negocio Impresión 3D',
        repo: '',
        description: 'Productos personalizados (bodas, Etsy/Amazon) con Bambu Lab A1 Mini.',
        category: 'idea',
        progress: 5,
        tasks: [
            { text: 'Comprar impresora Bambu Lab A1 Mini', done: false },
            { text: 'Diseñar primeros productos para bodas', done: false },
            { text: 'Crear tienda en Etsy', done: false }
        ]
    },

    // =================== ⏸ PAUSADO ===================
    {
        id: 'bsc-sniperbot',
        name: 'BSC SniperBot (Bot14)',
        repo: '',
        description: 'BSC trading bot, LP drain detection, trading-mode config. En pausa.',
        category: 'paused',
        progress: 40,
        tasks: []
    }
];

// ==================== STATE ====================
let projects = [];
let currentFilter = 'all';
let currentSearch = '';
let currentDetailId = null;

function loadProjects() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        projects = JSON.parse(saved);
    } else {
        projects = JSON.parse(JSON.stringify(DEFAULT_PROJECTS));
        saveProjects();
    }
}

function saveProjects() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

// ==================== GRID VIEW ====================
function renderStats() {
    const total = projects.length;
    const priorityCount = projects.filter(p => p.category === 'priority').length;
    const activeCount = projects.filter(p => p.category === 'active').length;
    const totalTasks = projects.reduce((s, p) => s + p.tasks.length, 0);
    const doneTasks = projects.reduce((s, p) => s + p.tasks.filter(t => t.done).length, 0);

    document.getElementById('headerStats').innerHTML = `
        <div class="stat-item"><div class="stat-number">${total}</div><div class="stat-label">Proyectos</div></div>
        <div class="stat-item"><div class="stat-number">${priorityCount + activeCount}</div><div class="stat-label">Activos</div></div>
        <div class="stat-item"><div class="stat-number">${doneTasks}/${totalTasks}</div><div class="stat-label">Tareas</div></div>
    `;
}

function renderProjects(filter = 'all', search = '') {
    const grid = document.getElementById('projectGrid');
    const q = search.toLowerCase();
    let filtered = projects;

    if (filter !== 'all') filtered = filtered.filter(p => p.category === filter);
    if (search) filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tasks.some(t => t.text.toLowerCase().includes(q))
    );

    filtered.sort((a, b) => CATEGORY_ORDER[a.category] - CATEGORY_ORDER[b.category]);

    grid.innerHTML = filtered.map(p => {
        const done = p.tasks.filter(t => t.done).length;
        const total = p.tasks.length;
        return `
        <div class="project-card" data-category="${p.category}" onclick="openDetail('${p.id}')">
            <div class="card-header">
                <span class="card-title">${p.name}</span>
                <span class="card-badge" data-category="${p.category}">${CATEGORY_LABELS[p.category]}</span>
            </div>
            ${p.repo ? `<div class="card-repo"><a href="https://github.com/${p.repo}" target="_blank" onclick="event.stopPropagation()">📂 ${p.repo}</a></div>` : ''}
            <div class="card-desc">${p.description}</div>
            <div class="progress-bar"><div class="progress-fill" data-category="${p.category}" style="width:${p.progress}%"></div></div>
            <div class="card-footer"><span>${p.progress}%</span><span class="task-count">📋 ${done}/${total}</span></div>
        </div>`;
    }).join('');
}

// ==================== DETAIL VIEW (full page) ====================
function openDetail(id) {
    const p = projects.find(x => x.id === id);
    if (!p) return;
    currentDetailId = id;

    document.getElementById('gridView').classList.add('hidden');
    document.getElementById('detailView').classList.remove('hidden');
    window.scrollTo(0, 0);

    const done = p.tasks.filter(t => t.done).length;
    const total = p.tasks.length;

    document.getElementById('detailPage').innerHTML = `
        <div class="detail-hero">
            <h1>${p.name}</h1>
            <div class="detail-hero-meta">
                <span class="card-badge" data-category="${p.category}">${CATEGORY_LABELS[p.category]}</span>
                ${p.repo ? `<span class="detail-hero-repo"><a href="https://github.com/${p.repo}" target="_blank">📂 ${p.repo}</a></span>` : ''}
            </div>
            <div class="detail-hero-desc">${p.description}</div>
        </div>

        <!-- Progreso -->
        <div class="detail-section">
            <h2>Progreso</h2>
            <div class="detail-progress">
                <div class="progress-bar"><div class="progress-fill" data-category="${p.category}" style="width:${p.progress}%"></div></div>
                <span class="detail-progress-label" id="progressLabel">${p.progress}%</span>
            </div>
            <input type="range" class="detail-progress-slider" min="0" max="100" step="5" value="${p.progress}"
                oninput="updateProgress('${id}', this.value)">
        </div>

        <!-- Resumen -->
        <div class="detail-section">
            <h2>Resumen</h2>
            <div class="detail-meta-grid">
                <div class="meta-card">
                    <div class="meta-card-label">Tareas completadas</div>
                    <div class="meta-card-value">${done} / ${total}</div>
                </div>
                <div class="meta-card">
                    <div class="meta-card-label">Categoría</div>
                    <div class="meta-card-value">${CATEGORY_LABELS[p.category]}</div>
                </div>
                ${p.repo ? `<div class="meta-card">
                    <div class="meta-card-label">Repositorio</div>
                    <div class="meta-card-value"><a href="https://github.com/${p.repo}" target="_blank" style="color:var(--accent)">${p.repo}</a></div>
                </div>` : ''}
            </div>
        </div>

        <!-- Tareas -->
        <div class="detail-section">
            <h2>Tareas (${done}/${total})</h2>
            <ul class="task-list">
                ${p.tasks.map((t, i) => `
                <li class="task-item">
                    <input type="checkbox" class="task-checkbox" ${t.done ? 'checked' : ''} onchange="toggleTask('${id}', ${i})">
                    <span class="task-text ${t.done ? 'completed' : ''}">${t.text}</span>
                    <button class="task-delete" onclick="deleteTask('${id}', ${i})" title="Eliminar">&times;</button>
                </li>`).join('')}
            </ul>
            <div class="add-task-row">
                <input type="text" id="newTaskInput" placeholder="Nueva tarea..." onkeydown="if(event.key==='Enter')addTask('${id}')">
                <button onclick="addTask('${id}')">Añadir</button>
            </div>
        </div>

        <!-- Editar -->
        <div class="detail-section">
            <h2>Editar</h2>
            <div class="edit-group">
                <label>Categoría
                    <select onchange="updateCategory('${id}', this.value)">
                        ${Object.entries(CATEGORY_LABELS).map(([k, v]) => `<option value="${k}" ${p.category === k ? 'selected' : ''}>${v}</option>`).join('')}
                    </select>
                </label>
            </div>
            <div class="edit-group" style="margin-top:1rem">
                <label style="width:100%">Descripción
                    <textarea onchange="updateDesc('${id}', this.value)">${p.description}</textarea>
                </label>
            </div>
            <div class="edit-group" style="margin-top:1rem">
                <label>Repo GitHub
                    <input type="text" value="${p.repo || ''}" onchange="updateRepo('${id}', this.value)" placeholder="HEO-80/repo-name" style="padding:0.5rem 0.8rem;background:var(--bg);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:0.9rem;outline:none;">
                </label>
            </div>
        </div>
    `;
}

function closeDetail() {
    document.getElementById('detailView').classList.add('hidden');
    document.getElementById('gridView').classList.remove('hidden');
    currentDetailId = null;
    renderProjects(currentFilter, currentSearch);
    renderStats();
}

// ==================== ACTIONS ====================
function toggleTask(pid, idx) {
    const p = projects.find(x => x.id === pid);
    if (p) { p.tasks[idx].done = !p.tasks[idx].done; saveProjects(); openDetail(pid); }
}

function addTask(pid) {
    const input = document.getElementById('newTaskInput');
    const text = input.value.trim();
    if (!text) return;
    const p = projects.find(x => x.id === pid);
    if (p) { p.tasks.push({ text, done: false }); saveProjects(); openDetail(pid); }
}

function deleteTask(pid, idx) {
    const p = projects.find(x => x.id === pid);
    if (p) { p.tasks.splice(idx, 1); saveProjects(); openDetail(pid); }
}

function updateProgress(id, val) {
    const p = projects.find(x => x.id === id);
    if (p) {
        p.progress = parseInt(val);
        document.getElementById('progressLabel').textContent = val + '%';
        saveProjects();
    }
}

function updateCategory(id, val) {
    const p = projects.find(x => x.id === id);
    if (p) { p.category = val; saveProjects(); openDetail(id); }
}

function updateDesc(id, val) {
    const p = projects.find(x => x.id === id);
    if (p) { p.description = val; saveProjects(); }
}

function updateRepo(id, val) {
    const p = projects.find(x => x.id === id);
    if (p) { p.repo = val; saveProjects(); }
}

function deleteProject(id) {
    if (!confirm('¿Eliminar este proyecto?')) return;
    projects = projects.filter(x => x.id !== id);
    saveProjects();
    closeDetail();
}

// ==================== ADD PROJECT ====================
function openAddModal() {
    document.getElementById('addModalOverlay').classList.add('open');
    document.getElementById('addProjectForm').reset();
}

function closeAddModal() {
    document.getElementById('addModalOverlay').classList.remove('open');
}

document.getElementById('addProjectForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('newName').value.trim();
    if (!name) return;
    projects.push({
        id: name.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now(),
        name,
        repo: document.getElementById('newRepo').value.trim(),
        description: document.getElementById('newDesc').value.trim(),
        category: document.getElementById('newCategory').value,
        progress: parseInt(document.getElementById('newProgress').value) || 0,
        tasks: []
    });
    saveProjects();
    closeAddModal();
    renderProjects(currentFilter, currentSearch);
    renderStats();
});

// ==================== FILTERS & SEARCH ====================
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderProjects(currentFilter, currentSearch);
    });
});

document.getElementById('searchInput').addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderProjects(currentFilter, currentSearch);
});

// ==================== EVENTS ====================
document.getElementById('backBtn').addEventListener('click', closeDetail);
document.getElementById('detailDeleteBtn').addEventListener('click', () => {
    if (currentDetailId) deleteProject(currentDetailId);
});

document.getElementById('fabAdd').addEventListener('click', openAddModal);
document.getElementById('addModalClose').addEventListener('click', closeAddModal);
document.getElementById('addModalOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeAddModal();
});

// ==================== EXPORT / RESET ====================
window.exportData = function() {
    const blob = new Blob([JSON.stringify(projects, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'missioncontrol-backup.json';
    a.click();
};

window.resetData = function() {
    if (confirm('¿Restaurar todo al estado inicial? Se perderán los cambios.')) {
        localStorage.removeItem(STORAGE_KEY);
        loadProjects();
        if (currentDetailId) closeDetail();
        renderProjects(currentFilter, currentSearch);
        renderStats();
    }
};

// ==================== INIT ====================
loadProjects();
renderStats();
renderProjects();
