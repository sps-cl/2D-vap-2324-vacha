# Verzování - 21. 09. teoretická hodina
Na dnešní hodině jsme si vysvětlili práci s větvemi, proč se nám hodí, kdy se nám hodí a jak větve využívat. Zmínili jsme se taky k čemu nám je CI/CD a jak funguje využití větvi při tomto procesu.

Ukázali jsme si tedy jak vlastně z vývojářské větve do mainy se nahraje automaticky webová stránka veřejnosti.

Ještě přikládám zajímavá video o tomto videu.

[CI/CD in 100 seconds](https://www.youtube.com/watch?v=scEDHsr3APg&ab_channel=Fireship)

[Github Actions CI/CD - Everything you need to know to get started](https://www.youtube.com/watch?v=mFFXuXjVgkU&ab_channel=DevOpsJourney)

## GitHub pages
Jeden z vašich úkolů za pár týdnů bude vytvoření statické stránky s několika styly. Zde přikladám pro brzké zájemce jakýsi návod na zprovoznění GitHub pages. [Zde](https://happycoding.io/tutorials/html/github-pages).


## CI/CD
CI (continuous integration) a CD (continuous delivery) je proces, který umožňuje nepřetržité dodávání aplikací k testování a používaní koncovým uživatelům. Je to v podstatě podmínka iterativního vývoje. CI a CD umožňují vývojovým týmům častěji a spolehlivěji provádět změny kódů, přičemž CI je filosofie kódování a sada postupů a CD automatizuje doručování aplikací do vybraných prostředí (produkční, testovací). 

### Elementy CI/CD 

**Build** = Fáze, v níž se aplikace sestavuje.

**Test** = Fáze, v níž se testuje kód aplikace. Automatizace, kterou s sebou přináší CI / CD pipeline, zde může výrazně ušetřit čas i námahu.

**Release** = Fáze, v níž je aplikace doručena do úložiště (repositáře).

**Deploy** = V této fázi je kód aplikace nasazen do produkce.

**Validation and Compliance** = Kontrola a ověření nasazeného kódu aplikace. Do této fáze je možné zahrnout i interní kontrolu v rámci organizace, která danou aplikaci vyvíjí (např. Zda je aplikace v souladu s jejím stanovenými požadavky).
