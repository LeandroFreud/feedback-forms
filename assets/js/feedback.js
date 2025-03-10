function enviarWhatsApp() {
    let nome = document.getElementById("nome").value;
    let avaliacao = document.getElementById("avaliacao").value;
    let comentario = document.getElementById("comentario").value;
    let numeroWhatsApp = "31988326428";// Substitua pelo número da clínica (com DDD)
    let mensagem = `Olá, meu nome é ${nome}.%0A Minha avaliação do atendimento foi: ${avaliacao}.%0A Comentário: ${comentario || "Nenhum"}`;
    let url = `https://wa.me/${31988326428}?text=${mensagem}`;
    window.open(url, "_blank");
}
