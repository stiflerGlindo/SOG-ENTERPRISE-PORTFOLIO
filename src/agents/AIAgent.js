/**
 * AIAgent
 * Agente especializado en Inteligencia Artificial.
 * Se enfoca en el desarrollo de LLMs, productos SaaS y el proyecto Radar AI.
 * Versión endurecida para ciberseguridad élite con protección contra XSS.
 */
export class AIAgent {
    /**
     * Inicializa el agente de IA.
     * 
     * @param {Object} orchestrator - Instancia del orquestador principal que provee utilidades compartidas.
     */
    constructor(orchestrator) {
        this.orchestrator = orchestrator;
    }

    /**
     * Saneamiento centralizado de entradas delegando al orquestador.
     * Previene la ejecución de código malicioso al inyectar datos en el DOM.
     * 
     * @param {string} str - La cadena de texto a sanitizar.
     * @returns {string} La cadena de texto sanitizada.
     */
    safe(str) {
        return this.orchestrator.sanitize(str);
    }

    /**
     * Renderiza la sección de la interfaz gráfica correspondiente a Inteligencia Artificial.
     * 
     * @param {string} containerId - El ID del contenedor en el DOM donde se inyectará la sección.
     */
    render(containerId) {
        const container = document.getElementById(containerId);
        // Manejo de error si el contenedor no existe para evitar cuelgues (crashes)
        if (!container) {
            console.error(`AIAgent: Container with id '${containerId}' not found.`);
            return;
        }
        
        const section = document.createElement('section');
        section.id = 'ai';
        section.className = 'ai-section';
        
        // Seguridad: Todas las cadenas inyectadas pasan por el método safe()
        section.innerHTML = `
            <div class="section-header">
                <div class="header-line" style="background: var(--accent-secondary)"></div>
                <h2 class="section-title">02 // <span class="text-gradient">${this.safe('AI_BUILDER')}</span></h2>
            </div>

            <div class="ai-container">
                <div class="ai-info">
                    <p class="ai-manifesto">
                        ${this.safe('Desarrollo de sistemas autónomos que no solo responden, sino que operan. Especialista en LLMs, Prompt Engineering y automatización inteligente.')}
                    </p>
                    <div class="tech-orbit">
                        <div class="orbit-item">${this.safe('OpenAI')}</div>
                        <div class="orbit-item">${this.safe('Antigravity')}</div>
                        <div class="orbit-item">${this.safe('Claude')}</div>
                        <div class="orbit-item">${this.safe('SaaS')}</div>
                    </div>
                </div>

                <div class="featured-project glass-panel">
                    <div class="project-tag">${this.safe('FEATURED_PROJECT')}</div>
                    <h3>🔥 ${this.safe('Radar AI Hub')}</h3>
                    <p>${this.safe('Sistema operativo tipo Slack impulsado por IA para equipos comerciales.')}</p>
                    
                    <div class="slack-simulator">
                        <div class="slack-sidebar">
                            <div class="channel"># alerts-ai</div>
                            <div class="channel active"># performance</div>
                            <div class="channel"># simulations</div>
                        </div>
                        <div class="slack-chat">
                            <div class="message">
                                <span class="bot-name">RADAR_BOT</span>: ${this.safe('⚠️ Alerta de riesgo en SLA detectada.')}
                            </div>
                            <div class="message">
                                <span class="bot-name">RADAR_BOT</span>: ${this.safe('Recomendación: Reasignar 5 leads a Team B.')}
                            </div>
                            <div class="typing-indicator">${this.safe('Simulando eventos...')}</div>
                        </div>
                    </div>

                    <div class="project-features">
                        <span>📡 ${this.safe('Alertas')}</span>
                        <span>⚠️ ${this.safe('Detección Riesgo')}</span>
                        <span>🤖 ${this.safe('Recs. Automáticas')}</span>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(section);
        this.addStyles();
    }

    /**
     * Inyecta dinámicamente los estilos CSS encapsulados de esta sección en el DOM.
     * Verifica que los estilos no se hayan inyectado previamente.
     */
    addStyles() {
        const styleId = 'ai-styles';
        if (document.getElementById(styleId)) return;

        const style = document.createElement('style');
        style.id = styleId;
        
        // CSS Modular para el AIAgent
        style.innerHTML = `
            /* --- Layout --- */
            .ai-section { padding: 100px 10%; background: linear-gradient(to bottom, var(--bg-deep), #0a0514); }
            .ai-container { display: grid; grid-template-columns: 1fr 1.2fr; gap: 50px; align-items: center; }
            .tech-orbit { display: flex; gap: 20px; flex-wrap: wrap; }
            .featured-project { padding: 40px; position: relative; overflow: hidden; }
            .slack-simulator { margin: 30px 0; height: 200px; background: #1a1d21; border-radius: 8px; display: flex; font-size: 0.8rem; border: 1px solid #30363d; }
            .slack-sidebar { width: 120px; background: #19171d; padding: 15px; border-right: 1px solid #30363d; }
            .slack-chat { flex: 1; padding: 15px; display: flex; flex-direction: column; gap: 12px; }
            .project-features { display: flex; gap: 15px; margin-top: 20px; }
            
            /* --- Tipografía y Colores --- */
            .ai-manifesto { font-size: 1.8rem; font-weight: 600; margin-bottom: 40px; line-height: 1.4; }
            .orbit-item { padding: 10px 20px; border-radius: 30px; background: rgba(112, 0, 255, 0.1); border: 1px solid var(--accent-secondary); color: white; font-family: var(--font-mono); font-size: 0.8rem; }
            .project-tag { font-family: var(--font-mono); font-size: 0.7rem; color: var(--accent-secondary); margin-bottom: 10px; }
            .featured-project h3 { font-size: 2rem; margin-bottom: 10px; }
            .channel { color: #abacad; margin-bottom: 10px; font-size: 0.75rem; }
            .channel.active { background: #1164a3; color: white; padding: 2px 5px; border-radius: 4px; }
            .bot-name { color: var(--accent-primary); font-weight: 700; margin-right: 5px; }
            .typing-indicator { font-size: 0.7rem; color: #abacad; font-style: italic; margin-top: auto; }
            .project-features span { font-size: 0.75rem; color: var(--text-secondary); }
            
            /* --- Animaciones --- */
            .message { opacity: 0; animation: fadeInMessage 0.5s forwards; }
            .message:nth-child(1) { animation-delay: 1s; }
            .message:nth-child(2) { animation-delay: 3s; }
            @keyframes fadeInMessage {
                from { opacity: 0; transform: translateX(-10px); }
                to { opacity: 1; transform: translateX(0); }
            }
            
            /* --- Responsividad --- */
            @media (max-width: 1000px) { .ai-container { grid-template-columns: 1fr; } }
        `;
        document.head.appendChild(style);
    }
}
