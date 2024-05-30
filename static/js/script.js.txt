document.getElementById('idea-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    // Get the value of the idea input field
    const idea = document.getElementById('idea').value;
    
    // Generate mock analysis data
    const summary = `Summary: Your idea is to "${idea}".`;
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
    
    // Hide the form and show the result
    document.getElementById('idea-form').style.display = 'none';
    document.getElementById('result').style.display = 'block';
});

function goBack() {
    document.getElementById('result').style.display = 'none'; // Hide the result
    document.getElementById('idea-form').style.display = 'block'; // Show the form
    document.getElementById('payment-question').style.display = 'none'; // Hide the payment question
}

function handlePaymentResponse(response) {
    alert(`Thank you for your response: ${response}`);
    goBack();
}
