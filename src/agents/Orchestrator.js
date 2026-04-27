/**
 * Orchestrator Agent
 * The central brain of the portfolio system.
 * Hardened version for Elite Cybersecurity.
 */
export class Orchestrator {
    #agents = {}; // Private fields for internal state protection
    #isBooting = false;

    constructor() {
        this.bootProgress = 0;
        this.status = 'IDLE';
    }

    /**
     * Sanitizes inputs to prevent XSS (Cross-Site Scripting)
     * Centralized security utility used by all agents.
     */
    sanitize(str) {
        if (!str) return '';
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    }

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
                } catch (err) {
                    // Fail-safe: Isolate agent failure so system continues
                    console.error(`Security Warning: Agent ${config.id} failed to initialize. Isolating...`, err);
                }
            }

            await this.updateBoot(100, "ORCHESTRATION LAYER SECURED.");
            this.completeBoot();
        } catch (criticalErr) {
            this.handleSystemFailure(criticalErr);
        }
    }

    async updateBoot(progress, message) {
        this.bootProgress = Math.min(progress, 100);
        return new Promise(resolve => {
            const progressBar = document.getElementById('boot-progress');
            const statusText = document.querySelector('.matrix-code');
            
            if (progressBar) progressBar.style.width = `${this.bootProgress}%`;
            // Security: Always sanitize messages before injecting into DOM
            if (statusText) statusText.innerText = this.sanitize(message);
            
            setTimeout(resolve, 600); // Optimized timing
        });
    }

    completeBoot() {
        const overlay = document.getElementById('loading-overlay');
        if (overlay) {
            overlay.style.opacity = '0';
            setTimeout(() => overlay.remove(), 800);
        }
        
        // Final Execution Stream
        const stream = 'content-stream';
        
        // Check if essential agents are online before calling
        if (this.#agents.interface) this.#agents.interface.renderShell();
        if (this.#agents.data) this.#agents.data.render(stream);
        if (this.#agents.ai) this.#agents.ai.render(stream);
        if (this.#agents.contact) this.#agents.contact.render(stream);

        this.status = 'ACTIVE';
        console.log("Orchestrator: System fully orchestrated and secured.");
    }

    handleSystemFailure(err) {
        this.status = 'CRASHED';
        const statusText = document.querySelector('.matrix-code');
        if (statusText) statusText.innerText = "SECURITY_HALT: SYSTEM CRITICAL ERROR";
        console.error("Critical Orchestration Failure:", err);
    }

    // Accessor for agents (read-only for security)
    getAgent(id) {
        return this.#agents[id] || null;
    }
}
