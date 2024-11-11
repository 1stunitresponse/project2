<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { Label, Input, InputAddon, ButtonGroup, Select, Radio, Helper, Textarea } from 'flowbite-svelte';
    import { UserCircleSolid, 
            AddressBookSolid, 
            MobilePhoneSolid, 
            LandmarkSolid, 
            MapPinAltSolid,
            BullhornSolid
         } from 'flowbite-svelte-icons';

    

    let name = '';
    let contactNumber = '';
    let location = '';
    let landmark = '';
    let otherAssistance = '';
    let selected: string;
  
    let textareaprops = {
    id: 'description',
    name: 'description',
    label: 'description',
    rows: 2,
    placeholder: 'Optional - You may describe the incident...'
    };

    let assistance = [
    { value: 'Medical Aid', name: 'Medical Aid' },
    { value: 'Rescue', name: 'Rescue' },
    { value: 'Fire Incident', name: 'Fire Incident' },
    { value: 'Road Accident', name: 'Road Accident' },
    { value: 'Other', name: 'Other' }
      ];

  //   let errors = {
  //   name: '',
  //   contactNumber: '',
  //   location: '',
  //   landmark: '',
  //   selected: '',
  //   otherAssistance: ''
  // };
  

  // const validateForm = () => {
  //   let valid = true;
    
  //   if (!name) {
  //     errors.name = 'Name is required';
  //     valid = false;
  //   } else {
  //     errors.name = '';
  //   }
    
  //   if (!contactNumber) {
  //     errors.contactNumber = 'Contact number is required';
  //     valid = false;
  //   } else if (!/^\d{10}$/.test(contactNumber)) {
  //     errors.contactNumber = 'Enter a valid 10-digit contact number';
  //     valid = false;
  //   } else {
  //     errors.contactNumber = '';
  //   }

  //   if (!location) {
  //     errors.location = 'Location is required';
  //     valid = false;
  //   } else {
  //     errors.location = '';
  //   }

  //   if (!landmark) {
  //     errors.landmark = 'Landmark is required';
  //     valid = false;
  //   } else {
  //     errors.landmark = '';
  //   }

  //   if (!selected) {
  //     errors.selected = 'Please select an option';
  //     valid = false;
  //   } else {
  //     errors.selected = '';
  //   }

  //   if (selected === 'other' && !otherAssistance) {
  //     errors.otherAssistance = 'Please specify the assistance';
  //     valid = false;
  //   } else {
  //     errors.otherAssistance = '';
  //   }

  //   return valid;
  // };

  // // Form submission handler
  // const handleSubmit = () => {
  //   if (validateForm()) {
  //     // Proceed with form submission
  //     alert('Form submitted successfully');
  //   } else {
  //     // Show validation errors
  //     alert('Please fill out the form correctly');
  //   }
  // };


    // Image slideshow logic
  let images = [
    'assets/1.png',
    'assets/2.png',
    'assets/3.png',
    'assets/4.png',
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
  
  // Start the slideshow when the component is mounted
  onMount(() => {
    startSlideshow();
  });

  // Stop the slideshow when the component is destroyed
  onDestroy(() => {
    stopSlideshow();
  });
</script>


<main class="relative">
    <!-- Slider background images -->
    <div id="slider" class="fixed inset-0 z-0 overflow-hidden">
      {#each images as image, i}
        <img 
          src={image} 
          alt={`Slide ${i}`} 
          class="slide {i === currentSlide ? 'active' : ''} object-cover w-full h-full absolute inset-0 opacity-0 transition-opacity duration-1000" 
        />
      {/each}
    </div>
  
    <!-- Form container -->
    <div class="bg-white mx-auto absolute top-10 left-0 right-0 p-5 rounded-lg shadow-md max-w-lg z-10">

    <!-- Name -->
        <div class="mb-6">
            <!-- <Label for="website-admin" class="block mb-2">Name</Label>
            <ButtonGroup class="w-full">
              <InputAddon>
                <UserCircleSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </InputAddon>
              <Input id="website-admin" placeholder="Juan Dela Cruz" />
            </ButtonGroup>
          </div> -->

          <div class="mb-6">
            <Label for="name" class="block mb-2">Name</Label>
            <ButtonGroup class="w-full">
                <InputAddon>
                    <UserCircleSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </InputAddon>
              <Input id="name" bind:value={name} placeholder="Juan Dela Cruz"  />
            </ButtonGroup>
            <!-- {#if errors.name}
              <Helper class="mt-2" color="red">{errors.name}</Helper>
            {/if} -->
          </div>

    <!-- Contact Number -->
          <div class="mb-6">
            <Label for="contact-number" class="block mb-2">Contact Number</Label>
            <ButtonGroup class="w-full">
              <!-- Fixed country code as an addon -->
              <InputAddon>(+63)</InputAddon>
              <!-- Actual input field for the user's phone number -->
              <Input id="contact-number" placeholder="Enter your number" />
            </ButtonGroup>
          </div>
    
    <!-- Location -->
          <div class="mb-6">
            <Label for="website-admin" class="block mb-2">Location</Label>
            <ButtonGroup class="w-full">
              <InputAddon>
                <MapPinAltSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </InputAddon>
              <Input id="website-admin" placeholder="Your Address" />
            </ButtonGroup>
          </div>

    <!-- Landmark -->
          <div class="mb-6">
            <Label for="website-admin" class="block mb-2">Landmark</Label>
            <ButtonGroup class="w-full">
              <InputAddon>
                <LandmarkSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </InputAddon>
              <Input id="website-admin" placeholder="Church, School, etc." />
            </ButtonGroup>
          </div>
    
    <!-- Assistance -->
          <Label>
            Select an option
            <Select class="mt-2" bind:value={selected}>
              {#each assistance as assist}
                <option value={assist.value}>{assist.name}</option>
              {/each}
            </Select>
          </Label>
          
          {#if selected === 'Other'}
            <div class="mt-4">
              <Label for="other-assistance" class="block mb-2">Please specify:</Label>
              <Input id="other-assistance" bind:value={otherAssistance} placeholder="Enter specific assistance" />
            </div>
          {/if}

    <!-- Description -->

          <div class="mt-4">
            <Textarea {...textareaprops} />

          </div>

          <div class="flex justify-center">
          <button  class="mx-auto mt-5 lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full" style="background-color: #E72929; box-shadow: 0 4px 15px rgba(255, 255, 255, 0.7);">
            <!-- <button on:click={validateForm} class="mx-auto mt-5 lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full" style="background-color: #E72929; box-shadow: 0 4px 15px rgba(255, 255, 255, 0.7);"> -->

            <div class="absolute top-0 right-full w-full h-full bg-black opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
            <h4 class="relative z-9 text-white">Submit &rarr;</h4>
          </button>
        </div>

       

   
    </div>
  </main>
  
  
  
  
  





