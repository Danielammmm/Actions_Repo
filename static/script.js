// Función para cargar las estadísticas
function loadStats() {
    fetch('/api/stats')
        .then(response => response.json())
        .then(data => {
            const content = document.getElementById('content');

            let contributorsHtml = '<h2>Top Contributors</h2><ul>';
            data.top_contributors.forEach(contributor => {
                contributorsHtml += `<li>${contributor.name}: ${contributor.commits} commits</li>`;
            });
            contributorsHtml += '</ul>';

            let languagesHtml = '<h2>Languages</h2><ul>';
            for (const [language, percentage] of Object.entries(data.languages)) {
                languagesHtml += `<li>${language}: ${percentage}%</li>`;
            }
            languagesHtml += '</ul>';

            content.innerHTML = contributorsHtml + languagesHtml;
        })
        .catch(err => {
            console.error('Error fetching stats:', err);
            document.getElementById('content').innerHTML =
                '<p style="color: red;">Failed to load stats. Please try again.</p>';
        });
}

// Agregar funcionalidad al botón
document.getElementById('refresh-button').addEventListener('click', () => {
    const button = document.getElementById('refresh-button');
    button.disabled = true;
    button.innerHTML = 'Refreshing...';

    setTimeout(() => {
        loadStats();
        button.disabled = false;
        button.innerHTML = 'Refresh Stats';
    }, 1000); // Simular una pequeña espera para el efecto
});

// Cargar las estadísticas al inicio
loadStats();
