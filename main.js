import { Orchestrator } from './src/agents/Orchestrator.js';

document.addEventListener('DOMContentLoaded', () => {
    const orchestrator = new Orchestrator();
    orchestrator.boot().catch(err => {
        console.error("Critical System Failure:", err);
        document.getElementById('matrix-text').innerText = "SYSTEM CRASH: CHECK CONSOLE";
    });
});
