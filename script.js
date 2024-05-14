document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const dob = new Date(document.getElementById('dob').value);
    const now = new Date();
    let age = now.getFullYear() - dob.getFullYear();
    const monthDiff = now.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dob.getDate())) {
        age--;
    }

    const resultElement = document.getElementById('result');
    resultElement.innerText = `Your age is ${age} years.`;
    resultElement.style.display = 'block';
});