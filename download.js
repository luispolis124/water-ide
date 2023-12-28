function exportToWater() {
    const code = editor.getValue();
    const blob = new Blob([code], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = 'jogo.wt';
    a.type = 'text/plain'; // Especifica o tipo MIME como texto simples
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}