function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
function renderRecentSidebar() {
    const sidebar = document.getElementById('recentSidebar');
    if (!sidebar)
        return;
    const entries = JSON.parse(getFromStorage('emotionalDiaryEntries', '[]'));
    if (entries.length === 0) {
        sidebar.style.display = 'none';
        return;
    }
    sidebar.style.display = 'block';
    const recent = entries.slice(0, 3);
    sidebar.innerHTML = '<h2 class="sidebar-title">최근 감정</h2>' +
        recent.map(e => `\n        <div class="entry">\n            <div class="entry-date">${escapeHtml(e.date)}</div>\n            <div class="entry-text">${escapeHtml(e.text)}</div>\n        </div>`).join('');
}
window.renderRecentSidebar = renderRecentSidebar;
document.addEventListener('DOMContentLoaded', renderRecentSidebar);
