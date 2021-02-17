import React, { FC } from "react";
import { Layout } from "@react-md/layout";
import CategoriesPanel from "./CategoriesPanel";
import ProductCardList from "./ProductCardList";
import ProductActionBar from "./ProductActionBar";
import { Container, Loader } from "application/components";
import { Grid } from "@react-md/utils";
import { useQuery } from "react-query";
import { productService } from "infraestructure/services";
import { useProductListBusinessLogic } from "./customHooks";

const ProductList: FC = () => {
  const { data, status } = useQuery("products", productService.getAll, {
    retry: 1,
    retryDelay: 3000,
  });
  const {
    setListViewStyle,
    productList,
    searchInputHandler,
    loadingRef,
    listViewStyle,
  } = useProductListBusinessLogic(data);

  return (
    <Layout
      id="configurable-layout"
      phoneLayout="temporary"
      tabletLayout="toggleable"
      landscapeTabletLayout="toggleable"
      desktopLayout="clipped"
      navProps={{
        children: <CategoriesPanel />,
      }}
      mainProps={{ component: "div" }}
    >
      <Container>
        <ProductActionBar
          handleListViewStyle={setListViewStyle}
          totalProducts={data?.length}
          activeProducts={productList?.length}
          handleSearchInput={searchInputHandler}
        />
        <Grid>
          {status === "loading" ? (
            <Loader />
          ) : (
            <ProductCardList
              productList={productList}
              listViewStyle={listViewStyle}
            />
          )}
          <div ref={loadingRef}></div>
        </Grid>
      </Container>
    </Layout>
  );
};

export default ProductList;
