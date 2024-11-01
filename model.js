const model = {
    app:{
        pages: ['home', 'logIn', 'register', 'work', 'sicknote'],  
        currentPage: 'home',
        loggedInID: 1,
        div: document.getElementById('app')
    },
    input:{
        
        registerEmployer:{
            id: 1,
            forName: null,
            lastName: null,
            workTitle: null,
            experience: null,
            specialization: null,
            company: null,
            
            
            
            
            
            
        },
        
        mechanic:{
            id: null,
            forName: null,
            lastName: null,
            workTitle: null,
            experience: null,
            specialization: null,
            company: null,
        },
        newCar:{
            id: null,
            brand: null,
            year: null,
            color: null,
            licensePlate: null,
            kmhDistance: null,
            serviceReport: null,
            
        },






        },

     data:{
        cars:[
            {
                id: 12312,
                brand: 'ford',
                year: 1997,
                color: 'brown',
                licensePlate: 'LS25678',
                kmhDistance: 254999,
                serviceReport: 'Oilfilter change'
            },
            {
                id: 12431,
                brand: 'Volvo',
                year: 2006,
                color: 'black',
                licensePlate: 'LJ39838',
                kmhDistance: 148777,
                serviceReport: 'AC failure',
            },
        ],
        employers:[
            {
                id: 1,
            forName: 'Bjarne',
            lastName: 'Bjarnesen',
            workTitle: 'Stallmester',
            experience: '20 år',
            specialization: 'motor, lederskap',
            company: 'Bjarnes Auto AS',
            },
            {   id: 2,
                forName: 'Leif',
                lastName: 'Leifdal',
                workTitle: 'mekaniker',
                experience: '10 år',
                specialization: 'Vedlikeholds deler',
                company: 'Bjarnes Auto AS',

            },

            {
                id: 3,
                forName: 'Bertil',
                lastName: 'Bertilsen',
                workTitle: 'mekaniker',
                experience: '7 år',
                specialization: 'aircondition',
                company: 'Bjarnes Auto AS',


            }
            
            
            
        ]

     }   
}