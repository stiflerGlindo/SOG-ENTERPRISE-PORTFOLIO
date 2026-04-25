/**
 * Interface Agent
 * Manages the visual shell and global UI components.
 */
export class InterfaceAgent {
    constructor(orchestrator) {
        this.orchestrator = orchestrator;
        this.sections = ['hero', 'data', 'ai', 'projects', 'contact'];
    }

    renderShell() {
        const nav = document.getElementById('main-nav');
        const footer = document.getElementById('system-footer');
        
        nav.classList.remove('hidden');
        nav.classList.add('fade-in');
        
        nav.innerHTML = `
            <div class="nav-logo">
                <span class="text-gradient" style="font-weight: 800; font-size: 1.2rem;">STIWARD.AI</span>
            </div>
            <ul class="nav-links">
                <li><a href="#hero">SYSTEM</a></li>
                <li><a href="#data">DATA</a></li>
                <li><a href="#ai">AI</a></li>
                <li><a href="#projects">PROJECTS</a></li>
            </ul>
            <div class="nav-cta">
                <button class="btn-primary">TERMINAL_CMD</button>
            </div>
        `;

        this.renderHero();
    }

    renderHero() {
        const container = document.getElementById('content-stream');
        const section = document.createElement('section');
        section.id = 'hero';
        section.className = 'hero-section';
        
        section.innerHTML = `
            <div class="hero-content">
                <div class="hero-tag fade-in" style="animation-delay: 0.2s">SYSTEM STATUS: OPTIMIZED</div>
                <h1 class="hero-title fade-in" style="animation-delay: 0.4s">
                    Stiward <span class="text-gradient">Orozco</span>
                </h1>
                <div class="hero-roles fade-in" style="animation-delay: 0.6s">
                    <span class="role">Economista</span>
                    <span class="divider">|</span>
                    <span class="role">Data Analyst</span>
                    <span class="divider">|</span>
                    <span class="role">AI Builder</span>
                </div>
                <p class="hero-desc fade-in" style="animation-delay: 0.8s">
                    Transformando datos complejos en decisiones accionables que generen impacto real. 
                    Construyendo sistemas operativos autónomos (AI Ops).
                </p>
                <div class="hero-actions fade-in" style="animation-delay: 1s">
                    <a href="#projects" class="btn-glow">VIEW_PROJECTS</a>
                    <a href="#contact" class="btn-outline">CONNECT</a>
                </div>
            </div>
            <div class="hero-visual">
                <!-- Data stream animation will be injected here -->
                <div class="data-grid-bg"></div>
            </div>
        `;
        
        container.appendChild(section);
        this.addHeroStyles();
    }

    addHeroStyles() {
        const style = document.createElement('style');
        style.innerHTML = `
            .hero-section {
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 10%;
                position: relative;
                overflow: hidden;
            }

            .hero-content {
                max-width: 600px;
                z-index: 2;
            }

            .hero-tag {
                font-family: var(--font-mono);
                color: var(--accent-success);
                font-size: 0.8rem;
                margin-bottom: 20px;
                display: inline-block;
                padding: 4px 12px;
                border: 1px solid var(--accent-success);
                border-radius: 4px;
            }

            .hero-title {
                font-size: 5rem;
                line-height: 1.1;
                margin-bottom: 20px;
            }

            .hero-roles {
                font-family: var(--font-mono);
                font-size: 1.2rem;
                color: var(--text-secondary);
                margin-bottom: 30px;
            }

            .hero-desc {
                font-size: 1.1rem;
                color: var(--text-secondary);
                margin-bottom: 40px;
                max-width: 500px;
            }

            .btn-glow {
                display: inline-block;
                padding: 14px 28px;
                background: var(--accent-primary);
                color: var(--bg-deep);
                text-decoration: none;
                font-weight: 700;
                border-radius: 8px;
                box-shadow: 0 0 20px rgba(0, 242, 255, 0.4);
                margin-right: 20px;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

            .btn-glow:hover {
                transform: translateY(-2px);
                box-shadow: 0 0 30px rgba(0, 242, 255, 0.6);
            }

            .btn-outline {
                display: inline-block;
                padding: 14px 28px;
                border: 1px solid var(--glass-border);
                color: var(--text-primary);
                text-decoration: none;
                font-weight: 600;
                border-radius: 8px;
                transition: background 0.3s ease;
            }

            .btn-outline:hover {
                background: var(--glass-border);
            }

            .nav-links {
                display: flex;
                list-style: none;
                gap: 40px;
            }

            .nav-links a {
                text-decoration: none;
                color: var(--text-secondary);
                font-family: var(--font-mono);
                font-size: 0.8rem;
                letter-spacing: 1px;
                transition: color 0.3s ease;
            }

            .nav-links a:hover {
                color: var(--accent-primary);
            }

            .hero-visual {
                position: absolute;
                right: -5%;
                top: 0;
                width: 50%;
                height: 100%;
                background: linear-gradient(90deg, var(--bg-deep) 0%, transparent 100%);
                z-index: 1;
            }

            .data-grid-bg {
                width: 100%;
                height: 100%;
                background-image: 
                    linear-gradient(rgba(0, 242, 255, 0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 242, 255, 0.05) 1px, transparent 1px);
                background-size: 50px 50px;
                transform: perspective(1000px) rotateX(60deg) rotateZ(-20deg) scale(2);
                transform-origin: center;
                animation: gridMove 20s linear infinite;
            }

            @keyframes gridMove {
                from { background-position: 0 0; }
                to { background-position: 0 1000px; }
            }
        `;
        document.head.appendChild(style);
    }
}
