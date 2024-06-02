let currentSectionIndex = 0;
const sections = document.querySelectorAll('section');
const responses = {
    idea: '',
};

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

    // Initialize the welcome popup
    if (currentSectionIndex === 1) {
        showWelcomePopup();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    sections[currentSectionIndex].style.display = 'block';
    if (currentSectionIndex === 1) {
        document.getElementById('user-prompt').innerText = responses.idea || '';
        showWelcomePopup();
    }
});

function showWelcomePopup() {
    const welcomeBubble = document.getElementById('welcome-bubble');
    const welcomeText = document.getElementById('welcome-text');
    const welcomeCircle = document.getElementById('welcome-circle');
    const message = "Welcome to your profile page. Here, you will see real-time market data for your idea. As you update your progress, this information will change accordingly. It will also adjust with market shifts, ensuring you always have accurate, up-to-date data. Together, we'll optimize these stats to make your idea the best it can be.";

    // Display the welcome bubble
    welcomeBubble.style.display = 'block';

    // Typewriter effect for the welcome message
    let index = 0;
    function typeWriter() {
        if (index < message.length) {
            welcomeText.textContent += message.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        } else {
            // After the text is fully displayed, hide the bubble after a delay
            setTimeout(() => {
                welcomeBubble.style.display = 'none';
            }, 3000); // Adjust the delay as needed
        }
    }

    // Start the typewriter effect
    typeWriter();

    // Hide the bubble and only show the circle when clicked
    welcomeCircle.addEventListener('click', () => {
        welcomeBubble.style.display = 'none';
    });
}

function goToNextSection() {
    sections[currentSectionIndex].style.display = 'none';
    currentSectionIndex++;
    if (currentSectionIndex < sections.length) {
        sections[currentSectionIndex].style.display = 'block';

        // Initialize charts when entering the dashboard section
        if (currentSectionIndex === 1) {
            createCharts();
            showWelcomePopup(); // Call the function to show the welcome popup
        }
    }
}

function createCharts() {
    // Set the data for the Real Time Value card
    document.querySelector('.large-number-card .large-number').textContent = '$45,678.90';

    // Set the data for the Total Market Value card
    document.querySelectorAll('.large-number-card .large-number')[1].textContent = '$5,000,000';

    // Existing chart creation code
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
