// Load customer data from JSON
fetch('./customerData.json')
  .then(response => response.json())
  .then(data => {
    let currentCustomerIndex = 0;

    function updateCustomerInfo() {
      let customer = data.customers[currentCustomerIndex];

      // Update name, last purchase date, and membership
      document.getElementById('customerName').textContent = `${customer.firstName} ${customer.lastName}`;
      document.getElementById('lastPurchase').textContent = customer.lastPurchaseDate;
      
      // Membership Level Styling
      let membershipEl = document.getElementById('membershipLevel');
      membershipEl.textContent = customer.membershipLevel;

      // Apply colors based on membership type
      if (customer.membershipLevel === "Gold") {
        membershipEl.style.color = "#FFD700"; // Gold color
      } else if (customer.membershipLevel === "Silver") {
        membershipEl.style.color = "#C0C0C0"; // Silver color
      } else {
        membershipEl.style.color = "white";
      }
    }

    updateCustomerInfo(); // Load first customer initially

    // Button to switch between customers for demo
    document.getElementById('switchCustomerBtn').addEventListener('click', function () {
      currentCustomerIndex = (currentCustomerIndex + 1) % data.customers.length;
      updateCustomerInfo();
    });
  })
  .catch(error => console.error('Error loading JSON:', error));
