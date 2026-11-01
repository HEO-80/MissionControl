// ============================================================
// MissionControl — HEO Hub
// ============================================================

const STORAGE_KEY = 'missioncontrol_projects';

// ---------- DATOS INICIALES (tus proyectos reales) ----------
const DEFAULT_PROJECTS = [
    // 🔥 PRIORIDAD
    {
        id: 'codetyper',
        name: 'CodeTyper',
        repo: 'HEO-80/codetyper',
        description: 'App freemium de mecanografía orientada a programación. Reposicionar hacia typing/writing experience.',
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

    // 🚀 EN CURSO
    {
        id: 'portfolio-cyberpunk',
        name: 'Portfolio Cyberpunk',
        repo: 'HEO-80/portfolio-cyberpunk',
        description: 'Portfolio personal con estética cyberpunk. Hay trabajo pendiente de retomar.',
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
        description: 'App de escritorio Tauri + React con estética Cyberpunk 2077. Terminal personalizada.',
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
        description: 'Laboratorio Proxmox en Beelink (hostname cyberlab). Kali VM, VMs y LXC para docencia ASIR/ciberseguridad y DevOps.',
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
        description: 'Libro sobre PowerShell, Bash y CMD — personalización, scripting y administración de sistemas.',
        category: 'active',
        progress: 15,
        tasks: [
            { text: 'Definir índice de capítulos', done: false },
            { text: 'Escribir capítulo 1: Intro a la terminal', done: false },
            { text: 'Repo público con material de docencia de terminal', done: false }
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
            { text: 'Buscar ilustrador o herramienta de IA para arte', done: false }
        ]
    },

    // 💡 IDEAS
    {
        id: 'linguatales',
        name: 'LinguaTales',
        repo: '',
        description: 'App de aprendizaje de idiomas con historias cortas — traducción, TTS, pronunciación, repetición espaciada.',
        category: 'idea',
        progress: 10,
        tasks: [
            { text: 'Definir MVP mínimo', done: false },
            { text: 'Prototipo de una historia en inglés', done: false }
        ]
    },
    {
        id: 'prefloplab',
        name: 'PreflopLab',
        repo: '',
        description: 'App de entrenamiento de poker. FastAPI + MongoDB + React, motor de poker determinista.',
        category: 'idea',
        progress: 15,
        tasks: [
            { text: 'Cerrar mínimamente y poner en LinkedIn como portfolio', done: false }
        ]
    },
    {
        id: 'workspace-manager',
        name: 'Workspace Manager',
        repo: '',
        description: 'Gestor de escritorios virtuales multiplataforma (Win + Linux) que recuerda y restaura apps por escritorio.',
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

    // 📚 DOCENCIA
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
        id: 'oposiciones',
        name: 'Oposiciones Informática',
        repo: '',
        description: 'Preparar TAI AGE, TAI Ayto Zaragoza, y profesor FP "Sistemas y Aplicaciones Informáticas".',
        category: 'teaching',
        progress: 15,
        tasks: [
            { text: 'Planificar temario y calendario de estudio', done: false },
            { text: 'Recopilar material de exámenes anteriores', done: false }
        ]
    },
    {
        id: 'unipro',
        name: 'Bachelor UNIPRO',
        repo: '',
        description: 'Grado online en Informática (UNIPRO, Andorra) para habilitar como profesor de FP en lo público.',
        category: 'teaching',
        progress: 10,
        tasks: [
            { text: 'Completar matriculación', done: false },
            { text: 'Organizar calendario de estudio', done: false }
        ]
    },
    {
        id: 'charlas',
        name: 'Charlas & Ponencias',
        repo: '',
        description: 'Plan de dar charlas/masterclass en inglés (ciberseguridad e IA) para marca personal. Objetivo: Bucarest.',
        category: 'teaching',
        progress: 5,
        tasks: [
            { text: 'Preparar charla piloto en inglés', done: false },
            { text: 'Buscar eventos/conferencias donde presentar', done: false }
        ]
    },

    // ⏸ PAUSADO
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

// ---------- STATE ----------
let projects = [];

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

// ---------- RENDER ----------
const CATEGORY_LABELS = {
    priority: '🔥 Prioridad',
    active: '🚀 En curso',
    idea: '💡 Idea',
    teaching: '📚 Docencia',
    paused: '⏸ Pausado',
    done: '✅ Cerrado'
};

function renderStats() {
    const total = projects.length;
    const priorityCount = projects.filter(p => p.category === 'priority').length;
    const activeCount = projects.filter(p => p.category === 'active').length;
    const totalTasks = projects.reduce((sum, p) => sum + p.tasks.length, 0);
    const doneTasks = projects.reduce((sum, p) => sum + p.tasks.filter(t => t.done).length, 0);

    document.getElementById('headerStats').innerHTML = `
        <div class="stat-item">
            <div class="stat-number">${total}</div>
            <div class="stat-label">Proyectos</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">${priorityCount + activeCount}</div>
            <div class="stat-label">Activos</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">${doneTasks}/${totalTasks}</div>
            <div class="stat-label">Tareas</div>
        </div>
    `;
}

function renderProjects(filter = 'all', search = '') {
    const grid = document.getElementById('projectGrid');
    const searchLower = search.toLowerCase();

    let filtered = projects;

    if (filter !== 'all') {
        filtered = filtered.filter(p => p.category === filter);
    }

    if (search) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchLower) ||
            p.description.toLowerCase().includes(searchLower) ||
            p.tasks.some(t => t.text.toLowerCase().includes(searchLower))
        );
    }

    // Orden: priority > active > teaching > idea > paused > done
    const order = { priority: 0, active: 1, teaching: 2, idea: 3, paused: 4, done: 5 };
    filtered.sort((a, b) => order[a.category] - order[b.category]);

    grid.innerHTML = filtered.map(p => {
        const tasksDone = p.tasks.filter(t => t.done).length;
        const tasksTotal = p.tasks.length;
        return `
            <div class="project-card" data-category="${p.category}" data-id="${p.id}" onclick="openDetail('${p.id}')">
                <div class="card-header">
                    <span class="card-title">${p.name}</span>
                    <span class="card-badge" data-category="${p.category}">${CATEGORY_LABELS[p.category]}</span>
                </div>
                ${p.repo ? `<div class="card-repo"><a href="https://github.com/${p.repo}" target="_blank" onclick="event.stopPropagation()">📂 ${p.repo}</a></div>` : ''}
                <div class="card-desc">${p.description}</div>
                <div class="progress-bar">
                    <div class="progress-fill" data-category="${p.category}" style="width: ${p.progress}%"></div>
                </div>
                <div class="card-footer">
                    <span>${p.progress}%</span>
                    <span class="task-count">📋 ${tasksDone}/${tasksTotal} tareas</span>
                </div>
            </div>
        `;
    }).join('');
}

