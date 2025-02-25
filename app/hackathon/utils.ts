export function parseAssets(assets: string) {
  if (!assets) return [];
  try {
    return JSON.parse(assets);
  } catch (error) {
    return [assets];
  }
}
