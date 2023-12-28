function exportToWater() {
    const code = editor.getValue();
    const blob = new Blob([code], { type: 'application/octet-stream' });
    const url = window.URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'jogo.wt';
    
    // Simula um clique no link para iniciar o download
    const event = new MouseEvent('click');
    a.dispatchEvent(event);

    // Libera o recurso URL.createObjectURL
    window.URL.revokeObjectURL(url);
}