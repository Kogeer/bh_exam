import sqlite3 from 'sqlite3'
import Candidate from '../domain/candidate.js';
const db = new sqlite3.Database('repository.db');

export default class Repository {
    createDatabaseTable() {
        db.serialize(function() {
            db.run("CREATE TABLE IF NOT EXISTS applies (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, status INTEGER)");
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
                        return new Candidate(candidate.id,candidate.name,candidate.email,candidate.status)
                    })
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
            db.run("UPDATE applies SET status = ? WHERE id = ?",[candidate.status,candidate.id]);
        })
    } 
}