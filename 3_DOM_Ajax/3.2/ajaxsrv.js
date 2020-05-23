const express = require('express')
const app = express()
const cors = require('cors');

app.use(express.json())
app.use(cors())

const ERROR_RATIO = 0.5

const STATUSES = {
  PENDING: -1,
  IN_PROGRESS: 0,
  FINISHED: 1,
  ERROR: 2
}

const jobs = []

class Job {
  constructor(resource, task) {
    this.id = jobs.length + 1
    this.resource = resource
    this.task = task
    this.status = STATUSES.PENDING
  }
}

app.get('/resources', (req, res) => {
  res.json([
    {
      resource: 'database',
      task: ['recreate', 'backup', 'migrate']
    },
    {
      resource: 'app',
      task: ['restart', 'stop']
    }
  ])
})

app.get('/jobs', (req, res) => {
  res.json(jobs)
})

app.post('/jobs', (req, res) => {
  console.log(`received job data: ${Object.values(req.body)}`)

  if (jobs.filter(j => j.status === STATUSES.IN_PROGRESS).length > 3) {
    res.status(503).json({ error: 'Server overloaded' })
    console.log('could not process job request, server overloaded')
    return
  }

  const job = new Job(req.body.resource, req.body.task)
  jobs.push(job)

  const interval = setInterval(() => {
    if(job.status ===  STATUSES.PENDING) {
        console.log(`job ${job.task} in progress`)
        job.status = STATUSES.IN_PROGRESS
        return
    }


    job.status = Math.random() > ERROR_RATIO ?  STATUSES.FINISHED : STATUSES.ERROR

    if (job.status === STATUSES.FINISHED) {
      console.log(`${job.task} for ${job.resource} finished`)
    } else {
      console.log(`${job.task} for ${job.resource} failed`)
    }

    clearInterval(interval) 
  }, 5000)

  res.json(job)
})

app.listen(8080, () => console.log('ajaxsrv started on http://localhost:8080'))