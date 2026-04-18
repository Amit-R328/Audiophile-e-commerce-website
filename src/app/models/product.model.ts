export interface ResponsiveImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface ProductInclude {
  quantity: number;
  item: string;
}

export interface ProductOther {
  slug: string;
  name: string;
  image: ResponsiveImage;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  image: ResponsiveImage;
  category: string;
  categoryImage: ResponsiveImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: ProductInclude[];
  gallery: {
    first: ResponsiveImage;
    second: ResponsiveImage;
    third: ResponsiveImage;
  };
  others: ProductOther[];
}
