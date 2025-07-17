## Atualizado 17 de jul as 12:00

[
  {
    "table_name": "addresses",
    "columns": [
      {
        "data_type": "uuid",
        "column_name": "id",
        "is_nullable": "NO",
        "numeric_scale": null,
        "column_default": "uuid_generate_v4()",
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "uuid",
        "column_name": "user_id",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "cep",
        "is_nullable": "NO",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "street",
        "is_nullable": "NO",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "number",
        "is_nullable": "NO",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "complement",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "neighborhood",
        "is_nullable": "NO",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "city",
        "is_nullable": "NO",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "state",
        "is_nullable": "NO",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "boolean",
        "column_name": "is_default",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": "false",
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "timestamp with time zone",
        "column_name": "created_at",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": "now()",
        "numeric_precision": null,
        "character_maximum_length": null
      }
    ]
  },
  {
    "table_name": "cart_items",
    "columns": [
      {
        "data_type": "uuid",
        "column_name": "id",
        "is_nullable": "NO",
        "numeric_scale": null,
        "column_default": "uuid_generate_v4()",
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "uuid",
        "column_name": "user_id",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "uuid",
        "column_name": "product_id",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "integer",
        "column_name": "quantity",
        "is_nullable": "NO",
        "numeric_scale": 0,
        "column_default": null,
        "numeric_precision": 32,
        "character_maximum_length": null
      },
      {
        "data_type": "timestamp with time zone",
        "column_name": "created_at",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": "now()",
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "timestamp with time zone",
        "column_name": "updated_at",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": "now()",
        "numeric_precision": null,
        "character_maximum_length": null
      }
    ]
  },
  {
    "table_name": "categories",
    "columns": [
      {
        "data_type": "integer",
        "column_name": "id",
        "is_nullable": "NO",
        "numeric_scale": 0,
        "column_default": "nextval('categories_id_seq'::regclass)",
        "numeric_precision": 32,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "name",
        "is_nullable": "NO",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "slug",
        "is_nullable": "NO",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "description",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "image_url",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "boolean",
        "column_name": "is_active",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": "true",
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "timestamp with time zone",
        "column_name": "created_at",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": "now()",
        "numeric_precision": null,
        "character_maximum_length": null
      }
    ]
  },
  {
    "table_name": "order_items",
    "columns": [
      {
        "data_type": "uuid",
        "column_name": "id",
        "is_nullable": "NO",
        "numeric_scale": null,
        "column_default": "uuid_generate_v4()",
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "uuid",
        "column_name": "order_id",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "uuid",
        "column_name": "product_id",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "product_name",
        "is_nullable": "NO",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "product_sku",
        "is_nullable": "NO",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "integer",
        "column_name": "quantity",
        "is_nullable": "NO",
        "numeric_scale": 0,
        "column_default": null,
        "numeric_precision": 32,
        "character_maximum_length": null
      },
      {
        "data_type": "numeric",
        "column_name": "unit_price",
        "is_nullable": "NO",
        "numeric_scale": 2,
        "column_default": null,
        "numeric_precision": 10,
        "character_maximum_length": null
      },
      {
        "data_type": "numeric",
        "column_name": "total_price",
        "is_nullable": "NO",
        "numeric_scale": 2,
        "column_default": null,
        "numeric_precision": 10,
        "character_maximum_length": null
      },
      {
        "data_type": "timestamp with time zone",
        "column_name": "created_at",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": "now()",
        "numeric_precision": null,
        "character_maximum_length": null
      }
    ]
  },
  {
    "table_name": "orders",
    "columns": [
      {
        "data_type": "uuid",
        "column_name": "id",
        "is_nullable": "NO",
        "numeric_scale": null,
        "column_default": "uuid_generate_v4()",
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "order_number",
        "is_nullable": "NO",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "uuid",
        "column_name": "user_id",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "uuid",
        "column_name": "address_id",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "USER-DEFINED",
        "column_name": "status",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": "'pending'::order_status",
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "USER-DEFINED",
        "column_name": "payment_status",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": "'pending'::payment_status",
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "numeric",
        "column_name": "subtotal",
        "is_nullable": "NO",
        "numeric_scale": 2,
        "column_default": null,
        "numeric_precision": 10,
        "character_maximum_length": null
      },
      {
        "data_type": "numeric",
        "column_name": "shipping_cost",
        "is_nullable": "YES",
        "numeric_scale": 2,
        "column_default": "0",
        "numeric_precision": 10,
        "character_maximum_length": null
      },
      {
        "data_type": "numeric",
        "column_name": "discount",
        "is_nullable": "YES",
        "numeric_scale": 2,
        "column_default": "0",
        "numeric_precision": 10,
        "character_maximum_length": null
      },
      {
        "data_type": "numeric",
        "column_name": "total",
        "is_nullable": "NO",
        "numeric_scale": 2,
        "column_default": null,
        "numeric_precision": 10,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "notes",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "tracking_code",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "timestamp with time zone",
        "column_name": "created_at",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": "now()",
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "timestamp with time zone",
        "column_name": "updated_at",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": "now()",
        "numeric_precision": null,
        "character_maximum_length": null
      }
    ]
  },
  {
    "table_name": "payment_intents",
    "columns": [
      {
        "data_type": "uuid",
        "column_name": "id",
        "is_nullable": "NO",
        "numeric_scale": null,
        "column_default": "uuid_generate_v4()",
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "uuid",
        "column_name": "order_id",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "provider",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "external_id",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "numeric",
        "column_name": "amount",
        "is_nullable": "NO",
        "numeric_scale": 2,
        "column_default": null,
        "numeric_precision": 10,
        "character_maximum_length": null
      },
      {
        "data_type": "USER-DEFINED",
        "column_name": "status",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": "'pending'::payment_status",
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "jsonb",
        "column_name": "metadata",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": "'{}'::jsonb",
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "timestamp with time zone",
        "column_name": "created_at",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": "now()",
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "timestamp with time zone",
        "column_name": "updated_at",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": "now()",
        "numeric_precision": null,
        "character_maximum_length": null
      }
    ]
  },
  {
    "table_name": "products",
    "columns": [
      {
        "data_type": "uuid",
        "column_name": "id",
        "is_nullable": "NO",
        "numeric_scale": null,
        "column_default": "uuid_generate_v4()",
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "sku",
        "is_nullable": "NO",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "name",
        "is_nullable": "NO",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "slug",
        "is_nullable": "NO",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "description",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "numeric",
        "column_name": "price",
        "is_nullable": "NO",
        "numeric_scale": 2,
        "column_default": null,
        "numeric_precision": 10,
        "character_maximum_length": null
      },
      {
        "data_type": "numeric",
        "column_name": "sale_price",
        "is_nullable": "YES",
        "numeric_scale": 2,
        "column_default": null,
        "numeric_precision": 10,
        "character_maximum_length": null
      },
      {
        "data_type": "integer",
        "column_name": "stock_quantity",
        "is_nullable": "YES",
        "numeric_scale": 0,
        "column_default": "0",
        "numeric_precision": 32,
        "character_maximum_length": null
      },
      {
        "data_type": "integer",
        "column_name": "category_id",
        "is_nullable": "YES",
        "numeric_scale": 0,
        "column_default": null,
        "numeric_precision": 32,
        "character_maximum_length": null
      },
      {
        "data_type": "jsonb",
        "column_name": "images",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": "'[]'::jsonb",
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "jsonb",
        "column_name": "specifications",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": "'{}'::jsonb",
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "boolean",
        "column_name": "is_featured",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": "false",
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "boolean",
        "column_name": "is_active",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": "true",
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "timestamp with time zone",
        "column_name": "created_at",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": "now()",
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "timestamp with time zone",
        "column_name": "updated_at",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": "now()",
        "numeric_precision": null,
        "character_maximum_length": null
      }
    ]
  },
  {
    "table_name": "profiles",
    "columns": [
      {
        "data_type": "uuid",
        "column_name": "id",
        "is_nullable": "NO",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "email",
        "is_nullable": "NO",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "full_name",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "phone",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "text",
        "column_name": "cpf",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": null,
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "USER-DEFINED",
        "column_name": "role",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": "'customer'::user_role",
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "timestamp with time zone",
        "column_name": "created_at",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": "now()",
        "numeric_precision": null,
        "character_maximum_length": null
      },
      {
        "data_type": "timestamp with time zone",
        "column_name": "updated_at",
        "is_nullable": "YES",
        "numeric_scale": null,
        "column_default": "now()",
        "numeric_precision": null,
        "character_maximum_length": null
      }
    ]
  }
]