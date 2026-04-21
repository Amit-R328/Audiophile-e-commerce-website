import { ResponsiveImage } from './product.model';

export interface CartItem {
  slug: string;
  shortName: string;
  price: number;
  image: ResponsiveImage;
  quantity: number;
}
