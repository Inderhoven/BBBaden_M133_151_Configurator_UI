<script>
    import { createEventDispatcher } from 'svelte';

    export let title = 'Selection';

     export let name = '';

    const dispatch = createEventDispatcher();

    function handleNext() {
        dispatch('click', {
            config: 'name',
            current: 4,
            last: 3,
            name : name
        });
    }

    function handlePrevious() {
        dispatch('click', {
            config: 'name',
            current: 2,
            last: 3,
            name : name
        });
    }

</script>

<div class="container">
    <div class="title">
      <h1>{ title }</h1>
    </div>
    
    <div class="nameInput">
        <p>Character Name:</p>
        <input bind:value={name}>
    </div>

    <div class="nextStep">
        <button type="button" class="btn btn-primary" on:click={handlePrevious}>Previous Step</button>
        <button type="button" class="btn btn-primary" on:click={handleNext}>Next Step</button>
    </div>
  </div>

<style>
    .nameInput {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
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
  .nextStep {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    gap: 100px;
  }
</style>