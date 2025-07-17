## Atualizado 17 de jul as 11:59

[
  {
    "trigger_schema": "public",
    "trigger_name": "update_cart_items_updated_at",
    "event_manipulation": "UPDATE",
    "event_object_schema": "public",
    "event_object_table": "cart_items",
    "action_statement": "EXECUTE FUNCTION update_updated_at()",
    "action_orientation": "ROW",
    "action_timing": "BEFORE",
    "trigger_definition": "CREATE TRIGGER update_cart_items_updated_at BEFORE UPDATE ON public.cart_items FOR EACH ROW EXECUTE FUNCTION update_updated_at()"
  },
  {
    "trigger_schema": "public",
    "trigger_name": "generate_order_number_trigger",
    "event_manipulation": "INSERT",
    "event_object_schema": "public",
    "event_object_table": "orders",
    "action_statement": "EXECUTE FUNCTION generate_order_number()",
    "action_orientation": "ROW",
    "action_timing": "BEFORE",
    "trigger_definition": "CREATE TRIGGER generate_order_number_trigger BEFORE INSERT ON public.orders FOR EACH ROW EXECUTE FUNCTION generate_order_number()"
  },
  {
    "trigger_schema": "public",
    "trigger_name": "update_orders_updated_at",
    "event_manipulation": "UPDATE",
    "event_object_schema": "public",
    "event_object_table": "orders",
    "action_statement": "EXECUTE FUNCTION update_updated_at()",
    "action_orientation": "ROW",
    "action_timing": "BEFORE",
    "trigger_definition": "CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON public.orders FOR EACH ROW EXECUTE FUNCTION update_updated_at()"
  },
  {
    "trigger_schema": "public",
    "trigger_name": "update_products_updated_at",
    "event_manipulation": "UPDATE",
    "event_object_schema": "public",
    "event_object_table": "products",
    "action_statement": "EXECUTE FUNCTION update_updated_at()",
    "action_orientation": "ROW",
    "action_timing": "BEFORE",
    "trigger_definition": "CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON public.products FOR EACH ROW EXECUTE FUNCTION update_updated_at()"
  },
  {
    "trigger_schema": "public",
    "trigger_name": "update_profiles_updated_at",
    "event_manipulation": "UPDATE",
    "event_object_schema": "public",
    "event_object_table": "profiles",
    "action_statement": "EXECUTE FUNCTION update_updated_at()",
    "action_orientation": "ROW",
    "action_timing": "BEFORE",
    "trigger_definition": "CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at()"
  }
]