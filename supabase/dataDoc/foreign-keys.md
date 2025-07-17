## Atualizado 17 de jul as 12:01

[
  {
    "table_schema": "public",
    "constraint_name": "cart_items_product_id_fkey",
    "table_name": "cart_items",
    "column_name": "product_id",
    "foreign_table_schema": "public",
    "foreign_table_name": "products",
    "foreign_column_name": "id",
    "update_rule": "NO ACTION",
    "delete_rule": "CASCADE"
  },
  {
    "table_schema": "public",
    "constraint_name": "order_items_order_id_fkey",
    "table_name": "order_items",
    "column_name": "order_id",
    "foreign_table_schema": "public",
    "foreign_table_name": "orders",
    "foreign_column_name": "id",
    "update_rule": "NO ACTION",
    "delete_rule": "CASCADE"
  },
  {
    "table_schema": "public",
    "constraint_name": "order_items_product_id_fkey",
    "table_name": "order_items",
    "column_name": "product_id",
    "foreign_table_schema": "public",
    "foreign_table_name": "products",
    "foreign_column_name": "id",
    "update_rule": "NO ACTION",
    "delete_rule": "NO ACTION"
  },
  {
    "table_schema": "public",
    "constraint_name": "orders_address_id_fkey",
    "table_name": "orders",
    "column_name": "address_id",
    "foreign_table_schema": "public",
    "foreign_table_name": "addresses",
    "foreign_column_name": "id",
    "update_rule": "NO ACTION",
    "delete_rule": "NO ACTION"
  },
  {
    "table_schema": "public",
    "constraint_name": "payment_intents_order_id_fkey",
    "table_name": "payment_intents",
    "column_name": "order_id",
    "foreign_table_schema": "public",
    "foreign_table_name": "orders",
    "foreign_column_name": "id",
    "update_rule": "NO ACTION",
    "delete_rule": "CASCADE"
  },
  {
    "table_schema": "public",
    "constraint_name": "products_category_id_fkey",
    "table_name": "products",
    "column_name": "category_id",
    "foreign_table_schema": "public",
    "foreign_table_name": "categories",
    "foreign_column_name": "id",
    "update_rule": "NO ACTION",
    "delete_rule": "NO ACTION"
  }
]