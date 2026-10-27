export async function loadLayout() {
    try {
        
        const headerResponse = await fetch('/html/header.html');
        if (!headerResponse.ok) throw new Error('Header не найден');
        
        const headerContainer = document.getElementById('header-container');
        if (headerContainer) {
            headerContainer.innerHTML = await headerResponse.text();
        }

        const footerResponse = await fetch('/html/footer.html');
        if (!footerResponse.ok) throw new Error('Footer не найден');
        
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            footerContainer.innerHTML = await footerResponse.text();
        }
    } catch (error) {
        console.error('❌ Ошибка загрузки layout:', error);
    }
}