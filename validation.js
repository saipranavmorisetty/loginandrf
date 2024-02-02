document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent the form submission if validation fails
        }
    });

    function validateForm() {
        // Get values from form fields
        const firstName = document.getElementById('fname').value.trim();
        const lastName = document.getElementById('lname').value.trim();
        const birthdate = document.getElementById('birthdate').value;
        const email = document.getElementById('mail').value.trim();
        const genderOptions = document.getElementsByName('gender');
        const phoneNumber = document.getElementById('phone').value.trim();
        const fileUpload = document.getElementById('fileupload').value;

        // Validation for First Name and Last Name
        if (!validateName(firstName) || !validateName(lastName)) {
            alert('Please enter valid first and last names.');
            return false;
        }

        // Validation for Date of Birth
        if (!validateDateOfBirth(birthdate)) {
            alert('Please enter a valid date of birth.');
            return false;
        }

        // Validation for Email
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        // Validation for Gender
        if (!validateGender(genderOptions)) {
            alert('Please select a gender.');
            return false;
        }

        // Validation for Phone Number
        if (!validatePhoneNumber(phoneNumber)) {
            alert('Please enter a valid phone number.');
            return false;
        }

        // Validation for Passport Size Photo
        if (!validateFileUpload(fileUpload)) {
            alert('Please upload a passport size photo.');
            return false;
        }

        return true; // Return true if all validations pass
    }

    // Helper functions for validation

    function validateName(name) {
        return /^[a-zA-Z]+$/.test(name);
    }

    function validateDateOfBirth(date) {
        return /^\d{4}-\d{2}-\d{2}$/.test(date);
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validateGender(genderOptions) {
        // Check if at least one gender option is selected
        return Array.from(genderOptions).some(option => option.checked);
    }

    function validatePhoneNumber(phoneNumber) {
        return /^\d{10}$/.test(phoneNumber);
    }

    function validateFileUpload(fileUpload) {
        // Check if a file is selected
        return fileUpload !== '';
    }
});
