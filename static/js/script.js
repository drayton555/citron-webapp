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

    // After displaying results, go to the Business Plan page
    goToBusinessPlan();
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
