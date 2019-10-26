import AnswerSystem from '@/service/api/answerService'
export const promisestrack = (param) => {
  let data = new Promise((resolve, reject) => {
    let orderApi = new AnswerSystem()
    orderApi.list(param).then(
      ({
        data
      }) => {

        if (data.state === 'success') {
          debugger;
          resolve(data.list)
        }
      },
      error => {
        reject(error.message)
      }
    )
  })
  return data
}
