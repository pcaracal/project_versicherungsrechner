# Versicherungsrechner Aufgaben
- Aufgabe GUI-Ideen entwerfen  
- Aufgabe System entwerfen

# System Entwurf

![UML Diagram][https://i.imgur.com/OAJwEbk.png]

# Problem Statement
## Kunden / Nutzer
- Personen ohne Versicherung
- Person mit Versicherung
- Person mit Schaden will berechnen

## Probleme
- App für Smartphone
- Website zu langsam
- Kein Rechner für gewünschte Versicherung
- Schadensberechnung unrealistisch

## Lösungsansätze
- Website schneller machen
- Datenbank verwenden um Versicherungspreise speichern

## Stakeholder
- App entwickler
- Versicherungen (Sponsoring?)

## Risiken
- App development zu anschpruchsvoll
- Zu viele verschiedene Versicherungstypen
	- Unrealistisch alles zu implementieren

# Userstory
## Fall 1
>Person braucht eine Haftpflichtversicherung für sein neu gekauftes Auto.
1. Website besuchen
2. Überblick gewinnen
	1. User sieht eine Liste von verschiedenen Rechnern
	2. User geht zu "Haftpflichtversicherungen für Auto"
3. User muss Informationen angeben
	1. Automarke, Typ, Preis
	2. Wie Alt
	3. Wie lange hat Führerschein
4. Website ruft eine Datenbank auf
	1. Anhand der Informationen des Users werden Prämien gesucht in der Datenbank
5. User sieht mögliche Preise mit verschiedenen Versicherungen, welche die gewünschte Versicherung anbieten

## Fall 2
>Person hat sein Auto ein wenig unvorsichtig parkiert und es hat leichte Schäden am Auto. Er ist zum Automechaniker gegangen, welcher ihm 150 Fr. für die Reparatur fordert.
1. Website besuchen
2. Überblick gewinnen
	1. User sieht verschiedene Optionen
	2. User wählt die Option `Schadensrechner`
3. Verschiedene Schadensrechner Optionen sind sichtbar wie `Haus`, `Auto`, `Person`
	1. Option Schaden am Auto auswählen
4. Schadensrechner für Auto wird angezeigt
	1. User sieht eine Tabelle von Rechnern wie `Schaden an fremdem Eigentum`, `Schaden am eigenen Auto`
	2. User wählt `Schaden am eigenen Auto`
5. Ein Formular erscheint, User muss Daten angeben
	1. Versicherung auswählen für Bonus-Malus-System
		1. Aus einer Datenbank wird die B-M-S Tabelle aufgerufen
		2. User gibt seine Stufe ein
	2. Versicherungsprämie
	3. Wie viel der Schaden kostet
6. Es werden Berechnungen angezeigt
	1. Neue Stufe und Prämie der Versicherung
	2. Wie viel Geld er spart oder verliert falls Versicherung den Schaden begleicht
	3. Gesamtpreis der Zusatz der Prämie relativ zu momentanem Preis bis er wieder auf seiner momentanen BMS-Stufe ist
	4. Ob er den Schaden der Versicherung melden soll


# Key Screen
Main Menu
![Main Menu][https://i.imgur.com/j1hYtOG.png]


