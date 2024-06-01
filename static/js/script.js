let currentSectionIndex = 0;
const sections = document.querySelectorAll('section');
const responses = {
    idea: '',
    targetAudience: '',
    uniquePoints: '',
    location: ''
};

const followUpQuestions = [
    "Who is your target audience?",
    "What makes your creation unique?",
    "Where will this venture be located?"
];
let currentQuestionIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    sections[currentSectionIndex].style.display = 'block';
    if (currentSectionIndex === 1) {
        document.getElementById('user-prompt').innerText = responses.idea || '';
    }
    
    const responseElement = document.getElementById('response');
    responseElement.addEventListener('input', function() {
        responseElement.style.height = 'auto';
        responseElement.style.height = responseElement.scrollHeight + 'px';
    });
    
    responseElement.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            document.getElementById('next-btn').click();
        }
    });
});

document.getElementById('next-btn').addEventListener('click', function() {
    const responseElement = document.getElementById('response');
    const responseValue = responseElement.value.trim();

    if (responseValue) {
        // Store the response based on the current question index
        switch (currentQuestionIndex) {
            case 0:
                responses.idea = responseValue;
                break;
            case 1:
                responses.targetAudience = responseValue;
                break;
            case 2:
                responses.uniquePoints = responseValue;
                break;
            case 3:
                responses.location = responseValue;
                break;
        }

        // Create chat bubble for the user's input
        const chatBubble = document.createElement('div');
        chatBubble.className = 'chat-bubble user';
        chatBubble.textContent = responseValue;
        document.getElementById('chat-bubbles').prepend(chatBubble);

        // Clear the input field
        responseElement.value = '';
        responseElement.style.height = '40px';  // Reset to initial height

        currentQuestionIndex++;
        if (currentQuestionIndex < followUpQuestions.length + 1) {
            askNextQuestion();
        } else {
            goToNextSection();
        }
    } else {
        alert('Please provide a response.');
    }
});

function askNextQuestion() {
    const nextQuestion = currentQuestionIndex === 0 ? "..." : followUpQuestions[currentQuestionIndex - 1];
    const chatBubble = document.createElement('div');
    chatBubble.className = 'chat-bubble';
    chatBubble.textContent = nextQuestion;
    document.getElementById('chat-bubbles').prepend(chatBubble);
}

function goToNextSection() {
    console.log(`Current section index before: ${currentSectionIndex}`);
    sections[currentSectionIndex].style.display = 'none';
    currentSectionIndex++;
    if (currentSectionIndex < sections.length) {
        sections[currentSectionIndex].style.display = 'block';
        console.log(`Current section index after: ${currentSectionIndex}`);

        // Initialize charts when entering the dashboard section
        if (currentSectionIndex === 1) {
            console.log('Creating charts');
            createCharts();
        }
    }
}

function createCharts() {
    createPieChart('marketShareChart', ['Product A', 'Product B', 'Product C'], [30, 40, 30]);
    createLineChart('salesVolumeChart', ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], [150, 200, 250, 300, 350, 400]);
    createBarChart('customerDemographicsChart', ['18-24', '25-34', '35-44', '45-54'], [30, 50, 40, 20]);
    createRadarChart('productPerformanceChart', ['Quality', 'Price', 'Durability', 'Features', 'Design'], [4, 3, 5, 2, 4]);
    createDoughnutChart('revenueByRegionChart', ['North America', 'Europe', 'Asia'], [40, 30, 30]);
    createBarChart('advertisingSpendChart', ['Q1', 'Q2', 'Q3', 'Q4'], [5000, 7000, 6000, 8000]);
    createLineChart('competitorAnalysisChart', ['Competitor A', 'Competitor B', 'Competitor C'], [70, 60, 50]);
    createLineChart('customerRetentionRateChart', ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], [80, 85, 78, 82, 88, 90]);
    createBarChart('marketGrowthRateChart', ['2019', '2020', '2021', '2022'], [10, 15, 12, 18]);
    createPieChart('salesConversionRateChart', ['Converted', 'Not Converted'], [25, 75]);
}

function createPieChart(id, labels, data) {
    const ctx = document.getElementById(id).getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: ['#ffcc00', '#e6b800', '#ff9900'],
            }]
        },
        options: {
            responsive: true,
        }
    });
}

function createLineChart(id, labels, data) {
    const ctx = document.getElementById(id).getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Value',
                data: data,
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
            },
            responsive: true,
        }
    });
}

function createBarChart(id, labels, data) {
    const ctx = document.getElementById(id).getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Value',
                data: data,
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
            },
            responsive: true,
        }
    });
}

function createRadarChart(id, labels, data) {
    const ctx = document.getElementById(id).getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Performance',
                data: data,
                backgroundColor: 'rgba(255, 204, 0, 0.2)',
                borderColor: '#ffcc00',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
        }
    });
}

function createDoughnutChart(id, labels, data) {
    const ctx = document.getElementById(id).getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: ['#ffcc00', '#e6b800', '#ff9900'],
            }]
        },
        options: {
            responsive: true,
        }
    });
}

function goToBusinessPlan() {
    console.log('Transitioning to the business plan page');
    sections[currentSectionIndex].style.display = 'none';
    currentSectionIndex++;
    if (currentSectionIndex < sections.length) {
        sections[currentSectionIndex].style.display = 'block';
    }
}

function goToCitronIntroduction() {
    // Hide the business plan section and show the Citron introduction section
    sections[currentSectionIndex].style.display = 'none';
    currentSectionIndex++;
    if (currentSectionIndex < sections.length) {
        sections[currentSectionIndex].style.display = 'block';
    }
}

function handleFinalResponse(response) {
    if (response === 'Yes') {
        window.location.href = "https://forms.office.com/r/BfzpzeDxJV";
    } else {
        alert('Thank you for your response!');
    }
}
