document.addEventListener('DOMContentLoaded', function() {
    // 1. Target your submit button
    const submitButton = document.querySelector('.button');
    const form = document.querySelector('form');

    if (submitButton && form) {
        // 2. Listen for the button click
        submitButton.addEventListener('click', function(e) {
            e.preventDefault(); // Freeze the form and stop any redirect/reload

            // Grab all field values using their HTML name attributes
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

            // 3. Build the plain text layout using \n for line breaks instead of <br>
            let output = `Review for ${cusName}\n\n`;
            output += `Hello ${cusName}! Kindly provide the answers to the following questions so we can work on your CV.\n\n`;

            if (chooseOne) output += `${chooseOne}\n\n`;
            if (confirmVal) output += `${confirmVal}\n\n`;
            if (education) output += `${education}\n\n`;
            if (work) output += `${work}\n\n`;
            if (seminar) output += `${seminar}\n\n`;
            if (award) output += `${award}\n\n`;
            if (leadership) output += `${leadership}\n\n`;
            if (reference) output += `${reference}\n\n`;
            if (empName) output += `Reviewed by ${empName}`;

            // 4. Trigger the alert window pop-up
            alert(output);
        });
    }
});
