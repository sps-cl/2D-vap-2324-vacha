Příkazy v GITU
====

Už žádné GUI! Git CLI FTW!
Velkou zásluhu na tomto souboru má [úžasný zdroj poskytnutý společností Tower](http://www.git-tower.com/blog/git-cheat-sheet-detail/).

Rychlý začátek
----

`git pull --rebase` - Stáhne změny ze vzdáleného repozitáře.

`git add .` - Připraví všechny změny v adresáři a všech jeho podadresářích ke commitu.

`git commit -m "popis změn"` - Commitne změny s popisem uvedeným v úvozovkách.

`git push` - Nahraje commitnuté změny na vzdálený repozitář.


Základní Ppříkazy 
----

`git init` - Vytvoření nového lokálního repozitáře.

`git help <příkaz>` - Zobrazí nápovědu ke specifickému příkazu.

Získání informací
----

`git status` - Uvede všechny soubory, které se od posledního commitu změnily, a soubory jsou k commitu aktuálně připraveny.

`git diff` - Uvádí všechny změny v každém souboru, který se změnil od posledního commitu. Přidejte flag `--staged` pro zobrazení změn, které jsou připraveny k commitu.

Commity
----

`git add .` - Připraví všechny změny v adresáři a všech jeho podadresářích ke commitu.

`git add -p <soubor>` - Připraví změny souboru `<soubor>` k commitu. *Příkaz lze použít vÍcekrát k vybrání všech potřebných souborů*

`git commit -a` - Připraví všechny změny v projektu ke commitu.

`git commit` - Commitne změny.

`git commit <soubor> -m 'popis commitu'` - Commitne změny ze souboru `<soubor>`.

> * `-m` - flag je následován popisem commitu v úvozovkách.
> * Pokud chcete použít ve zprávě úvozovky `'` napište celou zprávu mezi apostrofami `'`, nebo naopak.
> * `git commit <podadresář> -m 'popis commitu'` - Commitne všechy změny v podadresáři `<podadresář>`.
> * `git commit -a -m 'popis commitu'` - Commitne všechny změny v projeku. **! NEBEZPEČNÉ !**


`git commit --amend` - Změní/upraví poslední commit. **! NEUPRAVUJTE JIŽ ZVEŘEJNĚNÉ COMMITY !**

Historie commitů
----

`git log --oneline` - Zobrazí historii commitů, `--oneline` flag upraví výsledek aby každý commit zabíral pouze jeden řádek.

`git log -p <soubor>` - Zobrazí historii pro `<soubor>`.

`git blame <soubor>` - Vypíše změny v souboru `<soubor>` a jejího autora.

`git blame -L 10,20 <soubor>` - Zobrazí autora změn v `<soubor>` mezi řádky 10 až 20.

Branche
----

`git checkout <branch/commit>` - Změní projekt na `<branch/commit>`, `-b` flag vytvoří nový branch pokud takový neexistuje. Místo jména branche lze pozuží i hash určitého commitu na který se chcete dostat.

`git checkout <branch> <file-path>` Obnoví soubory z jiné větve nebo commitu do aktuálního branche

`git branch` - vypíše všechny branche v projektu
`git branch <jméno>` - Bez přepnutí vytvoří nový branch se jménem `<jméno>`

`git checkout --track <vzdálený-branch>/<lokální-branch>` - Vytvoří lokální branch závislý na vzdáleném repozitáři.

`git branch -d <branch>` - Odstraní lokální branch se jménem `<branch>`.

`git push origin --delete <branch>` -Odstraní vzdálený branch se jménem `<branch>`.

`git tag <tag>` - Přidá `<tag>` k aktuálnímu commitu.

Vzdálený repozitář
----

Důkazem rostoucí popularity využívání vzdálených repozitářů *(možná jste o jednom takovém malém slyšeli: GitHub)*, tak je jednou z nejsilnějších funkcí gitu sledovat vzdálené repozitáře.

`git remote -v` - Vypíše všechny vzdálené repozitáře. Flag `-v` je zkratka pro verbose *(podrobné informace)*. Zobrazí více informací o vzdáleném repozitáři jako je třeba jeho url adresa.

`git remote show <vzdálený-repozitář>` - Zobrazí informace ke specifickému vzdálenému zepozitáři `<vzdálený-repozitář>`.

`git remote add <jméno> <url>` - Přidá nový vzdálený repozitář pojmenovaný `<jméno>` s url adresou `<url>`.

`git fetch <repozitář>` - Stáhne změny ze vzdáleného repozitáře "<repozitář>", ale nastaví je jako HEAD.

`git fetch --dry-run -v` -  `--dry-run` Zobrazí co by se stalo při provedení příkazu bez provádění změn na projektu. `-v` *verbose (podrobné informace)*.

`git pull <repozitář> <branch>` - Stáhne změny a mergne/integruje je.

`git push <repozitář> <branch>` - Nahraje provedené změny na vzdálený repozitář

`git branch -dr <repozitář>/<branch>` - Odstraní `<branch>` na vzdáleném repozitáři.

`git push --tags` - Nahraje všechny vytvořené tagy.


Pojďme spolupracovat
----

Pravá síla stojící za gitem je zpráva rozdílů mezi jednotivými vezemi projektu.

`git merge <branch>` - Připojí `<branch>` na aktuální HEAD.

`git rebase <branch>` - Nastaví HEAD na `<branch>`. **! NEDĚLEJTE TO S JIŽ NAHRÁNÝMI COMMITY !**

`git rebase --abort` - Zruší probíhající rebase.

`git rebase --continue` - Pozastaví rebase, pokud narazíte na problémy, které musíte vyřešit. Po vyřešení problémů bude rebase pokračovat.

`git mergetool` - Použije nakonfugorvaný nástroj pro mergenutí k řešení problémů.

`git add <soubor>` - Použijte editor pro manuální řešení konfliktů.

`git rm <soubor>` - Odstraní již vyřšený soubor.

Ctrl + Z!
----

Každý děláme chyby.

`git reset --hard HEAD` - Odstraní všechny změny v projektu.

`git checkout -f` - Odstraní všechny změny v aktuálním adresáři.

`git checkout HEAD <soubor>` - Odstraní všechny změny v souboru `<soubor>`.

`git revert <commit>` - Vrátí změny vytvořením commitu s opačnými změnami.

`git reset --hard <commit>` - Navrátí HEAD na předchozí commit a smaže vŠechny změny provedené od té doby.

`git reset <commit>` - Navrátí HEAD na předchozí commit a zachová vŠechny změny provedené od té doby.

`git reset --keep <commit>` - Navrátí HEAD na předchozí commit a zachová vŠechny necommitnuté změny.

Tipy a triky
----

``git checkout -- `git ls-files -m` `` - Obnoví upravené soubory v aktuálním adresáři.

``rm -rf `git ls-files --other --exclude-standard` `` - Odstraní nesledované soubory. **! BUĎTE OPATRNÍ !**

`git log -G "<zpráva>" --pretty=format:"%C(yellow)%h %Creset%s %Cgreen(%cr) %Cblue[%cn - %ce]" --decorate` - Vyhledá v histroii commit podle zprávy.

Následující příkaz je užitečný pokud pracujete s repozitářem s velkými projekty  
``git checkout <branch> && rm -rf `git ls-files --other --exclude-standard` && git submodule update --init --recursive`` - Reset-checkout.. přepne na větev, odstraní nesledované soubory a znovu inicializuje submoduly.