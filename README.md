# GymTrack PWA

Eine kleine offlinefähige PWA zum Tracken von Gewichten pro Übung/Gerät.

## Installation über GitHub Pages

1. Neues GitHub-Repository erstellen.
2. Alle Dateien aus diesem Ordner direkt in den Root des Repositories hochladen.
3. Auf GitHub: **Settings → Pages** öffnen.
4. Unter **Build and deployment** als Source **Deploy from a branch** wählen.
5. Branch `main` und Ordner `/ (root)` auswählen und speichern.
6. Die von GitHub Pages angezeigte HTTPS-Adresse auf dem Android-Handy in Chrome öffnen.
7. Im Browser-Menü **App installieren** bzw. **Zum Startbildschirm hinzufügen** wählen.

## Dateien

- `index.html` – komplette App inklusive Oberfläche, Logik und lokalem Speicher
- `manifest.webmanifest` – PWA-Metadaten
- `sw.js` – Offline-Cache / Service Worker
- `icon-192.png`, `icon-512.png` – App-Icons

## Datenspeicherung

Die Daten werden lokal im Browser/der installierten PWA gespeichert (IndexedDB, mit localStorage-Fallback). Sie bleiben nach Schließen und Neustart des Handys erhalten, solange die Website-/App-Daten nicht gelöscht werden.

Unter **Einstellungen** kannst du:
- einen Backup-String erzeugen und kopieren,
- eine JSON-Backup-Datei herunterladen,
- einen Backup-String oder eine Backup-Datei wiederherstellen,
- alle Daten zurücksetzen.
