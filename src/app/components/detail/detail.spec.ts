describe('Detail component', () => {
    it('should show details of movie/film', () => {
        let title;
        expect(title).toBe('Henk');
    });
});

describe('Detail service', () => {
    it('should call getDetail from film Service', () => {
        let dep;
        expect(dep).toHaveBeenCalled();
    });
});