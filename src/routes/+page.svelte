<script lang="ts">
  import { Alert } from "flowbite-svelte";
  import { DeviceMockup } from 'flowbite-svelte';
  import '../app.css';

  // Image slideshow logic
  let images = [
    'assets/7.png',
    'assets/8.png',
    'assets/9.png',
    'assets/10.png',
  ];
  let currentSlide = 0;

  let intervalId: number;

  // Start the slideshow
  function startSlideshow() {
    intervalId = setInterval(() => {
      currentSlide = (currentSlide + 1) % images.length; // Loop back to the first image
    }, 3000); // Change every 3 seconds
  }

  // Stop the slideshow
  function stopSlideshow() {
    clearInterval(intervalId);
  }

  import { onMount, onDestroy } from 'svelte';
  
  // Start the slideshow when the component is mounted
  onMount(() => {
    startSlideshow();
  });

  // Stop the slideshow when the component is destroyed
  onDestroy(() => {
    stopSlideshow();
  });

  // Typing animation logic
  let currentText = '';
  let texts = ['Emergency is just a click away!', 
                'Your safety, our priority—faster response with every tap!', 
                'Emergency help when you need it most!', 
                'Need help fast? Get a quicker response with just a tap!'
              ]; 
  let textIndex = 0;
  
  function typeText() {
    if (textIndex < texts.length) {
      let text = texts[textIndex];
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        currentText += text[charIndex];
        charIndex++;
        
        if (charIndex === text.length) {
          clearInterval(typeInterval);
          setTimeout(() => {
            currentText = ''; // Clear text for backspace effect
            textIndex = (textIndex + 1) % texts.length; // Move to the next text
            typeText();
          }, 1000); // Wait 1 second before backspacing
        }
      }, 150); // Speed of typing
    }
  }

  // Start typing animation on mount
  onMount(() => {
    typeText();
  });

</script>

<main class="relative">
  <!-- <div id="slider" class="fixed inset-0 z-0 overflow-hidden">
    {#each images as image, i}
      <img 
        src={image} 
        alt={`Slide ${i}`} 
        class="slide {i === currentSlide ? 'active' : ''} object-cover w-full h-full absolute inset-0 opacity-0 transition-opacity duration-1000" />
    {/each}
  </div> -->

  <section id="introPage" class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-x-0 py-10 px-5">
    
    <div class="flex flex-col lg:justify-center text-center lg:text-left lg:pl-10 gap-8 md:gap-10 lg:gap-8 rounded-xl p-3">
      <div id="typing-animation">
        <h2 class="font-semibold text-4xl text-white sm:text-5xl md:text-8xl -mt-20" style="text-shadow: 0 2px 8px rgba(255, 255, 255, 0.7);">
          <span class="poppins" style="color: #E72929">Emergency</span>
          <br />
          <span class="poppins text-black">Assistance</span>
        </h2>
        <p class="text-base text-black sm:text-lg md:text-xl" style="text-shadow: 0 2px 8px rgba(255, 255, 255, 0.7);">
          {currentText}
        </p>
      </div>
      <a href="/portfolio" class="block">
        <button class="mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full" style="background-color: #E72929; box-shadow: 0 4px 15px rgba(255, 255, 255, 0.7);">
          <div class="absolute top-0 right-full w-full h-full bg-black opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
          <h4 class="relative z-9 text-white">Ask Assistance &rarr;</h4>
        </button>
        <button class="mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full" style="background-color: #000; box-shadow: 0 4px 15px rgba(255, 255, 255, 0.7);">
          <div class="absolute top-0 right-full w-full h-full bg-white opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
          <h4 class="relative z-9 text-white">View Hotline &rarr;</h4>
        </button>
      </a>
    </div>
     
    <div class="animate-wiggle">
      <DeviceMockup device="ios">
        <img 
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png" 
          class="dark:hidden w-[272px] h-[572px]" 
          alt="ios example 1" 
        />
        <img 
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png" 
          class="hidden dark:block w-[272px] h-[572px]" 
          alt="ios example 2" 
        />
      </DeviceMockup>
    </div>

  </section>

  <!-- <div class="flex justify-center mb-5 z[2]">
    <img src='assets/logo.png' alt="logo" class="w-[300px] h-[300px]" />
  </div> -->

  <!-- <img src="assets/logo.png" alt="logo" class="absolute top-5 right-40 w-[300px] h-[300px] z-20" /> -->

</main>
