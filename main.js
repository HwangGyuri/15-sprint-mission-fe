import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./ProductService.js";

// LIST
async function testProductList() {
  const result = await getProductList(1, 10, "");
  console.log(result);
}
// testProductList();

// GET
async function testProduct(productId) {
  // const productList = await getProductList(1, 10, "");
  // if (!productList) {
  //   console.log("상품 목록을 가져오지 못했습니다.");
  //   return;
  // }
  // console.log("상품 목록: ", productList);

  // const productId = 4230;

  const result = await getProduct(productId);
  if (result === undefined) {
    console.log("상품을 가져오지 못했습니다.");
    return;
  }

  console.log("상품 상세 정보:", result);
}
// let productId = 4230;
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
testDeleteProduct();
