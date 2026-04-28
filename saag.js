document.addEventListener('DOMContentLoaded', function() {
    
    // --- Lógica do WhatsApp ---
    const botaoWhatsapp = document.getElementById('whatsapp-link');
    if (botaoWhatsapp) {
        botaoWhatsapp.addEventListener('click', function() {
            const telefone = "5511916637691";
            const mensagem = encodeURIComponent("Olá! Vim pelo site da Saag IA.");
            window.open(`https://wa.me/${telefone}?text=${mensagem}`, '_blank');
        });
    }

    // --- Lógica do Instagram ---
    const botaoInstagram = document.getElementById('instagram-link');
    if (botaoInstagram) {
        botaoInstagram.addEventListener('click', function() {
            // Substitua pelo link real do seu perfil
            window.open('https://www.instagram.com/saagtecia/', '_blank');
        });
    }

});     
