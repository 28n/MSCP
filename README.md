# README

Hallo Murphy!

hier wie versprochen die Git-Repo fürs MGCP. Um anzufangen eigenständig zu programmieren, brauchst du einige Dinge auf deinem PC!

> **Voraussetzungen**
>
> - [Node.js](https://nodejs.org/en) (>=14.19.x <=16.x) und [Yarn](https://yarnpkg.com/) (>=1.15)

Um anzufangen musst du diese Repo klonen. Wähl dir hierfür einfach ein einfach erreichbaren Ordner auf deinem PC aus.

erstell dir in diesem Ordner einen neuen Ordner. Nenn ihn einfach

```
mscp
```

navigier in den Ordner, öffne eine Terminalinstanz und führe folgendes Kommando aus:

```
git clone https://github.com/28n/mscp
```

super! du hast den Sourcecode auf deinem PC!

Jetzt musst du allerdings noch einige Pakete und Bibliotheken installieren.
Führ hierfür das Kommando

```
yarn install
```

aus.

Dieses Kommando dauert sehr, sehr, sehr lange. Es werden über 800 MB an Daten aus dem Internet installiert.

## Fertig?

Na dann, ab ans arbeiten. Um den Server zu starten, führe das Kommando:

```
yarn rw dev
```
in der Konsole aus. 

Dieses Kommando erstellt die Datenbank, setzt die Umgebungsvariablen und führt den Development-Server aus.
Um auf diesen zuzugreifen, öffne in deinem Browser: [localhost:8910](localohost:8910)

Fertig! Wie du hiermit programmierst bringe ich dir gern mal bei. Fuchs dich mal rein, dann wirds bestimmt auch gehen.
