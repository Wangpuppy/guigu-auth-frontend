import request from '@/utils/request'


//常量
const api_name = '/admin/system/sysRole/'
export default {
  //列表
  getPageList(page, limit, searchObj) {
    return request({
      //接口路径
      url: `${api_name}/${page}/${limit}`,
      method: 'get', //提交方式
      //参数
      params: searchObj
    })
  },
  //删除
  removeId(id) {
    return request({
      //接口路径
      url: `${api_name}/remove/${id}`,
      method: 'delete', //提交方式
    })
  },
  //添加
  save(role) {
    return request({
      //接口路径
      url: `${api_name}/save`,
      method: 'post', //提交方式
      //通过json形式传递数据，传递json格式
      data: role
    })
  },
}

