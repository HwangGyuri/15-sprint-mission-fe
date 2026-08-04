const BASE_URL = "https://panda-market-api-crud.vercel.app/";
// GET
getArticleList((page = 1), (pageSize = 10), (keyword = ""));

// POST
createArticle();

getArticle(articleId);

// GET(id)

// PATCH
patchArticle(ArticleID, articleData);

// DELETE
deleteArticle(articleId);
