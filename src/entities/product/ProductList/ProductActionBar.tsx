import React, { FunctionComponent, Dispatch } from "react"; // importing FunctionComponent
import { Button } from "@react-md/button";
import { ViewListSVGIcon, ViewModuleSVGIcon } from "@react-md/material-icons";
import { TextField } from "@react-md/form";
import { Text } from "@react-md/typography";
import { listViewStyleEnum } from "entities/product/types";

type ProductActionBarProps = {
  handleListViewStyle: Dispatch<listViewStyleEnum>;
  handleSearchInput: (value: string)=> void;
  totalProducts: number;
  activeProducts: number;
};

const ProductActionBar: FunctionComponent<ProductActionBarProps> = ({
  handleListViewStyle,
  handleSearchInput,
  totalProducts,
  activeProducts,
}) => (
  <section className="productbar">
    <div className="productbar__actions">
      <div>
        <Button
          id="icon-button-1"
          buttonType="icon"
          theme="primary"
          aria-label="Change list view into list style"
          onClick={() => handleListViewStyle(listViewStyleEnum.list)}
        >
          <ViewListSVGIcon />
        </Button>
        <Button
          id="icon-button-1"
          buttonType="icon"
          theme="primary"
          aria-label="Change list view into square style"
          onClick={() => handleListViewStyle(listViewStyleEnum.square)}
        >
          <ViewModuleSVGIcon />
        </Button>
      </div>
      <TextField
        id="search-input"
        type="text"
        placeholder="Placeholder"
        label="Search input"
        onChange={(input)=> handleSearchInput(input.target.value)} 
      />
    </div>
    {activeProducts && <Text className="product__text">
      Showing {activeProducts} products - Hidden:{" "}
      {totalProducts - activeProducts}
    </Text>}
  </section>
);

export default ProductActionBar;
