# Verzovací systémy - druhá hodina VAP - teoretická
Co to vlastně ten verzovací systém je a co nám umožňuje a usnadňuje? Jak funguje? 
Naučili jsme se princip jakým Git pracuje a jakým způsobem vypadá struktura _.git_. 

Zjistili jsme, že Git se rozděluje do čtyř pracovních prostorů a uvedli si na příkladech, co jednotlivé prostory představují. 

Uvedli jsme si nějaké přednosti Gitu a hlavní poskytovatele vzdálených repozitářů.

## Branching 
Větev (branch) je sekvence commitů, které na sebe navazují. Pomocí větví (branchí) můžeme projekt rozdělit do několika paralelních sekvencí, kde každá funguje samostatně. Zpravidla rozdělujeme náš projekt do **vícero větví. **

V hlavní větvi` (main/master) `udržujeme otestované a připravené projekty do produkce veřejnosti. 

Pak máme `vývojovou větev,` ve které se systém vyvíjí podle plánu. 

Také se ještě používají `feature branche.` Tyto větve obsahují nové funkce, které nebyly v původním plánu zahrnuty. Případně mohou obsahovat i nové nápady, které by bylo vhodné do systému zahrnout. Nejčastěji zde budou právě nové požadavky zákazníka.

### Co nám to přináší?
Hlavní výhodou je možnost rozdělit práci do několika týmů, aniž by se ovlivňovaly. Když jeden tým napíše špatný kód, který poté nepůjde zkompilovat, ostatním týmům to nevadí.

 Pokud zjistíme, že jsme šli špatným směrem (například špatný návrh programu), snadno vytvoříme novou větev ze stejného místa a část kódu přepíšeme.
 
  Máme nápad na novou funkci v systému? Pak si vytvoříme novou větev a implementujeme ji v této větvi. A když ji chceme přidat až do další verze? Žádný problém, prostě si větve spojíme, jak budeme sami potřebovat. Onen nápad vlastně vůbec nebyl potřeba? Nemusíme jej zmergovat a do vývoje se tedy vůbec nedostane. A když později zjistíme, že bychom jej skutečně chtěli zahrnout do systému? Jediné zmergování a máme jej tam 

### Branch merge - spojování větví
Samotné spojení větví provedeme příkazem `git merge <NazevVetve>.` Po zadání tohoto příkazu se spojí zadaná větev s větví, ve které se právě nacházíme.

### Branch delete - smazání větve
Tedy větev DruhaVetev smažeme příkazem `git branch –d DruhaVetev.`

#### Odkazy pro toto téma

[Skvělá prezentace na větvení](https://www.skoumal.com/cs/skoumal-insight-2-git-a-jeho-workflows/)

[Stejně skvělý materiál, ale v angličtině](https://tilburgsciencehub.com/building-blocks/collaborate-and-share-your-work/use-github/git-branching-strategies/#:~:text=the%20Contribute%20button!-,Overview,set%20of%20advantages%20and%20disadvantages.)

[Český materiál na větve](https://www.itnetwork.cz/programovani/git/git-tutorial-vetve)

[Návod jak mergovat a branchovat](https://www.varonis.com/blog/git-branching)

## Pull requests
Pull requesty nám umožňují ostatním vývojářům v projektu povědět o změně, kterou jste provedli ve své větvi. Jakmile otevřete pull request, zpravidla přichází kolečko, kde musí projít **testy softwaru** a **code review** od seniornějšího vvývojáře. Tyto věci se dějí před tím než jsou hlavní změny zmergovány do hlavní, produkční, větve.

## Issues
Jak jsme si říkali, issues už sami o sobě nesouvisí s Gitem, ale se samotnnými poskytovateli vzdálených repozitářů (GitHub, GitLab, Gitea, ...). Issues vám dovolují vytvořit popiský úkolů, chyb, úprav a změn ve vašem vyvíjeném projektu, abyste o nich měli přehled a mohli k jejich řešení přistupovat systematicky.

## Fork
Na hodině jsem zapomněl zmínit Fork repozitáře. Je to v podstatě jenom pěkný název pro `git clone` vykonán vůči vzdálenemu repozitáři, který se uloží též do vzdáleného repozitáře. Můžete si vyzkoušet forknout pomocí tlačítka na GitHubu něčí repozitář

# Užitečné odkazy
[Markdown a jeho syntaxe](https://www.markdownguide.org/basic-syntax/)

[Markdown cheatsheet](https://dev.to/imluka/the-only-markdown-cheatsheet-you-will-ever-need-ccg)


[Git Guide](https://rogerdudler.github.io/git-guide/)

[Learn the basics of git in under 10 minutes](https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/)

Pro zájemce [Kurz na Git](https://www.simplilearn.com/tutorials/git-tutorial/what-is-git)
