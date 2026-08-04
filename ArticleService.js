const BASE_URL = "https://panda-market-api-crud.vercel.app";
// GET LIST
export function getArticleList(page = 1, pageSize = 10, keyword = "") {
  const params = new URLSearchParams({
    page,
    pageSize,
    keyword,
  });

  return fetch(`${BASE_URL}/articles?${params.toString()}`, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `아티클 목록 조회 실패: ${response.status} ${response.statusText}`,
        );
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
    });
}

// GET
export function getArticle(articleId) {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `아티클 조회 실패: ${response.status} ${response.statusText}`,
        );
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
    });
}

// POST
export function createArticle(title, content, image) {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      content,
      image,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `아티클 생성 실패: ${response.status} ${response.statusText}`,
        );
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
    });
}

// PATCH
export function patchArticle(articleId, articleData) {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `아티클 수정 실패: ${response.status} ${response.statusText}`,
        );
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
    });
}

// DELETE
export function deleteArticle(articleId) {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `아티클 삭제 실패: ${response.status} ${response.statusText}`,
        );
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
    });
}
