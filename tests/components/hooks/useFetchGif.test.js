import { render, renderHook, screen, waitFor } from "@testing-library/react";
import { useFetchGif } from "../../../src/hooks/useFetchGif";

describe("pruebas en <useFetchGif/>", () => {

  test("debe de regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGif("one punch"));
    // console.log("result",result)
    const {gifData,isLoading} = result.current;
    expect(gifData.length).toBe(0)
    expect(isLoading).toBeTruthy()
  });

  test("debe de regresar un arreglo de imagenes y isLoading en false", async() => {
    const { result } = renderHook(() => useFetchGif("one punch"));
 
   await waitFor(
        ()=> expect(result.current.gifData.length).toBeGreaterThan(0)
    );
    const {gifData,isLoading} = result.current;
    expect(gifData.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy()
  });
});
