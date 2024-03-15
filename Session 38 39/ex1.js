const steps = document.querySelectorAll('.step');
const prevButton = document.querySelector('.button.prev');
const nextButton = document.querySelector('.button.next');

let currentStep = 1;

function updateProgress() {
  steps.forEach((step, index) => {
    if (index < currentStep) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });

  prevButton.disabled = currentStep === 1;
  nextButton.disabled = currentStep === steps.length;
}

prevButton.addEventListener('click', () => {
  currentStep--;
  updateProgress();
});

nextButton.addEventListener('click', () => {
  currentStep++;
  updateProgress();
});

updateProgress();
