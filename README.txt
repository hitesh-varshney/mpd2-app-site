MPD2 Field Reference (installable web app)
Files here are the whole site. data.enc is encrypted; the passphrase unlocks it on your phone once per device.

Put it online (GitHub Pages, free):
1. github.com > New repository. Name it e.g. mpd2-ref. Public. Create.
2. On the repo page: Add file > Upload files. Drag in everything from this folder (index.html, sw.js, manifest.webmanifest, data.enc, and the icons folder). Commit.
3. Settings > Pages > Source: Deploy from a branch > main > / (root) > Save.
4. After a minute the site is at https://YOURNAME.github.io/mpd2-ref/
5. On your Android phone, open that address in Chrome, enter the passphrase, then menu > Install app.

To update later: upload the new files over the old ones (same names) and commit.
