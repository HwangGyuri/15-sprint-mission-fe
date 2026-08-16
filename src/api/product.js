const BASE_URL = 'https://panda-market-api.vercel.app';

// GET Products
export async function getProducts(
  page = 1,
  pageSize = 10,
  keyword = '',
  order = 'recent',
) {
  const params = new URLSearchParams({
    page,
    pageSize,
    order,
  });

  if (keyword) {
    params.set('keyword', keyword);
  }

  const response = await fetch(`${BASE_URL}/products?${params.toString()}`);

  if (!response.ok) {
    throw new Error(
      `상품 목록 조회 실패:${response.status} ${response.statusText} `,
    );
  }

  return response.json();
}
