import axios from 'axios'

export const _getCategory = () => {
  return axios.get('https://comento.cafe24.com/category.php')
}

const _getPosts = (page, ord, categorys) => {
  if(categorys.length > 0) {
    return axios.get(`https://comento.cafe24.com/request.php?page=${page}&ord=${ord}&category=${categorys}`)
  }
}
const _getAdvertisement = (page) => {
  return axios.get(`https://comento.cafe24.com/ads.php?page=${page}`)
}


const getPostDetail = (page, ord, categorys) => {
  return axios.get(`https://comento.cafe24.com/detail.php?req_no=${id}`)
}
