<script>
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'

  async function logout() {
    var path = $page.url.pathname;
    
    if(path === '/configuratorJWT'){
      logoutJWT();
    }
    else {
      logoutSession();
    }
  }

  async function logoutSession() {
    await fetch('http://127.0.0.1:8000/api/logoutSession', {
      method: 'POST',
      credentials: 'include'
    });
    goto('/');
  }

  async function logoutJWT() {
    await fetch('http://127.0.0.1:8000/authenticate/logout', {
      method: 'POST',
      credentials: 'include'
    });
    goto('/');
  }
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="http://127.0.0.1:5173/configuratorSession">Configurator</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://localhost:5173">Home</a>
          </li> -->
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://127.0.0.1:5173/configuratorSession">Configurator</a>
          </li>
        </ul>
      </div>
      <button class="resetButton btn btn-danger" on:click={logout} >Logout</button>
    </div>
  </nav>

  <style>
    .navbar{
        margin-bottom: 50px;
    }
  </style>