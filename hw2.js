/*
Name: Rayyan Manasiya 
Date Created: 2025-09-06
Date Last Edited: 2025-10-06
Version: 1.0
Description: Homework 2 JavaScript file
*/

window.onload = function() {
    // dynamic date js code
    const d = new Date();
    let text = d.toLocaleDateString();
    document.getElementById("current_date").innerHTML = text;

    // range slider code
    let slider = document.getElementById("range");
    let output = document.getElementById("range_slider");
    output.innerHTML = slider.value;
    slider.oninput = function() {
        output.innerHTML = this.value;
    };
};

// Date of Birth validation
function validateDob() {
    let dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date can't be in the future";
        dob.value = "";
        return false;
    } else if (date < maxDate) {
        document.getElementById("dob-error").innerHTML = "Date can't be more than 120 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

// SSN validation
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;
    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "Please enter a valid SSN";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}
//address validation js code
function validateAddress1() {
    const address = document.getElementById("address1").value;
    const error = document.getElementById("address1_error");
    if (!address || address.trim().length < 5) {
        error.innerHTML = "Please enter address";
        return false;
    }
    error.innerHTML = "";
    return true;
}

//city validation js code
function validateCity() {
    const city = document.getElementById("city").value;
    const error = document.getElementById("city_error");
    if (!city || city.length < 2) {
        error.innerHTML = "Please enter city";
        return false;
    }
    error.innerHTML = "";
    return true;
}
// Zip code validation
function validateZcode() {
    const zipInput = document.getElementById("zcode");
    let zip = zipInput.value.replace(/[^\d-]/g, "");
    if (!zip) {
        document.getElementById("zcode-error").innerHTML = "Zip code can't be blank";
        return false;
    }
    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }
    zipInput.value = zip;
    document.getElementById("zcode-error").innerHTML = "";
    return true;
}

// Email validation
function validateEmail() {
    const email = document.getElementById("email").value.trim();
    const emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,20})+$/;
    if (!emailR.test(email)) {
        document.getElementById("email-error").innerHTML = "Please enter a valid email address";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

// User ID validation
function validateUid() {
    let uid = document.getElementById("uid").value.toLowerCase();
    document.getElementById("uid").value = uid;
    if (uid.length === 0) {
        document.getElementById("uid-error").innerHTML = "User ID can't be blank";
        return false;
    }
    if (!isNaN(uid.charAt(0))) {
        document.getElementById("uid-error").innerHTML = "User ID can't start with a number";
        return false;
    }
    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uid)) {
        document.getElementById("uid-error").innerHTML = "User ID can only have letters, numbers, underscores, and dashes";
        return false;
    } else if (uid.length < 5) {
        document.getElementById("uid-error").innerHTML = "User ID must be at least 5 characters";
        return false;
    } else if (uid.length > 30) {
        document.getElementById("uid-error").innerHTML = "User ID can't exceed 30 characters";
        return false;
    } else {
        document.getElementById("uid-error").innerHTML = "";
        return true;
    }
}

// Password validation
function validatePword() {
    const pword = document.getElementById("pword").value;
    const uid = document.getElementById("uid").value;
    let errorMessage = [];
    if (!pword.match(/[a-z]/)) errorMessage.push("Enter at least one lowercase letter");
    if (!pword.match(/[A-Z]/)) errorMessage.push("Enter at least one uppercase letter");
    if (!pword.match(/[0-9]/)) errorMessage.push("Enter at least one number");
    if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) errorMessage.push("Enter at least one special character");
    if (pword.includes(uid) && uid.length > 0) errorMessage.push("Password can't contain user ID");
    if (errorMessage.length > 0) {
        document.getElementById("pword-error").innerHTML = errorMessage.join("<br>");
        return false;
    } else {
        document.getElementById("pword-error").innerHTML = "";
        return true;
    }
}

// Confirm password
function confirmPword() {
    let pword1 = document.getElementById("pword").value;
    let pword2 = document.getElementById("con_pword").value;
    if (pword1 !== pword2) {
        document.getElementById("pword2-error").innerHTML = "Passwords don't match";
        return false;
    } else {
        document.getElementById("pword2-error").innerHTML = "Passwords match";
        return true;
    }
}

// Review input
function reviewInput() {
    let formcontent = document.getElementById("signup");
    let formoutput = "<table class='output'><th colspan='3'>Review Your Information:</th>";
    for (let i = 0; i < formcontent.elements.length; i++) {
        let el = formcontent.elements[i];
        if (el.value !== "") {
            switch (el.type) {
                case "checkbox":
                    if (el.checked) {
                        formoutput += `<tr><td align='right'>${el.name}</td><td>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (el.checked) {
                        formoutput += `<tr><td align='right'>${el.name}</td><td>${el.value}</td></tr>`;
                    }
                    break;
                default:
                    formoutput += `<tr><td align='right'>${el.name}</td><td>${el.value}</td></tr>`;
            }
        }
    }
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

// Remove review
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}