import { useParams } from "react-router-dom";

export const Category = () => {
    const { categoryId } = useParams();

    return (
        <h3>Estás en  {categoryId}</h3>
    )
};

export default Category;