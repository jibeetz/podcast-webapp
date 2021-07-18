# podcast-webapp
Web Podcast player

**Note: To fetch the RSS feeds, the app relied on a yahoo service which is not available anymore.**

# Features
- Plays Podcasts; just add the rss feed of your podcast
- List shows and their details
- The list of your added shows is saved locally
- Save the episodes you want to listen in a playlist
- Episodes' playlist is saved locally
- 15 seconds rewind button
- Deep linking to episode details

# Env. prerequisites

* node.js
* bower
* grunt

## Installation

`npm install`

## Start

`npm start`

Visit http://localhost:1337/app/

## Dev mode

`grunt dev`

## Production mode

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
- DONE Fix and standardize hover states

### Next version
- DONE Loaded bar added
- DONE Rewind 15 secs
- DONE localStorage for playlist
- DONE Add current to playlist and localStorage
- DONE Reload button to check new episodes
- DONE spinner added on loading
- DONE Play podcast onload
- DONE Notification system
- DONE Constant for svg location
- DONE Record play location
- Replace localStorage by firebase
- Add account

## Credits

- [SoundManager2](https://github.com/scottschiller/SoundManager2)
- [angular-soundmanager2](http://perminder-klair.github.io/angular-soundmanager2/)
- [angular-spinner](https://github.com/urish/angular-spinner)