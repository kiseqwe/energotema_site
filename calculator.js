
function calculateDehumidifier() {
    const area = document.getElementById('roomArea').value;
    const resultBox = document.getElementById('calcResult');
    const resultName = document.getElementById('resultName');

    if (!area || area <= 0) {
        alert("Будь ласка, введіть коректну площу приміщення.");
        return;
    }

    let model = "";

    if (area <= 40) {
        model = "Drieaz BD1000 (або Maxton 3)";
    } else if (area <= 60) {
        model = "Maxton Pensil 3";
    } else if (area <= 100) {
        model = "Trotec TTK 166 Eco";
    } else if (area <= 250) {
        model = "Maxton MX-90L";
    } else {
        model = "Celsius MDH-158P (Промисловий)";
    }


    resultName.innerText = model;
    resultBox.style.display = "block";


    resultBox.style.opacity = 0;
    setTimeout(() => {
        resultBox.style.opacity = 1;
        resultBox.style.transition = "opacity 0.5s ease";
    }, 10);
}

/* --- FAQ ACCORDION --- */
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const item = question.parentElement;
        const answer = question.nextElementSibling;

        // Перемикаємо клас active
        item.classList.toggle("active");

        // Анімація висоти (якщо active - ставимо реальну висоту, якщо ні - 0)
        if (item.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = 0;
        }
    });
});

/* --- TYPEWRITER EFFECT --- */
const textElement = document.getElementById("typewriter-text");
const phrases = [
    "твого простору",
    "після затоплення",
    "після ремонту",
    "твого офісу",
    "твого дому"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        textElement.innerText = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        textElement.innerText = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 150;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

if (textElement) {
    document.addEventListener('DOMContentLoaded', type);
}

/* --- 3D TILT EFFECT --- */
const cards = document.querySelectorAll('.product-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // X позиція всередині елемента
        const y = e.clientY - rect.top;  // Y позиція всередині елемента

        // Вираховуємо центр
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Вираховуємо кут нахилу (максимум 15 градусів)
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        // Застосовуємо стиль
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    // Коли мишка йде геть - повертаємо як було
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale(1)`;
    });
});