const BASE_URL = "https://panda-market-api-crud.vercel.app";

// GET list
export async function getProductList(page = 1, pageSize = 10, keyword = "") {
  // 데이터 받아오기
  try {
    const params = new URLSearchParams({
      page,
      pageSize,
      keyword,
    });

    const response = await fetch(`${BASE_URL}/products?${params.toString()}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(
        `상품 목록 조회 실패: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error.message);
  }
}

// GET
export async function getProduct(productId) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(
        `상품 목록 조회 실패: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

// POST
export async function createProduct(productData) {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error(
        `상품 생성 실패: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

// PATCH
export async function patchProduct(productId, productData) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error(
        `상품 수정 실패: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

// DELETE
export async function deleteProduct(productId) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(
        `상품 삭제 실패: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
