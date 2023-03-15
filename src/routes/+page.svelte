<script>
</script>

  <div class="container-fluid">
    <div class="header">
      <h2>Login</h2>
    </div>
    <div class="formDiv">
      <div class="loginForm">
        <form class="form-session">
          <h1 class="h3 mb-3 font-weight-normal">Please Login</h1>
          <div class="formItem">
            <label for="inputUsername" class="sr-only">Username</label>
            <input type="username" id="inputUsername" class="form-control" placeholder="Username">
          </div>
          <div class="formItem">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password">
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Login as Session</button>
        </form>
      </div>
      <div class="loginForm">
        <form class="form-jwt">
          <h1 class="h3 mb-3 font-weight-normal">Please Login</h1>
          <div class="formItem">
            <label for="inputUsername" class="sr-only">Username</label>
            <input type="username" id="inputUsername" class="form-control" placeholder="Username">
          </div>
          <div class="formItem">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password">
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Login with JWT</button>
        </form>
      </div>
    </div>
  </div>
  
<style>
  .container-fluid{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .header {
    text-align: center;
    background-color: lightgray;
  }
  .loginForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    width: 40%;
  }
  .formItem{
    margin-bottom: 20px;
  }
  .formDiv {
    display: flex;
    justify-content: space-around;
  }
</style>