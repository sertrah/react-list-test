import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardSubtitle,
  CardHeader,
} from "@react-md/card";
import { Text } from "@react-md/typography";
import { MediaContainer } from "@react-md/media";
import { Grid, GridCell } from "@react-md/utils";
import { IProduct } from "entities/product/types";

type ProductCardProps = {
  product: IProduct;
};

const ProductCard: FC<ProductCardProps> = ({product}) => (
  <Card className="card">
    <CardHeader >
      <CardTitle>{product.name}</CardTitle>
      <CardSubtitle>{product.categories.join("-")}-{product.brand}</CardSubtitle>
    </CardHeader>
    <CardContent>
      <Grid>
        <GridCell colSpan={4}>
          <MediaContainer height={1} width={1}>
            <img src={product.photo} alt="product's photo" className="card__img" />
          </MediaContainer>
        </GridCell>
        <GridCell colSpan={8}>
          <Text>
           {product.description}
          </Text>
        </GridCell>
      </Grid>
    </CardContent>
  </Card>
);

export default ProductCard;
