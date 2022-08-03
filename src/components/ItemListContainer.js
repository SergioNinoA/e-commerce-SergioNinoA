import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategory } from "../utils/api";
import ItemList from "./ItemList";
import Loading from "./Loading";

const ItemListContainer = (props) => {

    const { categoryId } = useParams();
    const [items, setItems] = useState();

    useEffect(() => {

        setItems(null);
        obtainProduct();
    }, [categoryId])

    const obtainProduct = async () => {

        const found = await getCategory(categoryId);
        setItems(found);
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center', paddingTop: '40px', paddingBottom: '10px', fontSize: '45px' }}>
                {props.greeting}
            </h1>
            {items ? <ItemList items={items} /> : <Loading />}
        </div>
    );
}

export default ItemListContainer;