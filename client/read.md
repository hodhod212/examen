Gothenburg Clothing
Jag hade 3 olika val för att göra mitt examensarbete. Det enklaste valet var att använda Word press, eftersom det finns mycket information och färdiga Word press theme och plugin, så man kunde göra en jättefint hemsida med mindre ansträngning, men vi vet att hemsidan blir mycket långsam när företaget växer och man blir tvungen att använda massa olika plugin som i sin tur gör hemsidan långsammare. Det andra valet var pure PHP, men vi får samma problem med PHP. Det tredje och svåraste valet var React.  Jag behövde plugga och lära mig mycket mera än vad vi har lärt oss i kursen för att göra ett stort projekt med React. Jag behövde lära mig Redux, Redux-saga, React-hooks och reselect och massa annat för att kunna klara projektet, eftersom när hemsidan växer, det blir mycket komplicerat att fixa nya kombinationer mellan massa olika komponenter. Jag behövde också en databas. Jag valde Firebase.  Jag behövde också ett betalsätt, jag valde Stripe. Man behöver skydda sina säkerhetskoder för att använda betalning med stripe och det funkar inte med en frontend React projekt, därför behövde jag använda backend, så jag valde Express för backend. 
Projektet steg för steg:
1.	Startade React Appen genom att skriva create-react-app gothenburg-clothing i terminalen.
2.	 Använde sass, skapade homepage component och meny.
3.	Gjorde en del style och förvandlade projektet till mindre komponenter. 
4.	Startade använda withRouter.
5.	Skapade shop page, collection preview och collection item. 
6.	Skapade sign-in, form-input och custom-button.
7.	Skapade konto i Firebase och skapade sign-in med Google.
8.	Skapade header, och linkade till shop, contact och home-page.
9.	Skapade firebase-utils och skapade users.
10.	 Startade använda Redux i hemsidan.
11.	 Skapade Logo, hämtade image från Google som passade hemsidan.
12.	 Skapade shoping-cart och jobbade med Redux.
13.	 Laddade ner reselect och använde memoized selectorer.
14.	 Skapade check-out sidan.
15.	Startade med funktioner av add-item och delete-item i shoping-cart.
16.	  Startade använda Stripe i hemsidan.
17.	 Startade ladda ner styled-components och placera CSS filer med Javascript. 
18.	 Flyttade bilder till firebase också skapade Spinner.
19.	 Startade använda Redux-saga i hemsidan.
20.	 Flyttade sign-in, sign-out authentication till Redux-saga.
21.	 Startade backend sidan med Express för att kunna använda real betalning med Stripe.
22.	 Mobil anpassade hemsidan.
23.	 Startade använda React-lazy och memoization för att öka hastigheten på hemsidan.


------------------------------------------------------------------------------------------
Documentation in English
We can use this homepage to sell clothes or other materials online.
I have made this homepage by React and Redux. I used Stripe for the payment and Firebase as database. You can use this homepage even if you have a big company and can have many customers by expanding of categories by using reusable components. I have implemented React lazy to speed up homepage. You can even use for example useCallback or memoization to speed up the page if your surtiments become more. 
For starting this homepage you have to make your oun account in Stripe and Firebase, then you need to make  .env file for server and put your security code inside it like this:  STRIPE_SECRET_KEY=your security code
If you want use your own Firebase account, inside your firebase.utils.jsx that I show here, you change this code and put your own information from your Firebase project.

const config = {
  apiKey: "AIzaSyCUVaWMSeA3iWD36WALYWRcOgFrfQL0P5A",
  authDomain: "react-212.firebaseapp.com",
  databaseURL: "https://react-212.firebaseio.com",
  projectId: "react-212",
  storageBucket: "react-212.appspot.com",
  messagingSenderId: "538684679935",
  appId: "1:538684679935:web:c683ddacdc9c709ae90eca",
  measurementId: "G-QD8XEMKJEH"
};
You need to install git and node.js in your computer.
To start the page you just write: yarn i in the terminal then you write yarn dev
Thats all
Good luck and enjoy with your super homepage.
