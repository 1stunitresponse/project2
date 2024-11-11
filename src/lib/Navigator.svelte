<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
    import { base } from '$app/paths';
    let logoUrl = `${base}/assets/logo.png`;
</script>
  
  <Navbar class="relative z-20 p-1" >
    <NavBrand href="/">
      <img src={logoUrl} class="me-3 h-6 sm:h-9" alt="first unit response logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold" style="color: #E72929">First Unit Response</span>
    </NavBrand>
    <div class="flex md:order-2">
      <Button size="sm">Get started</Button>
      <NavHamburger />
    </div>
    <NavUl class="order-1">
      <NavLi style="color: #E72929" href="/">Home</NavLi>
      <NavLi style="color: #E72929" href="/">About Us</NavLi>
      <NavLi style="color: #E72929" href="/">Hotline</NavLi>
    </NavUl>
  </Navbar>