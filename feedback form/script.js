// script.js
document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form data
    const formData = {
      name: document.getElementById("name").value,
      department: document.getElementById("department").value,
      class: document.getElementById("class").value,
      rollno: document.getElementById("rollno").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      feedback: document.getElementById("feedback").value
    };
  
    // Store data in local storage (simulated database)
    localStorage.setItem("feedbackData", JSON.stringify(formData));
  
    // Redirect to thank you page
    window.location.href = "thankyou.html";
  });
  