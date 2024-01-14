# TU Dresden 2FA Script

**Description:**
This Tampermonkey userscript automatically fills in the 2FA code for the TU Dresden login page.
![image showing the new button in the login form](https://raw.githubusercontent.com/TU-2FA/TU-2FA/main/images/button.png)

## Installation Steps:

0. **Create or change 2FA method:**
    - choose the 25 character long token as 2FA method ("Without Smartphone") [See here](https://tickets.tu-dresden.de/otrs/public.pl?Action=PublicFAQZoom;ItemID=971)

1. **Install Tampermonkey Extension:**
    - For Chrome (and other Chromium Browers, such as Brave, OperaGX and Edge): [Chrome Web Store](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
    - For Firefox: [Add-ons for Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/)

2. **Create a New Userscript:**
    - Click on the Tampermonkey icon in your browser.
    - Select "Create a new script"
    
    ![Image showing how to create a new script](https://raw.githubusercontent.com/TU-2FA/TU-2FA/main/images/create_script.png)

3. **Paste the Script Code:**
    - Copy the code from [`tu_2fa.js`](https://raw.githubusercontent.com/TU-2FA/TU-2FA/main/tu_2fa.js).
    - Paste the copied code into the script editor.
    ![image showing how to paste the scipt](https://raw.githubusercontent.com/TU-2FA/TU-2FA/main/images/paste_code.png)

4. **Insert Secret Key:**
    - Locate line 42 in the script.
    - Replace the placeholder with your secret key.
    ![image showing how to edit and save the script](https://raw.githubusercontent.com/TU-2FA/TU-2FA/main/images/save.png)

5. **Save the Script:**
    - Click the disk icon to save the script.

6. **Enable the Script:**
    - Ensure the script is enabled by checking the box next to its name in the Tampermonkey dashboard.
	![image showing how to check if the script is enabled](https://raw.githubusercontent.com/TU-2FA/TU-2FA/main/images/check_status.png)
