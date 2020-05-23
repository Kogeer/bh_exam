import sqlite3 from 'sqlite3'
import Candidate from '../domain/candidate.js';
import Interviewer from '../domain/interviewer.js';
const db = new sqlite3.Database('repository.db');

export default class Repository {
    createDatabaseTable() {
        db.serialize(function() {
            db.run("CREATE TABLE IF NOT EXISTS applies (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, status INTEGER, interName TEXT)");
            db.run("CREATE TABLE IF NOT EXISTS interviewers (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)")
        })
    }

    jobApply(candidate) {
        db.serialize(function() {
            db.run("INSERT INTO applies (name,email,status) VALUES (?,?,?)",[candidate.name,candidate.email,candidate.status]);
        })
    }

    getCandidates() {
        return new Promise((resolve,reject) => {
            db.serialize(function() {
                db.all("SELECT * FROM applies", function(err,cndts) {
                    if(err) {
                        reject(err);
                    }
                    const candidates = cndts.map(candidate => {
                        return new Candidate(candidate.id,candidate.name,candidate.email,candidate.status,candidate.interName)
                    })
                    // console.log(candidates);
                    resolve(candidates);
                })
            })
        })
    }

    getCandidateById(id) {
        return new Promise((resolve,reject) => {
            db.serialize(function() {
                db.get("SELECT * FROM applies WHERE id = ?",id,function(err,cand) {
                    if(err) {
                        reject(err);
                    }

                    const candidate = new Candidate(cand.id,cand.name,cand.email,cand.status);
                    resolve(candidate);
                })
            })
        })
    }

    changeStatus(candidate) {
        db.serialize(function() {
            db.run("UPDATE applies SET status = ?, interName = ? WHERE id = ?",[candidate.status,candidate.interName,candidate.id]);
        })
    }

    addInterviewer(interviewer) {
        db.serialize(function() {
            db.run("INSERT INTO interviewers (name) VALUES (?)",interviewer.name);
        })
    }

    getInterviewers() {
        return new Promise((resolve,reject) => {
            db.serialize(function() {
                db.all("SELECT * FROM interviewers", function(err,interviewers) {
                    if(err) {
                        reject(err);
                    }

                    const intervs = interviewers.map(interviewer => {
                        return new Interviewer(interviewer.id,interviewer.name);
                    })

                    resolve(intervs);
                })
            })
        })
    }

    getCandidatesByInter(interviewer) {
        return new Promise((resolve,reject) => {
            db.serialize(function() {
                db.all("SELECT * FROM applies WHERE interName = ? AND status = 2",[interviewer.name], function(err,candidates) {
                    if(err) {
                        reject(err);
                    }

                    const cands = candidates.map(cand => {
                        return new Candidate(cand.id,cand.name,cand.email,cand.status,cand.interName)
                    })
                    resolve(cands);
                })
            })
        })
    }
}