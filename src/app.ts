import express from 'express'
import { healthRouter } from './shared/http/health.ts'

export const app = express()

app.use(healthRouter)
