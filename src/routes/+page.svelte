<script>
  import { goto } from '$app/navigation'
  /**
     * @type {string}
     */
  var sessionUsername = ""

  /**
   * @type {string}
   */
  var sessionPassword = ""

  async function SessionLogin() {
    var response;
    try{
      response = await fetch('http://localhost:8000/api/loginSession', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                  "username" : sessionUsername,
                  "password" : sessionPassword
                })
            });
    }catch(e){
      window.alert(e);
    }
    if (response?.ok){
      goto('/configuratorSession');
    }
    else {
      window.alert("Username or password is invalid");
    }
  }

  /**
   * @type {string}
   */
  var jwtUsername = ""

  /**
   * @type {string}
   */
  var jwtPassword = ""

  async function JWTLogin() {
    var response;
    try{
      response = await fetch('http://localhost:8000/api/loginJWT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                  "username" : jwtUsername,
                  "password" : jwtPassword
                })
            });
    }catch(e){
      window.alert(e);
    }
    if (response?.ok){
      goto('/configuratorJWT');
    }
    else {
      window.alert("Username or password is invalid");
    }
  }

/**
 * @param {string | null} variable
 */
function isNullOrEmpty(variable) {
  if(variable === null || variable === ""){
    return true;
  }
  else {
    return false;
  }
}

var sessionFormValid = false;

function validateSessionForm() {
  if(!isNullOrEmpty(sessionUsername) && !isNullOrEmpty(sessionPassword)){
    sessionFormValid = true;
  }
  else {
    sessionFormValid = false;
  }
}

var jwtFormValid = false;

function validateJWTForm() {
  if(!isNullOrEmpty(jwtUsername) && !isNullOrEmpty(jwtPassword)){
    jwtFormValid = true;
  }
  else {
    jwtFormValid = false;
  }
}

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
            <label for="inputSessionUsername" class="sr-only">Username</label>
            <input bind:value={sessionUsername} type="username" id="inputSessionUsername" class="form-control" placeholder="Username" required on:input={validateSessionForm}>
          </div>
          <div class="formItem">
            <label for="inputSessionPassword" class="sr-only">Password</label>
            <input bind:value={sessionPassword} type="password" id="inputSessionPassword" class="form-control" placeholder="Password" required on:input={validateSessionForm}>
          </div>
          <button disabled={!sessionFormValid} class="btn btn-lg btn-primary btn-block btn_session" type="button" on:click={SessionLogin}>Login as Session</button>
        </form>
      </div>
      <div class="loginForm">
        <form class="form-jwt">
          <h1 class="h3 mb-3 font-weight-normal">Please Login</h1>
          <div class="formItem">
            <label for="inputJWTUsername" class="sr-only">Username</label>
            <input bind:value={jwtUsername} type="username" id="inputJWTUsername" class="form-control" placeholder="Username" required on:input={validateJWTForm}>
          </div>
          <div class="formItem">
            <label for="inputJWTPassword" class="sr-only">Password</label>
            <input bind:value={jwtPassword} type="password" id="inputJWTPassword" class="form-control" placeholder="Password" required on:input={validateJWTForm}>
          </div>
          <button disabled={!jwtFormValid} class="btn btn-lg btn-primary btn-block" type="button" on:click={JWTLogin}>Login with JWT</button>
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