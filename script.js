document.addEventListener('DOMContentLoaded', function() {
    // Scroll to Mods section when Explore button is clicked
    document.getElementById('explore').addEventListener('click', function() {
        document.getElementById('mods').scrollIntoView({ behavior: 'smooth' });
    });

    // Add hover effect on mod items
    document.querySelectorAll('.mod-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // FAQ Toggle Functionality
    document.querySelectorAll('.faq h4').forEach(question => {
        question.addEventListener('click', function() {
            let answer = this.nextElementSibling;
            answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
        });
    });
});
