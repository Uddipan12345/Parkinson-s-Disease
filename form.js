document.addEventListener("DOMContentLoaded", function () {
  // Add an event listener to the form submission
  document.getElementById('credentials').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
      console.log("Hello");
      // Get form input values
      const name = document.getElementById('fname').value;
      const gender = document.getElementById('fgender').value;
      const age = document.getElementById("fage").value;
      const language = document.getElementById("flang").value;
      const time = document.getElementById("ftime").value;
      const degree = document.getElementById("fdegree").value;

      // Create a new jsPDF instance
      const doc = new jsPDF();

      // Add content to the PDF
      doc.text(20, 20, 'Credentials');
      doc.text(20, 30, 'Name: ' + name);
      doc.text(20, 40, 'Age: ' + age);
      doc.text(20, 50, 'Gender: ' + gender);
      doc.text(20, 60, 'First Language: ' + language);
      doc.text(20, 70, "Degree of Parkinson's Disease: " + degree);
      doc.text(20, 80, 'Duration(in months): ' + time);

      // Save the PDF to a file
      doc.save(`${name}_credentials.pdf`);
  });
});
