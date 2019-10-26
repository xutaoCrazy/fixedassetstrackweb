import ApiService from '../api.service'
export default class MaterialService extends ApiService {
  constructor() {
    super()
    this.path = 'cloud/'
  }
  list(params) {
    const path = `${this.path}AssetUsedRest/selectActivityFcc1`
    return this.http.get(path, {
      params
    })
  }
}
