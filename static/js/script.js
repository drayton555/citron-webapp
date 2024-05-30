let currentQuestionIndex = 0;
const responses = {
    idea: '',
    targetMarket: '',
    uniqueSellingPoints: '',
    potentialChallenges: ''
};

const questions = [
    "What is your business idea?",
    "Who is your target market?",
    "What are your unique selling points?",
    "What potential challenges do you foresee?"
];

document.getElementById('next-btn').addEventListener('click', function() {
    const responseElement = document.getElementById('response');
    const responseValue = responseElement.value.trim();

    if (responseValue) {
        // Store response
        switch (currentQuestionIndex) {
            case 0:
                responses.idea = responseValue;
                break;
            case 1:
                responses.targetMarket = responseValue;
                break;
            case 2:
                responses.uniqueSellingPoints = responseValue;
                break;
            case 3:
                responses.potentialChallenges = responseValue;
                break;
        }

        // Move to the next question
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            document.getElementById('question').innerText = questions[currentQuestionIndex];
            responseElement.value = '';
        } else {
            displayResults();
        }
    } else {
        alert('Please provide a response.');
    }
});

function displayResults() {
    const summary = `Summary: Your idea is "${responses.idea}".\n` +
                    `Target Market: ${responses.targetMarket}\n` +
                    `Unique Selling Points: ${responses.uniqueSellingPoints}\n` +
                    `Potential Challenges: ${responses.potentialChallenges}`;
    
    const insights = `Key Insights: This idea has a unique angle that could attract a niche market.`;
    const marketSize = `Potential Market Size: Approximately $5 million.`;
    const competitors = `Competitor Count: Around 10 competitors in this space.`;
    const realTimeValue = `Potential Real-Time Value: $45,678.90 with a +20% month-over-month growth.`;
    const nextSteps = `Suggested Next Steps: Conduct a detailed market analysis and create a business plan.`;

    // Combine all mock data into a single string
    const analysis = `${summary}\n\n${insights}\n\n${marketSize}\n\n${competitors}\n\n${realTimeValue}\n\n${nextSteps}`;
    
    // Set the analysis text
    document.getElementById('analysis').innerText = analysis;

    // Show the payment question
    document.getElementById('payment-question').style.display = 'block';
    
    // Hide the conversation section and show the result
    document.getElementById('conversation-section').style.display = 'none';
    document.getElementById('result').style.display = 'block';

    // Create charts with mock data
    createCharts();
}

function createCharts() {
    const marketGrowthCtx = document.getElementById('marketGrowthChart').getContext('2d');
    const customerSpendingCtx = document.getElementById('customerSpendingChart').getContext('2d');

    new Chart(marketGrowthCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Market Growth',
                data: [30000, 35000, 40000, 45000, 50000, 55000],
                backgroundColor: 'rgba(255, 204, 0, 0.2)',
                borderColor: '#ffcc00',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(customerSpendingCtx, {
        type: 'bar',
        data: {
            labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
            datasets: [{
                label: 'Customer Spending Habits',
                data: [12000, 15000, 10000, 17000, 13000],
                backgroundColor: '#ffcc00',
                borderColor: '#ffcc00',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

let yesCount = localStorage.getItem('yesCount') ? parseInt(localStorage.getItem('yesCount')) : 0;
let noCount = localStorage.getItem('noCount') ? parseInt(localStorage.getItem('noCount')) : 0;

function handlePaymentResponse(response) {
    if (response === 'Yes') {
        yesCount++;
        localStorage.setItem('yesCount', yesCount);
    } else {
        noCount++;
        localStorage.setItem('noCount', noCount
