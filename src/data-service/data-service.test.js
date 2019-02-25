import fetchImages from './data-service';
import fetchMock from 'fetch-mock';

describe('Data service', () => {
  beforeAll(() => {
    fetchMock
    .get('https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo',
         { imagesCount: 100 });

    // override , so we can mock
    const localStorageMock = (function() {

      return {
        getItem: jest.fn(),
        setItem: jest.fn()
      };

    })();

    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock
    });
  })

  it('should fetch data from photo server', async() => {

    const result = await fetchImages();
    expect(result.imagesCount).toBe(100);
  });

  it('should save data to cache', async() => {

    await fetchImages();
    expect(localStorage.setItem).toHaveBeenCalledWith('images',"{\"imagesCount\":100}");
  });

  it('should get data from cache second time', async() => {
    localStorage.getItem = jest.fn(() => true);

    await fetchImages();
    await fetchImages();
    expect(localStorage.getItem).toHaveBeenCalled();
  });
});
