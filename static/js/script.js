let currentQuestionIndex = 0;
const responses = {
    idea: '',
    targetMarket: '',
    uniqueSellingPoints: '',
    potentialChallenges: ''
};

const questions = [
    "What do you want to create today?",
    "Who are you making it for?",
    "What makes your creation unique?",
    "What potential challenges do you foresee?"
];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('next-btn').addEventListener('click', function() {
        const responseElement = document.getElementById('response');
        const responseValue = responseElement.value.trim();

        if (responseValue) {
            // Store response dynamically based on the current question
            responses[Object.keys(responses)[currentQuestionIndex]] = responseValue;

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

    // Hide the conversation section and show the result
    document.getElementById('conversation-section').style.display = 'none';
    document.getElementById('result').style.display = 'block';

    // Create charts with mock data
    createCharts();
}

function createCharts() {
    // Ensure Chart.js is loaded
    if (typeof Chart === 'undefined') {
        console.error('Chart.js library is not loaded.');
        return;
    }

    const marketGrowthCtx = document.getElementById('marketGrowthChart').getContext('2d');
    const customerSpendingCtx = document.getElementById('customerSpendingChart').getContext('2d');

    // Create market growth chart
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

    // Create customer spending habits chart
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

function goToBusinessPlan() {
    // Hide the result section and show the business plan section
    document.getElementById('result').style.display = 'none';
    document.getElementById('business-plan').style.display = 'block';
}

function goToCitronIntroduction() {
    // Hide the business plan section and show the Citron introduction section
    document.getElementById('business-plan').style.display = 'none';
    document.getElementById('citron-introduction').style.display = 'block';
}

function handleFinalResponse(response) {
    if (response === 'Yes') {
        window.location.href = "https://forms.office.com/r/BfzpzeDxJV";
    } else {
        alert('Thank you for your response!');
    }
}
