
import { GifItem } from "./index";
import { useFetchGif } from "../hooks/useFetchGif";
import PropTypes from "prop-types"

export const GifGrid = ({ category }) => {

  const {gifData, isLoading} = useFetchGif(category);
 

  return (
    <>
    <h3>{category}</h3>

    {
      // isLoading ? (<h2>cargando...</h2>) : null}
      isLoading && (<h2>cargando...</h2>) }

        <div className="card-grid">
      {gifData.map((image) => (
        <GifItem key={image.id} {...image} /> 
        
          ))}
          </div>
    </>
  );
};


GifGrid.propTypes= {
  category: PropTypes.string.isRequired,
}