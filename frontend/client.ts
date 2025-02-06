import { treaty } from '@elysiajs/eden'
import type { ApiApp } from '../index'

const apiClient = treaty<ApiApp>('localhost:3000')

export default apiClient