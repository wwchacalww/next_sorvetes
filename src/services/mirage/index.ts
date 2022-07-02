import { createServer, Model } from "miragejs";

type Product = {
  name: string;
  category: string;
  description: string;
  code: string;
  barcode?: string;
  createdAt: string;
};

export function makeServer() {
  return createServer({
    models: {
      product: Model.extend<Partial<Product>>({}),
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/products");
      this.post("/products");

      this.namespace = "";
      this.passthrough();
    },
  });
}
