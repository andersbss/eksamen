Eksamen i webapplikasjoner av Anders Bjørnstad Strandseter og Sigmund Baklia.

Vi bruker en skybasert mongodb server.
Connectionstring: mongodb+srv://admin:admin@cluster0.jx0ym.mongodb.net/eksamen?retryWrites=true&w=majority

.env filer er ikke lagt i .gitIgnore. Dette er for å gjør det enkelt for sensor og emneansvarlig.
I produksjon skal selvsagt slik filer ikke bli lastet opp til repo.

Det er tre eksisterende brukere i systemet med forskjellige roller:

User: bruker@bruker.com Passord123!
Admin: admin@admin.com Passord123!
Superadmin: superadmin@superadmin.com Passord123!

For å teste apiet i Postman må csfr token kommenteres ut. Dette kan gjøres i server/src/app.js

Det er heller ikke mulig å opprette en bruker som har rolle admin eller superadmin. Default er user. 
Hvis dette er ønsket må server/src/schemas/user.js endres slik at det er mulig å opprette en admin/superadmin.


NB: Legg merke til endringer i GUI ved innlogging med forskjellige roller! Navigasjon og andre knapper kommer opp på skjermen avhengig av rolle.
