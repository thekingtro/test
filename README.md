# Spotify Search Page

Eine einfache statische Website für GitHub Pages.

## Dateien

- `index.html`
- `style.css`
- `script.js`

## GitHub Pages aktivieren

1. Repository auf GitHub erstellen.
2. Diese Dateien in den Hauptordner des Repositories committen und pushen.
3. Auf GitHub im Repository zu **Settings → Pages** gehen.
4. Unter **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Speichern.

Danach stellt GitHub Pages die Seite unter einer URL wie

`https://DEIN-NAME.github.io/REPOSITORY-NAME/`

bereit.

## Verhalten

Beim Klick auf **Bei Spotify suchen** versucht die Website, die lokale Spotify-App
über ein `spotify:search:`-URI zu öffnen.

Falls der Browser das nicht erlaubt oder Spotify nicht installiert ist, kann der
Link **Spotify im Browser öffnen** verwendet werden.
