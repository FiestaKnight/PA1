"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

    $("#register").addEventListener("click", () => {

    const firstName = $("#first_name");
    const lastName = $("#last_name");
    const world = $("#world");
    const terms = $("#terms");
    const requests = $("#requests");

    let isValid = true;

    if (firstName.value == "") {
        firstName.nextElementSibling.textContent = "Please enter your first name.";
        isValid = false;
    } 
    else {
        firstName.nextElementSibling.textContent = "";
    }

    if (lastName.value == "") {
        lastName.nextElementSibling.textContent = "Please enter your last name."; 
        isValid = false;
    }
    else {
        lastName.nextElementSibling.textContent = "";
    } 

    if (world.value == "") {
        world.nextElementSibling.textContent = "Please select a world.";
        isValid = false;
    } 
    else{
        world.nextElementSibling.textContent = "";
    }

    if (terms.checked == false) {
        terms.nextElementSibling.textContent = "You must agree to the terms of service."; 
        isValid = false;
    }
    else {
        terms.nextElementSibling.textContent = "";
    }

    if (requests.value == "") {
        requests.nextElementSibling.textContent = "Please enter a request.";
        isValid = false;
    }
    else {
        requests.nextElementSibling.textContent = "";
    }

    if (isValid) {
        $("form").submit(); 
    }
});

    $("#reset_form").addEventListener("click", () => {

        $("form").reset();

    //    $("#first_name").value = "";
    //    $("#last_name").value = "";
    //    $("#world").value = "";
    //    $("terms").value = false;
    //    $("#requests").value = "";

    $("#first_name").focus();
});

    $("#first_name").focus();   
});