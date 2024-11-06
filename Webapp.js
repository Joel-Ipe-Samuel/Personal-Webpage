document.getElementById('welcome-button').addEventListener('click', function() {
    alert('Hello, welcome to my page!');
});

document.getElementById('profile-pic').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.05)';
    this.style.boxShadow = '0 0 0 8px rgba(212, 175, 55, 0.6)';
    this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
});

document.getElementById('profile-pic').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = 'none';
});

document.getElementById('profile-pic').addEventListener('click', function() {
    window.open('https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiV4_rD162IAxVQRmcHHT7BOacQFnoECBQQAQ&url=https%3A%2F%2Fmedium.com%2F%40joelipe239&usg=AOvVaw1Gu4ppfrT10tELbDnbiryl&opi=89978449', '_blank');
});