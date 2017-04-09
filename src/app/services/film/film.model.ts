export class FilmModel {
    private id;
    private description;
    private director;
    private producer;
    private releaseDate;
    private rtScore;
    private title;

    static parseJson(json) {
        let film = new FilmModel();
        film.id = json.id;
        return film;
    }
}