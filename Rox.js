"use strict";

//code taken from the rollover assignment. Only using 2 images.

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    var image1 = $("#image1");

    // get photos
    var links = $("#image_list").querySelectorAll("a");

    for (let link of links) {
        const image = new Image();
        image.src = link.href;
    }

    // Two photos per section
    for ( let link of links) {
        image1.addEventListener("mouseover", () => {
            image1.src = "media/oh_uh.png";
        });
        image1.addEventListener("mouseout", () => {
            image1.src = "media/SMALOMODE.png";
        });
          
    }

});