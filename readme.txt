Java >< Javascript

    Begge kan kører i browseren, man da java applets er usikre og har flere fejl bruges dette ikke rigtigt mere,
    men Javascript bruges da det primært kører i browseren og det har udviklet sig så flere og flere burger Javascript.

    Begge sprog kan også kører serversiden og der har java været en af de førende til alt dette arbejde,
    men med Nodejs er dette også noget som javascript også er begyndt at kører ret funktionelt

    Java er skrevet i IDE som gør at det er umuligt som menneske at forstå koden og der bruges en java virtuel maskine 
    til at fortolke sproget.
    Javascript bliver eksekveret af en Javascript engine i samme syntax som det er skrevet, det bliver dog komprimeret
    for at sendes over nettet og derfor kan det godt være ulæseligt.

    Java bliver typisk skrevet en gang og herefter deployet, men dette kan være forskellige udfald alt efter hvilket
    styresystem, browser wtc som bliver brugt.
    I Javascript har man ECMAScript som går det meget mere kompatibelt tl forskellige styresystemer, browsere etc.
    Dog skal kodes skrives flere gange,  men her kan den selv finde ud af hvilken version der herefter skal køres.

Improving Javascript

    Babel er et værktøj som bruges til at konvertere ECMAScript 2015+ (ES6+) til tidligere versioner som er funktionelle
    op den gældende maskine. Babel kan ændre syntaksen til tidligere versioner og ændre funktioner som ikke er 
    tilstede på den version din maskine kører. og kan transformere din source kode.

    Typescript er et programmeringssprog som er en udvidelse af Javascript, som kan definere klasser, interfaces og
    moduler som vi kender det fra java

Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.

    Node.js er en Javascript runtime maskine, som har alt det man skal bruge for at kunne eksekvere sit javascript kode.
    Javascript var kun et browser sprog, men man har herefter udvidet javascript og her ses Node.js som gør det 
    muligt nu at skrive javascript som kan bruges til så meget mere end kun et browser sprog. Med Node.js bliver
    javascript som andre scriptsprog. Node.js bliver eksekveret af en V8 Javascript runtime engine. Node.js er 
    event drevet og bruger en ikke blokerende model som gør det muligt at håndtere flere forespørgelser på sammetid uden tråde.

    npm er en pakke manager som tillader dig at deklarere hvilke pakker som ønskes i package.json filen og herefter kan man bare :
    "npm install" ens ønskede pakker og så nemt kan man have alle de nødvendigheder som skal bruges til ens projekt, men kan derudover
    også specificere hvilken version man ønsker af pakkerne hvis man nu ved at det er noget gammelt it det skal bruges.

Explain about the Event Loop in Node.js

    Event loop bruges for at vi kan kører flere ting på samme tid i en enkel tråd ved hjælp af events og callbacks.
    Eventloopet kigger i callstacken og ligeså snart den er tom kan den flytte fra event/task køen over i callstack og eksekvere
    det kode som evt er kommet tilbage fra et API, så i stedet for at vente på svar fra API'et så fortsætter eksekveringen af 
    koden og når man så er færdig eller der opstår et kort øjeblik uden eksekveringen så flytter event loopet fra event/task 
    køen til callstack og eksekvere det kode.

Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises


Explain the purpose of “use strict” and Linters, exemplified with ESLint 
    Strict
        Strict mode er en måde at opnå en begrænset version af javascript og på den måde kan man vælge den "langsomme" del fra.
        Strict mode har kode som semantisk ligner almindelig kode og den kan eksistere sammen med non-strict kode, så strict code kan 
        optræde i situationer.

        Strict kode kan eliminere stille fejl ved at  få dem til at smide en fejlbesked og optimere kørertiden selvom koden er identisk
        med non-strict mode. Det kan også forbyde syntaks som i de næste versioner af ECMA bliver defineret.

    Linters

        Linters tjekker source kode for din kode og kigger på om man overholder sit scope og andre ting inden runtime, så den fungere
        som en compiler som kører imens man skriver sin kode.

        Man kan installere ESLint som fungere ved hjælp af npm og der kan installeres på følgende måde:

        $ npm install -g eslint                 Hvis man ønsker det installeret så det virker på alle ens projekter.

        Man skal herefter sætte en konfigurationsfil op således:

        $ eslint --init      

        og herefter kan man kører sin ESLint på de filer man ønsker:
        
        $ eslint yourfile.js
