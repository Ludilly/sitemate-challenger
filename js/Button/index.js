export default function creatingModalButton(cancelMessage, confirmMessage) {
    const cancelButton = document.createElement('button');
    const confirmButton = document.createElement('button');
    const modalContainer = document.getElementById('modalContainer');
    const getModalMsgContainer = document.getElementById('modalMsg');

    cancelButton.innerHTML = 'Cancel';
    cancelButton.classList.add('close_modal');
    cancelButton.addEventListener('click', () => {
        const cancelMsg = document.createElement('p');
        cancelMsg.innerHTML = `${cancelMessage}`;
        getModalMsgContainer.appendChild(cancelMsg);
    })

    confirmButton.innerHTML = 'Confirm';
    confirmButton.classList.add('confirm');
    confirmButton.addEventListener('click', () => {
        const confirmMsg = document.createElement('p');
        confirmMsg.innerHTML = `${confirmMessage}`;
        getModalMsgContainer.appendChild(confirmMsg);
    })

    modalContainer.appendChild(cancelButton);
    modalContainer.appendChild(confirmButton);

}

