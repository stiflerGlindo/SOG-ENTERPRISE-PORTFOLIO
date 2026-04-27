/**
 * Contact Agent
 * Manages social links, contact information, and final call to action.
 * Hardened version for Elite Cybersecurity.
 */
export class ContactAgent {
    constructor(orchestrator) {
        this.orchestrator = orchestrator;
    }

    /**
     * Saneamiento centralizado
     */
    safe(str) {
        return this.orchestrator.sanitize(str);
    }

    render(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const section = document.createElement('section');
        section.id = 'contact';
        section.className = 'contact-section';
        
        // Security: Applied rel="noopener noreferrer" to all external links
        section.innerHTML = `
            <div class="contact-grid glass-panel">
                <div class="contact-info">
                    <h2 class="text-gradient">${this.safe('CONECTEMOS')}</h2>
                    <p>${this.safe('Me encanta colaborar, crear y escalar ideas. ¿Tienes un desafío de datos o IA?')}</p>
                    <div class="contact-links">
                        <a href="https://www.linkedin.com/in/stiward-orozco-galindo-39bb95165" target="_blank" rel="noopener noreferrer" class="social-link">LinkedIn</a>
                        <a href="https://github.com/stiflerGlindo" target="_blank" rel="noopener noreferrer" class="social-link">GitHub</a>
                        <a href="https://twitter.com/StiflerSnif" target="_blank" rel="noopener noreferrer" class="social-link">Twitter / X</a>
                        <a href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTMyNDc2MzMxNDE0MTI2" target="_blank" rel="noopener noreferrer" class="social-link">Instagram</a>
                    </div>
                </div>
                <div class="direct-contact">
                    <div class="phone-card">
                        <span class="label">WHATSAPP</span>
                        <span class="value">${this.safe('+57 301 650 1742')}</span>
                    </div>
                    <div class="status-indicator">
                        <span class="dot"></span> ${this.safe('DISPONIBLE PARA NUEVOS PROYECTOS')}
                    </div>
                </div>
            </div>
            
            <footer class="final-footer">
                <div class="footer-left">${this.safe('STIWARD OROZCO © 2025')}</div>
                <div class="footer-right">${this.safe('"Think in systems. Build with data."')}</div>
            </footer>
        `;
        
        container.appendChild(section);
        this.addStyles();
    }

    addStyles() {
        const styleId = 'contact-styles';
        if (document.getElementById(styleId)) return;

        const style = document.createElement('style');
        style.id = styleId;
        style.innerHTML = `
            .contact-section { padding: 100px 10%; background: var(--bg-dark); }
            .contact-grid { display: grid; grid-template-columns: 1.5fr 1fr; padding: 60px; gap: 40px; }
            .contact-info h2 { font-size: 3rem; margin-bottom: 20px; }
            .contact-links { margin-top: 40px; display: flex; gap: 20px; flex-wrap: wrap; }
            .social-link {
                text-decoration: none; color: var(--text-primary); font-family: var(--font-mono);
                font-size: 0.9rem; border-bottom: 1px solid var(--accent-primary);
                padding-bottom: 5px; transition: color 0.3s ease;
            }
            .social-link:hover { color: var(--accent-primary); }
            .direct-contact { display: flex; flex-direction: column; justify-content: center; align-items: flex-end; text-align: right; }
            .phone-card { background: rgba(255, 255, 255, 0.03); padding: 20px; border-radius: 12px; border: 1px solid var(--glass-border); margin-bottom: 20px; }
            .phone-card .label { display: block; font-size: 0.7rem; color: var(--text-secondary); margin-bottom: 5px; }
            .phone-card .value { font-size: 1.2rem; font-weight: 700; color: var(--accent-success); }
            .status-indicator { font-size: 0.7rem; font-family: var(--font-mono); color: var(--text-secondary); display: flex; align-items: center; gap: 10px; }
            .status-indicator .dot { width: 8px; height: 8px; background: var(--accent-success); border-radius: 50%; box-shadow: 0 0 10px var(--accent-success); }
            .final-footer { margin-top: 80px; padding-top: 40px; border-top: 1px solid var(--glass-border); display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-secondary); }
            @media (max-width: 800px) {
                .contact-grid { grid-template-columns: 1fr; padding: 30px; }
                .direct-contact { align-items: flex-start; text-align: left; }
                .final-footer { flex-direction: column; gap: 20px; }
            }
        `;
        document.head.appendChild(style);
    }
}
