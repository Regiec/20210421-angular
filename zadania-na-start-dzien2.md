# Zadania na start
## Dzień 2

### Zadanie #1 | Poprawnie działające rozwijanie menu

> Po zwężeniu okna przeglądarki `main-menu` zaczyna pokazywać `button.navbar-toggler`.  
> Jednak nie działa on poprawnie. Menu nie rozwija i zwija sie po kliknięciu

---
Wiedząc, że aby zobaczyć rozwinięte/zwinięte menu należy sterować obecnością klasy `show`,   
na elemencie: `div.collapse.navbar-collapse`  

Wiedząc, że aby w _Angular_ określić czy dana klasa pojawi się na elemencie czy nie,  
możesz skorzystać z dyrektywy `ngClass` lub pseudo-dyrektywy `class.` w taki sposób:

```html
<div [ngClass]="{ 'some-name': true }"> Ja mam klasę </div>
<div [ngClass]="{ 'some-name': false }"> Ja nie mam klasy 😥 </div>
```

```html
<div [class.some-name]="true"> Ja mam klasę </div>
<div [class.some-name]="false"> Ja nie mam klasy 😥 </div>
```

Napisz logikę i połącz z widokiem tak aby po kliknięciu `button.navbar-toggler` menu pojawiało się i znikało (zachowanie: toggle).


### Zadanie #2 | Skrypty i orientacja w nowym projekcie

> Do tego zadania uruchom projekt _"how-routing-works"_

---
2.1 Dopisz i uruchom skrypt budujący produkcyjną wersję aplikacji

2.2 Sprawdź jak połączona jest tablica routing'u w tym projekcie.  
Zauważ, że są tam aż 4 dodatkowe moduły + 5 modułów z routing'iem. 

Posprawdzaj moduły idąc od `app.module.ts` i jego tablicę `imports: [ ... ]` przez kolejne moduły,
`CarModule`, `PlaneModule` etc. oraz ich `-routing` moduły: `CarRoutingModule`, `PlaneRoutingModule` etc.  

Zauważ, że moduły te _importują się po kolei_ po przez tablicę `imports` w konfiguracjach modułów.

2.3 Zwróć uwagę na moduł `rocket` (`RocketModule`) i sposób w jaki dopięty jest do tablicy routing'u w module `AppRoutingModule`. 
