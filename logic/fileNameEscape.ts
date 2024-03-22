export const escapeFileName = (name: string): string => name.replaceAll(/['"[\]{} ]/g, '_');
