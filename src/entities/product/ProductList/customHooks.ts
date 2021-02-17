import React, { FC, useState, useMemo, useRef, useEffect, RefObject } from "react";
import { suspectText } from "infraestructure/helpers";
import { useParams } from "react-router-dom";
import { IProduct, listViewStyleEnum } from "entities/product/types";

enum CategoriesEnum {
  tech = "Tech",
  services = "Services",
  office = "Office",
}

export const useProductListBusinessLogic = (data: IProduct[]) => {
    const { category }: { category: CategoriesEnum } = useParams();
    const [productsToShow, setProductsToShow] = useState<number>(0);
    const loadingRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    let timeout: any = null;
    const [listViewStyle, setListViewStyle] = useState<listViewStyleEnum>(listViewStyleEnum.list);
    const [searchFilterValue, setSearchFilterValue] = useState("");
  
    const filterResults = (
      x: IProduct,
      category: CategoriesEnum,
      searchFilterValue: string
    ) => {
      // TODO: Disjunctive syllogism
      if (searchFilterValue && category) {
        return (
          x.categories.indexOf((CategoriesEnum as any)[category]) >= 0 &&
          suspectText(x.name, searchFilterValue)
        );
      }
      if (searchFilterValue) {
        return suspectText(x.name, searchFilterValue);
      }
      if (category) {
        return x.categories.indexOf((CategoriesEnum as any)[category]) >= 0;
      }
      return !!x;
    };
  
    const productList = useMemo(() => {
      if (data) {
        const productsFilter =
          category || searchFilterValue
            ? data.filter((x: IProduct) => {
                return filterResults(x, category, searchFilterValue);
              })
            : data;
        const limitOff =
          productsToShow >= data.length ? data.length : productsToShow;
        return productsFilter.slice(0, limitOff);
      }
      return data;
    }, [data, category, searchFilterValue, productsToShow]);
  
    const searchInputHandler = (value: string) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setSearchFilterValue(value);
      }, 2000);
    };

    useEffect(() => {
        var options = {
          root: null,
          rootMargin: "0px",
          threshold: 1.0,
        };
        // hehe im sorry, i could use the inifite scroll with the React query lib
        // but this little trick is more cul hahaha
    
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setProductsToShow((prev) => prev + 4);
          }
        }, options);
        if (loadingRef.current) {
          observer.observe(loadingRef.current);
        }
      }, [loadingRef]);

  return {setListViewStyle, productList, searchInputHandler, loadingRef, listViewStyle};
};
