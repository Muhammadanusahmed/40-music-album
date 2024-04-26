function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("talha anjum", "album"));
console.log(make_album("talha yunus", "album2"));
console.log(make_album("rahat fateh ali khan", "album3", 8));
