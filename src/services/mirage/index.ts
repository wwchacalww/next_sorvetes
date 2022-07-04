import { createServer, Factory, Model } from "miragejs";
import faker from "@withshepherd/faker";

type Product = {
  name: string;
  category: string;
  description: string;
  code: string;
  barcode: string;
  createdAt: string;
};

export function makeServer() {
  return createServer({
    models: {
      product: Model.extend<Partial<Product>>({}),
    },

    factories: {
      product: Factory.extend({
        name() {
          return faker.commerce.productName();
        },
        category() {
          return faker.commerce.department();
        },
        description() {
          return faker.commerce.productDescription();
        },
        code() {
          return faker.random.alphaNumeric(5);
        },
        barcode() {
          return faker.random.alphaNumeric(12);
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList("product", 20);
    },

    routes() {
      this.namespace = "api";
      this.timing = 4000;

      this.get("/products");
      this.post("/products");

      this.namespace = "";
      this.passthrough();
    },
  });
}
