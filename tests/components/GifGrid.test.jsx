import { render,screen } from "@testing-library/react";
import {GifGrid} from '../../src/components/GifGrid'
import { useFetchGif } from "../../src/hooks/useFetchGif";

jest.mock('../../src/hooks/useFetchGif')

describe('prueba en <GifGrid/>', () => { 

    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => { 
        useFetchGif.mockReturnValue({
            gifData: [],
            isLoading: true
            });
       
        render(<GifGrid category={category}/>)
        // screen.debug();
        expect(screen.getByText('cargando...'))
        expect(screen.getByText(category))
     })

     test('debe de mostrar items cuando se cargan las imagenes useFetchGif ', () => { 
        const gifs = [{
            id:'abc',
            title:'pepe',
            url:'www.google.com'
        },{
            id:'adef',
            title:'pepe',
            url:'www.google.com'
        }]
        useFetchGif.mockReturnValue({
            gifData: gifs,
            isLoading: true
            });
         render(<GifGrid category={category}/>)
        //  screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2)
      })
 })