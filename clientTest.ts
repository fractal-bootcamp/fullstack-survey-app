import { treaty } from '@elysiajs/eden'
import type { ApiApp } from './index'

const apiClient = treaty<ApiApp>('localhost:3000')

const { data } = await apiClient.user({id: 1}).get()
// const res = await apiClient.index.get()

const surveys = await apiClient.surveys.get()

const survey1 = await apiClient.surveys({id: 1}).get()
const survey1Answers = await apiClient.surveys({id: 1}).results.get()

const answerSurvey1 = await apiClient.surveys({id: 1}).answer.post({
    answer: "John Doe"
})

const survey1Results = await apiClient.surveys({id: 1}).results.get()
console.log(surveys.data)
console.log(survey1.data)
console.log("oldresults:", survey1Answers.data?.answers.length, survey1Answers.data)
console.log(answerSurvey1.data)
console.log("newResults:", survey1Results.data?.answers.length, survey1Results.data)
// console.log(res.data)