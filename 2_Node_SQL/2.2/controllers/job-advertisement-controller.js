export default class JobAdvertisementController {
    constructor(jobApplyService) {
        this.jobApplyService = jobApplyService;
    }
    indexPage(req,res) {
        res.render('index');
    }

    jobApplyPage(req,res) {
        res.render('job-apply')
    }

    jobApply(req,res) {
        const {name,email} = req.body;
        this.jobApplyService.jobApply(name,email)
        res.redirect('/candidates');
    }

    async candidatesPage(req,res) {
        const candidates = await this.jobApplyService.candidates();
        // console.log(candidates);
        res.render('candidates', {candidates0:candidates[0],candidates1:candidates[1],candidates2:candidates[2],candidates3:candidates[3]});
    }

    async candidateStatus(req,res) {
        const {id} = req.params;
        const candidate = await this.jobApplyService.getCandidateById(id);
        const interviewers = await this.jobApplyService.getInterviewers();
        res.render('candidate',{candidate,interviewers});
    }

    changeStatus(req,res) {
        const {id} = req.params;
        const {name,email,status,interviewer} = req.body;
        this.jobApplyService.changeStatus(id,name,email,status,interviewer);
        res.redirect('/candidates')
    }

    interviewerPage(req,res) {
        res.render('interviewer');
    }

    addInterviewer(req,res) {
        const {name} = req.body;
        this.jobApplyService.addInterviewer(name);
        res.redirect('/');
    }

    async chooseInt(req,res) {
        const interviewers = await this.jobApplyService.getInterviewers();
        res.render('choose-interviewer',{interviewers})
    }

    async intStatistic(req,res) {
        const {interviewer} = req.body;
        const candidates = await this.jobApplyService.getCandidatesByInter(interviewer);
        // console.log(candidates);
        res.render('int-statistic',{candidates,interviewer:interviewer})
    }
}