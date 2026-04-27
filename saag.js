document.getElementById('whatsapp-link').addEventListener('click', function() {
    const telefone = "5511916637691"; // Número com DDI (55) + DDD + Numero
    const mensagem = encodeURIComponent("Olá! Gostaria de saber mais sobre a automação de IA.");
    const url = `https://wa.me/${telefone}?text=${mensagem}`;
    
    // Abre em uma nova aba
    window.open(url, '_blank');
});