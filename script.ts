// Função para gerar senha
function generatePassword(length: number, options: { uppercase: boolean; lowercase: boolean; numbers: boolean; symbols: boolean; }): string {
    let availableChars = "";

    if (options.uppercase) availableChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (options.lowercase) availableChars += "abcdefghijklmnopqrstuvwxyz";
    if (options.numbers) availableChars += "0123456789";
    if (options.symbols) availableChars += "!@#$%^&*()_+-=[]{}|;:',.<>?/";

    if (availableChars.length === 0) {
        return "Selecione pelo menos um critério!";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars[randomIndex];
    }

    return password;
}

// Função para capturar valores do HTML e gerar a senha
function setupEventListeners() {
    const button = document.getElementById("generate") as HTMLButtonElement;
    button.addEventListener("click", () => {
        const length = (document.getElementById("length") as HTMLInputElement).valueAsNumber;
        const options = {
            uppercase: (document.getElementById("uppercase") as HTMLInputElement).checked,
            lowercase: (document.getElementById("lowercase") as HTMLInputElement).checked,
            numbers: (document.getElementById("numbers") as HTMLInputElement).checked,
            symbols: (document.getElementById("symbols") as HTMLInputElement).checked,
        };

        const password = generatePassword(length, options);
        // Alterado de 'value' para 'textContent'
        (document.getElementById("password") as HTMLSpanElement).textContent = password;
    });
}

// Espera o DOM carregar para adicionar os eventos
document.addEventListener("DOMContentLoaded", setupEventListeners);
