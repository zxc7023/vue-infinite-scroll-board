import axios from 'axios'

export const _getCategory = () => {
  return axios.get('https://comento.cafe24.com/category.php')
}

export const _getPosts = (page, ord, category) => {
  return axios.get('http://comento.cafe24.com/request.php', {
    params : {
      page : page,
      ord : ord,
      category : category
    }
  })
}
export const _getAdvertisement = (page,limit) => {
  return axios.get('https://comento.cafe24.com/ads.php',{
    params : {
      page : page,
      limit : limit
    }
  })
}


export const getPostDetail = (page, ord, category) => {
  return axios.get('https://comento.cafe24.com/detail.php?req_no=${id}')
}
