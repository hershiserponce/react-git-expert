import { fireEvent, render,screen } from "@testing-library/react"
import { AddCategorie } from "../../src/components/AddCategorie"
 
describe('pruebas en <AddCategorie/>', () => { 
    
    test('debe de cambiar el valor de la caja de texto', () => { 
        render(<AddCategorie onNewCategory={()=>{}}/>);
        // screen.debug();
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target:{value:'pepe'}})
        expect(input.value).toBe('pepe')
     })

     test('debe de llamar onNewCategory si el imput tiene un valor', () => { 
        const inputValue = "saitama"
        const onNewCategory = jest.fn();
        render(<AddCategorie onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form')

        fireEvent.input(input,{target: {value:inputValue}})
        fireEvent.submit(form);
        // screen.debug();
        expect(input.value).toBe("")

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

      })

      test(' no debe de llamar el onNewCategory si el input esta vacio', () => { 
        const onNewCategory = jest.fn();
        render(<AddCategorie onNewCategory={onNewCategory}/>);
        const form = screen.getByRole('form')
        fireEvent.submit(form);
        // expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).toHaveBeenCalledTimes(0);


       })
 })