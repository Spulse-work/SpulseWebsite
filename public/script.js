echo "document.getElementById('service-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        helpNeeded: formData.get('helpNeeded'),
        reason: formData.get('reason')
    };

    try {
        const response = await fetch('/submit-service', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        alert('Error submitting the form');
    }
});" > public/script.js
