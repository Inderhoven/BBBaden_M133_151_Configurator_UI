<script>
  import { createEventDispatcher } from 'svelte';

  
  export let title = 'Selection';

  /**
     * @type {string}
     */
     export let gender;
    //  /**
    //  * @type {string}
    //  */
    //   export let hairColor;
    //   /**
    //  * @type {string}
    //  */
    //  export let eyeColor;

  const dispatch = createEventDispatcher();

  /**
     * @param {string} selectedGender
     */
  function setGender(selectedGender){
    gender = selectedGender;
  }

  function handleNext() {
    dispatch('click', {
      config: 'gender',
      current: 1,
      last: 0,
      gender : gender
    });
  }
</script>

<div class="container">
  <div class="title">
    <h1>{ title }</h1>
  </div>

  <div class="selection">
    <button class:selected={gender === 'Female'} class="button btn" on:click={() => setGender('Female')}><img src="/female-blonde-blue.png" alt=""></button>
    <button class:selected={gender === 'Male'} class="button btn" on:click={() => setGender('Male')}><img src="/male-blond-blue.png" alt=""></button>
  </div>
  <div class="nextStep">
    <button type="button" class="btn btn-primary" on:click={handleNext}>Next Step</button>
  </div>
</div>

<style>
  .container {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .title {
    display: flex;
    justify-content: center;
  }
  .selection {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .selected {
    border: 3px solid lawngreen;
  }
  .nextStep {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
</style>