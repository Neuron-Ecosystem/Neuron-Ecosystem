const data = window.NEURON_DATA || {};

function renderHeroSignals(items) {
    const container = document.getElementById("hero-signals");
    if (!container || !Array.isArray(items)) return;

    container.innerHTML = items
        .map((item) => `<li>${item}</li>`)
        .join("");
}

function renderCoreServices(items) {
    const container = document.getElementById("core-grid");
    if (!container || !Array.isArray(items)) return;

    container.innerHTML = items
        .map(
            (item) => `
                <a class="card-link ${item.accent === "primary" ? "is-primary" : ""}" href="${item.url}" target="_blank" rel="noreferrer">
                    <div class="card-link-head">
                        <span class="card-icon"><i class="fas ${item.icon}"></i></span>
                        <span class="eyebrow">${item.accent === "primary" ? "Priority Node" : "Core Node"}</span>
                    </div>
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <span class="card-arrow">Открыть сервис <i class="fas fa-arrow-up-right-from-square"></i></span>
                </a>
            `
        )
        .join("");
}

function renderToolFeatures(items) {
    const container = document.getElementById("tools-list");
    if (!container || !Array.isArray(items)) return;

    container.innerHTML = items
        .map(
            (item) => `
                <article class="tool-item">
                    <i class="fas ${item.icon}"></i>
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                </article>
            `
        )
        .join("");
}

function renderProjects(items) {
    const container = document.getElementById("projects-grid");
    if (!container || !Array.isArray(items)) return;

    container.innerHTML = items
        .map(
            (item) => `
                <a class="project-card" href="${item.url}" target="_blank" rel="noreferrer">
                    <span class="card-icon"><i class="fas ${item.icon}"></i></span>
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <span class="card-arrow">Открыть проект <i class="fas fa-arrow-up-right-from-square"></i></span>
                </a>
            `
        )
        .join("");
}

function formatDate(dateString) {
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return dateString;

    return new Intl.DateTimeFormat("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    }).format(date);
}

function renderUpdates(items) {
    const container = document.getElementById("updates-list");
    if (!container || !Array.isArray(items)) return;

    container.innerHTML = items
        .map(
            (item) => `
                <article class="updates-item">
                    <time datetime="${item.date}">${formatDate(item.date)}</time>
                    <p>${item.text}</p>
                </article>
            `
        )
        .join("");
}

function initPage() {
    renderHeroSignals(data.heroSignals);
    renderCoreServices(data.coreServices);
    renderToolFeatures(data.toolFeatures);
    renderProjects(data.projects);
    renderUpdates(data.updates);
}

document.addEventListener("DOMContentLoaded", initPage);
