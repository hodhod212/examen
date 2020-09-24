# --------------------------------------------------------------------------

Important notice: if localhost in client is not in 3000 then you have to change port of localhost in this file in server.js :app.use(
cors({
origin: "http://localhost:3000",
credentials: true,
})
);
and make it same as port of client localhost
How to start:
1- npm i then npm start
2- Open second terminal then npm i then npm start

# -------------------------------------------------------------------------

- Gothenburg Clothing

# Frameworks:

- React, Redux, Firebase, Express, Node.js

# API:

- Stripe, Paypal

# Innehåll

- En webbshop applikation byggd på backend-server med Express och Node.js. Frontend är byggt med React tillsammans med Redux. Firebase används som databas för projektet vid större omsträckning. Uppgiften för projektet var att implementera betalningsmodulen Stripe API till webbshoppen så att det ska fungera att genomföra en betalning från hemsidan med valda produkter. För att vara säker på att betalningen blivit utförd verifieras betalningen efter att kunden skrivit in rätt information och en json-fil med produktinformation av ordern sparas som en bekräftelse på servern. Kunden slussas vidare till en bekräftelsesida efter köpet gått igenom. Ytterligare ett betalnings-API finns implementerat i projektet, Paypal.

#

Gothenburg Clothing
Vi behövde plugga och lära oss mycket mera än vad vi har lärt oss i kursen för att göra ett stort projekt med React. Vi behövde lära oss Redux, Redux-saga, React-hooks och reselect och massa annat för att kunna klara projektet, eftersom när hemsidan växer, det blir mycket komplicerat att fixa nya kombinationer mellan massa olika komponenter. Vi behövde också en databas. Vi valde Firebase. Vi behövde betala med Stripe,vi behövde också ett extra betalsätt, vi valde PayPal. Man behöver skydda sina säkerhetskoder för att använda betalning med stripe och det funkar inte med en frontend React projekt, därför behövde vi använda backend, så vi valde Express för backend.
Projektet steg för steg:

1.  Startade React Appen genom att skriva create-react-app gothenburg-clothing i terminalen.
2.  Använde sass, skapade homepage component och meny.
3.  Gjorde en del style och förvandlade projektet till mindre komponenter.
4.  Startade använda withRouter.
5.  Skapade shop page, collection preview och collection item.
6.  Skapade sign-in, form-input och custom-button.
7.  Skapade konto i Firebase och skapade sign-in med Google.
8.  Skapade header, och linkade till shop, contact och home-page.
9.  Skapade firebase-utils och skapade users.
10. Startade använda Redux i hemsidan.
11. Skapade Logo, hämtade image från Google som passade hemsidan.
12. Skapade shoping-cart och jobbade med Redux.
13. Laddade ner reselect och använde memoized selectorer.
14. Skapade check-out sidan.
15. Startade med funktioner av add-item och delete-item i shoping-cart.
16. Startade använda Stripe och PayPal i hemsidan.
17. Startade ladda ner styled-components och placera CSS filer med Javascript.
18. Flyttade bilder till firebase också skapade Spinner.
19. Startade använda Redux-saga i hemsidan.
20. Flyttade sign-in, sign-out authentication till Redux-saga.
21. Startade backend sidan med Express för att kunna använda real betalning med Stripe.
22. Mobil anpassade hemsidan.
23. Startade använda React-lazy och memoization för att öka hastigheten på hemsidan.

---

Documentation in English
We can use this homepage to sell clothes or other materials online.
I have made this homepage by React and Redux. I used Stripe for the payment and Firebase as database. You can use this homepage even if you have a big company and can have many customers by expanding of categories by using reusable components. I have implemented React lazy to speed up homepage. You can even use for example useCallback or memoization to speed up the page if your surtiments become more.
For starting this homepage you have to make your oun account in Stripe and Firebase, then you need to make .env file for server and put your security code inside it like this: STRIPE_SECRET_KEY=your security code
If you want use your own Firebase account, inside your firebase.utils.jsx that I show here,
You need to install git and node.js in your computer.
To start the page you just write: yarn i in the terminal then you write yarn dev
Thats all
Good luck and enjoy with your super homepage.

sources:https://stackoverflow.com/questions/54952355/how-to-post-data-from-react-to-express
https://github.com/ZhangMYihua/crwn-clothing
https://rapidapi.com/blog/axios-react-api-tutorial/

# ---------------------------------------------------------------------------

Important notice: if localhost in client is not in 3000 then you have to change port of localhost in this file in server.js :app.use(
cors({
origin: "http://localhost:3000",
credentials: true,
})
);
and make it same as port of client localhost
How to start:
1- npm i then npm start
2- Open second terminal then npm i then npm start

# -------------------------------------------------------------------------

Github repository: https://github.com/hodhod212/stripe.git

# -------------------------------------------------------------------------

Payment by Stripe:
cart: 4242 4242 4242 4242
01/21 123
Payment by PayPal:
You make a sandbox account in PayPal and pay with your sandbox information
