# Branches
Dovolují nám pracovat v nezávislém prostředí, tak aby změny neměly vliv na ostatní větve dokud neprovedeme spojení větví, **merge**.

## Výpis větví

Pomocí `git status` můžete zjistit v jaké větvi jste. Výpis bude vypadat nějak takto:
```bash
pavel.vacha@vpn12~/projects/tech-dashboards$ git status
**On branch main** <- zde vidíme v jaké větvi se nacházíme
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        GIT_BRANCHING.md

nothing added to commit but untracked files present (use "git add" to track)

pavel.vacha@vpn12~/projects/tech-dashboards$
```

Výpis aktuálně dostupných **lokálních** větví provedete pomocí `git branch`. Výstup vypadá nějak takto:
```bash
pavel.vacha@vpn12~/projects/tech-dashboards$ git branch
  dev-branch
* master
```
Hvězdička zde označuje aktuálně zvolenou větev. Výpis větví včetně vzdálených se provede přepínačem `-a` jako all. To znamená, že příkaz vypadá takto `git branch -a `.


## Přepnutí do větve
Přepnutí do jiné větve probíhá pomocí příkazu `git checkout nazev-vetve`. Ukázka:
```bash
pavel.vacha@vpn12~/projects/tech-dashboards$ git checkout dev-branch
Switched to branch 'dev-branch'
```

Po přepnutí větve v ní můžete normálně vyvíjet a používat klasické příkazy (git add, commit a push).

## Smazání větve
Smazání větve probíhá pomocí příkazu `git branch -d nazev-vetve`. Nejdříve je nutné se přepnout do jiné větve a poté až větev smazat. Ukázka:

```bash
pavel.vacha@vpn12~/projects/tech-dashboards$ git checkout master
Switched to branch 'master'
Your branch is up to date with 'origin/master'.

pavel.vacha@vpn12~/projects/tech-dashboards$ git branch -d feature/measuring
Deleted branch feature/measuring (was 7a44677).
```

Toto bylo smazání větve v lokálním repozitáři, abyste ji smazali i ve vzdáleném repozitáři musíte provést příkaz `git push origin --delete nazev-vetve`

## Vytvoření větve
Vytvoření větve lze udělat dvěmi způsoby. **První způsob** vytvoření větve je pomocí příkazu `git branch nazev-vetve`. Vytvoření větve a následné vypsání všech větví vypadá nějak takto:

```bash
pavel.vacha@vpn12~/projects/tech-dashboards$ git branch feature/measuring
pavel.vacha@vpn12~/projects/tech-dashboards$ git branch
  dev-branch
  feature/measuring
* master
```
Abyste tuto větev nahráli do vzdáleného repozitáře, použijte příkaz `git push origin nazev-vetve`.

Druhý způsob vytvoření větve spočívá ve využití příkazu `git checkout`. Pokud použijete přepínač `-b` jako branch, tak se vytvoří větev a zároveň se do nové větve přepnete. Příkaz tedy vypadá takto `git checkout -b nazev-vetve`. Výstup:
```bash
pavel.vacha@vpn12~/projects/tech-dashboards$ git checkout -b test-branch
Switched to a new branch 'test-branch'
```











