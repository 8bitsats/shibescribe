document.addEventListener('DOMContentLoaded', function() {
  const inscriptionForm = document.getElementById('inscriptionForm');
  inscriptionForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would handle the form submission to your backend
    alert('Submit button clicked. Implement form submission logic.');
  });

  const checkFilesButton = document.getElementById('checkFiles');
  checkFilesButton.addEventListener('click', function() {
    // Here you would check if the files are already inscribed
    alert('Check Files button clicked. Implement file check logic.');
  });

  // Fee rate display logic
  const feeRateInput = document.getElementById('feeRate');
  feeRateInput.addEventListener('input', function() {
    const feeRateDisplay = document.querySelector('.feeRateDisplay');
    feeRateDisplay.querySelector('span:nth-child(2)').innerText = `Mid: ${this.value}`;
  });
});
