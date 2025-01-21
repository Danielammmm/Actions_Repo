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
    .catch(err => console.error('Error fetching stats:', err));
