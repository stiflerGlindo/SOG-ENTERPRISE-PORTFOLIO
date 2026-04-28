/**
 * Orchestrator Agent
 * El cerebro central del sistema del portafolio.
 * Versión endurecida para ciberseguridad élite.
 * Se encarga de cargar y coordinar todos los sub-agentes del sistema de forma segura.
 */
export class Orchestrator {
    #agents = {}; // Campos privados para proteger el estado interno
    #isBooting = false;

    /**
     * Inicializa la clase Orchestrator estableciendo el progreso de inicio y estado.
     */
    constructor() {
        this.bootProgress = 0;
        this.status = 'IDLE';
    }

    /**
     * Sanitiza las entradas para prevenir XSS (Cross-Site Scripting).
     * Utilidad de seguridad centralizada usada por todos los agentes.
     * 
     * @param {string} str - La cadena de texto a sanitizar.
     * @returns {string} La cadena de texto sanitizada, segura para el DOM.
     */
    sanitize(str) {
        if (!str) return '';
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    }

    /**
     * Inicia la secuencia de arranque segura del orquestador.
     * Carga modularmente los agentes implementando aislamiento en caso de fallo.
     * 
     * @returns {Promise<void>} Promesa que se resuelve cuando la orquestación finaliza.
     */
    async boot() {
        if (this.#isBooting) return;
        this.#isBooting = true;
        this.status = 'BOOTING';

        try {
            console.log("Orchestrator: Initiating Secure Boot Sequence...");
            
            // 1. Initial Integrity Check
            await this.updateBoot(20, "VERIFYING SYSTEM INTEGRITY...");
            
            // 2. Modular Loading with Failure Isolation
            const agentConfigs = [
                { id: 'interface', path: './InterfaceAgent.js', name: 'InterfaceAgent' },
                { id: 'data', path: './DataAgent.js', name: 'DataAgent' },
                { id: 'ai', path: './AIAgent.js', name: 'AIAgent' },
                { id: 'contact', path: './ContactAgent.js', name: 'ContactAgent' }
            ];

            for (const config of agentConfigs) {
                try {
                    const module = await import(config.path);
                    this.#agents[config.id] = new module[config.name](this);
                    this.bootProgress += 20;
                    await this.updateBoot(this.bootProgress, `AGENT_${config.id.toUpperCase()} ONLINE`);
                } catch (error) {
                    // Fail-safe: Aislamos la falla del agente para que el sistema continúe
                    console.error(`Security Warning: Agent ${config.id} failed to initialize. Isolating...`, error);
                }
            }

            await this.updateBoot(100, "ORCHESTRATION LAYER SECURED.");
            this.completeBoot();
        } catch (criticalError) {
            this.handleSystemFailure(criticalError);
        }
    }

    /**
     * Actualiza el progreso visual del arranque en la interfaz.
     * 
     * @param {number} progress - Porcentaje de progreso (0 a 100).
     * @param {string} message - Mensaje de estado que acompaña el progreso.
     * @returns {Promise<void>} Promesa para controlar los tiempos de la animación.
     */
    async updateBoot(progress, message) {
        this.bootProgress = Math.min(progress, 100);
        return new Promise(resolve => {
            const progressBar = document.getElementById('boot-progress');
            const statusText = document.querySelector('.matrix-code');
            
            if (progressBar) progressBar.style.width = `${this.bootProgress}%`;
            
            // Seguridad: Siempre sanitizamos los mensajes antes de inyectarlos al DOM
            if (statusText) statusText.innerText = this.sanitize(message);
            
            setTimeout(resolve, 600); // Optimized timing
        });
    }

    /**
     * Finaliza la secuencia de arranque, oculta el overlay de carga
     * e inicia los renderizados de los agentes que se hayan cargado.
     */
    completeBoot() {
        const overlay = document.getElementById('loading-overlay');
        if (overlay) {
            overlay.style.opacity = '0';
            setTimeout(() => overlay.remove(), 800);
        }
        
        // Final Execution Stream
        const STREAM_ID = 'content-stream'; // UPPER_SNAKE_CASE para constantes
        
        // Ejecución condicional: solo si los agentes existen (fueron cargados con éxito)
        if (this.#agents.interface) this.#agents.interface.renderShell();
        if (this.#agents.data) this.#agents.data.render(STREAM_ID);
        if (this.#agents.ai) this.#agents.ai.render(STREAM_ID);
        if (this.#agents.contact) this.#agents.contact.render(STREAM_ID);

        this.status = 'ACTIVE';
        console.log("Orchestrator: System fully orchestrated and secured.");
    }

    /**
     * Maneja fallos críticos del sistema, actualizando la interfaz y los logs de consola.
     * 
     * @param {Error} error - El error que generó la falla crítica.
     */
    handleSystemFailure(error) {
        this.status = 'CRASHED';
        const statusText = document.querySelector('.matrix-code');
        if (statusText) statusText.innerText = "SECURITY_HALT: SYSTEM CRITICAL ERROR";
        console.error("Critical Orchestration Failure:", error);
    }

    /**
     * Obtiene un agente inicializado mediante su identificador. (Solo lectura).
     * 
     * @param {string} id - El ID del agente (ej. 'data', 'ai').
     * @returns {Object|null} La instancia del agente o null si no se encuentra.
     */
    getAgent(id) {
        return this.#agents[id] || null;
    }
}
