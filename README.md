# Automated Script for Comedy Defensive Driving

**Disclaimer:**  

*Please note: The Comedy Defensive Driving website may display a message stating "You failed this course" when using this script. This message is incorrect, and you will receive your certificate via email as long as all other criteria are met. Ensure you verify the completion of the course through official means.*

*This script is for educational and awareness purposes ONLY. The author, ShadyMoon, is not responsible for any actions taken against you for using this script. Use at your own risk.*

**Author:**  
ShadyMoon  
**Contact:**  
Discord: shady.js

## 📋 Description

This script uses Node.js and the `axios` library to automate interactions with the Comedy Defensive Driving website. It allows users to automate certain processes on the site using session cookies and screen IDs.

## 🛠️ Prerequisites

1. **Node.js** installed on your system.
2. **Install `axios` and `qs` libraries**:

    NPM
    ```bash
    npm i axios qs
    ```
    YARN
   ```bash
    yarn add axios qs
    ```
3. **Valid session cookies** from the Comedy Defensive Driving website.

## 🧩 How It Works

1. **Cookies and Headers:**  
   The script requires valid session cookies to authenticate requests to the website. These cookies should be obtained from your browser session and inserted into the script.
   
  #### The __Cookie__ data can be found by following these steps:
   - Go to the Network tab.
   - Refresh the page.
   - Find `dashboard.php` in the list of network requests.
   - Click on `dashboard.php` and right click.
   - Hove over the `copy` option, and click `Copy as fetch (Node.js)`.
   - Enter the cookie string into the script.


3. **Screen ID:**  
   The `screenID` parameter is required for the POST request to the `dashboard.php` endpoint. This value changes after each exam and verification question. To get the latest `screenID`, follow these steps:
   - Open the browser's Inspect tool.
   - Go to the Network tab.
   - Refresh the page.
   - Find `dashboard.php` in the list of network requests.
   - Click on `dashboard.php` and go to the Payload tab.
   - Copy the `screenID` value.

4. **POST Request:**  
   The script sends a POST request to the `dashboard.php` endpoint with the necessary data and headers to simulate interactions with the website.

## ⚙️ Script Setup

1. Clone or download this repository.
2. Open the `index.js` file and fill in the required cookie values and screen ID.
    ```javascript
    const PHPSESSID = 'your_session_id';
    const ps_rvm_iQ8Q = 'your_cookie_value';
    const CDDS_EMAIL = 'your_email';
    const CDDS_CMR_ID = 'your_cmr_id';
    const ps_rvm_K3tR = 'your_cookie_value';
    ```

3. Replace the placeholder `screenID` with the actual value.
    ```javascript
    const data = qs.stringify({ screenID: 'your_screen_id', formType: 'video' });
    ```

## ▶️ Running the Script

To run the script, use the following command:
```bash
node index.js
