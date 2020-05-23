import Candidate from '../domain/candidate.js';

export default class JobApplyService {
    constructor(repository) {
        this.repository = repository;
    }

    jobApply(name,email) {
        const initialStatus = 0;
        const mockId = 0;
        const candidate = new Candidate(mockId,name,email,initialStatus);
        this.repository.jobApply(candidate);
    }

    async candidates() {
        const everyCandidates = await this.repository.getCandidates();
        const candidate0 = everyCandidates.filter(candi => candi.status === 0)
        const candidate1 = everyCandidates.filter(candi => candi.status === 1)
        const candidate2 = everyCandidates.filter(candi => candi.status === 2)
        const candidate3 = everyCandidates.filter(candi => candi.status === 3)
        const candArry = [candidate0,candidate1,candidate2,candidate3]
        return await candArry
    }

    async getCandidateById(id) {
        return await this.repository.getCandidateById(id);
    }

    changeStatus(id,name,email,status) {
        const candidate = new Candidate(id,name,email,status);
        this.repository.changeStatus(candidate);
    }
}