document.querySelector('.cross').style.display = 'none';
document.querySelector('.icons').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebargo')
    if (document.querySelector('.sidebar').classList.contains('sidebargo')) {
        document.querySelector('.cross').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.ham').style.display = 'inline'  
        }, 350);  
    }
    else {
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline'  
        }, 350);  
    }
})