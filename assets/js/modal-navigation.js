document.addEventListener('DOMContentLoaded', function() {

  // Initialize all modal groups on the page
  const modalGroups = {};

  // Find all modals with data-modal-group
  document.querySelectorAll('[data-modal-group]').forEach(modal => {
    const group = modal.dataset.modalGroup;

    // Load data for this group
    const dataElement = document.querySelector(`[data-modal-content="${group}"]`);
    if (!dataElement) return;

    const data = JSON.parse(dataElement.textContent);

    // Store modal info
    modalGroups[group] = {
      modal: modal,
      data: data,
      currentIndex: -1,
      bsModal: null
    };

    // Set up triggers for this modal
    const triggers = document.querySelectorAll(`[data-modal-trigger="${modal.id}"]`);
    triggers.forEach(trigger => {
      trigger.addEventListener('click', function() {
        const index = parseInt(this.dataset.contentIndex);
        openModal(group, index);
      });
    });

    // Reset index when modal closes
    modal.addEventListener('hidden.bs.modal', function() {
      modalGroups[group].currentIndex = -1;
    });
  });

  // Open and populate a modal
  function openModal(group, index) {
    const modalGroup = modalGroups[group];
    if (!modalGroup || index < 0 || index >= modalGroup.data.length) return;

    updateModalContent(group, index);

    if (!modalGroup.bsModal) {
      modalGroup.bsModal = new bootstrap.Modal(modalGroup.modal);
    }
    modalGroup.bsModal.show();
  }

  // Update modal content
  function updateModalContent(group, index) {
    const modalGroup = modalGroups[group];
    if (!modalGroup) return;

    const item = modalGroup.data[index];
    const modal = modalGroup.modal;

    // Update all elements with data-modal-content attributes
    modal.querySelectorAll('[data-modal-content]').forEach(element => {
      const contentType = element.dataset.modalContent;

      if (contentType === 'image') {
        element.src = item.src || '';
        element.alt = item.alt || '';
      } else if (contentType === 'description' || contentType === 'title' || contentType === 'subtitle') {
        element.textContent = item[contentType] || '';
      } else if (contentType === 'body') {
        element.innerHTML = item[contentType] || '';
      }
    });

    modalGroup.currentIndex = index;
  }

  // Handle keyboard navigation
  document.addEventListener('keydown', function(e) {
    // Find which modal group is currently active
    let activeGroup = null;
    for (const [group, modalGroup] of Object.entries(modalGroups)) {
      if (modalGroup.currentIndex !== -1) {
        activeGroup = group;
        break;
      }
    }

    if (!activeGroup) return;

    const modalGroup = modalGroups[activeGroup];
    const currentIndex = modalGroup.currentIndex;
    const totalItems = modalGroup.data.length;

    if (e.key === 'ArrowLeft' && currentIndex > 0) {
      e.preventDefault();
      updateModalContent(activeGroup, currentIndex - 1);
    } else if (e.key === 'ArrowRight' && currentIndex < totalItems - 1) {
      e.preventDefault();
      updateModalContent(activeGroup, currentIndex + 1);
    }
  });

});
