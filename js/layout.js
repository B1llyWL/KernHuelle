export async function loadLayout() {
    try {
        // Путь теперь просто /header.html, так как файл лежит в public/
        const headerResponse = await fetch('/header.html');
        if (!headerResponse.ok) throw new Error('Header не найден');
        
        const headerContainer = document.getElementById('header-container');
        if (headerContainer) {
            headerContainer.innerHTML = await headerResponse.text();
        }

        // Путь теперь просто /footer.html
        const footerResponse = await fetch('/footer.html');
        if (!footerResponse.ok) throw new Error('Footer не найден');
        
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            footerContainer.innerHTML = await footerResponse.text();
        }
    } catch (error) {
        console.error('❌ Ошибка загрузки layout:', error);
    }
}
