import {Supplier} from "./supplier.module";

export interface Product {
  id?: number
  name: string
  category?: string
  price?: number
  promo?: number
  description?: string
  active?: boolean

  supplier?: Supplier
}
