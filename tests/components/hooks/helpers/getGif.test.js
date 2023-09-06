import {getGif} from '../../../../src/helpers/getGif'
describe('pruebas en <getGif/>', () => { 
    
    test('debe de retornar un arreglo de gifs', async() => { 
        const gifs = await getGif('one');
        // console.log(gifs)
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title:expect.any(String),
            url:expect.any(String),
        })
     })
     

 })