// Initial users data
let users = [
    {
      id: "123456789",
      createdDate: "2021-01-06T00:00:00.000Z",
      status: "En validation",
      firstName: "Mohamed",
      lastName: "Taha",
      userName: "mtaha",
      registrationNumber: "2584",
    },
    {
      id: "987654321",
      createdDate: "2021-07-25T00:00:00.000Z",
      status: "Validé",
      firstName: "Hamid",
      lastName: "Orrich",
      userName: "horrich",
      registrationNumber: "1594",
    },
    {
      id: "852963741",
      createdDate: "2021-09-15T00:00:00.000Z",
      status: "Rejeté",
      firstName: "Rachid",
      lastName: "Mahidi",
      userName: "rmahidi",
      registrationNumber: "3576",
    }
  ];
  
  // Function to render users table
  function renderUsers() {
    const usersTableBody = document.querySelector('#usersTable tbody');
    usersTableBody.innerHTML = '';
  
    users.forEach(user => {
      const tr = document.createElement('tr');
  
      tr.innerHTML = `
        <td>${user.userName}</td>
        <td>${user.lastName}</td>
        <td>${user.firstName}</td>
        <td>${user.registrationNumber}</td>
        <td>${new Date(user.createdDate).toLocaleDateString()}</td>
        <td class="${user.status.toLowerCase().replace(' ', '-')}">${user.status}</td>
        <td><button class="deleteBtn" data-id="${user.id}">🗑️</button></td>
      `;
  
      usersTableBody.appendChild(tr);
    });
  
    // Add delete functionality
    document.querySelectorAll('.deleteBtn').forEach(button => {
      button.addEventListener('click', function() {
        const userId = this.getAttribute('data-id');
        users = users.filter(user => user.id !== userId);
        renderUsers();
      });
    });
  }
  
  // Modal functionality
  const modal = document.getElementById("userModal");
  const addUserBtn = document.getElementById("addUserBtn");
  const closeModal = document.querySelector(".close");
  
  addUserBtn.onclick = function() {
    modal.style.display = "block";
  }
  
  closeModal.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  // Handle form submission
  document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const newUser = {
      id: Date.now().toString(),
      createdDate: new Date().toISOString(),
      status: document.getElementById('status').value,
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      userName: document.getElementById('userName').value,
      registrationNumber: document.getElementById('registrationNumber').value
    };
  
    users.push(newUser);
    renderUsers();
    modal.style.display = "none";
    this.reset();
  });
  
  // Initial render
  renderUsers();
  