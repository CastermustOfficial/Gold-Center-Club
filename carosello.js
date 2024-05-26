// Array of video URLs
const videos = [
    "video1.mov",
    "video2.mov",
    "video3.mp4"
  ];
  
  // Index of the currently displayed video
  let currentIndex = 0;
  
  // Function to initialize the carousel
  function initCarousel() {
    const carouselInner = document.getElementById("carousel-inner");
    
    // Add video elements to carousel
    videos.forEach(video => {
      const videoElement = document.createElement("video");
      videoElement.src = video;
      videoElement.controls = true;
      carouselInner.appendChild(videoElement);
    });
  }
  
  // Function to display the previous video
  function prevSlide() {
    currentIndex = (currentIndex - 1 + videos.length) % videos.length;
    updateCarousel();
  }
  
  // Function to display the next video
  function nextSlide() {
    currentIndex = (currentIndex + 1) % videos.length;
    updateCarousel();
  }
  
  // Function to update the carousel with the current video
  function updateCarousel() {
    const carouselInner = document.getElementById("carousel-inner");
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  // Initialize the carousel
  initCarousel();
  