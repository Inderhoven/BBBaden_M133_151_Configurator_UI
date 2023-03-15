<script>
    import { createEventDispatcher } from 'svelte';

    export let title = 'Selection';

    /**
     * @type {string}
     */
     export let gender;
     /**
     * @type {string}
     */
      export let hairColor;
      /**
     * @type {string}
     */
     export let eyeColor;

    const dispatch = createEventDispatcher();

    /**
     * @param {string} selectedHairColor
     */
    function setHairColor(selectedHairColor) {
        hairColor = selectedHairColor;
    }

    function handleNext() {
        dispatch('click', {
            config: 'hair',
            current: 2,
            last: 1,
            hairColor : hairColor
        });
    }

    function handlePrevious() {
        dispatch('click', {
            config: 'hair',
            current: 0,
            last: 1,
            hairColor : hairColor
        });
    }

</script>

<div class="container">
    <div class="title">
      <h1>{ title }</h1>
    </div>
  
    {#if gender === 'Female'}
        {#if eyeColor === 'Brown'}
            <div class="selection">
                <button class:selected={hairColor === 'Blue'} class="button btn" on:click={() => setHairColor('Blue')}><img src="/female-blue-brown.png" alt=""></button>
                <button class:selected={hairColor === 'Brown'} class="button btn" on:click={() => setHairColor('Blonde')}><img src="/female-blonde-brown.png" alt=""></button>
            </div>
            <div class="nextStep">
                <button type="button" class="btn btn-primary" on:click={handlePrevious}>Previous Step</button>
                <button type="button" class="btn btn-primary" on:click={handleNext}>Next Step</button>
            </div>            
        {:else}
            <div class="selection">
                <button class:selected={hairColor === 'Blue'} class="button btn" on:click={() => setHairColor('Blue')}><img src="/female-blue-blue.png" alt=""></button>
                <button class:selected={hairColor === 'Blonde'} class="button btn" on:click={() => setHairColor('Blonde')}><img src="/female-blonde-blue.png" alt=""></button>
            </div>
            <div class="nextStep">
                <button type="button" class="btn btn-primary" on:click={handlePrevious}>Previous Step</button>
                <button type="button" class="btn btn-primary" on:click={handleNext}>Next Step</button>
            </div>
        {/if}
    {:else}
        {#if eyeColor === 'Brown'}
            <div class="selection">
                <button class:selected={hairColor === 'Blue'} class="button btn" on:click={() => setHairColor('Blue')}><img src="/male-blue-brown.png" alt=""></button>
                <button class:selected={hairColor === 'Blonde'} class="button btn" on:click={() => setHairColor('Blonde')}><img src="/male-blond-brown.png" alt=""></button>
            </div>
            <div class="nextStep">
                <button type="button" class="btn btn-primary" on:click={handlePrevious}>Previous Step</button>
                <button type="button" class="btn btn-primary" on:click={handleNext}>Next Step</button>
            </div>
        {:else}
            <div class="selection">
                <button class:selected={hairColor === 'Blue'} class="button btn" on:click={() => setHairColor('Blue')}><img src="/male-blue-blue.png" alt=""></button>
                <button class:selected={hairColor === 'Blonde'} class="button btn" on:click={() => setHairColor('Blonde')}><img src="/male-blond-blue.png" alt=""></button>
            </div>
            <div class="nextStep">
                <button type="button" class="btn btn-primary" on:click={handlePrevious}>Previous Step</button>
                <button type="button" class="btn btn-primary" on:click={handleNext}>Next Step</button>
            </div>
        {/if}
    {/if}
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
      gap: 100px;
    }
  </style>