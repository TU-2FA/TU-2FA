// ==UserScript==
// @name         TU Dresden 2FA Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fill in 2FA code for TU Dresden ZIH login page
// @author       You
// @match        https://idp.tu-dresden.de/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const xpathExpression = "/html/body/div[2]/main/section/form/table/tbody/tr[3]/td/div/button[@name='_eventId_proceed']";
    const existingButton = document.evaluate(xpathExpression, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (existingButton) {
        const newButton = document.createElement('button');
        newButton.textContent = 'Fill 2FA Code';

        existingButton.parentNode.insertBefore(newButton, existingButton.nextSibling);

        newButton.addEventListener('click', function (event) {
            event.preventDefault();
            if (window.location.href.includes("https://idp.tu-dresden.de/idp/profile/SAML2/Redirect/SSO?execution=")) {
                const optIndicesElem = document.evaluate("/html/body/div[2]/main/section/form/table/tbody/tr[2]/td[1]/legend/nobr", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

                if (optIndicesElem) {
                    const regex = /Position\s+(\d+)\s*&\s*(\d+)/;
                    let matches = optIndicesElem.innerText.match(regex);

                    if (matches == null) {
                        const regex2 = /position (\d+) & (\d+)/;
                        matches = optIndicesElem.innerText.match(regex2);
                        console.log("TU-2FA: found matches for alternative expression");
                    }

                    if (matches) {
                        const digit_1 = matches[1];
                        const digit_2 = matches[2];

                        const str = "------your-key-here------";

                        const otp = String(str[parseInt(digit_1) - 1]) + String(str[parseInt(digit_2) - 1]);

                        const targetElement = document.getElementById('fudis_otp_input');
                        if (targetElement) {
                            targetElement.value = otp;
                            console.log('TU-2FA: 2FA Code inserted: ' + otp);
                        } else {
                            console.log('TU-2FA: Target element not found.');
                        }
                    } else {
                        console.log('TU-2FA: No matches found for indices.');
                    }
                } else {
                    console.log('TU-2FA: Element not found.');
                }
            } else {
                console.log('TU-2FA: URL does not match the expected pattern.');
            }
        });
    } else {
        console.log('TU-2FA: Existing button with ID "_eventId_proceed" not found.');
    }
})();
