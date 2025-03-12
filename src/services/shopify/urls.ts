import { env } from "app/config/env"

export const shopifyUrls = {
  products: {
    'all': `${env.SHOPIPFY_HOSTNAME}/admin/api/2025-01/products.json`
  },

  collections: {
    'all': `${env.SHOPIPFY_HOSTNAME}/admin/api/2025-01/smart_collections.json`,
    'products': (id: string) => `${env.SHOPIPFY_HOSTNAME}/admin/api/2025-01/collections/${id}/products.json`
  },
}