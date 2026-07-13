// Wait for the webpage to load before running the script
document.addEventListener('DOMContentLoaded', function() {
    
    // Find the form using its tag (since the HTML doesn't have an ID)
    const form = document.querySelector('form');

    if (form) {
        // Prevent the form from trying to open CVreview.php
        form.removeAttribute('action');

        // Create an output container box dynamically at the bottom of the page
        const displayDiv = document.createElement('div');
        displayDiv.style.cssText = 'margin: 30px auto; padding: 20px; max-width: 800px; background: #ffffff; border: 2px solid #333; border-radius: 8px; color: #000000; display: none; font-family: Arial, sans-serif; line-height: 1.6;';
        form.after(displayDiv);

        // Listen for the submit click
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop the page from reloading

            // Grab all field values using their "name" attributes
            const formData = new FormData(form);

            const cusName = formData.get('cus_name') || '';
            const chooseOne = formData.get('choose_one');
            const confirmVal = formData.get('confirm');
            const education = formData.get('education');
            const work = formData.get('work');
            const seminar = formData.get('seminar');
            const award = formData.get('award');
            const leadership = formData.get('leadership');
            const reference = formData.get('reference');
            const empName = formData.get('emp_name') || '';

            // Build the string exactly like your PHP script did
            let output = `Review for ${cusName}<br><br>`;
            output += `Hello ${cusName}! Kindly provide the answers to the following questions so we can work on your CV.<br><br>`;

            if (chooseOne) output += `${chooseOne}<br><br>`;
            if (confirmVal) output += `${confirmVal}<br><br>`;
            if (education) output += `${education}<br><br>`;
            if (work) output += `${work}<br><br>`;
            if (seminar) output += `${seminar}<br><br>`;
            if (award) output += `${award}<br><br>`;
            if (leadership) output += `${leadership}<br><br>`;
            if (reference) output += `${reference}<br><br>`;
            if (empName) output += `Reviewed by ${empName}`;

            // Reveal the box and inject the output text
            displayDiv.innerHTML = output;
            displayDiv.style.display = 'block';

            // Smoothly scroll down to the text result
            displayDiv.scrollIntoView({ behavior: 'smooth' });
        });
    }
});