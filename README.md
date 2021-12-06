# Project Rapport React
Tanken med projektet är att kunna:

- Söka efter en karaktär inom Marvel universe
- Se i vilka tidningar hen medverkat
- Se information om specifik tidning

# Teknologier som använts

- Jag har använt mig av marvel.com API:n för att hämta data.
- Jag har använt React för att skapa sidan.
- Routing har skett enligt SPA (single page application)
- Projektet är stylat med styled-components

# SPA
Med Single Page Application menad det att webb appen endast laddar ett webb dokument och sedan uppdateras endast bodyn. 
Det tillåter användare att använda sidan utan att behöva ladda om hela webb dokument, vilket kan förbättra prestandan och ge en mer dynamisk upplevelse.

# Komponenter
Jag har gått in för att skapa det mesta med komponenter, mest för bekvämlighetens skull att slippa skriva om saker flera gånger.

- Första komponenten jag skapade var SearchBar, vilket också var den som tog mig längst tid att färdigställa. Jag började med att skapa den i MarvelSearchView för att sedan
flytta ut den till sin egna komponent. Vilket självfallet skapade problem med hantering av data som ska skickas, datan skickades helt enkelt inte till själva fetch 
funktionen för att hämta datan från API:n. Det hela löste sig efter jag läst på och exprementerat en hel dag med att skicka props. 

- Nu kom jag på att jag skapade Navigation först men den har bara förminskats sedan jag gjorde till inlämning 1 så den räknas knappt. 
Jag använder den endast till att ha en sorts tillbaka-knapp i form av en Titel.

- HeroThumbnail är komponenten som skapar korten/thumbnails för sökningen man har gjort. Man kan härifrån klicka sig vidare in på den karaktär man vill läsa mer om. 
När man klickar sig vidare skickas ID med till nästa komponent. Vi byter även view nu.

- HeroCard skapar ett kort med den tidigare valda karaktären via id som skickas till HeroView (här har jag även lekt lite med useLocation som jag använder för att hämta Id:et).
kort och gott (no pun indended) Komponenten skapar ett kort med vald hjälte.

- ComicThumbnail skapar thumbnails med tidningar som ovan valda hjälte varit medverkat i. Nästintill likadan som HeroThumbnail så det ligger en liten tanke om att förenkla det 
i framtiden (i mån av tid).

- Övrigt om komponenter: Jag skulle flyttat ut stylingen och lagt allt i mappar såsom Views ser ut. Men det har brustit lite i tid.

# Views

- HeroView är den vy där vi ser specifik karaktärs data samt vilka tidningar de medverkat i. 
Här finns även findHero som hämtar data om karaktären och findComics som hämtar tidningarna via Id.

- MarvelSearchView är vyn för själva sökfunktionen. Eftersom jag gått nästan all in på att göra det mesta med komponenter så känns det lite tomt i filen. Men du finner 
findHeros (ej att förväxla med findHero som inte har ett 'S' i slutet) här som hämtar en lista av karaktärer baserat på ett sökord.

# Styling och Responsivitet
Här har jag kunnat lagt mycket mer tid. Som alltid när det gäller att försköna något. Responiviteten är väl någorlunda ok men behöver justeringar inför framtida uppdateringar.

# Hooks
Jag använder useState flitigt för att spara ner värden/data. Sedan använder jag useEffect för att få igång rendering av sidan när det behövs.

# Övrigt
Jag har flera buggar som jag nog tänker sitta och lösa när jag har tid över. Hade varit kul om projektet hade fått ett helt "done" status. 
Men är nog ändå rätt nöjd med vad jag fått ihop hitills. 
Hela projektet började rätt segt och i princip avstannade helt och jag började ifrågasätta min egen kompetens när jag inte kunde skicka ett enkelt värde från ett ställe 
till ett annat. Men efter en dags läsande och testande (och en hel del svärande) så löste sig allt. Det var många små fel jag hade gjort och när jag fixat ett för ett så fylldes 
sidan helt plöstligt med bilder och text. Best feeling ever!
