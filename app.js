
var firstName = document.getElementById("f-name");
var lastName = document.getElementById("L-name");
var dateOfBirth = document.getElementById("DOB");
var mobile = document.getElementById("mobile");
var cnic = document.getElementById("f-cnic");
var email = document.getElementById("f-email");
function previewCards() {

    var previewCard = document.getElementById("previewCard");
    var regForm = document.getElementById("regForm");

    regForm.style.display = "none";
    previewCard.style.display = "block";

    previewCard.innerHTML = `
        <h2>Preview Information</h2>
        <p>Student Name:  ${ "  "+firstName.value + " " + lastName.value}</p>
        <p>Date Of Birth:  ${ "  "+dateOfBirth.value}</p>
        <p>Mobile Number:  ${ "  "+mobile.value}</p>
        <p>CNIC Number:  ${"  " +cnic.value}</p>
        <p>Email:  ${ "  "+email.value}</p>
        <button class="btn" onclick="backToForm()">Back to Form</button>
    `;
}
function backToForm() {
    previewCard.style.display = "none";
    regForm.style.display = "block";
}
function submitForm() {
    document.getElementById("message").innerText =
        "Form submitted successfully!";
    previewCards();
}