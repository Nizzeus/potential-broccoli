document.getElementById('surveyForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const message = document.getElementById('message').value;
  
    const feedback = `Thank you for answering this survey!`;
    document.getElementById('formFeedback').innerText = feedback;
  
    this.reset();
  });