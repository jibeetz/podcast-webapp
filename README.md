# podcast-webapp
Web Podcast player

# Features
- Podcast player !
- Based on the rss feed of your podcast
- List shows and their details
- The list of your added shows is saved on your machine
- Add the shows you want to listen in a playlist
- Shows Playlist is saved locally
- 15 seconds rewind button

# Env. prerequisites

* node.js
* bower
* grunt

## Installation

`npm install`

## Start

`npm start`

## Dev

`grunt dev`

## Go to prod

`grunt prod`

## TODO
- DONE Add service to handle input rss box toggle display
- DONE Debug add to Playlist check by ID -> check by slug
- DONE current on top of loop filter
- DONE playlist trim on one line + ...
- DONE playlist toggle
- DONE Bug play same id
- DONE Add default shows when none
- DONE Refactor default shows loading using checkFeed function refactored as a Service
- DONE organize CSS
- DONE Refactor svg in ctrls

### Next version
- DONE Loaded bar added
- DONE Rewind 15 secs
- DONE localStorage for playlist
- Add current to playlist and localStorage
- Record play location
- Replace localStorage by firebase
- Add account

## Credits

[SoundManager2](https://github.com/scottschiller/SoundManager2)
[angular-soundmanager2](http://perminder-klair.github.io/angular-soundmanager2/)