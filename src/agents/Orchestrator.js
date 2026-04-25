/**
 * Orchestrator Agent
 * The central brain of the portfolio system.
 */
export class Orchestrator {
    constructor() {
        this.agents = {};
        this.bootProgress = 0;
        this.isInitialized = false;
    }

    async boot() {
        console.log("Orchestrator: Initializing system boot...");
        
        // 1. Simulate Agent Discovery
        await this.updateBoot(20, "DISCOVERING AGENT TEAM...");
        
        // 2. Initialize Interface Agent
        const { InterfaceAgent } = await import('./InterfaceAgent.js');
        this.agents.interface = new InterfaceAgent(this);
        await this.updateBoot(50, "INTERFACE AGENT ONLINE");

        // 3. Initialize Domain Agents
        const { DataAgent } = await import('./DataAgent.js');
        this.agents.data = new DataAgent(this);
        await this.updateBoot(70, "DATA ANALYST AGENT ONLINE");

        const { AIAgent } = await import('./AIAgent.js');
        this.agents.ai = new AIAgent(this);
        await this.updateBoot(85, "AI BUILDER AGENT ONLINE");

        const { ContactAgent } = await import('./ContactAgent.js');
        this.agents.contact = new ContactAgent(this);
        await this.updateBoot(95, "CONTACT AGENT ONLINE");

        // 4. Finalizing
        await this.updateBoot(100, "SYSTEM READY. ORCHESTRATION ACTIVE.");
        
        this.isInitialized = true;
        this.completeBoot();
    }

    async updateBoot(progress, message) {
        return new Promise(resolve => {
            const progressBar = document.getElementById('boot-progress');
            const statusText = document.querySelector('.matrix-code');
            
            progressBar.style.width = `${progress}%`;
            statusText.innerText = message;
            
            setTimeout(resolve, 800); // Dramatic effect
        });
    }

    completeBoot() {
        const overlay = document.getElementById('loading-overlay');
        overlay.style.opacity = '0';
        
        setTimeout(() => {
            overlay.remove();
            
            // 1. Initial Shell
            this.agents.interface.renderShell();
            
            // 2. Sequential Section Rendering
            const stream = 'content-stream';
            this.agents.data.render(stream);
            this.agents.ai.render(stream);
            
            if (this.agents.contact) {
                this.agents.contact.render(stream);
            }

            console.log("Orchestrator: All agents rendered successfully.");
        }, 800);
    }
}
