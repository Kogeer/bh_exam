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
        res.render('candidates', {candidates0:candidates[0],candidates1:candidates[1],candidates2:candidates[2],candidates3:candidates[3]});
    }

    async candidateStatus(req,res) {
        const {id} = req.params;
        const candidate = await this.jobApplyService.getCandidateById(id);
        res.render('candidate',{candidate});
    }

    changeStatus(req,res) {
        const {id} = req.params;
        const {name,email,status} = req.body;
        this.jobApplyService.changeStatus(id,name,email,status);
        res.redirect('/candidates')
    }
}