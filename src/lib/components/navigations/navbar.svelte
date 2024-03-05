<script lang="ts">
    let activePage='';

  const isActive = (name: string): string =>
    activePage === name ? 'activeNavLink' : ''

  const handleNavLinkClick = (name: string): void => {
  
  }


</script>



    <nav>
      <a
        class={`${isActive('mission')} hover:cursor-pointer`}
      
      href="/"  >
        Mission
      </a>
      <a
        class={`${isActive('features')} hover:cursor-pointer`}
      
      href="/"  >
        Features
      </a>
      <a
        class={`${isActive('project')} hover:cursor-pointer`}
      
      href="/"  >
        Project
      </a>
      <a
        class={`${isActive('signup')} hover:cursor-pointer`}
      
      href="/"  >
        Sign Up
      </a>
      <a
        class={`${isActive('team')} hover:cursor-pointer`}
      
      href="/"  >
        Team
      </a>
      <a
        class={`${isActive('faq')} hover:cursor-pointer`}
      
      href="/"  >
        FAQs
      </a>
    </nav>



<style>

nav {
  display: inline-grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  border-radius: 0px 0px 5px 5px;
  background-color: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(12px);
  width: fit-content;
  position: relative;
  padding-top: 10px;
  top: -10px;
  box-shadow: 0 0 10px 0 #ddd;
}

nav > a {
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: #0c1b33;
  padding: 15px 20px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
  text-align: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition:
    color 0.2s ease,
    margin-bottom 0.2s ease,
    border-bottom 0.2s ease;
}

nav > a:hover {
  color: #3a86ff;
  transition:
    color 0.2s ease,
    margin-bottom 0.2s ease,
    border-bottom 0.2s ease;
}

nav > a.activeNavLink {
  color: #3a86ff;
  margin-bottom: 0;
  border-bottom: solid 5px #3a86ff;
}

@media (max-width: 768px) {
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 5000;
  }

  nav > a {
    width: 100%;
    text-align: center;
    padding: 20px;
    border: none;
  }
}

  nav > a {
    width: 100%;
    text-align: center;
    padding: 20px;
    border: none;
  }


    
</style>