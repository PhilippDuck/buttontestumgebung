function createMachineCard(parent, machineNr) {
    const card = document.createElement("div");
    card.className = "machineCard";
    card.id = machineNr;
    parent.append(card)
    return card;
}

function fillMachineCard(parent, modulesView, detailsView) {

    const title = document.createElement("div");
    title.className = "title";
    title.innerText = parent.id;
    parent.append(title);

    const contentBox = document.createElement("div");
    contentBox.className = "metricsView";

    const metrics = document.createElement("div");
    metrics.className = "metrics";
    metrics.innerText = "metrics";
    contentBox.append(metrics);

    if (detailsView) {
        contentBox.classList.add("detailsView")
        const details = document.createElement("div");
        details.className = "details";
        details.innerText = "details";
        contentBox.append(details);
    }

    if (modulesView) {
        contentBox.classList.add("modulesView");
        const modules = document.createElement("div");
        modules.className = "modules";
        modules.innerText = "modules";
        contentBox.append(modules);
    }

    parent.append(contentBox);
}

const card = createMachineCard(document.getElementById("main"), 1234);
window.onload = fillMachineCard(card,true,true);