// ---------- DETAIL MODAL ----------
function openDetail(id) {
    const p = projects.find(x => x.id === id);
    if (!p) return;

    document.getElementById('modalTitle').textContent = p.name;

    const tasksDone = p.tasks.filter(t => t.done).length;

    document.getElementById('modalBody').innerHTML = `
        <div class="detail-section">
            <h3>Descripción</h3>
            <div class="detail-desc">${p.description}</div>
        </div>

        <div class="detail-section">
            <div class="detail-meta">
                <div class="meta-item">
                    <div class="meta-label">Categoría</div>
                    <div class="meta-value">${CATEGORY_LABELS[p.category]}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">Progreso</div>
                    <div class="meta-value">${p.progress}%</div>
                </div>
                ${p.repo ? `<div class="meta-item">
                    <div class="meta-label">Repositorio</div>
                    <div class="meta-value"><a href="https://github.com/${p.repo}" target="_blank" style="color:var(--accent)">${p.repo}</a></div>
                </div>` : ''}
                <div class="meta-item">
                    <div class="meta-label">Tareas</div>
                    <div class="meta-value">${tasksDone} / ${p.tasks.length}</div>
                </div>
            </div>
        </div>

        <div class="detail-section">
            <h3>Tareas</h3>
            <ul class="task-list" id="taskList">
                ${p.tasks.map((t, i) => `
                    <li class="task-item">
                        <input type="checkbox" class="task-checkbox" ${t.done ? 'checked' : ''} onchange="toggleTask('${id}', ${i})">
                        <span class="task-text ${t.done ? 'completed' : ''}">${t.text}</span>
                        <button class="task-delete" onclick="deleteTask('${id}', ${i})" title="Eliminar">&times;</button>
                    </li>
                `).join('')}
            </ul>
            <div class="add-task-row">
                <input type="text" id="newTaskInput" placeholder="Nueva tarea..." onkeydown="if(event.key==='Enter')addTask('${id}')">
                <button onclick="addTask('${id}')">Añadir</button>
            </div>
        </div>

        <div class="detail-section">
            <h3>Editar proyecto</h3>
            <div class="edit-row">
                <label>Categoría</label>
                <select id="editCategory" onchange="updateCategory('${id}', this.value)">
                    ${Object.entries(CATEGORY_LABELS).map(([k, v]) => `<option value="${k}" ${p.category === k ? 'selected' : ''}>${v}</option>`).join('')}
                </select>
            </div>
            <div class="edit-row">
                <label>Progreso</label>
                <input type="range" min="0" max="100" step="5" value="${p.progress}" oninput="updateProgress('${id}', this.value)" style="flex:1">
                <span id="progressLabel">${p.progress}%</span>
            </div>
            <div class="edit-row">
                <label>Descripción</label>
                <textarea id="editDesc" rows="3" onchange="updateDesc('${id}', this.value)">${p.description}</textarea>
            </div>
        </div>

        <div class="detail-actions">
            <button onclick="closeModal()">Cerrar</button>
            <button class="btn-danger" onclick="deleteProject('${id}')">Eliminar proyecto</button>
        </div>
    `;

    document.getElementById('modalOverlay').classList.add('open');
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
}

