<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
    import { base } from '$app/paths';

    
</script>
  
  <Navbar class="relative z-20 p-1" >
    <NavBrand href="/">
      <img src="assets/logo.png" class="me-3 h-6 sm:h-9" alt="first unit response logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold" style="color: #E72929">First Unit Response</span>
    </NavBrand>
    <div class="flex md:order-2">
      <a href="https://www.radio-philippines.com/">
      <Button size="sm">Philippine Radio</Button>
      <NavHamburger />
    </a>
    </div>
    <NavUl class="order-1">
      <NavLi style="color: #E72929" href="{base}">Home</NavLi>
      <NavLi style="color: #E72929" href="{base}/request">Form</NavLi>
      <NavLi style="color: #E72929" href="https://assistance.ph/philippine-emergency-hotline-numbers/">Hotline</NavLi>
    </NavUl>
  </Navbar>