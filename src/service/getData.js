import fetch from '../config/fetch'

/**
 * 获取文章
 */

export const getArticles = () => fetch('/api/articles');