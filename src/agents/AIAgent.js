/**
 * AI Agent
 * Focuses on LLM development, SaaS products, and the Radar AI project.
 */
export class AIAgent {
    constructor(orchestrator) {
        this.orchestrator = orchestrator;
    }

    render(containerId) {
        const container = document.getElementById(containerId);
        
        // 1. AI Skills Section
        const section = document.createElement('section');
        section.id = 'ai';
        section.className = 'ai-section';
        
        section.innerHTML = `
            <div class="section-header">
                <div class="header-line" style="background: var(--accent-secondary)"></div>
                <h2 class="section-title">02 // <span class="text-gradient">AI_BUILDER</span></h2>
            </div>

            <div class="ai-container">
                <div class="ai-info">
                    <p class="ai-manifesto">
                        Desarrollo de sistemas autónomos que no solo responden, sino que operan. 
                        Especialista en LLMs, Prompt Engineering y automatización inteligente.
                    </p>
                    <div class="tech-orbit">
                        <div class="orbit-item">OpenAI</div>
                        <div class="orbit-item">Antigravity</div>
                        <div class="orbit-item">Claude</div>
                        <div class="orbit-item">SaaS</div>
                    </div>
                </div>

                <div class="featured-project glass-panel">
                    <div class="project-tag">FEATURED_PROJECT</div>
                    <h3>🔥 Radar AI Hub</h3>
                    <p>Sistema operativo tipo Slack impulsado por IA para equipos comerciales.</p>
                    
                    <div class="slack-simulator">
                        <div class="slack-sidebar">
                            <div class="channel"># alerts-ai</div>
                            <div class="channel active"># performance</div>
                            <div class="channel"># simulations</div>
                        </div>
                        <div class="slack-chat">
                            <div class="message">
                                <span class="bot-name">RADAR_BOT</span>: ⚠️ Alerta de riesgo en SLA detectada.
                            </div>
                            <div class="message">
                                <span class="bot-name">RADAR_BOT</span>: Recomendación: Reasignar 5 leads a Team B.
                            </div>
                            <div class="typing-indicator">Simulando eventos...</div>
                        </div>
                    </div>

                    <div class="project-features">
                        <span>📡 Alertas</span>
                        <span>⚠️ Detección Riesgo</span>
                        <span>🤖 Recs. Automáticas</span>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(section);
        this.addStyles();
    }

    addStyles() {
        const style = document.createElement('style');
        style.innerHTML = `
            .ai-section {
                padding: 100px 10%;
                background: linear-gradient(to bottom, var(--bg-deep), #0a0514);
            }

            .ai-container {
                display: grid;
                grid-template-columns: 1fr 1.2fr;
                gap: 50px;
                align-items: center;
            }

            .ai-manifesto {
                font-size: 1.8rem;
                font-weight: 600;
                margin-bottom: 40px;
                line-height: 1.4;
            }

            .tech-orbit {
                display: flex;
                gap: 20px;
                flex-wrap: wrap;
            }

            .orbit-item {
                padding: 10px 20px;
                border-radius: 30px;
                background: rgba(112, 0, 255, 0.1);
                border: 1px solid var(--accent-secondary);
                color: white;
                font-family: var(--font-mono);
                font-size: 0.8rem;
            }

            .featured-project {
                padding: 40px;
                position: relative;
                overflow: hidden;
            }

            .project-tag {
                font-family: var(--font-mono);
                font-size: 0.7rem;
                color: var(--accent-secondary);
                margin-bottom: 10px;
            }

            .featured-project h3 {
                font-size: 2rem;
                margin-bottom: 10px;
            }

            .slack-simulator {
                margin: 30px 0;
                height: 200px;
                background: #1a1d21;
                border-radius: 8px;
                display: flex;
                font-family: 'Lato', sans-serif;
                font-size: 0.8rem;
                border: 1px solid #30363d;
            }

            .slack-sidebar {
                width: 120px;
                background: #19171d;
                padding: 15px;
                border-right: 1px solid #30363d;
            }

            .channel {
                color: #abacad;
                margin-bottom: 10px;
                font-size: 0.75rem;
            }

            .channel.active {
                background: #1164a3;
                color: white;
                padding: 2px 5px;
                border-radius: 4px;
            }

            .slack-chat {
                flex: 1;
                padding: 15px;
                display: flex;
                flex-direction: column;
                gap: 12px;
            }

            .bot-name {
                color: var(--accent-primary);
                font-weight: 700;
                margin-right: 5px;
            }

            .message {
                opacity: 0;
                animation: fadeInMessage 0.5s forwards;
            }

            .message:nth-child(1) { animation-delay: 1s; }
            .message:nth-child(2) { animation-delay: 3s; }

            .typing-indicator {
                font-size: 0.7rem;
                color: #abacad;
                font-style: italic;
                margin-top: auto;
            }

            .project-features {
                display: flex;
                gap: 15px;
                margin-top: 20px;
            }

            .project-features span {
                font-size: 0.75rem;
                color: var(--text-secondary);
            }

            @keyframes fadeInMessage {
                from { opacity: 0; transform: translateX(-10px); }
                to { opacity: 1; transform: translateX(0); }
            }

            @media (max-width: 1000px) {
                .ai-container { grid-template-columns: 1fr; }
            }
        `;
        document.head.appendChild(style);
    }
}
