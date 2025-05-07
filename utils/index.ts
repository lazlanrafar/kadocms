export const SlugGenerator = (str: string, arr: string[]) => {
  const slug = str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");

  if (arr.includes(slug)) {
    return `${slug}-${Math.floor(Math.random() * 1000)}`;
  }
  return slug;
};
