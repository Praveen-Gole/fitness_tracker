document.addEventListener('DOMContentLoaded', function () {
    // Toggle between Admin and User views based on user role
    const isAdmin = false; // You would check user role from the back-end here
    const adminDashboard = document.querySelector('.admin-dashboard');
    const userDashboard = document.querySelector('.dashboard');
    
    if (isAdmin) {
      adminDashboard.style.display = 'block';
      userDashboard.style.display = 'none';
    } else {
      adminDashboard.style.display = 'none';
      userDashboard.style.display = 'block';
    }
  
    // Example for adding a workout log
    const addWorkoutBtn = document.querySelector('.add-workout-btn');
    const workoutTable = document.querySelector('.workout-table tbody');
    
    addWorkoutBtn.addEventListener('click', () => {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>Running</td>
        <td>30 mins</td>
        <td>Medium</td>
        <td><button class="delete-btn">Delete</button></td>
      `;
      workoutTable.appendChild(newRow);
      
      // Add delete functionality to the new workout log
      const deleteBtn = newRow.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', () => {
        newRow.remove();
      });
    });
  
    // Example for updating profile
    const profileForm = document.getElementById('profile-form');
    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Profile updated successfully');
    });
  
    // Admin user management (simple functionality for demo)
    const userTable = document.querySelector('.user-table tbody');
    const addUserRow = () => {
      const newRow = document.createElement('tr');
      newRow.innerHTML
  