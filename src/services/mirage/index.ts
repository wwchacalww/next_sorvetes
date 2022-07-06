import { createServer, Factory, Model, Response } from "miragejs";
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
      server.createList("product", 200);
    },

    routes() {
      this.namespace = "api";
      this.timing = 1000;

      this.get("/products", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all("product").length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const products = this.serialize(schema.all("product")).products.slice(
          pageStart,
          pageEnd
        );

        return new Response(
          200,
          { "x-total-count": String(total) },
          {
            products,
          }
        );
      });

      this.get("/products/:id");
      this.post("/products");

      this.namespace = "";
      this.passthrough();
    },
  });
}
