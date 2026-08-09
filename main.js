import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./ProductService.js";

import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.js";

// ProductService
// GET LIST
async function testProductList() {
  const result = await getProductList(1, 10, "");
  console.log(result);
}
// testProductList();

// GET
async function testProduct(productId) {
  const result = await getProduct(productId);
  if (result === undefined) {
    console.log("상품을 가져오지 못했습니다.");
    return;
  }

  console.log("상품 상세 정보:", result);
}
let productId = 4230;
// testProduct(productId);

// POST
async function testCreateProduct() {
  const productData = {
    images: ["https://example.com/..."],
    tags: ["전자제품"],
    price: 0,
    description: "string",
    name: "상품 이름",
  };

  const createdProduct = await createProduct(productData);

  if (!createdProduct) {
    console.log("상품 생성에 실패했습니다.");
    return;
  }

  console.log("생성된 상품: ", createdProduct);
  console.log("생성된 상품 ID:", createdProduct.id);
}
// testCreateProduct();

// PATCH
async function testPatchProduct() {
  const productId = 4235;
  const productData = {
    images: ["https://example.com/..."],
    tags: ["전자제품"],
    price: 10000,
    description: "string",
    name: "상품 이름",
  };

  const patchedProduct = await patchProduct(productId, productData);

  if (!patchedProduct) {
    console.log("상품 변경에 실패했습니다.");
    return;
  }

  console.log("변경된 상품: ", patchedProduct);
  console.log("변경된 상품 ID:", patchedProduct.id);
}
// testPatchProduct();

// DELETE
async function testDeleteProduct() {
  const productId = 4235;
  const deletedProduct = await deleteProduct(productId);

  if (!deletedProduct) {
    console.log("상품 삭제에 실패했습니다.");
    return;
  }

  console.log("삭제된 상품: ", deletedProduct);
  console.log("삭제된 상품 ID:", deletedProduct.id);
}
// testDeleteProduct();

// Article
// GET LIST
getArticleList(1, 10, "")
  .then((articleList) => {
    if (!articleList) {
      console.log("아티클 목록을 가져오지 못했습니다.");
      return;
    }
    console.log("아티클 목록: ", articleList);
  })
  .catch((error) => {
    console.error("아티클 목록 오류: ", error.message);
  });

// GET
let getArticleId = 6861;
getArticle(getArticleId)
  .then((article) => {
    if (!article) {
      console.log("아티클을 가져오지 못했습니다.");
      return;
    }
    console.log("아티클: ", article);
  })
  .catch((error) => {
    console.error("아티클 오류: ", error.message);
  });

// POST
let title = "게시글 제목입니다.";
let content = "게시글 내용입니다.";
let image = "https://example.com/...";

createArticle(title, content, image).then((createdArticle) => {
  if (!createdArticle) {
    console.log("아티클 생성에 실패했습니다.");
    return;
  }
  console.log(createdArticle);
  console.log(createdArticle.id);
});

// PATCH
const patchArticleId = 6862;
const articleData = {
  title: "수정된 게시글 제목입니다.",
  content: "수정된 게시글 내용입니다.",
  image: "https://example.com/...",
};

patchArticle(patchArticleId, articleData)
  .then((updatedArticle) => {
    if (!updatedArticle) {
      console.log("아티클 수정에 실패했습니다.");
      return;
    }
    console.log("수정된 아티클: ", updatedArticle);
  })
  .catch((error) => {
    console.error("아티클 수정 오류: ", error.message);
  });

// DELETE
const deleteArticleId = 6862;
deleteArticle(deleteArticleId)
  .then((deletedarticle) => {
    if (!deletedarticle) {
      console.log("아티클을 삭제하지 못했습니다.");
      return;
    }
    console.log("아티클: ", deletedarticle);
  })
  .catch((error) => {
    console.error("아티클 오류: ", error.message);
  });
