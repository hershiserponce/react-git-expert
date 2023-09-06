
import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('pruebas en <GifItem/>', () => { 

    const title = 'pepe'
    const url = 'www.google.com.ni'

    test(' debe de hacer match con el snapshop', () => {
        const { container} = render(<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
     });

     test('debe de mostrar la imagen con el url de prueba y el alt indicado', () => { 
        render(<GifItem title={title} url={url}/>)
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)

        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
      })

      test('debe de mostrar el titulo en el componente', () => { 
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
       })

 })