import { useState, useEffect, useReducer } from "react";

import { Repository } from "../../shared/repository";

import ProductTable from "../../components/Product/ProductTable";
import ProductForm from "../../components/Product/ProductForm";

export function Services() {
  const productFormInitialState = { name: "", price: 0, stock: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "set":
        return { ...state, ...action.obj };
      case "load":
        return action.obj;
      case "reset":
        return productFormInitialState;
      default:
        window.alert(`Evento '${action.type}' não reconhecido!`);
        return state;
    }
  };

  const [product, dispatch] = useReducer(reducer, productFormInitialState);
  const [productList, setProductList] = useState([]);

  const productRepository = new Repository("products");
  const loadProductList = () => productRepository.list().then(setProductList);

  useEffect(() => {
    loadProductList();
  }, []);

  const getProductById = async (id) => {
    const prod = await productRepository.get(id);

    if (!prod) {
      window.alert(`Produto com id ${id} não encontrado!`);
      return;
    }
    dispatch({ type: "load", obj: prod });
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const isEdit = !!product.id;

    if (isEdit) await productRepository.update(product.id, product);
    else await productRepository.create(product);

    dispatch({ type: "reset" });
    await loadProductList();
  };

  const deleteProduct = async (id) => {
    await productRepository.delete(id);
    await loadProductList();
  };

  const handleName = (e) => {
    dispatch({ type: "set", obj: { name: e.target.value } });
  };
  const handlePrice = (e) => {
    dispatch({ type: "set", obj: { price: Number(e.target.value) } });
  };
  const handleStock = (e) => {
    dispatch({ type: "set", obj: { stock: Number(e.target.value) } });
  };

  const handleClear = () => dispatch({ type: "reset" });

  return (
    <>
      <div>
        {productList.length > 0 ? (
          <ProductTable
            products={productList}
            deleteProduct={deleteProduct}
            editProduct={getProductById}
          />
        ) : (
          <h3 style={{ marginBottom: "30px" }}>Nenhum produto cadastrado...</h3>
        )}
      </div>

      <ProductForm
        name={product.name}
        price={product.price}
        stock={product.stock}
        handleName={handleName}
        handlePrice={handlePrice}
        handleStock={handleStock}
        onSaveProduct={saveProduct}
        onClear={handleClear}
      />
    </>
  );
}

export default Services;
