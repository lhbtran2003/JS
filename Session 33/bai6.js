class Job {
    constructor(id, title, description, completed) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}

let jobs = [];

function addJob() {
    let id = prompt('Enter job id:');
    let title = prompt('Enter job title:');
    let description = prompt('Enter job description:');
    let completedInput = prompt('Is job completed? (true/false)');
    let completed = completedInput.toLowerCase() === 'true';

    let job = new Job(id, title, description, completed);
    jobs.push(job);
}

function displayJobs() {
    console.log('List of Jobs:');
    jobs.forEach(job => {
        console.log(`ID: ${job.id}`);
        console.log(`Title: ${job.title}`);
        console.log(`Description: ${job.description}`);
        console.log(`Completed: ${job.completed}`);
        console.log('--------------------------');
    });
}

function searchJobById() {
    let idToSearch = prompt('Enter job id to search:');
    let foundJob = jobs.find(job => job.id === idToSearch);

    if (foundJob) {
        console.log('Job found:');
        console.log(`ID: ${foundJob.id}`);
        console.log(`Title: ${foundJob.title}`);
        console.log(`Description: ${foundJob.description}`);
        console.log(`Completed: ${foundJob.completed}`);
    } else {
        console.log('Job is not found.');
    }
}

while (true) {
    let choice = prompt('Choose an option:\n1. Add a new job\n2. Print list of jobs\n3. Search job by ID\n4. Exit');

    switch (choice) {
        case '1':
            addJob();
            break;
        case '2':
            printJobs();
            break;
        case '3':
            searchJobById();
            break;
        case '4':
            console.log('Exiting program...');
            process.exit(0);
        default:
            console.log('Invalid choice. Please choose again.');
    }
}


