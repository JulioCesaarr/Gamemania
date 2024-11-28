let currentIndex = 0;
const images = document.querySelectorAll(".carousel img");

function showNextImage() {
images.forEach((img, index) => {
img.classList.remove("active");
if (index === currentIndex) {
img.classList.add("active");
}
});
currentIndex = (currentIndex + 1) % images.length;
}

setInterval(showNextImage, 3000); // Alterna a cada 3 segundos

  $(document).ready(function() {
    $("#cart").hover(
        function() {
            $(this).find("#cart-popup").fadeIn(200);  // Animação suave para mostrar
        },
        function() {
            $(this).find("#cart-popup").fadeOut(200);  // Animação suave para esconder
        }
    );
});

$(document).ready(function () {
    $("#loginForm").submit(function (event) {
        event.preventDefault();
        var login = document.getElementById('login').value;
        var senha = document.getElementById('senha').value;

    if(login == "adm" && senha == "adm"){
        alert('Login com Sucesso')          
        location.href = "index2.html"
    }else{
        alert('Usuário ou Senha incorreto')
    };
    }
);
});

    function updateLoginSection() {
        const user = localStorage.getItem("user");
        if (user) {
            const userName = user;
            const userPhoto = "/Gamemania-main/imgs/imagemperfil.png"; // Imagem fictícia do usuário
            $("#loginSection").html(`
                <div class="perfil">
                    <img src="${userPhoto}" class="user-photo" alt="Foto do usuário">
                    <div class="user-name">
                        <span class="greeting">Bem-vindo</span>
                        <span class="username">${userName}</span>
                        <span id="logoutButton">Logoff</span> <!-- Botão de logoff -->
                    </div>
                </div>
            `);
        };
    };