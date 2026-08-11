const contactForm = document.querySelector("#contact-form");
const contactStatus = document.querySelector("#contact-status");
const contactSubmit = document.querySelector("#contact-submit");

if (contactForm) {
contactForm.addEventListener("submit", async (event) => {
event.preventDefault();


    contactStatus.textContent = "Enviando...";
    contactSubmit.disabled = true;

    const formData = new FormData(contactForm);

    try {
        const response = await fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {
            contactForm.reset();
            contactStatus.textContent = "Mensagem enviada com sucesso!";
        } else {
            const data = await response.json();

            if (data.errors) {
                contactStatus.textContent =
                    data.errors.map(error => error.message).join(" ");
            } else {
                contactStatus.textContent =
                    "Não foi possível enviar a mensagem.";
            }
        }
    } catch (error) {
        contactStatus.textContent =
            "Não foi possível enviar a mensagem. Tente novamente.";
    } finally {
        contactSubmit.disabled = false;
    }
});


}
