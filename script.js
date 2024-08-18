document.getElementById('glass-remove').addEventListener('click', function() {
    // Get the glass element
    const glass = document.querySelector('.glass');
    
    // Set the display property to none
    glass.style.display = 'none';
    
    // Show the navbar and hero content
    const navbar = document.querySelector('.navbar');
    const heroContent = document.querySelector('.hero-content');
    
    navbar.style.display = 'block';
    heroContent.style.display = 'block';
    
    // Fade in the navbar and hero content
    setTimeout(function() {
      navbar.style.opacity = '1';
      heroContent.style.opacity = '1';
    }, 50); // Small delay to trigger the transition
});
