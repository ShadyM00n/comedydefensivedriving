/*
Made by ShadyMoon;
Discord: shady.js
I am not responsible for any actions taken against you for using this.
This is for educational awareness and purposes ONLY
Reach out to me if you have any questions;
this may work for other sites but as i havent tested, i cannot be sure.
*/

const axios = require('axios'); const qs = require('qs');
// dashboard link
const referer = 'https://comedydefensivedriving.com/attender/dashboard.php';
// Cookie contents # dont change
const cookie = `your_cookie_content`;
// Headers # dont change
const headers = { 'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7', 'accept-language': 'en-US,en;q=0.9', 'cache-control': 'max-age=0', 'sec-fetch-dest': 'document', 'sec-fetch-mode': 'navigate', 'sec-fetch-site': 'same-origin', 'upgrade-insecure-requests': '1', 'cookie': cookie,'Referer': referer, 'Referrer-Policy': 'strict-origin-when-cross-origin' };
// screenID # change after every exam and verification question
/* 
# to get the screenID open Inspect 
# go to the network tab
# refresh the page
# view dashboard.php
# click on payload and the screenID is there
# NOTE you only have to do these steps after the exams and questions
*/
const data = qs.stringify({ screenID: '000',  formType: 'video' });
// POST method is standard # dont change
try { axios.post(referer, data, { headers }) .then(response => { console.log(`Completed`) }); } catch (err) { console.log(err) }
