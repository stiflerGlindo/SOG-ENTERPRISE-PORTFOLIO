/**
 * Archivo principal de entrada (Entry point).
 * Inicializa el orquestador principal de la aplicación cuando el DOM está listo.
 */
import { Orchestrator } from './src/agents/Orchestrator.js';

document.addEventListener('DOMContentLoaded', () => {
    const orchestrator = new Orchestrator();
    
    // Inicializa el sistema y maneja errores críticos en el arranque
    orchestrator.boot().catch(error => {
        console.error("Critical System Failure:", error);
        const matrixTextElement = document.getElementById('matrix-text');
        if (matrixTextElement) {
            matrixTextElement.innerText = "SYSTEM CRASH: CHECK CONSOLE";
        }
    });
});
