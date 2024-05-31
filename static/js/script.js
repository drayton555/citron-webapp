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

function goToNextSection() {
    sections[currentSectionIndex].classList.remove('active');
    currentSectionIndex++;
    if (currentSectionIndex < sections.length) {
        sections[currentSectionIndex].classList.add('active');

        // Initialize charts when entering the dashboard section
        if (currentSectionIndex === 1) {
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

function goToCitronIntroduction() {
    // Hide the business plan section and show the Citron introduction section
    sections[currentSectionIndex].classList.remove('active');
    currentSectionIndex++;
    sections[currentSectionIndex].classList.add('active');
}

function handleFinalResponse(response) {
    if (response === 'Yes') {
        window.location.href = "https://forms.office.com/r/BfzpzeDxJV";
    } else {
        alert('Thank you for your response!');
    }
}
