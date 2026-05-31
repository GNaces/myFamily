// Calculate and display age
const birthYear = 1989;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
document.getElementById('age').textContent = age;

// Check access code for driver's license
function checkAccessCode() {
    const correctCode = "1989"; // Change this code if needed
    const userInput = document.getElementById("codeInput").value;

    if (userInput === correctCode) {
        window.open("assets/photo/DLnewF.jpg", "_blank");
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    } else {
        alert("Incorrect access code Mate, try again.");
    }

    return false;
}