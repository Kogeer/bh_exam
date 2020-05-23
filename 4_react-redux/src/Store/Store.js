const initialState = {
    user: '',
    questions: [
        {
            id: 0,
            date: new Date().toLocaleString(),
            user: 'valaki',
            title: 'Elso kerdes',
            text: 'BLALBLABLABLABLBLABLALBALB',
            tags: ['tag1','tag2'],
            answers: [{text:'blablalba',isAccepted:0},{text:'másik blablalba', isAccepted:0}]
        }
    ],
    qId: 0
}

export {initialState}