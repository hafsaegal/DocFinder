document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("appointmentForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Retrieve form data
      const formData = {
        patientName: document.getElementById("patientName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        specialist: document.getElementById("specialist").value,
        appointmentDate: document.getElementById("appointmentDate").value,
        appointmentTime: document.getElementById("appointmentTime").value,
      };

      // Check for empty fields
      for (const key in formData) {
        if (formData[key] === "") {
          alert("Please fill all fields.");
          return;
        }
      }

      // Log form data to console
      console.log("Form Data Submitted:", formData);

      // Display a success message
      alert("Appointment booked successfully!");

      // Reset the form
      document.getElementById("appointmentForm").reset();
    });
});
