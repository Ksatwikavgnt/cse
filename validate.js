document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        
        const rating = document.querySelector('input[name="rating"]:checked');
        
        if (!rating) {
            
            event.preventDefault();
            alert("Please select a rating before submitting the feedback.");
            return;
        }
        
        
        const productName = document.getElementById("product-name").value;
        const feedbackText = document.getElementById("feedback").value;
        const newsletter = document.getElementById("newsletter").checked;

        let message = `Thank you for your feedback on ${productName}!\n\n` +
                      `Rating: ${rating.value} Stars\n` +
                      `Feedback: ${feedbackText}`;
        
        if (newsletter) {
            message += `\n\nYou have subscribed to our newsletter.`;
        }
        
        alert(message);
    });
});

