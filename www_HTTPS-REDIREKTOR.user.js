// ==UserScript==
// @name         www. HTTPS REDIREKTOR
// @version      2021.3.17
// @changelog    https://github.com/jesus2099/konami-command/commits/master/www_HTTPS-REDIREKTOR.user.js
// @description  ☠ OBSOLETE ☠ redirect to HTTPS in some websites. keep hash. avoid infinite loops (Opera speed-up tip: save as bla.js instead of bla.user.js)
// @supportURL   https://github.com/jesus2099/konami-command/labels/www_HTTPS-REDIREKTOR
// @compatible   opera(12.18.1872)+violentmonkey      my setup
// @compatible   vivaldi(1.0.435.46)+violentmonkey    my setup (ho.)
// @compatible   vivaldi(1.13.1008.32)+violentmonkey  my setup (of.)
// @compatible   firefox(47.0)+greasemonkey           tested sometimes
// @compatible   chrome+violentmonkey                 should be same as vivaldi
// @namespace    https://github.com/jesus2099/konami-command
// @downloadURL  https://github.com/jesus2099/konami-command/raw/master/www_HTTPS-REDIREKTOR.user.js
// @updateURL    https://github.com/jesus2099/konami-command/raw/master/www_HTTPS-REDIREKTOR.user.js
// @author       jesus2099
// @contributor  Freso; https://web.archive.org/web/20141014030852/userscripts-mirror.org/topics/118881
// @contributor  RaiuGekkou; https://web.archive.org/web/20131109202051/userscripts.org/topics/131180
// @licence      CC-BY-NC-SA-4.0; https://creativecommons.org/licenses/by-nc-sa/4.0/
// @licence      GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @since        2013-09-18; https://web.archive.org/web/20131108065427/userscripts.org/scripts/show/178037 / https://web.archive.org/web/20141011084004/userscripts-mirror.org/scripts/show/178037
// @icon         data:image/gif;base64,R0lGODlhEAAQAKEDAP+/3/9/vwAAAP///yH/C05FVFNDQVBFMi4wAwEAAAAh/glqZXN1czIwOTkAIfkEAQACAwAsAAAAABAAEAAAAkCcL5nHlgFiWE3AiMFkNnvBed42CCJgmlsnplhyonIEZ8ElQY8U66X+oZF2ogkIYcFpKI6b4uls3pyKqfGJzRYAACH5BAEIAAMALAgABQAFAAMAAAIFhI8ioAUAIfkEAQgAAwAsCAAGAAUAAgAAAgSEDHgFADs=
// @grant        none
// @include      http://*.mediawiki.org/*
// @include      http://*.wikibooks.org/*
// @include      http://*.wikimedia.org/*
// @include      http://*.wikinews.org/*
// @include      http://*.wikipedia.org/*
// @include      http://*.wikiquote.org/*
// @include      http://*.wikisource.org/*
// @include      http://*.wikiversity.org/*
// @include      http://*.wiktionary.org/*
// @include      http://beta.musicbrainz.org/*
// @include      http://blog.musicbrainz.org/*
// @include      http://chatlogs.musicbrainz.org/*
// @include      http://duckduckgo.com/*
// @include      http://musicbrainz.org/*
// @include      http://test.musicbrainz.org/*
// @include      http://userscripts.org/*
// @include      http://wiki.musicbrainz.org/*
// @include      http://wikimediafoundation.org/*
// @exclude      http://*google.*/*imgres*
// @exclude      http://*musicbrainz.org/release/add*
// @exclude      http://*musicbrainz.org/work/create*
// @exclude      http://*musicbrainz.org/ws/*
// @run-at       document-start
// ==/UserScript==
"use strict";
alert("Please uninstall my “www. HTTPS REDIREKTOR” userscript. Its hardcoded list of websites is obsolete.\n\nThank you for having using my script.\njesus2099");
if (self.location.protocol == "http:") self.location.replace(self.location.href.replace(/^http/, "https"));
