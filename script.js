function validateInput(input, inputType, value) {
    switch (inputType) {
        case 'text':
            if (value == "") {
                const err_msg = document.getElementById(`${input.id}__err-msg`);
                const err_icon = document.getElementById(`${input.id}__err-icon`);
                err_msg.classList.remove('hidden');
                err_icon.classList.remove('hidden');
            }
            break;

        case 'email':
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(value)) {
                const err_msg = document.getElementById(`${input.id}__err-msg`);
                const err_icon = document.getElementById(`${input.id}__err-icon`);
                err_msg.classList.remove('hidden');
                err_icon.classList.remove('hidden');
            }
            break;
        
        case 'password':
            if (value == "") {
                const err_msg = document.getElementById(`${input.id}__err-msg`);
                const err_icon = document.getElementById(`${input.id}__err-icon`);
                err_msg.classList.remove('hidden');
                err_icon.classList.remove('hidden');
            }

        default:
            return true;
    }
}

const form = document.getElementById('info-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputs = ['firstname', 'lastname', 'useremail', 'userpassword'];

    inputs.forEach((i) => {
        //clear all error styling
        const err_msg = document.getElementById(`${i}__err-msg`);
        const err_icon = document.getElementById(`${i}__err-icon`);
        err_msg.classList.add('hidden');
        err_icon.classList.add('hidden');

        const input = document.getElementById(i);
        validateInput(input, input.type, input.value.trim());
    })
})