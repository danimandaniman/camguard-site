// Toggle FAQ Items
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    faqItem.classList.toggle('active');
}

// Open Order Form Modal
function openOrderForm(productName) {
    const modal = document.getElementById('orderModal');
    const productNameSpan = document.getElementById('modalProductName');
    productNameSpan.textContent = productName;
    modal.classList.add('active');
}

// Close Order Form Modal
function closeOrderForm() {
    const modal = document.getElementById('orderModal');
    modal.classList.remove('active');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('orderModal');
    if (event.target == modal) {
        modal.classList.remove('active');
    }
}

// Handle Contact Form Submit
function handleContactSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const product = form.querySelector('select').value;
    const message = form.querySelector('textarea').value;
    
    // Display message
    alert(`درخواست شما در نسخه آزمایشی ثبت شد.\n\nاطلاعات شما:\nنام: ${name}\nایمیل: ${email}\nتلفن: ${phone}`);
    
    // Reset form
    form.reset();
}

// Handle Order Form Submit
function handleOrderSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const form = event.target;
    const fullName = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const address = form.querySelector('input[placeholder="آدرس"]').value;
    
    // Display message
    alert(`درخواست شما در نسخه آزمایشی ثبت شد.\n\nاطلاعات شما:\nنام: ${fullName}\nایمیل: ${email}\nتلفن: ${phone}`);
    
    // Close modal
    closeOrderForm();
    
    // Reset form
    form.reset();
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});