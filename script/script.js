document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();});

document.getElementById('appointmentForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the traditional way

  // Retrieve form data
  const formData = {
    patientName: document.getElementById('patientName').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    specialist: document.getElementById('specialist').value,
    appointmentDate: document.getElementById('appointmentDate').value,
    appointmentTime: document.getElementById('appointmentTime').value
  };

  for (const key in formData) {
    if (formData[key] === '') {
      alert('Please fill all fields.');
      return;
    }
  }

  console.log('Form Data Submitted:', formData);

 
});
