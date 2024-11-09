<script lang="ts">
    import {Alert} from "flowbite-svelte"
    import '../app.css';

let images = [
    '/background/1.png',
    '/background/2.png',
    '/background/3.png',
    '/background/4.png',
    '/background/5.png',
    '/background/6.png',
  ];
  let currentSlide = 0;

  // Declare intervalId as a variable for controlling the interval
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
 
</script>

<main>
    <div id="slider" class="slider">
        {#each images as image, i}
          <img 
            src={image} 
            alt={`Slide ${i}`} 
            class="slide {i === currentSlide ? 'active' : ''}" />
        {/each}
      </div>
</main>