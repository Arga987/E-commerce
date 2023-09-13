import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skx03wxr3j94mEOP4SfNQYPKh23d60PSdZtK7JhKxlxumVUyMv7pqofJa8YBZcVXVr5DeFRCq4X2HJI9gyrqLL22sR2yWhuymdkVCZOoserXPHiBrqLFP7HPqbnCKzPQzpkfSPsQVRVP2pcgGEzFkSqfbufsyfRpq3yWYbKZe7UgNdS6HbWt"
  
})
