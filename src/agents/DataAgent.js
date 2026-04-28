/**
 * Data Agent
 * Agente especializado en el análisis y visualización de datos, y optimización de operaciones.
 * Genera métricas e interfaces para demostrar impacto en negocio.
 * Versión endurecida para ciberseguridad élite.
 */
export class DataAgent {
    /**
     * Inicializa el agente de datos.
     * 
     * @param {Object} orchestrator - Instancia del orquestador para acceder a servicios compartidos como sanitización.
     */
    constructor(orchestrator) {
        this.orchestrator = orchestrator;
    }

    /**
     * Saneamiento centralizado de cadenas delegando al orquestador.
     * Previene inyecciones maliciosas XSS.
     * 
     * @param {string} str - El texto a hacer seguro.
     * @returns {string} El texto seguro validado.
     */
    safe(str) {
        return this.orchestrator.sanitize(str);
    }

    /**
     * Construye e inyecta la sección de análisis de datos en el documento.
     * 
     * @param {string} containerId - El ID del elemento padre que recibirá esta sección.
     */
    render(containerId) {
        const container = document.getElementById(containerId);
        // Manejo temprano si el contenedor no existe para evitar fallas
        if (!container) {
            console.error(`DataAgent: Container with id '${containerId}' not found.`);
            return;
        }

        const section = document.createElement('section');
        section.id = 'data';
        section.className = 'data-section';
        
        // Security: Todo el texto inyectado debe pasar siempre por el método safe()
        section.innerHTML = `
            <div class="section-header">
                <div class="header-line"></div>
                <h2 class="section-title">01 // <span class="text-gradient">${this.safe('DATA_ANALYSIS')}</span></h2>
            </div>
            
            <div class="data-grid">
                <div class="data-card glass-panel fade-in">
                    <div class="card-icon">📊</div>
                    <h3>${this.safe('Estrategia Visual')}</h3>
                    <p>${this.safe('Visualización estratégica que transforma números fríos en historias accionables.')}</p>
                    <div class="skill-tags">
                        <span>Power BI</span>
                        <span>Excel Avanzado</span>
                    </div>
                </div>
                
                <div class="data-card glass-panel fade-in" style="animation-delay: 0.2s">
                    <div class="card-icon">⚙️</div>
                    <h3>${this.safe('Optimización Ops')}</h3>
                    <p>${this.safe('Detección de cuellos de botella en funnels y mejora de SLAs operativos.')}</p>
                    <div class="skill-tags">
                        <span>Python</span>
                        <span>SQL</span>
                    </div>
                </div>

                <div class="data-visual-container glass-panel fade-in" style="animation-delay: 0.4s">
                    <div class="visual-header">
                        <span>${this.safe('SYSTEM_METRICS')}</span>
                        <span class="pulse-dot"></span>
                    </div>
                    <div class="simulated-chart">
                        <div class="bar" style="height: 60%"></div>
                        <div class="bar" style="height: 80%"></div>
                        <div class="bar" style="height: 45%"></div>
                        <div class="bar" style="height: 90%"></div>
                        <div class="bar" style="height: 70%"></div>
                    </div>
                    <div class="visual-footer">${this.safe('"Los datos no sirven si no accionan decisiones."')}</div>
                </div>
            </div>
        `;
        
        container.appendChild(section);
        this.addStyles();
    }

    /**
     * Inyecta dinámicamente en el DOM los estilos CSS exclusivos para DataAgent.
     * Organiza los estilos de forma modular (Layout, Tipografía, Animaciones).
     */
    addStyles() {
        const styleId = 'data-styles';
        if (document.getElementById(styleId)) return;

        const style = document.createElement('style');
        style.id = styleId;
        
        // CSS Modular para el DataAgent
        style.innerHTML = `
            /* --- Layout --- */
            .data-section { padding: 100px 10%; min-height: 80vh; }
            .section-header { margin-bottom: 60px; }
            .data-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
            .data-card { padding: 40px; transition: transform 0.3s ease; border: 1px solid var(--glass-border); border-radius: 12px; }
            .data-visual-container { grid-column: span 2; padding: 30px; display: flex; flex-direction: column; justify-content: space-between; min-height: 250px; }
            .visual-header { display: flex; justify-content: space-between; }
            .simulated-chart { display: flex; align-items: flex-end; gap: 10px; height: 100px; margin: 20px 0; }
            .skill-tags { margin-top: 20px; display: flex; flex-wrap: wrap; gap: 10px; }
            
            /* --- Tipografía, Colores y Elementos --- */
            .header-line { width: 40px; height: 4px; background: var(--accent-primary); margin-bottom: 15px; }
            .section-title { font-size: 2.5rem; font-family: var(--font-mono); }
            .card-icon { font-size: 2.5rem; margin-bottom: 20px; }
            .data-card h3 { margin-bottom: 15px; font-size: 1.5rem; }
            .skill-tags span { font-family: var(--font-mono); font-size: 0.7rem; padding: 4px 10px; background: rgba(255, 255, 255, 0.05); border: 1px solid var(--glass-border); border-radius: 4px; }
            .visual-header { font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-primary); }
            .visual-footer { font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-secondary); text-align: right; font-style: italic; }
            .pulse-dot { width: 8px; height: 8px; background: var(--accent-success); border-radius: 50%; box-shadow: 0 0 10px var(--accent-success); }
            .bar { flex: 1; background: linear-gradient(to top, var(--accent-primary), transparent); border-radius: 4px 4px 0 0; transform-origin: bottom; }
            
            /* --- Animaciones e Interacciones --- */
            .data-card:hover { transform: translateY(-10px); border-color: var(--accent-primary); }
            .pulse-dot { animation: pulse 2s infinite; }
            .bar { animation: grow 1.5s ease-out forwards; }
            @keyframes pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.5; } 100% { transform: scale(1); opacity: 1; } }
            @keyframes grow { from { transform: scaleY(0); } to { transform: scaleY(1); } }
            
            /* --- Responsividad --- */
            @media (max-width: 900px) { .data-visual-container { grid-column: span 1; } }
        `;
        document.head.appendChild(style);
    }
}
