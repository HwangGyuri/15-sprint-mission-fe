const BASE_URL = 'https://panda-market-api.vercel.app';

// GET Products
export async function getProducts(
  page = 1,
  pageSize = 10,
  keyword = '',
  orderBy = 'recent',
) {
  const params = new URLSearchParams({
    page,
    pageSize,
    orderBy,
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

export const createProduct = async (postData) => {
  const response = await fetch(`${BASE_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error('게시물 추가에 실패했습니다.');
  }

  return response.json();
};
