function createMachineCard(parent, machineNr) {
    const card = document.createElement("div");
    card.className = "machineCard";
    card.id = machineNr;
    parent.append(card)
    return card;
}

function fillMachineCard(parent) {
    const title = document.createElement("div");
    title.className = "title";
    title.innerText = parent.id;

    const contentBox = document.createElement("div");
    contentBox.className = "contentBoxMetricsAndModules";

    const metrics = document.createElement("div");
    metrics.className = "metrics";
    metrics.innerText = "metrics";

    parent.append(title);
    contentBox.append(metrics);
    parent.append(contentBox);
}

function fillMachineCardModules(parent) {
    const card = document.createElement("div");
    card.className = "machine";

    const title = document.createElement("div");
    title.className = "title";
    title.innerText = "Titel";

    const contentBox = document.createElement("div");
    contentBox.className = "contentBoxMetricsAndModules";

    const metrics = document.createElement("div");
    metrics.className = "metrics";
    metrics.innerText = "metrics";

    const modules = document.createElement("div");
    modules.className = "modules";
    modules.innerText = "modules";

    card.append(title);
    contentBox.append(metrics);
    contentBox.append(modules);
    card.append(contentBox);
    parent.append(card);
}

function fillMachineCardModulesDetails(parent) {
    const card = document.createElement("div");
    card.className = "machine";

    const title = document.createElement("div");
    title.className = "title";
    title.innerText = "Titel";

    const contentBox = document.createElement("div");
    contentBox.className = "contentBoxDetails";

    const metrics = document.createElement("div");
    metrics.className = "metrics";
    metrics.innerText = "metrics";

    const details = document.createElement("div");
    details.className = "details";
    details.innerText = "details";

    const modules = document.createElement("div");
    modules.className = "modules";
    modules.innerText = "modules";

    card.append(title);
    contentBox.append(metrics);
    contentBox.append(details);
    contentBox.append(modules);
    
    card.append(contentBox);
    parent.append(card);
}

const card = createMachineCard(document.getElementById("main"), 1234);
window.onload = fillMachineCard(card);