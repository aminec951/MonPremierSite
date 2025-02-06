document.addEventListener('DOMContentLoaded', function() {
    const questionButton = document.getElementById('question');
    const answerButtons = document.querySelectorAll('button[id^="reponse"]');
    const correctAnswer = 'reponse1'; // Assuming 'a' is the correct answer
    const message = document.createElement('div');
    document.body.appendChild(message);

    questionButton.addEventListener('click', function() {
        alert('quel est la capital de la France?');
    });

    answerButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.id === correctAnswer) {
                message.textContent = "Correct!";
            } else {
                message.textContent = "faux!";
            }
        });
    });
});
            