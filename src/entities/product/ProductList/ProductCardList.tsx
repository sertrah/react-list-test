import React, { FunctionComponent } from "react"; // importing FunctionComponent
import { GridCell } from "@react-md/utils";
import { IProduct, listViewStyleEnum } from "entities/product/types";
import ProductCard from "./ProductCard";

type ProductCardListProps = {
  productList: IProduct[] | undefined;
  listViewStyle: string;
};

const ProductCardList: FunctionComponent<ProductCardListProps> = ({
  productList,
  listViewStyle,
}) => (
  <>
    {!productList || productList?.length === 0 ? (
      <h1>Ups... no results</h1>
    ) : (
      productList.map((item: IProduct) => (
        <GridCell key={item.id} colSpan={listViewStyle === listViewStyleEnum.square ? 6 : 12}>
          <ProductCard product={item} />
        </GridCell>
      ))
    )}
  </>
);

export default ProductCardList;