// ---------- TASK ACTIONS ----------
function toggleTask(projectId, taskIndex) {
    const p = projects.find(x => x.id === projectId);
    if (p) {
        p.tasks[taskIndex].done = !p.tasks[taskIndex].done;
        saveProjects();
        openDetail(projectId);
        renderProjects(currentFilter, currentSearch);
        renderStats();
    }
}

function addTask(projectId) {
    const input = document.getElementById('newTaskInput');
    const text = input.value.trim();
    if (!text) return;

    const p = projects.find(x => x.id === projectId);
    if (p) {
        p.tasks.push({ text, done: false });
        saveProjects();
        openDetail(projectId);
        renderProjects(currentFilter, currentSearch);
        renderStats();
    }
}

function deleteTask(projectId, taskIndex) {
    const p = projects.find(x => x.id === projectId);
    if (p) {
        p.tasks.splice(taskIndex, 1);
        saveProjects();
        openDetail(projectId);
        renderProjects(currentFilter, currentSearch);
        renderStats();
    }
}

// ---------- PROJECT ACTIONS ----------
function updateCategory(id, value) {
    const p = projects.find(x => x.id === id);
    if (p) {
        p.category = value;
        saveProjects();
        renderProjects(currentFilter, currentSearch);
        renderStats();
    }
}

function updateProgress(id, value) {
    const p = projects.find(x => x.id === id);
    if (p) {
        p.progress = parseInt(value);
        document.getElementById('progressLabel').textContent = value + '%';
        saveProjects();
        renderProjects(currentFilter, currentSearch);
        renderStats();
    }
}

function updateDesc(id, value) {
    const p = projects.find(x => x.id === id);
    if (p) {
        p.description = value;
        saveProjects();
        renderProjects(currentFilter, currentSearch);
    }
}

function deleteProject(id) {
    if (!confirm('¿Eliminar este proyecto?')) return;
    projects = projects.filter(x => x.id !== id);
    saveProjects();
    closeModal();
    renderProjects(currentFilter, currentSearch);
    renderStats();
}

// ---------- ADD PROJECT ----------
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

    const newProject = {
        id: name.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now(),
        name,
        repo: document.getElementById('newRepo').value.trim(),
        description: document.getElementById('newDesc').value.trim(),
        category: document.getElementById('newCategory').value,
        progress: parseInt(document.getElementById('newProgress').value) || 0,
        tasks: []
    };

    projects.push(newProject);
    saveProjects();
    closeAddModal();
    renderProjects(currentFilter, currentSearch);
    renderStats();
});

// ---------- FILTERS & SEARCH ----------
let currentFilter = 'all';
let currentSearch = '';

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

// ---------- MODAL EVENTS ----------
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
});

document.getElementById('fabAdd').addEventListener('click', openAddModal);
document.getElementById('addModalClose').addEventListener('click', closeAddModal);
document.getElementById('addModalOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeAddModal();
});

// ---------- EXPORT / IMPORT ----------
// Exportar datos a JSON (por si quieres backup)
window.exportData = function() {
    const blob = new Blob([JSON.stringify(projects, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'missioncontrol-backup.json';
    a.click();
    URL.revokeObjectURL(url);
};

// Reset a datos iniciales
window.resetData = function() {
    if (confirm('¿Restaurar todos los proyectos a su estado inicial? Se perderán los cambios.')) {
        localStorage.removeItem(STORAGE_KEY);
        loadProjects();
        renderProjects(currentFilter, currentSearch);
        renderStats();
    }
};

// ---------- INIT ----------
loadProjects();
renderStats();
renderProjects();
